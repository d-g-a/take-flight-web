import React, {useEffect} from "react";
import Glide from "@glidejs/glide";
import { TeacherGliderStyled } from "./style";



export const TeacherGlider = () => {
   

   useEffect(()=> {
    new Glide(".glide").mount();

   }, [])

  return (
    <TeacherGliderStyled>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
        <div data-glide-el="controls">
          <button data-glide-dir="<<">Start</button>
          <button data-glide-dir=">>">End</button>
        </div>
      </div>
    </TeacherGliderStyled>
  );
};
