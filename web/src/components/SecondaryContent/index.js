import React, { useEffect, useState } from "react";
import { SecondaryContentWrapper } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sanityClient from "../../client.js";

gsap.registerPlugin(ScrollTrigger);

export const SecondaryContent = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "thumbnail_images"]{
          quote_1,
          image_1{
            asset ->{
              _id,
              url,
              caption,
            }
          },
          image_2{
            asset ->{
              _id,
              url,
              alt,
            }
          },
          image_3{
            asset ->{
              _id,
              url,
              alt,
            }
          },
        }`
      )
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "15vh",
        ease: "none",
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-15vh",
        ease: "none",
        paused: true,
      });

      const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true,
      });

      ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          scrub.vars.progress = self.progress;
          scrub.invalidate().restart();
        },
      });
    });
  }, []);

  useEffect(() => {
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".text"), {
        y: "30vh",
        ease: "none",
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-30vh",
        ease: "none",
        paused: true,
      });

      const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true,
      });

      ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          scrub.vars.progress = self.progress;
          scrub.invalidate().restart();
        },
      });
    });
  }, []);
  return (
    <SecondaryContentWrapper>
      <div id="del2" className="delayed-section" data-scrub="0.2">
        <div className="innerContainer">
          <img
            width="575"
            src={images ? images[0].image_2.asset.url : ""}
            alt="Take Flight Thumbnail"
          />
        </div>
      </div>
      <div id="del3" className="delayed-section" data-scrub="0.6">
        <div className="innerContainer">
          <img
            width="800"
            src={images ? images[0].image_3.asset.url : ""}
            alt="Take Flight Thumbnail"
          />
        </div>
      </div>
      <div id="del1" class="delayed-section" data-scrub="0.4">
        <div className="innerContainer">
          <img
            width="575"
            src={images ? images[0].image_1.asset.url : ""}
            alt="Take Flight Thumbnail"
          />
        </div>
      </div>
      <div id="del4" className="delayed-section" data-scrub="0.4">
        <div className="text">
          <h2 className="sub-title">{images ? images[0].quote_1 : ""}</h2>
        </div>
      </div>
    </SecondaryContentWrapper>
  );
};
