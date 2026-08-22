/**
 * StreamingProvider — the abstraction that decouples the platform from any
 * single live-video vendor.
 *
 * The core app only ever depends on this interface. A MockProvider (Phase 4)
 * implements it with an in-process fake so the whole platform runs with zero
 * API keys and no paid services. Real providers (Livepeer, Mux, Cloudflare
 * Stream, or self-hosted MediaMTX/OvenMediaEngine) implement the SAME
 * interface later without touching application code.
 *
 * Pipeline the interface models:
 *   RTMP/SRT ingest -> transcode/processing -> HLS/WebRTC playback -> viewers
 *
 * Phase 0 defines the contract only. Implementations arrive in Phase 4/7.
 */

export type StreamId = string;

export type StreamStatusValue = 'idle' | 'starting' | 'live' | 'stopping' | 'ended' | 'errored';

export type StreamVisibility = 'public' | 'unlisted' | 'private';

export interface IngestEndpoint {
  /** e.g. rtmp://ingest.example.com/live or srt://... */
  url: string;
  /** Secret stream key the broadcaster configures in OBS/streaming software. */
  streamKey: string;
  protocol: 'rtmp' | 'srt';
}

export interface PlaybackInfo {
  /** HLS manifest URL for broad compatibility. */
  hlsUrl: string;
  /** Optional low-latency WebRTC playback URL when the provider supports it. */
  webrtcUrl?: string;
}

export interface StreamHealth {
  status: StreamStatusValue;
  /** Ingest bitrate in kbps, when known. */
  bitrateKbps?: number;
  /** Encoder frame rate, when known. */
  fps?: number;
  /** Rough ingest->edge latency in ms, when known. */
  latencyMs?: number;
  /** Provider-reported issues (dropped frames, no signal, etc.). */
  issues?: string[];
  lastUpdatedAt: Date;
}

export interface CreateStreamInput {
  /** Application-side stream id used to correlate provider resources. */
  streamId: StreamId;
  name: string;
  visibility: StreamVisibility;
  /** Enable server-side recording of the broadcast. */
  record?: boolean;
}

export interface CreatedStream {
  providerStreamId: string;
  ingest: IngestEndpoint;
  playback: PlaybackInfo;
}

export interface Recording {
  id: string;
  streamId: StreamId;
  /** URL to the recorded VOD asset (HLS or MP4). */
  url: string;
  durationSeconds?: number;
  createdAt: Date;
}

/**
 * The provider contract. Every method is async and vendor-agnostic.
 */
export interface StreamingProvider {
  readonly name: string;

  createStream(input: CreateStreamInput): Promise<CreatedStream>;
  startStream(streamId: StreamId): Promise<void>;
  stopStream(streamId: StreamId): Promise<void>;
  getStreamStatus(streamId: StreamId): Promise<StreamStatusValue>;
  getPlaybackUrl(streamId: StreamId): Promise<PlaybackInfo>;
  getStreamHealth(streamId: StreamId): Promise<StreamHealth>;
  createRecording(streamId: StreamId): Promise<Recording>;
  deleteStream(streamId: StreamId): Promise<void>;
}
