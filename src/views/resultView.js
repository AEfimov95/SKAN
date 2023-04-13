import React, { useState, useEffect, useContext } from "react";
import "../index.css";
import img from "../assets/img/img__result.svg";
import CarouselResult from "../components/helpers/theCarouselResults";
import ResultCard from "../components/helpers/theResultCard";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const ResultView = () => {
  const { useUserInfo } = useContext(Context);
  const navigate = useNavigate();
  const [total, getTotal] = useState(0);
  useEffect(() => {
    useUserInfo.checkAuth();
    if (!useUserInfo.isAuth) {
      navigate("/");
    }
    if (
      !localStorage.getItem("searchResultItem") &&
      !localStorage.getItem("histogramData")
    ) {
      navigate("/");
    }
  }, [useUserInfo.isAuth]);

  return (
    <main className="px-[14px] md:pl-[60px] md:mt-[70px] md:min-h-[calc(100vh-302px)] md:max-w-[1440px] mx-auto">
      <section className="flex flex-col md:flex-row">
        <div className="md:w-[509px] mt-[36px]">
          <h1 className="uppercase font-[Ferry] text-mxl md:text-4xl text-left mb-[20px] md:mb-[25px]">
            Ищем. Скоро
            <br /> будут результаты
          </h1>
          <p className="md:text-lg text-left md:mb-[47px]">
            Поиск может занять некоторое время,
            <br /> просим сохранять терпение.
          </p>
        </div>
        <div className="w-[350px] mt-[26px] mx-auto md:mt-0 md:mr-0 md:w-fit md:ml-[215px]">
          <img src={img} alt="result" />
        </div>
      </section>
      <section>
        <h2 className="uppercase font-[Ferry] text-mxl md:text-3xl mt-[59px] md:mt-0 text-left mb-[17px] ">
          Общая сводка
        </h2>
        <p className="text-[#949494]">Найдено {total}</p>
        <CarouselResult sum={getTotal} />
      </section>

      <section>
        <h2 className="uppercase font-[Ferry] text-mxl md:text-3xl text-left mb-[58px] ">
          Список документов
        </h2>
        <ResultCard />
      </section>
    </main>
  );
};

export default ResultView;
