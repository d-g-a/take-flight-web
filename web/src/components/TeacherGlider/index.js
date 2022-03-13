import React from "react";
import { TeacherGliderStyled } from "./style";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testImage from "../../images/Zacc_Milne_Take_Flight_Teacher.jpg";

export const TeacherGlider = (props) => {
  return (
    <TeacherGliderStyled >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
          <h4>@ig_handle</h4>
          <h5>Nationality</h5>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
          <h4>@ig_handle</h4>
          <h5>Nationality</h5>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
          <h4>@ig_handle</h4>
          <h5>Nationality</h5>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
        </div>
        <div className="card">
          <img src={testImage} alt="test"/>
          <h3>Zac Milne</h3>
        </div>
      </Carousel>
    </TeacherGliderStyled>
  );
};
