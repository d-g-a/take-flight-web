import React, { useEffect } from "react";
import { AnimationTestTwoWrpper } from "./style";


export const AnimationTestTwo = () => {
  useEffect(() => {
    const suffix = webpSupported() ? "webp" : "jpg";

    fetch(
      `https://assets.codepen.io/100347/fedm_horizontal-distortionmap.${suffix}`,
      {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default",
      }
    )
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const feImage = document.querySelector("#feimage");

        feImage.setAttribute("href", url);
      });

    const info = document.getElementById("infotext");
    const filter = document.getElementById("dm-filter");
    const feDisplacementMap = document.querySelector("feDisplacementMap");
    const feGaussianBlur = document.querySelector("feGaussianBlur");
    const feConvolveMatrix = document.querySelector("feConvolveMatrix");
    let fragment = new DocumentFragment();

    const showDisplacementMap = () => {
      fragment.appendChild(feDisplacementMap);
      fragment.appendChild(feGaussianBlur);
      fragment.appendChild(feConvolveMatrix);
      info.innerText = "Click anywhere to inspect displacement filter effect";
      document.removeEventListener("click", showDisplacementMap);
      document.addEventListener("click", showFilter);
    };

    const showFilter = () => {
      filter.appendChild(fragment);
      info.innerText = "Click anywhere to inspect displacement map";
      document.removeEventListener("click", showFilter);
      document.addEventListener("click", showDisplacementMap);
    };

    document.addEventListener("click", showDisplacementMap);
  }, []);

  return (
    <AnimationTestTwoWrpper>
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        rel="stylesheet"
      />
      <p class="infotext" id="infotext">
        Click anywhere to inspect displacement map
      </p>
      <svg
        class="container"
        xmlns="http://www.w3.org/2000/svg"
        width="1024px"
        height="1024px"
      >
        <defs>
          <filter
            id="dm-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            color-interpolation-filters="sRGB"
            preserveAspectRatio="none"
          >
            <feImage
              id="feimage"
              preserveAspectRatio="none"
              result="FEIMG1"
              width="3762"
              height="100%"
              x="0"
              y="0"
            >
              <animate
                attributeName="x"
                values="0;-1882;"
                dur="21s"
                repeatCount="1000"
              />
            </feImage>
            <feDisplacementMap
              in="SourceGraphic"
              in2="FEIMG1"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="B"
            >
              <animate
                attributeName="scale"
                from="0"
                to="20"
                dur="5s"
                repeatCount="1"
                id="fadein"
              />
              <animate
                attributeName="scale"
                values="20;200;20"
                dur="9s"
                repeatCount="1000"
                begin="fadein.end"
              />
            </feDisplacementMap>
            <feGaussianBlur id="gaussianblur" stdDeviation="1.25" />
            <feConvolveMatrix
              order="3"
              kernelMatrix="3.3 -3.3  3.3 -3.3 -.3 -3.3 3.3  -3.3  3.3"
            />
          </filter>
        </defs>
        <g class="displacement">
          <svg width="100%" height="100%" viewBox="0 0 800 400">
            <rect width="100%" height="100%" fill="transparent" />
            <text
              class="bungeeinline"
              y="50%"
              x="50%"
              text-anchor="middle"
              letter-spacing="-.09em"
            >
              <tspan dy="0">Neuro</tspan>
              <tspan x="50%" dy=".75em">
                honey
              </tspan>
            </text>
          </svg>
        </g>
      </svg>
    </AnimationTestTwoWrpper>
  );
};
