import React from "react";
import { AnimationTestStyled } from './style'
import anime from 'animejs/lib/anime.es.js';

export const AnimationTest = () => {

  const buttonOnClick = () => {
    anime({
      targets: '.polymorph',
      points: [
        { value: '215,110 0,110 0,0 47.7,0 67,76' },
        { value: '215,110 0,110 0,0 0,0 67,76' },
      ],
      easing: 'easeOutQuad',
      duration: 1200,
      loop: false
    });
    
    anime({
      targets:"#blip",
      opacity: 1,
      duration: 500,
      translateY: 150
    })
  };

  const buttonTwoOnClick = () => {
    anime({
      targets: '.polymorph',
      points: [
        { value: '215,110 0,110 0,0 47.7,0 67,76' },
        { value: '215,110 0,110 0,0 47.7,0 215,0' },
      ],
      easing: 'easeOutQuad',
      duration: 1200,
      loop: false
    });

    anime({
      targets:"#blip",
      opacity: 0,
      duration: 500,
      translateY: -800
    })
  };
  
  return (
    <AnimationTestStyled>
      <button id="cta" onClick={() => buttonOnClick()}>Click Me</button>
      <svg
        viewBox="0 0 215 110"
      >
        <polygon class="polymorph" points="215,110 0,110 0,0 47.7,0 215,0" />
      </svg>
      
      <div id="blip">
        <h2>Well, that was revealing</h2>
        <p>testing</p>

        <button id="cta2" onClick={() => buttonTwoOnClick()}>Go back</button>
      </div>

    </AnimationTestStyled>
  );
};
