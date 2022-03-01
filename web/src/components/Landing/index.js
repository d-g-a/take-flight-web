import React from "react";
import { LandingStyled } from "./style";
import Logotipo3D from '../../images/Logotipo3D.svg'
import {MarqueeTest} from '../MarqueeTest'


export const Landing = () => {
  return (
     <LandingStyled>
       <MarqueeTest />
      <div className="TakeFlight3D">
        <img src={Logotipo3D}/>
      </div>
    </LandingStyled>);
};
