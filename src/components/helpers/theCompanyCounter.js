import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../App";
import preloader from "../../assets/img/preloader__header.svg";
import "../../assets/styles/preloader.css";

const CompanyCounter = () => {
  const { useUserInfo } = useContext(Context);
  const [info, setInfo] = useState();
  const loadInfo = async () => {
    if (!useUserInfo.isAuth) return;
    if (useUserInfo.accountInfo === undefined) {
      setTimeout(loadInfo, 5000);
    } else {
      setInfo(useUserInfo.accountInfo);
    }
  };
  useEffect(() => {
    loadInfo();
  }, []);
  return (
    <>
      {info && (
        <div className="flex flex-col text-xxs md:text-xs p-[5px] md:p-[15px]">
          <div className="md:ml-auto px-[5px] md:px-0">
            <span className="opacity-40 block md:inline ">
              Использовано компаний{" "}
            </span>
            <span className="text-sm font-bold md:ml-[9px] block md:inline">
              {useUserInfo.accountInfo.usedCompanyCount}
            </span>
          </div>
          <div className="md:ml-auto px-[5px] md:px-0 mt-[7px] md:mt-0">
            <span className="opacity-40 block md:inline">
              Лимит по компаниям{" "}
            </span>
            <span className="text-[#8AC540] text-sm font-bold md:ml-[9px] block md:inline">
              {useUserInfo.accountInfo.companyLimit}
            </span>
          </div>
        </div>
      )}
      {!info && (
        <div className="flex w-full h-full items-center justify-center">
          <img className="spinner" src={preloader} alt="preloader" />
        </div>
      )}
    </>
  );
};

export default observer(CompanyCounter);
