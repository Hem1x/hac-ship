import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Carousel.scss';
import { Flex, Typography } from 'antd';

interface CarouselProps {
  items: JSX.Element[];
  title: string;
}

const Carousel = ({ items, title }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <div className="carousel">
        <div
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Typography.Title style={{ marginBottom: 5 }} level={4}>
            {title}
          </Typography.Title>
          <button className="carousel__btn" onClick={goToPrevSlide}>
            Назад
          </button>
          <button className="carousel__btn" onClick={goToNextSlide}>
            Вперед
          </button>
        </div>
        <div className="carousel-container">
          <TransitionGroup>
            <CSSTransition key={currentIndex} timeout={500} classNames={'slide'}>
              <div className="carousel-item">{items[currentIndex]}</div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
};

export default Carousel;
