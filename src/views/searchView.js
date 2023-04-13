import React, { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import TheInput from "../components/helpers/theInput";
import TheDropDown from "../components/helpers/theDropDown";
import TheCheckbox from "../components/helpers/theCheckbox";
import main from "../assets/img/main_img__search.svg";
import main_m from "../assets/img/main__search_mobile.svg";
import folders from "../assets/img/folders__search.svg";
import document from "../assets/img/document__search.svg";
import moment from "moment";
import { Context } from "../App";
import * as API from "../api/api.js";

function SearchView() {
  const [taxId, getTaxId] = useState("");
  const [sumDoc, getSumDoc] = useState("");
  const [currentTonality, getCurrentTonality] = useState("any");
  const [startDate, getStartDate] = useState("");
  const formStartDate = useRef("");
  const [endDate, getEndDate] = useState("");
  const formEndDate = useRef("");
  const [maxFull, setMaxFull] = useState(false);
  const [businessContext, setBusinessContext] = useState(false);
  const [primaryRole, setPrimaryRole] = useState(false);
  const [onlyRiskFactor, setOnlyRiskFactor] = useState(false);
  const [techNews, setTechNews] = useState(false);
  const [announcements, setAnnouncements] = useState(false);
  const [newsReport, setNewsReport] = useState(false);
  const [taxIdError, setTaxIdError] = useState("");
  const [sumDocError, setSumDocError] = useState("");
  const [dateError, setDateError] = useState("");

  const tonality = [
    { value: "any", name: "Любая" },
    { value: "negative", name: "Негативная" },
    { value: "positive", name: "Позитивная" },
  ];
  const { useUserInfo } = useContext(Context);
  const navigate = useNavigate();
  const objectSearch = new API.ObjectSearchApi();

  const validateDate = (item) => {
    const datePattern = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
    if (!datePattern.test(item)) {
      return false;
    }
    const parts = item.split(".");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    const inputDate = new Date(year, month, day);

    if (
      inputDate.getFullYear() !== year ||
      inputDate.getMonth() !== month ||
      inputDate.getDate() !== day
    ) {
      return false;
    }

    return true;
  };
  function validateInn(inn) {
    let result = false;
    if ([10].indexOf(inn.length) === -1) {
      return result;
    } else {
      const checkDigit = function (inn, coefficients) {
        let n = 0;
        for (let i in coefficients) {
          n += coefficients[i] * inn[i];
        }
        return parseInt((n % 11) % 10);
      };
      switch (inn.length) {
        case 10:
          let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
          if (n10 === parseInt(inn[9])) {
            result = true;
          }
          break;
        default:
          result = false;
      }
    }
    return result;
  }

  const formDate = (item) => {
    if (!validateDate(item)) {
      setDateError("Введите корректные данные");
      return;
    }
    const format = "DD.MM.YYYY";
    const momentObject = moment(item, format);
    const outputFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";
    const formattedDateString = momentObject.format(outputFormat);
    if (new Date(formattedDateString).getTime() > new Date().getTime()) {
      setDateError("Введите корректные данные");
      return;
    }
    if (item === startDate) {
      formStartDate.current = formattedDateString;
    }
    if (item === endDate) {
      formEndDate.current = formattedDateString;
    }
  };

  const getData = async () => {
    formDate(startDate);
    formDate(endDate);
    if (!validateInn(taxId)) {
      setTaxIdError("Введите корректные данные");
      return;
    }
    if (sumDoc > 1000 || sumDoc < 1) {
      setSumDocError("Введите корректные данные");
      return;
    }
    if (
      new Date(formStartDate.current).getTime() >
      new Date(formEndDate.current).getTime()
    ) {
      setDateError("Введите корректные данные");
      return;
    }
    if (taxIdError || sumDocError || dateError) return;
    const requestBody = {
      issueDateInterval: {
        startDate: formStartDate.current,
        endDate: formEndDate.current,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: taxId,
              maxFullness: maxFull ? maxFull : null,
              inBusinessNews: businessContext ? businessContext : null,
            },
          ],
          onlyMainRole: primaryRole,
          tonality: currentTonality,
          onlyWithRiskFactors: onlyRiskFactor,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: techNews,
        excludeAnnouncements: announcements,
        excludeDigests: newsReport,
      },
      similarMode: "duplicates",
      limit: sumDoc,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    };
    await objectSearch
      .apiV1ObjectsearchPost(true, requestBody, {
        headers: {
          Authorization: `Bearer ${useUserInfo.savedUser.accessToken}`,
        },
      })
      .then((response) => {
        localStorage.setItem("searchResultItem", JSON.stringify(response));
      })
      .catch(() => {
        alert("Проблема с сервером. Попробуйте позже.");
        return;
      });
    await objectSearch
      .apiV1ObjectsearchHistogramsPost(true, requestBody, {
        headers: {
          Authorization: `Bearer ${useUserInfo.savedUser.accessToken}`,
        },
      })
      .then((response) => {
        localStorage.setItem("histogramData", JSON.stringify(response));
      })
      .catch(() => {
        alert("Проблема с сервером. Попробуйте позже.");
        return;
      });
    navigate("/result");
  };

  useEffect(() => {
    useUserInfo.checkAuth();
    if (!useUserInfo.isAuth) {
      navigate("/");
    }
  }, [navigate, useUserInfo]);
  return (
    <>
      <main className="md:pl-[60px] mt-[70px] md:min-h-[calc(100vh-302px)] md:max-w-[1440px] mx-auto">
        <div className="flex">
          <div className="md:w-[817px] px-[14px] md:px-0">
            <h1 className="uppercase font-[Ferry] text-mxl md:text-4xl text-left mb-[25px]">
              Найдите необходимые
              <br /> данные в пару кликов.
            </h1>
            <p className="md:text-lg text-left mb-[47px]">
              Задайте параметры поиска.
              <br /> Чем больше заполните, тем точнее поиск
            </p>
          </div>
          <div className="hidden md:flex items-center ml-[61px]">
            <img src={document} alt="document" />
            <img className="ml-[166px]" src={folders} alt="document" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col md:flex-row justify-between w-full md:w-[872px] md:h-[543px] md:mb-[64px] px-[26px] md:px-[39px] pt-[29px] pb-[32px] text-base rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <div>
              <label
                className="block mb-[30px]"
                onClick={() => setTaxIdError("")}
              >
                <p className="mb-[20px]">ИНН компании*</p>
                <TheInput
                  type={"text"}
                  placeholder={"10 цифр"}
                  max={10}
                  onChange={getTaxId}
                  error={taxIdError}
                />
              </label>
              <div className="mb-[30px]">
                <p className="mb-[20px]">Тональность</p>
                <div className="flex">
                  <TheDropDown
                    elements={tonality}
                    onChange={getCurrentTonality}
                  />
                </div>
              </div>
              <label
                className="block mb-[30px]"
                onClick={() => setSumDocError("")}
              >
                <p className="mb-[20px]">Количество документов в выдаче*</p>
                <TheInput
                  type={"text"}
                  placeholder={"От 1 до 1000"}
                  max={4}
                  onChange={getSumDoc}
                  error={sumDocError}
                />
              </label>
              <div className="relative">
                <p className="md:mb-[20px]">Диапазон поиска*</p>
                <div
                  className="flex flex-col md:flex-row md:w-[372px] justify-between"
                  onClick={() => setDateError("")}
                >
                  <TheInput
                    type={"date"}
                    placeholder={"Дата начала"}
                    onChange={getStartDate}
                    error={dateError}
                  />
                  <TheInput
                    type={"date"}
                    placeholder={"Дата конца"}
                    onChange={getEndDate}
                    error={dateError}
                  />
                </div>
                {dateError && (
                  <p className="text-[#FF5959] w-full text-center text-sm mt-[6px] mb-[8px] absolute">
                    {dateError}
                  </p>
                )}
              </div>
            </div>
            <div className="relative ">
              <div className="w-[406px] hidden md:block mt-[8px]">
                <TheCheckbox
                  label={"Признак максимальной полноты"}
                  onChange={setMaxFull}
                />
                <TheCheckbox
                  label={"Упоминания в бизнес-контексте"}
                  onChange={setBusinessContext}
                />
                <TheCheckbox
                  label={"Главная роль в публикации"}
                  onChange={setPrimaryRole}
                />
                <TheCheckbox
                  label={"Публикации только с риск-факторами"}
                  onChange={setOnlyRiskFactor}
                />
                <TheCheckbox
                  label={"Включать технические новости рынков"}
                  onChange={setTechNews}
                />
                <TheCheckbox
                  label={"Включать анонсы и календари"}
                  onChange={setAnnouncements}
                />
                <TheCheckbox
                  label={"Включать сводки новостей"}
                  onChange={setNewsReport}
                />
              </div>
              <div className="md:absolute mt-[40px] md:mt-[121px] right-0">
                <button
                  className={`w-full md:w-[305px] py-[16px] rounded-[5px]  text-white text-xl bg-[#5970FF] ${
                    !taxId ||
                    !sumDoc ||
                    !startDate ||
                    !endDate ||
                    taxIdError ||
                    sumDocError ||
                    dateError
                      ? "opacity-40"
                      : ""
                  }`}
                  disabled={
                    !taxId ||
                    !sumDoc ||
                    !startDate ||
                    !endDate ||
                    taxIdError ||
                    sumDocError ||
                    dateError
                  }
                  onClick={getData}
                >
                  Поиск
                </button>
                <p className="text-sm text-[#949494] mt-[10px]">
                  * Обязательные к заполнению поля
                </p>
              </div>
            </div>
          </div>
          <img
            className="relative md:block hidden bottom-0 ml-[80px]"
            src={main}
            alt="main_img"
          />
        </div>
        <div>
          <img
            className=" my-[24px] mx-auto md:hidden"
            src={main_m}
            alt="main"
          />
        </div>
      </main>
    </>
  );
}
export default SearchView;
