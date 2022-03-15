import React, { useEffect } from "react";
import { EventScrollWrapper } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";



export const EventScrollTest = ({eventInfo}) => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray("img");
    const loader = document.querySelector(".loader--text");
    const updateProgress = (instance) =>
      (loader.textContent = `${Math.round(
        (instance.progressedCount * 100) / images.length
      )}%`);

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        const [x, xEnd] =
          index % 2
            ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    };

     imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);

  }, []);

  return (
    <EventScrollWrapper>
        <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>
      <div className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text">0%</h2>
        </div>
      </div>
      <div className="demo-wrapper">
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_1.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_2.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_3.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_4.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container">
              <img
                height="120px"
                src={eventInfo?.image_5.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
          </ul>
        </section>
        
            <section className="demo-gallery">
          <ul className="wrapper">
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_1.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_2.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_3.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container" >
              <img
                height="120px"
                src={eventInfo?.image_4.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
            <li className="image-container">
              <img
                height="120px"
                src={eventInfo?.image_5.asset.url}
                width="120px"
                className="image_1"
              />
            </li>
          </ul>
        </section>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
      </div>
    </EventScrollWrapper>
  );
};