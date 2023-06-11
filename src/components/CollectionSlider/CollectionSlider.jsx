import { useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import { SliderImageCard, ButtonNext } from "components";
import prevIcon from "assets/icons/prev.svg";
import nextIcon from "assets/icons/next.svg"
import "./CollectionSlider.scss";
export const CollectionSlider = () => {
  const ref = useRef();
  const imagesData = [
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwcO40nbVaqIU7mRigHQUbI8779DKsBl0NA&usqp=CAU",
      title: "1",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjJJHfT-Z5NQm99-gmNQer4JegQIJ7Ss4Sg&usqp=CAU",
      title: "1",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXi0yF1hr1ARFyYtl8T5uD75XkHBKOSIAOw&usqp=CAU",
      title: "1",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfHihBOGoIsAydWyeQ_LzBBW9Ghi1KZ8qLw&usqp=CAU",
      title: "1",
    },
  ];

  const onNext = () => {
    ref.current?.goNext();
  };

  const onPrev = () => {
    ref.current?.goBack();
  };

  return (
    <div className="flex justify-center items-center slider-container pl-4">
      <button className="btn-action btn-prev" onClick={onPrev}>
        <img src={prevIcon} />
      </button>
      <div className="flex-1">
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            console.log(parentWidth);
            const isMobile = parentWidth + 66 < 768;
            const fadeDistance = isMobile ? 0.07 : 0.3;
            const currentVisibleSlide = isMobile ? 3 : 5;
            const maxVisibleSlide = isMobile ? 3 : 5;
            const slideWidth = isMobile
              ? (parentWidth * 25) / 100
              : (parentWidth * 36) / 100;
            console.log(slideWidth);

            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={SliderImageCard}
                slideWidth={slideWidth}
                carouselWidth={parentWidth}
                data={imagesData}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={maxVisibleSlide}
                fadeDistance={fadeDistance}
                useGrabCursor
              />
            );
          }}
        />
        <div className="max-sm:hidden flex justify-end mt-6 pl-10 pr-10">
          <ButtonNext name="Categories" link="" />
        </div>
      </div>

      <button className="btn-action btn-next" onClick={onNext}>
        <img src={nextIcon} />
      </button>
    </div>
  );
};
