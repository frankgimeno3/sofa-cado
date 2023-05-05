import { useEffect, useState } from "react";

export const MainBannerHomeSection = () => {
  const [height, setHeight] = useState("100vh");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.8;
    }
    setHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <section
      className="relative mt-0"
      style={{
        height,
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        poster="/img/bannerImages/home-video-poster.png"
        className="absolute w-full h-screen mt-0 z-0 object-cover"
        style={{
          height,
        }}
      >
        <source src="/video/sofacado.mp4" type="video/mp4" />
      </video>

      <div className="relative flex items-center justify-center mt-20 pt-20 h-full flex-col">
        <h1 className="hover:text-amber-400">Sofacado</h1>
        <h3 className="hover:text-amber-400">Do you looove abocados? We do! Find here the most stylish, original and favulous sofa shop in town, where all sofas... are designed after abocados!</h3>

      </div>
    </section>
  );
};