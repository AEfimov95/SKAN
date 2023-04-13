import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import img from "../assets/img/img__auth.svg";
import img_m from "../assets/img/img__auth_mobile.svg";
import google from "../assets/img/google_logo__auth.svg";
import facebook from "../assets/img/facebook_logo__auth.svg";
import yandex from "../assets/img/yandex_logo__auth.svg";
import lock from "../assets/img/lock__auth.svg";
import { Context } from "../App";
import { observer } from "mobx-react-lite";

const AuthView = () => {
  const [login, getLogin] = useState("");
  const [password, getPassword] = useState("");
  const { useUserInfo } = useContext(Context);
  const navigate = useNavigate();
  const goHome = (response) => {
    if (response) {
      navigate("/");
    }
  };
  const auth = async () => {
    useUserInfo.login(login, password, goHome);
  };
  useEffect(() => {
    useUserInfo.checkAuth();
    if (useUserInfo.isAuth) {
      navigate("/");
    }
  }, [navigate, useUserInfo]);
  return (
    <>
      <main className="flex flex-col md:flex-row px-[14px] md:px-[60px] mt-[22px] md:mt-[70px] md:min-h-[calc(100vh-302px)] md:max-w-[1440px] mx-auto">
        <div className="md:w-[817px]">
          <h1 className="uppercase font-[Ferry] text-xl md:text-4xl text-left">
            Для оформления подписки
            <br />
            на тариф, необходимо
            <br /> авторизоваться.
          </h1>
          <img
            className="hidden md:block mt-[14px] ml-[112px]"
            src={img}
            alt="characters"
          />
        </div>
        <div className="w-full md:w-[429px] mt-[126px] md:mt-0 relative h-fit rounded-[10px] p-[25px] shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <img
            className="absolute top-[-80px] md:top-[-53px] left-[105px] md:left-[-50px]"
            src={lock}
            alt="lock"
          />
          <div className="flex mb-[40px]">
            <button className="pb-[8px] w-[151px] text-[#029491] border-[#029491] border-b-2">
              Войти
            </button>
            <button className="pb-[8px] w-[213px] text-[#C7C7C7] border-[#C7C7C7] border-b-2 ml-[15px]">
              Зарегистрироваться
            </button>
          </div>
          <div className="mb-[20px]">
            <p>Логин или номер телефона:</p>
            <input
              className="px-[19px] py-[12px] w-full mt-[15px]  border-[#C7C7C7] border-[1px] rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.05)]"
              onChange={(event) => getLogin(event.target.value)}
              value={login}
            />
          </div>
          <div className=" mb-[30px] relative">
            <p>Пароль:</p>
            <input
              type="password"
              className={`px-[19px] py-[12px] w-full mt-[15px] ${
                useUserInfo.error ? "border-[#FF5959]" : "border-[#C7C7C7]"
              }  border-[1px] rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.05)]`}
              onChange={(event) => getPassword(event.target.value)}
              value={password}
            />
            {useUserInfo.error && (
              <p className="text-[#FF5959] w-full text-center text-sm mt-[6px] mb-[8px] absolute">
                {useUserInfo.error}
              </p>
            )}
          </div>
          <button
            className={`block w-full bg-[#5970FF] text-white text-xl rounded-[5px] py-[16px] mb-[15px] ${
              !login || !password ? "opacity-50" : ""
            }`}
            onClick={() => {
              auth();
            }}
            disabled={!login && !password}
          >
            Войти
          </button>
          <div className="w-full text-center">
            <a
              onClick={(e) => e.preventDefault()}
              className="mx-auto text-sm underline text-[#5970FF]"
              href="/#"
            >
              Восстановить пароль
            </a>
          </div>
          <p className="text-[#949494] mt-[30px]">Войти через:</p>
          <div className="flex mt-[15px] mb-[14px]">
            <button className="flex border-[#5970FF] border-[1px] rounded-[3px] w-[96px] h-[31px] justify-center items-center">
              <img src={google} alt="google" />
            </button>
            <button className="flex mx-[10px] border-[#5970FF] border-[1px] rounded-[3px] w-[96px] h-[31px] justify-center items-center">
              <img src={facebook} alt="facebook" />
            </button>
            <button className="flex border-[#5970FF] border-[1px] rounded-[3px] w-[96px] h-[31px] justify-center items-center">
              <img src={yandex} alt="yandex" />
            </button>
          </div>
        </div>
        <img
          className="md:hidden mt-[49px] mb-[80px]"
          src={img_m}
          alt="characters"
        />
      </main>
    </>
  );
};

export default observer(AuthView);
