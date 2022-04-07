import React from 'react'

export const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
      // onMove means if dragging or swiping in progress.
      return <button onClick={() => onClick()} >LEFT</button>;
}
