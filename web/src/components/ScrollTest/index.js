import React, {useEffect, createRef} from 'react';
import { ScrollTestStyled } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollTest = () => {
const title = createRef()

const delSections = document.querySelectorAll(".delayed-section");
  useEffect(() => {
    gsap.to(title.current, { color: '#8c0', duration: 2});
  
  }, [title]);

  useEffect(()=> {

    delSections.forEach(section => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "100vh",
        ease: "none"
      });
      
      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-100vh",
        ease: "none",
        paused: true
      });
      
      const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true
      });
      
      ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: self => {
          scrub.vars.progress = self.progress;
          scrub.invalidate().restart();
        }
      });
    });
    
  });


  return (
    <ScrollTestStyled>
      <h1 ref={title}>
        ScrollTest
      </h1>
      <h1>Scroll down, mate</h1>

      <div id="del1" class="delayed-section" data-scrub="0.4">
        <div class="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=1" alt="1" />
        </div>
      </div>
      <div id="del2" class="delayed-section" data-scrub="0.2">
        <div class="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=2" alt="2" />
        </div>
      </div>
      <div id="del3" class="delayed-section" data-scrub="0.6">
        <div class="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=3" alt="3" />
        </div>
      </div>

    </ScrollTestStyled>
  )
}
