import React, { useEffect } from "react";
import { AnimationTestTwoWrpper } from "./style";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import TakeFlight from "../../images/Logotipo_SVG_test.svg";
import takeFlightTexture from "../../images/take_flight_texture.png";
import { navigate } from "gatsby";

export const AnimationTestTwo = () => {
  const supportsWebP = useWebPSupportCheck();

  useEffect(() => {
    const suffix = supportsWebP ? "webp" : "jpg";

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
      //document.removeEventListener("click", showDisplacementMap);
      //document.addEventListener("click", showFilter);
    };

    const showFilter = () => {
      filter.appendChild(fragment);
      info.innerText = "Click anywhere to inspect displacement map";
      document.removeEventListener("click", showFilter);
      document.addEventListener("click", showDisplacementMap);
    };

    // document.addEventListener("click", showDisplacementMap);
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
        width="1920px"
        height="1080px"
      >
        <defs>
          <filter
            id="dm-filter"
            x="-20%"
            y="-20%"
            width="200%"
            height="200%"
            color-interpolation-filters="sRGB"
            preserveAspectRatio="none"
          >
            <feImage
              id="feimage"
              preserveAspectRatio="none"
              result="FEIMG1"
              width="6000"
              height="50%%"
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
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            fill="black"
            onClick={() => navigate('/home')}
          >
            <rect width="100%" height="100%" fill="white" className="rect"/>
            <path
              class="morph"
              // fill="url(#img1)"
              d={`M1638.7,553c12.2-22.7,34.2-60.6,18.1-86.1c-3.8-6.1-9.5-10.5-15.9-13c-11.4-4.5-25-3.1-34.9,5.6
            c-14.4,12.7-17.6,33.9-21.1,51.7c-5.5,27.6-14.4,55-35.2,75.1c-5,4.9-30.2,28.2-37.4,18.9c-5-6.5,2.1-18.2,4.6-24.4
            c10.3-25.6,19.3-47.4,19.3-75.2c-2.3-13.2-12-26-25.3-27.4c-17.9-1.9-27.4,13.1-31.6,27.8c-6.1,21.7-11.8,43.8-21.9,64
            c-5.1,10.2-11.3,20.1-19.4,28.2c-3.8,3.8-24.7,22.4-27.8,9.1c-0.7-2.9,0.6-5.8,1.9-8.4c14.4-29.7,30.7-58.1,37.6-90.4
            c2.5-11.6,10.7-51.2-10.8-51.2c-11.8-0.8-15.8,17.1-27.9,14c-6-1.5-8.9-6.9-12.3-11.6c-20.1-27.9-61.4-2.1-80.1,13.5
            c-9.4,7.9-18.5,16.2-27.5,24.6c-4.9,4.5-14.9,16.6-22.7,11.6c-13.1-8.3,7.1-23.8,12.4-29.6c11.8-12.6,22.1-29.3,24.5-46.6
            c2.4-17.4-5.4-34-24.6-35c-18.1-1-32.1,15.5-40.1,29.9c-10.6,19.3-17.3,40.4-26.4,60.4c-9.8,21.5-20.4,43-34.2,62.3
            c-17.1,23.7-39.7,43.5-65.7,57c-7.7,4-18.1,6.4-22.1-3.8c-6.7-17.3,10-38.6,17.3-53.2c12.1-24.1,23.7-48.5,35.7-72.6
            c11.4-23,25.1-46.2,28.7-72.1c2.2-16.1-2.6-34.7-18.5-42c-27.9-12.7-46.1,18.9-53.1,40.5c-18,55.5-14.2,116.6-34.9,170.9
            c-11.2,29.2-26.5,56.2-42.6,82.9c-10.4,17.2-22.9,32.9-34.6,49.3c-6.5,9.1-17.4,21.8-14.3,34.4c13,53.6,109.1-19.3,126.1-32.8
            c23.3-18.4,43.8-40.4,64.2-61.9c10.5-11,21.1-21.8,32.2-32.1c9.9-9.2,21.9-22.5,35.1-26.3c20.6-6,26,16,40.5,24.2
            c13.3,7.5,29.4,4.4,39.7-6.5c4.1-4.3,7.5-9.1,11.7-13.2c3.4-3.3,10.8-9.1,16-7.2c5.5,2.1,4.5,10.4,3.8,14.9
            c-2.3,15.3-14.8,29.6-24.2,41.3c-14.3,17.8-30.4,35.5-50,48.1c-18.8,12.2-41,16.3-63.1,16.9c-22.1,0.6-45-3.9-66.8-0.2
            c-12.3,2.1-24.7,7.2-34.7,14.7c-13.2,9.8-20.7,31.6-9.9,46c12.4,16.7,38.3,16.9,56.9,14.7c58.2-6.8,110.9-39.6,158.7-71.4
            c8.8-5.9,17.5-12.1,25.9-18.5c6.4-4.9,21.5-21.4,30.5-18.6c9.3,2.9,1.4,17.7-1.9,22.4c-5.5,7.8-13.2,13.8-20.8,19.3
            c-15.9,11.5-33.5,15.8-50.8,24c-11.5,5.4-24.5,18.5-17.9,32.4c5.8,12.2,22.3,15.9,34.5,14.5c35.8-4.2,64.8-34.7,88.6-59.5
            c16.8-17.5,33.7-35,50.6-52.6c4-4.1,8.1-8.4,13.2-11c12.1-6.1,23.4,1.4,24.8,14.5c1.6,14.7-9.2,29.2-20.4,37.4
            c-10.7,7.9-23.4,12.3-35.9,16.2c-13.2,4.2-31.3,5.8-37.9,20c-7.5,16.1,6.1,34.7,23.3,35c33.1,0.5,63.4-24.1,86.6-45.5
            c30.2-27.9,56.2-59.9,79.2-93.9C1604.4,617.3,1621.5,585,1638.7,553z M1370.7,500.6c-3.1,18.5-14.3,35.5-30.1,45.6
            c-4.1,2.6-8.5,4.8-13.4,5.2c-4.8,0.4-10-1.3-12.8-5.3c-1.4-2-2.1-4.4-2.2-6.9c0-1.1,0-2.2,0.2-3.2c0.5-3.5,2-6.8,3.7-9.9
            c8.5-15.6,23.3-27.6,40.2-32.8c3.5-1.1,7.6-2,11.1-0.7C1370.9,493.9,1371.2,497.4,1370.7,500.6z M843.9,603.9
            c-6.3-6.3-14.9-10.4-23.9-11.1c-12.2-1-22.6,6.3-30.9,14.4c-10.7,10.3-22,23.4-37.2,26.6c-11.6,2.5-24.5,0.3-33.1-8.1
            c-3.9-3.8-10.2-12-4.1-16.8c3.1-2.4,8-2.5,11.7-2.2c8.2,0.7,16.4,1.9,24.5,3.6c5.9,1.3,14.1,3.9,19.7,0.5c9-5.5,0.4-16.7-5.9-20.2
            c-5.9-3.3-13-4.5-19.3-6.5c-7.2-2.2-14.3-4.5-21.4-7c-6.6-2.3-29.9-10.3-22-20.9c2.3-3.1,6.9-3.3,10.7-2.8
            c18.1,2.3,32.3,16.2,50.6,17.5c5.2,0.3,10.6-0.8,14.5-4.1c6.1-5.2,7.1-14.7,4.4-22.3c-5-14.3-14.7-26.4-26.3-35.9
            c-29.7-24.4-67.5-32.5-103.3-43.4c-6.2-1.9-12.5-2.5-15.7-9c-2.8-5.8-0.6-10.6,2.1-15.7c3-5.5,6.3-11.3,10.3-16.1
            c7.3-9,15.3-15.8,18.2-27.5c2.4-9.7,1.3-20.9-6.3-28.1c-17.8-16.8-43.9,1.9-57.2,15.1c-8.2,8.2-15,17.6-22.4,26.5
            c-7.3,8.7-13.8,18-19.6,27.8c-7.9,13.4-13.3,27.7-19.4,42c-4.1,9.7-5.9,20.9-12.5,29.4c-12.5,16-17-19-18.6-26.2
            c-3.2-14.1-13.5-36.8-31.7-33.3c-6.4,1.3-12,5.8-15.2,11.5c-6.1,10.9-4.4,27.8-2.5,39.7c3.5,22,13.1,42.9,19.2,63.8
            c2.9,10,10.3,24.5,10.1,34.9c-0.2,8.3-6.8,10.3-12.8,3.8c-4.1-4.5-7.8-9.3-11.3-14.3c-7.1-9.9-13.3-20.4-20.9-29.9
            c-4.7-5.9-9.5-11.6-14.3-17.3c-5.9-6.9-12-13.6-18.4-20.1c-16.2-16.6-34.1-31.8-53.9-44c-10.1-6.2-20.7-11.7-31.7-16.2
            c-13.3-5.4-31.5-14.9-46.1-10.3c-7,2.2-12.9,7.3-16.3,13.8c-5.1,10.1-2.2,22-0.2,32.6c2.2,11.4,5.5,22.6,9.5,33.5
            c7.6,20.8,17.7,40.5,27.9,60c4.4,8.5,8.8,17,13.2,25.4c16.7,32,34.1,64.2,57,92.3c19.2,23.5,45.7,51.1,78.4,51.4
            c14.2,0.1,30.8-6.6,33.6-22.1c2.3-12.6-4.7-25.4-14.5-33.5c-2.1-1.8-4.4-3.3-6.7-4.8c-11.6-7.2-24.5-11.9-36-19.4
            c-9-5.8-17.8-12-26.1-18.7c-11-9-37.6-31-22.8-47c3.7-4,9.5-5.2,14.9-4.5c17.1,2.3,32.4,15.5,43.8,27.4
            c12.4,13.1,25.4,25.4,36.9,39.5c7.8,9.7,14.9,19.4,20.8,30.3c6.1,11.2,11.9,22.7,19.3,33.2c11.5,16.4,34.3,28.2,53.1,16.2
            c17.3-11,18.7-32.8,14.5-51c-4.1-17.7-14-33.3-21.9-49.5c-5.3-11-13-25.7-11.5-38.2c1-8.5,6.1-1,9.3,2c3.4,3.1,6.5,6.4,9.4,9.8
            c3.3,3.8,6.3,7.8,9.2,11.9c1.3,1.8,2.6,3.7,3.9,5.5c17.4,25.1,34.7,50.3,52.1,75.4c13.4,19.3,36.3,38.9,61.4,36.2
            c7-0.8,13.3-4,17.9-11.3c6.3-10,6.5-23.2,3.6-34.4c-7.1-27.6-34.4-49.3-56.9-64.9c-19-13.1-38.5-25.6-56.1-40.8
            c-15.6-13.5-27.8-31.8-30.7-52.6c-2.4-17.5,2.3-38.2,20.9-44.7c12.9-4.5,27.6-1.5,40.1,2.7c15,5,28.8,14.6,37.2,28.2
            c3.2,5.2,4.5,11.5-1.7,15.2c-4.1,2.5-9.3,2.2-13.9,0.9c-4.6-1.3-8.9-3.4-13.6-4.5c-7.4-1.6-15.9-1.8-21.4,4.2
            c-4.6,5-5.3,12.7-2.8,19s7.7,11.2,13.6,14.5c6,3.4,13,4.7,18.8,8.3c4.9,3,8.8,7.6,12.1,12.3c6.9,9.9,11,21.4,17.9,31.3
            c19.3,28,53.5,43.1,86.8,44.1c30.6,1,64.8-9.3,80.5-37.6C854.7,634.8,856.5,616.5,843.9,603.9z M365.7,558.1
            c-2.8,3.9-8,5.7-12.8,5.3s-9.3-2.6-13.4-5.2c-15.8-10.1-27-27.1-30.1-45.6c-0.5-3.2-0.2-6.7,3.3-8c3.6-1.3,7.6-0.4,11.1,0.7
            c17,5.2,31.7,17.2,40.2,32.8c1.7,3.1,3.2,6.4,3.7,9.9c0.2,1.1,0.2,2.2,0.2,3.2C367.8,553.7,367.1,556.1,365.7,558.1z M1010.2,539.9
            c18.4-1.4,38.3-4.7,50.7-18.4c7.8-8.6,11.4-20.7,9.7-32.2c-0.2-1.1-0.4-2.2-0.6-3.3c-2.9-12.3-12.2-23-24-27.6
            c-35.7-13.8-58.9,20.8-86.3,35c-9.8,5.1-22.2,7-31.8,1.5c-10.6-6-15.1-19.8-12.5-31.7c2.6-11.9,11.1-21.8,21.2-28.6
            c39.1-26.4,85.9-18,126.3-38.1c21.5-10.7,32.3-30.4,34.4-53.9c3.8-42.2-35.2-57.6-70.5-45.8c-23.2,7.8-40.9,26.5-57.9,43.2
            c-18.1,17.7-37.2,32-61.4,40.3c-15.6,5.4-31.8,10.2-45.5,19.8c-19.1,13.4-32,34.2-33.8,57.6c-2,26.1,7.1,52.3,19.4,74.9
            c20.7,37.9,28.9,69.4,20.6,113c-6,31.5-26.9,69.2-14.7,101.2c14.9,39.1,63.3,38,82.9,5.2c9.9-16.7,6.6-36.4,2.9-54.8
            c-7.7-38.7-24.9-79.1-3.9-116.8C952.1,550.2,978,542.4,1010.2,539.9z M323,670.3c-49.5-44.2-89.3-104.6-96-172.3
            c-2.3-23.1-5.3-55.8,14.5-72.6c22.8-19.4,58-9,80.8,4.2c11.3,6.5,21.9,14.3,33.2,20.8c11.3,6.6,23.6,12,36.5,13.2
            c3.4,0.3,6.9,0.4,10.4,0c9.6-0.9,18.9-4.4,25.9-11.1c4.7-4.5,8.1-10.5,9.6-16.9c6.7-28.7-19-54.4-42.5-64.8
            c-24.3-10.7-53.6-13.7-79.5-7.8c-23.9,5.5-46.3,16.6-70.8,19.6c-25,3.1-50.4,2.2-75.1-2.6c-16.4-3.2-32.3-8.1-48.5-12.1
            c-28-6.9-77.9-15.8-97,13.6c-9.1,14.1-8.7,31.9,2.8,44.4c10,10.9,25.5,15.7,39.8,16.7c14.6,1,27.9-2,42.4-3.1
            c16-1.2,32.3,0.3,47.8,4.3c21.1,5.5,31.1,26.4,36,46.1c7,27.6,11.9,55.8,14.5,84.2c2.8,29.6,0.2,59.4,4.7,88.9
            c7.6,49.8,33.1,123.9,95.4,117.7c32.6-3.2,59.7-34.6,48-67.7C350,696.1,336.6,682.5,323,670.3z M1894.8,381.7
            c-19.1-29.4-69-20.5-97-13.6c-16.2,4-32.1,8.9-48.5,12.1c-24.7,4.9-50.2,5.7-75.1,2.6c-24.5-3-46.9-14.1-70.8-19.6
            c-25.9-5.9-55.2-2.9-79.5,7.8c-23.6,10.4-49.3,36.1-42.6,64.8c1.5,6.4,4.9,12.4,9.6,16.9c7,6.6,16.3,10.1,25.9,11.1
            c3.5,0.3,7,0.3,10.4,0c13-1.3,25.2-6.7,36.5-13.2c11.3-6.6,21.9-14.3,33.2-20.8c22.8-13.2,58.1-23.5,80.8-4.2
            c19.8,16.8,16.8,49.5,14.5,72.6c-6.7,67.7-46.5,128.1-96,172.3c-13.6,12.2-27,25.7-33.1,43c-11.7,33.1,15.5,64.5,48,67.7
            c62.3,6.2,87.9-68,95.4-117.7c4.5-29.5,1.9-59.3,4.7-88.9c2.7-28.4,7.5-56.6,14.5-84.2c5-19.7,14.9-40.6,36-46.1
            c15.6-4,31.8-5.5,47.8-4.3c14.5,1.1,27.7,4.1,42.4,3.1c14.3-1,29.8-5.8,39.8-16.7C1903.5,413.6,1904,395.8,1894.8,381.7z
             M1303.1,331c16.4,0,29.7,13.3,29.7,29.7s-13.3,29.7-29.7,29.7c-16.4,0-29.7-13.3-29.7-29.7S1286.6,331,1303.1,331z`}
            />
            
          </svg>

          {/* <svg width="100%" height="100%" viewBox="0 0 800 400">
            <rect width="100%" height="100%" fill="transparent" />
            <text
              class="bungeeinline"
              y="50%"
              x="50%"
              text-anchor="middle"
              letter-spacing="-.09em"
            >
               <img  x="50%" dy=".75em" src={TakeFlight} style={{ width:"200px"}}/>
              <tspan dy="0">take flight</tspan>
              <tspan x="50%" dy=".75em">
                  take flight
              </tspan>
              <tspan x="20%" dy=".50em">
                  take flight
              </tspan>
              <tspan x="70%" dy=".25em">
                  take flight
              </tspan>
            </text>
          </svg> */}
        </g>
      </svg>

    </AnimationTestTwoWrpper>
  );
};
