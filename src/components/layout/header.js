import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/img/logo__header.jpg";
import logoM from "../../assets/img/logo__header_mobile.svg";
import logoMenu from "../../assets/img/logo__footer_mobile.svg";
import cross from "../../assets/img/cross__header_mobile.svg";
import ava from "../../assets/img/ava__header.jpg";
import menu from "../../assets/img/menu__header_mobile.svg";
import { Context } from "../../App";
import { observer } from "mobx-react-lite";
import CompanyCounter from "../helpers/theCompanyCounter";
function Header() {
  const navigate = useNavigate();
  const { useUserInfo } = useContext(Context);
  const logout = () => {
    useUserInfo.logout();
    navigate("/");
  };
  const [isShowMenu, showMenu] = useState(false);
  return (
    <>
      <header className="min-w-[1440px] hidden md:flex px-[60px] justify-between w-full items-center text-sm ">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <ul className="flex w-[236px] justify-between ">
          <li>
            <button>Главная</button>
          </li>
          <li>
            <button>Тарифы</button>
          </li>
          <li>
            <button>FAQ</button>
          </li>
        </ul>

        {useUserInfo.isAuth && (
          <div className="flex items-center relative">
            <div className="bg-[#D9D9D9] rounded-[5px] w-[175px] h-[63px] mr-[128px] absolute left-[-256px]">
              <CompanyCounter />
            </div>
            <div className="flex flex-col items-endw-full mr-[6px]">
              <p className="text-sm">Алексей А. </p>
              <button
                className="border-0 text-xs text-right opacity-40"
                onClick={() => {
                  logout();
                }}
              >
                Выйти
              </button>
            </div>
            <img src={ava} alt="ava" />
          </div>
        )}
        {!useUserInfo.isAuth && (
          <div className="flex items-center ">
            <button className="opacity-40">Зарегистрироваться</button>
            <hr className="h-[2px] w-[26px] bg-[#029491] rotate-90" />
            <button
              className="bg-[#7CE3E1] rounded-[5px] py-1 px-3"
              onClick={() => {
                navigate("login");
              }}
            >
              Войти
            </button>
          </div>
        )}
      </header>
      <header className="md:hidden ">
        <div className="flex items-center justify-between w-full px-[16px]">
          <img
            src={logoM}
            alt="logo"
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          {useUserInfo.isAuth && (
            <div className="bg-[#D9D9D9] rounded-[5px] w-[132px] h-[75px]">
              <CompanyCounter />
            </div>
          )}
          <img
            src={menu}
            alt="menu"
            className="cursos-pointer"
            onClick={() => showMenu(true)}
          />
        </div>
        {isShowMenu && (
          <div className="absolute top-0 w-full pb-[70px] bg-[#029491]">
            <div className="flex justify-between items-center px-[14px]">
              <img src={logoMenu} alt="logo" />
              <img
                src={cross}
                alt="cross"
                className="mr-[14px] mt-[-10px]"
                onClick={() => showMenu(false)}
              />
            </div>
            <ul className="mx-auto text-center text-white text-sm">
              <li>
                <button>Главная</button>
              </li>
              <li className="my-[26px]">
                <button>Тарифы</button>
              </li>
              <li>
                <button>FAQ</button>
              </li>
            </ul>
            <div>
              <div className="flex flex-col mt-[75px] mx-auto">
                {!useUserInfo.isAuth && (
                  <button className="opacity-40 text-sm">
                    Зарегистрироваться
                  </button>
                )}
                {!useUserInfo.isAuth && (
                  <button
                    className="bg-[#7CE3E1] rounded-[5px] mt-[20px] py-[15px] px-[117px] text-lg mx-[40px]"
                    onClick={() => {
                      showMenu(false);
                      navigate("login");
                    }}
                  >
                    Войти
                  </button>
                )}
                {useUserInfo.isAuth && (
                  <button
                    className="bg-[#7CE3E1] rounded-[5px] mt-[20px] py-[15px] px-[117px] text-lg mx-[40px]"
                    onClick={() => {
                      showMenu(false);
                      logout();
                    }}
                  >
                    Выйти
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default observer(Header);
