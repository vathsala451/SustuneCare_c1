"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink, ShieldCheck, RefreshCw } from "lucide-react";

interface PromotionalVideoPlayerProps {
  src: string;
  alternateSrc?: string;
  driveUrl?: string;
  title: string;
  accentColor?: "gold" | "emerald";
  badgeText?: string;
  poster?: string;
}

export function PromotionalVideoPlayer({
  src,
  alternateSrc,
  driveUrl,
  title,
  accentColor = "gold",
  badgeText = "Official Video",
  poster,
}: PromotionalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isGold = accentColor === "gold";

  const handlePlayInitial = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.error("Playback error:", err);
        });
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b ${
        isGold
          ? "from-[#132752] to-[#081528] border-2 border-[#D8B56D]/50 shadow-[0_20px_50px_rgba(216,181,109,0.15)]"
          : "from-[#0F5132]/60 to-[#082A1A] border-2 border-emerald-400/50 shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
      } backdrop-blur-xl transition-all duration-300`}
    >
      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-3 px-1 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isGold ? "bg-[#D8B56D] animate-pulse" : "bg-emerald-400 animate-pulse"
            }`}
          />
          <span className="font-semibold text-white tracking-wide text-[11px] sm:text-xs">
            {badgeText}
          </span>
        </div>
      </div>

      {/* 9:16 Video Player Container */}
      <div className="relative mt-3 rounded-2xl overflow-hidden bg-black aspect-[9/16] max-h-[720px] w-full flex items-center justify-center group shadow-2xl">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title}
          onPlay={() => {
            setIsPlaying(true);
            setHasStarted(true);
          }}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain bg-black rounded-2xl"
        >
          <source src={src} type="video/mp4" />
          {alternateSrc && <source src={alternateSrc} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        {/* Initial Overlay Play Button */}
        {!hasStarted && !hasError && (
          <div
            onClick={handlePlayInitial}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/35 hover:bg-black/25 cursor-pointer transition-colors backdrop-blur-[2px]"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 active:scale-95 ${
                isGold
                  ? "bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A]"
                  : "bg-emerald-500 text-white"
              }`}
            >
              <Play className="w-9 h-9 fill-current translate-x-1" />
            </div>
            <div className="mt-4 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide shadow-lg">
              Click to Play Video
            </div>
          </div>
        )}

        {/* Error Fallback */}
        {hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/90 text-white">
            <RefreshCw className="w-10 h-10 text-amber-400 mb-3 animate-spin" />
            <p className="text-sm font-semibold mb-2">Video player initialization</p>
            <p className="text-xs text-slate-300 max-w-xs mb-4">
              Please check your browser connection or reload to play the video.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Information Caption */}
      <div className="mt-3 px-1 flex items-center justify-between text-[11px] text-slate-400">
        <span className="truncate max-w-[220px] sm:max-w-xs">
          {title.replace(/\bpromotional\b\s*/gi, "").trim()}
        </span>
        <button
          type="button"
          onClick={handleFullscreen}
          className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Toggle Fullscreen"
        >
          <Maximize className="w-3 h-3" />
          <span className="hidden sm:inline">Fullscreen</span>
        </button>
      </div>
    </div>
  );
}
