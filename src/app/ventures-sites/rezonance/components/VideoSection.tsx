"use client";

import { useState, useRef } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="vsl" className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center scroll-mt-16">
      <div className="w-full max-w-4xl flex flex-col items-center reveal">
        <p className="font-barlow font-semibold text-sm tracking-[0.2em] text-accent-brass uppercase text-center mb-8">
          WATCH: WHY 23 MILLION AMERICANS ARE PREPARING — AND WHAT THEY&apos;RE MISSING
        </p>

        <div className="w-full relative aspect-video bg-bg-card border border-border-card rounded overflow-hidden">
          <video
            ref={videoRef}
            src="https://uprkgbunshzpdhnztjpg.supabase.co/storage/v1/object/public/output/vsls/5026104f-80e0-4f4e-9806-16eda7a010b0/125c960f-531d-4fe7-9cbc-7bdcce26f39b/final.mp4"
            controls={playing}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {!playing && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
              onClick={handlePlay}
            >
              <div className="w-20 h-20 rounded-full border-2 border-text-secondary flex items-center justify-center hover:border-accent-brass transition-colors group">
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M4 2L26 16L4 30V2Z"
                    stroke="#8A8680"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    className="group-hover:stroke-accent-brass transition-colors"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <p className="text-text-secondary text-sm text-center mt-6 font-source">
          Prefer to read? Keep scrolling. &#8595;
        </p>
      </div>
    </section>
  );
}
