import React, { useState, useEffect } from "react";
import { EventTabsStyled } from "./style";

import sanityClient from "../../../client.js";
export const ExperienceTabs = () => {
  const [aboutText, setAboutText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience-text"]{
        title,
        description,
        image_1{
          asset ->{
            _id,
            url
          }
        },
        
      }`
      )
      .then((data) => setAboutText(data))
      .catch(console.error);
  }, []);

  return (
    <EventTabsStyled>
      <p>{aboutText?.[0].description}</p>
      <div className="left">
        <img src={aboutText?.[0].image_1.asset.url} alt="About page" />
      </div>
    </EventTabsStyled>
  );
};
