import React from "react";
import { TeacherGliderStyled, CardsWrappwer } from "./style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const TeacherGlider = ({ teachers }) => {
  return (
    <TeacherGliderStyled>
      <Carousel
        autoPlay
        additionalTransfrom={0}
        autoPlaySpeed={2200}
        centerMode={false}
        className="carousel"
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
        arrows={false}
      >
        {teachers?.map((teacher) => (
          <CardsWrappwer className="card">
            <div className="imageContainer">
              <img
                src={teacher?.author?.image?.asset?.url}
                alt={teacher?.name}
              />
              <div className="infoContainer">
                <h3>{teacher?.author?.name}</h3>
                <div className="infoRow">
                  <p className="instagram">
                    <a
                      href={`https://www.instagram.com/${teacher?.author?.handle}`}
                    >
                      @{teacher?.author?.handle}
                    </a>
                  </p>
                  <p className="nationality">{teacher?.author?.nationality}</p>
                </div>
              </div>
            </div>
          </CardsWrappwer>
        ))}
      </Carousel>
    </TeacherGliderStyled>
  );
};
