import React, { useState, useEffect } from "react";
import { MarqueeStyled } from "./style";



import sanityClient from "../../client.js";

export const MarqueeTest = () => {
  const [marqueeText, setMarqueeText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "marquee-text"]{
          _id,
          title,
          url,
        }`
      )
      .then((data) => setMarqueeText(data))
      .catch(console.error);
  }, []);

  return (
    <MarqueeStyled>
      <div className="marquee">
        <div className="track">
          {marqueeText?.map((marquee) => (
            // <a href={marquee.url}>
              <div className="content">
                <span>{marquee.title}</span>
                <span>{marquee.title}</span>
                <span>{marquee.title}</span>
                <span>{marquee.title}</span>
                <span>{marquee.title}</span>
                <span>{marquee.title}</span>
              </div>
            // </a>
          ))}
        </div>
      </div>
    </MarqueeStyled>
  );
};
