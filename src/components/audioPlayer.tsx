import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  autoPlay?: boolean;
  crossOrigin?: string;
  listenInterval?: number;
  loop?: boolean;
  muted?: boolean;
  onAbort?: (e: Event) => void;
  onCanPlay?: (e: Event) => void;
  onCanPlayThrough?: (e: Event) => void;
  onEnded?: (e: Event) => void;
  onError?: (e: Event) => void;
  onListen?: (time: number) => void;
  onLoadedMetadata?: (e: Event) => void;
  onPause?: (e: Event) => void;
  onPlay?: (e: Event) => void;
  onSeeked?: (e: Event) => void;
  onVolumeChanged?: (e: Event) => void;
  src?: string; // Not required b/c can use <source>
  volume?: number;
}

export const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({
  autoPlay,
  crossOrigin,
  listenInterval = 10000,
  loop = false,
  muted = false,
  onAbort = () => {},
  onCanPlay = () => {},
  onCanPlayThrough = () => {},
  onEnded = () => {},
  onError = () => {},
  onListen = () => {},
  onPause = () => {},
  onPlay = () => {},
  onSeeked = () => {},
  onVolumeChanged = () => {},
  onLoadedMetadata = () => {},
  src,
  volume = 1.0,
  ...rest
}) => {
  const [listenTracker, setListenTracker] = useState<NodeJS.Timer | null>(null);
  const audioEl = useRef<HTMLAudioElement>(null);

  const setListenTrack = () => {
    if (!listenTracker) {
      setListenTracker(
        setInterval(() => {
          audioEl.current && onListen?.(audioEl.current.currentTime);
        }, listenInterval)
      );
    }
  };

  const updateVolume = (newVolume: number) => {
    const audio = audioEl.current;
    if (audio && newVolume !== audio?.volume) {
      audio.volume = newVolume;
    }
  };

  const clearListenTrack = () => {
    if (listenTracker) {
      clearInterval(listenTracker);
      setListenTracker(null);
    }
  };

  const localOnError = (e: Event) => onError?.(e);
  const localOnCanPlay = (e: Event) => onCanPlay?.(e);
  const localOnCanPlayThrough = (e: Event) => onCanPlayThrough?.(e);
  const localOnPlay = (e: Event) => {
    setListenTrack();
    onPlay?.(e);
  };
  const localOnAbort = (e: Event) => {
    clearListenTrack();
    onAbort?.(e);
  };
  const localOnEnded = (e: Event) => {
    clearListenTrack();
    onEnded?.(e);
  };
  const localOnPause = (e: Event) => {
    clearListenTrack();
    onPause?.(e);
  };
  const localOnSeeked = (e: Event) => onSeeked?.(e);
  const localOnLoadedMetadata = (e: Event) => onLoadedMetadata?.(e);
  const localOnVolumeChanged = (e: Event) => onVolumeChanged?.(e);

  useEffect(() => {
    const audio = audioEl.current;
    if (!audio) {
      return;
    }

    updateVolume(volume);

    audio.addEventListener('error', localOnError);
    // When enough of the file has downloaded to start playing
    audio.addEventListener('canplay', localOnCanPlay);
    // When enough of the file has downloaded to play the entire file
    audio.addEventListener('canplaythrough', localOnCanPlayThrough);
    // When audio play starts
    audio.addEventListener('play', localOnPlay);
    // When unloading the audio player (switching to another src)
    audio.addEventListener('abort', localOnAbort);
    // When the file has finished playing to the end
    audio.addEventListener('ended', localOnEnded);
    // When the user pauses playback
    audio.addEventListener('pause', localOnPause);
    // When the user drags the time indicator to a new time
    audio.addEventListener('seeked', localOnSeeked);
    audio.addEventListener('loadedmetadata', localOnLoadedMetadata);
    audio.addEventListener('volumechange', localOnVolumeChanged);

    return () => {
      const audio = audioEl.current;
      if (!audio) {
        return;
      }

      audio.removeEventListener('error', localOnError);
      audio.removeEventListener('canplay', localOnCanPlay);
      audio.removeEventListener('canplaythrough', localOnCanPlayThrough);
      audio.removeEventListener('play', localOnPlay);
      audio.removeEventListener('abort', localOnAbort);
      audio.removeEventListener('ended', localOnEnded);
      audio.removeEventListener('pause', localOnPause);
      audio.removeEventListener('seeked', localOnSeeked);
      audio.removeEventListener('loadedmetadata', localOnLoadedMetadata);
      audio.removeEventListener('volumechange', localOnVolumeChanged);
    };
  }, [
    audioEl,
    volume,
    onError,
    onCanPlay,
    onCanPlayThrough,
    onPlay,
    onAbort,
    onEnded,
    onPause,
    onSeeked,
    onLoadedMetadata,
    onVolumeChanged,
  ]);

  return (
    <audio
      autoPlay={autoPlay}
      controls={false}
      crossOrigin={crossOrigin}
      loop={loop}
      muted={muted}
      preload={'metadata'}
      ref={audioEl}
      src={src}
      {...rest}
    />
  );
};
