import React from "react";

const HERO_VIDEO_CDN =
  "https://cdn.pixabay.com/video/2023/07/13/171422-845465103_large.mp4";

const HomePage = () => {
  return (
    <section
      className="
    relative
    w-full
    h-[60vh] sm:h-[70vh] lg:h-[80vh]
    overflow-hidden
    rounded-b-2xl
    rounded
    bg-black
  "
    >
      <video
        src={HERO_VIDEO_CDN}
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      />

      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      <div
        className="
          relative z-10
          flex flex-col items-center justify-center
          h-full
          text-center
          px-4
        "
      >
        <h1
          className="
            text-white
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold
            tracking-widest
          "
        >
          POLLVERSE
        </h1>

        <p
          className="
            mt-4
            max-w-xl
            text-sm sm:text-base md:text-lg
            text-gray-200
          "
        >
          Create polls. Share opinions. See what the world thinks.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
