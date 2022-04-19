import React, { useEffect, useState } from "react";
import { IntroVideoWrapper } from "./style";
import introLoop from "../Video/enter_video_TF.mp4";
import { Link } from "gatsby";
import sanityClient from "../../client.js";
import { IntroAnimation } from "../IntroAnimation";  

export const IntroVideo = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "intro-animation"]{
          title,
          animation{
                alt,
                caption,
                asset->{
                  url
            }
          },
          background{
            alt,
            caption,
            asset->{
              url
        }
      },
        }`
      )
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);
  return (
    <IntroVideoWrapper backgroundImage={images?.[0]?.background.asset.url}>
      {/* <div className="desktop" >
        <IntroAnimation />
      </div> */}
      <div className="mobile">
        <video autoPlay loop muted className="video">
          <source src={introLoop} type="video/mp4" />
        </video>
        <button>
          <Link to="/home">ENTER SITE</Link>
        </button>
      </div>
    </IntroVideoWrapper>
  );
};
