import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import IdeaItem from "../IdeaItem/IdeaItem";

import Title from "../ui/Title/Title";
import Divider from "../ui/Divider/Divider";
import Message from "../ui/Message/Message";

import { CarouselBadge } from "./MyIdeasList.styled";

const MyIdeasList = ({ ideasList, addToCompleted, deleteIdea }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const filteredIdeas = ideasList.filter(
    (idea) => idea.selected && !idea.completed
  );

  const handleSlideChange = (index) => {
    filteredIdeas.length < index ? setActiveIndex(1) : setActiveIndex(index);
  };

  return (
    <section>
      <Title>Ideas in my list</Title>
      {!filteredIdeas.length ? (
        <Message>No ideas in your list</Message>
      ) : (
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
          {filteredIdeas.map(({ _id, activity, type, selected }) => (
            <IdeaItem
              key={_id}
              id={_id}
              activity={activity}
              type={type}
              margin={"margin"}
              selected={selected}
              addToCompleted={addToCompleted}
              deleteIdea={deleteIdea}
            />
          ))}
        </Carousel>
      )}
      {!filteredIdeas.length ? null : (
        <CarouselBadge>
          <p>
            {activeIndex} of {filteredIdeas.length}
          </p>
        </CarouselBadge>
      )}
      <Divider />
    </section>
  );
};

export default MyIdeasList;
