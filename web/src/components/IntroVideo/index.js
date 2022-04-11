import React, { useEffect, useState } from "react";
import { IntroVideoWrapper } from "./style";
import testLoop from "../Video/take_loop.mp4";
import { Link } from "gatsby";
import sanityClient from "../../client.js";

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
      <video autoPlay loop muted className="video">
        <source src={testLoop} type="video/mp4" />
      </video>
      <button>
        <Link to="/home">ENTER SITE</Link>
      </button>
    </IntroVideoWrapper>
  );
};
