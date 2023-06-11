import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Title from "../ui/Title/Title";
import Divider from "../ui/Divider/Divider";

import IdeaItem from "../IdeaItem/IdeaItem";

import { CarouselBadge } from "./MyIdeasList.styled";

const ideasList = [
  { id: 1, activity: "Learn how to fold a paper crane", type: "Education" },
  { id: 2, activity: "Make a bucket list", type: "Busywork" },
  {
    id: 3,
    activity: "Do something you used to do as a kid",
    type: "Relaxation",
  },
  {
    id: 4,
    activity: "Listen to your favorite album",
    type: "Music",
  },
];

const MyIdeasList = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (index) => {
    console.log(ideasList.length);
    ideasList.length < index ? setActiveIndex(1) : setActiveIndex(index);
  };

  return (
    <section>
      <Title>Ideas in my list</Title>

      <Carousel
        arrows
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        afterChange={handleSlideChange}
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
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {ideasList.map(({ id, activity, type }) => (
          <IdeaItem
            key={id}
            activity={activity}
            type={type}
            margin={"margin"}
          />
        ))}
      </Carousel>
      <CarouselBadge>
        <p>
          {activeIndex} of {ideasList.length}
        </p>
      </CarouselBadge>

      <Divider />
    </section>
  );
};

export default MyIdeasList;
