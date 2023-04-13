import React, { useState } from "react";
import ChevronIcon from "../icons/chevronIcon.js";
import protectIcon from "../../assets/img/protect__card.svg";
import searchIcon from "../../assets/img/search__card.svg";
import timerIcon from "../../assets/img/time__card.svg";

const CarouselCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const cards = [
    {
      icon: timerIcon,
      text: "Высокая и оперативная скорость обработки заявки",
    },
    {
      icon: searchIcon,
      text:
        "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    },
    {
      icon: protectIcon,
      text:
        "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    },
  ];

  return (
    <div className="flex relative w-full justify-center mt-[16px] md:mt-[70px] items-center ">
      <button onClick={handlePrevClick} className="hidden md:block">
        <ChevronIcon />
      </button>
      <div className="flex relative overflow-hidden">
        <div className="hidden md:flex flex-nowrap">
          {[...cards, ...cards, ...cards]
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                key={index}
                className={`w-[380px] h-[225px] shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-[10px] p-[20px] shrink-0 my-[20px] mx-[15px] delay-500 ease-in-out`}
              >
                <img
                  className="mb-[12px]"
                  src={item.icon}
                  alt={`icon ${index}`}
                />
                {item.text}
              </div>
            ))}
        </div>
        <div className="flex md:hidden flex-nowrap relative">
          <button onClick={handlePrevClick} className="relative z-40">
            <ChevronIcon mobile="mobile-left" />
          </button>
          {[...cards, ...cards, ...cards]
            .slice(currentIndex, currentIndex + 1)
            .map((item, index) => (
              <div
                key={index}
                className={`w-[80%] text-sm h-[200px] shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[10px] p-[20px] shrink-0 my-[20px] delay-500 ease-in-out`}
              >
                <img
                  className="mb-[12px]"
                  src={item.icon}
                  alt={`icon ${index}`}
                />
                {item.text}
              </div>
            ))}
          <button onClick={handleNextClick} className="relative z-40">
            <ChevronIcon side="right" mobile="mobile-right" />
          </button>
        </div>
      </div>
      <button onClick={handleNextClick} className="hidden md:block">
        <ChevronIcon side="right" />
      </button>
    </div>
  );
};

export default CarouselCards;
