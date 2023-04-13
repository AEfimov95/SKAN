import React from "react";
import "../../index.css";
import logo from "../../assets/img/logo__footer.svg";
import logoM from "../../assets/img/logo__footer_mobile.svg";
function Footer() {
  return (
    <footer className="flex px-[18px] md:px-[60px] relative bottom-0 justify-between w-full bg-[#029491] md:items-center text-sm ">
      <img className="hidden md:block" src={logo} alt="logo" />
      <img
        className="md:hidden relative top-[-5px] h-[111px]"
        src={logoM}
        alt="logo"
      />
      <div className="py-[25px] w-[199px] text-right text-white">
        <p>г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru</p>
        <p className="mt-[21px] text-xs">Copyright. 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
