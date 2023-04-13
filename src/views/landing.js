import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import img1 from "../assets/img/img1__landing.svg";
import img2 from "../assets/img/img2__landing_deckstop.svg";
import img2_m from "../assets/img/img2__landing_mobile.svg";
import begginer from "../assets/img/begginer__landing.svg";
import pro from "../assets/img/pro__landing.svg";
import business from "../assets/img/business__landing.svg";
import { GreenCheckIcon } from "../components/icons/index.js";
import { Context } from "../App";
import { observer } from "mobx-react-lite";
import CarouselCards from "../components/helpers/theCarouselCards";

function Landing() {
  const { useUserInfo } = useContext(Context);
  const [isAuth, getAuthInfo] = useState(false);
  const navigate = useNavigate();
  function checkAuth(info) {
    getAuthInfo(info);
  }
  useEffect(() => {
    checkAuth(useUserInfo.isAuth);
  }, [useUserInfo.isAuth]);
  return (
    <>
      <main className="px-[14px] md:px-[60px] min-h-full md:max-w-[1440px] mx-auto">
        <section className="flex flex-col md:flex-row w-full justify-between items-center">
          <div className="self-start mt-[18px]">
            <h2 className="uppercase font-[Ferry] text-mxl md:text-6xl text-left md:w-[743px]">
              сервис по поиску публикаций о&nbsp;компании по&nbsp;его&nbsp;ИНН
            </h2>
            <p className="text-base md:text-xl mt-[20px]">
              Комплексный анализ публикаций, получение данных
              <br className="hidden md:block" /> в формате PDF
              на&nbsp;электронную почту.
            </p>
            {isAuth && (
              <button
                className="bg-[#5970FF] w-full md:w-[335px] font-medium py-[18px] md:py-[14px] px-[72px] md:px-[64px] mt-[32px] mb-[39px] md:mb-0 md:mt-[70px] rounded-[5px] text-lg md:text-xl text-white"
                onClick={() => {
                  navigate("search");
                }}
              >
                Запросить данные
              </button>
            )}
          </div>
          <img src={img1} alt="img1" />
        </section>
        <section className="mb-[70px]">
          <h1 className="uppercase font-[Ferry] text-mxl md:text-5xl text-left">
            Почему
            <br className="md:hidden" /> именно мы
          </h1>
          <CarouselCards />
        </section>
        <section className="flex justify-center">
          <img className="hidden md:block" src={img2} alt="img2" />
          <img className="block md:hidden" src={img2_m} alt="img2" />
        </section>
        <section>
          <h2 className="uppercase font-[Ferry] text-mxl md:text-6xl text-left md:w-[743px] mt-[100px]">
            наши тарифы
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-center pr-[12px] mt-[35px] md:mt-[70px] mb-[118px]">
            <div className=" text-base  md:w-[415px]">
              <div className="bg-[#FFB64F] h-[132px] relative py-[30px] pl-[24px] md:pl-[30px] md:pr-[15px] flex rounded-t-[10px]">
                <div className="">
                  <h2 className=" text-lg font-medium md:text-3xl mb-[10px]">
                    Beginner
                  </h2>
                  <p className=" whitespace-nowrap">
                    {" "}
                    Для небольшого исследования
                  </p>
                </div>

                <img
                  className="absolute md:relative w-[59px] md:w-[94px] h-[104px] bottom-[40px] md:bottom-[28px] right-1"
                  src={begginer}
                  alt="begginer"
                />
              </div>
              <div
                className={`w-full bg-white px-[24px] md:px-[30px] border-[2px] ${
                  isAuth ? "border-[#FFB64F]" : ""
                }  rounded-b-[10px] relative`}
              >
                {isAuth && (
                  <div className="bg-[#3BA5E0] hidden md:block w-fit rounded-[10px] text-white text-sm px-[13px] py-[3px] mt-[15px] mr-[10px] right-0 absolute">
                    Текущий тариф
                  </div>
                )}
                <div className="mt-[20px] md:mt-[30px]">
                  <h3 className="text-3xl mb-[8px]">
                    799 ₽
                    <span className="line-through opacity-50 text-2xl ml-[18px]">
                      1 200 ₽
                    </span>
                  </h3>
                  <p className="absolute">
                    или 150 ₽/мес. при рассрочке на&nbsp;24&nbsp;мес.
                  </p>
                </div>
                <div className="py-[39px] md:py-[55px]">
                  <p className="font-medium mt-[36px] md:mt-[0]">
                    В тариф входит:
                  </p>
                  <ul className="list-none mt-[10px] text-sm md:text-base">
                    <li>
                      <GreenCheckIcon /> Безлимитная история запросов
                    </li>
                    <li>
                      <GreenCheckIcon /> Безопасная сделка
                    </li>
                    <li>
                      <GreenCheckIcon /> Поддержка 24/7
                    </li>
                  </ul>
                </div>
                {!isAuth && (
                  <button className="w-full mb-[24px] py-[16px] text-center bg-[#5970FF] text-white rounded-[5px]">
                    Подробнее
                  </button>
                )}
                {isAuth && (
                  <button className="w-full mb-[24px] py-[16px] text-center bg-[#D2D2D2] text-black rounded-[5px]">
                    Перейти в личный кабинет
                  </button>
                )}
              </div>
            </div>
            <div className=" text-base md:w-[415px] my-[40px] md:my-[0] md:mx-[35px]">
              <div className="bg-[#7CE3E1] h-[132px] relative py-[30px] pl-[24px] md:pl-[30px] md:pr-[15px] flex rounded-t-[10px]">
                <div>
                  <h2 className=" text-lg font-medium md:text-3xl mb-[10px]">
                    Pro
                  </h2>
                  <p> Для HR и фрилансеров</p>
                </div>
                <img
                  className="absolute  md:w-[94px] h-[104px] bottom-[30px] right-0"
                  src={pro}
                  alt="pro"
                />
              </div>
              <div className="w-full bg-white px-[30px] border-[2px] rounded-b-[10px]">
                <div className="mt-[20px] md:mt-[30px]">
                  <h3 className="text-3xl mb-[8px]">
                    1 299 ₽
                    <span className="line-through opacity-50 text-2xl ml-[18px]">
                      2 600 ₽
                    </span>
                  </h3>
                  <p className="absolute">
                    или 279 ₽/мес. при рассрочке на&nbsp;24&nbsp;мес.
                  </p>
                </div>
                <div className="py-[39px] md:py-[55px]">
                  <p className="font-medium mt-[36px] md:mt-[0]">
                    В тариф входит:
                  </p>
                  <ul className="list-none mt-[10px] text-sm md:text-base">
                    <li>
                      <GreenCheckIcon /> Все пункты тарифа Beginner
                    </li>
                    <li>
                      <GreenCheckIcon /> Экспорт истории
                    </li>
                    <li>
                      <GreenCheckIcon /> Рекомендации по приоритетам
                    </li>
                  </ul>
                </div>
                <button className="w-full mb-[24px] py-[16px] text-center bg-[#5970FF] text-white rounded-[5px]">
                  Подробнее
                </button>
              </div>
            </div>
            <div className=" text-base md:w-[415px]">
              <div className="bg-[#000000] h-[132px] relative py-[30px] pl-[24px] md:pl-[30px] md:pr-[15px] flex rounded-t-[10px] text-white">
                <div>
                  <h2 className="text-lg font-medium md:text-3xl mb-[10px]">
                    Business
                  </h2>
                  <p>Для корпоративных клиентов</p>
                </div>
                <img
                  className="absolute md:relative w-[59px] md:w-[94px] h-[104px] bottom-[40px] md:bottom-[20px] right-[15px] md:right-[-15px]"
                  src={business}
                  alt="business"
                />
              </div>
              <div className="w-full bg-white px-[30px] border-[2px] rounded-b-[10px]">
                <div className="mt-[20px] md:mt-[30px]">
                  <h3 className="text-3xl mb-[8px]">
                    2 379 ₽
                    <span className="line-through opacity-50 text-2xl ml-[18px]">
                      3 700 ₽
                    </span>
                  </h3>
                </div>
                <div className="py-[39px] md:py-[55px]">
                  <p className="font-medium mt-[36px] md:mt-[0]">
                    В тариф входит:
                  </p>
                  <ul className="list-none mt-[10px] text-sm md:text-base">
                    <li>
                      <GreenCheckIcon /> Все пункты тарифа Beginner
                    </li>
                    <li>
                      <GreenCheckIcon /> Экспорт истории
                    </li>
                    <li>
                      <GreenCheckIcon /> Рекомендации по приоритетам
                    </li>
                  </ul>
                </div>
                <button className="w-full mb-[24px] py-[16px] text-center bg-[#5970FF] text-white rounded-[5px]">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default observer(Landing);
