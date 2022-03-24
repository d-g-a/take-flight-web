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
      }`
      )
      .then((data) => setAboutText(data))
      .catch(console.error);
  }, []);

  console.log(aboutText);
  return (
    <EventTabsStyled>
      <p>{aboutText?.[0].description}</p>
    </EventTabsStyled>
  );
};
