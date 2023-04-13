import React, { useState, useEffect } from "react";
import resultInfo from "../../store/result";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";

const ResultCard = () => {
  const info = new resultInfo();
  const [offSet, setOffSet] = useState(10);
  const [cards, getCards] = useState([]);
  const showTenArticles = () => {
    setOffSet((offSet) => offSet + 10);
  };

  const loadInfo = async () => {
    if (cards.length > 0) return;
    await info.getCards(getCards);
    if (cards === undefined) {
      setTimeout(loadInfo, 4000);
    }
  };
  useEffect(() => {
    loadInfo();
  }, []);
  const imgParseRegExp = /<img\s[^>]*?src\s*=\s*['"]([^'"]*?)['"][^>]*?>/gm;
  const parseXml = (xml) => {
    const DOMParse = new DOMParser();
    const xmlDoc = DOMParse.parseFromString(xml, "text/html");
    const imgs = xmlDoc.documentElement.textContent.match(imgParseRegExp);
    const htmlText = imgs?.reduce((acc, el) => {
      const text = acc.replace(el, "");
      return text;
    }, xmlDoc.documentElement.textContent);
    return htmlText || xmlDoc.documentElement.textContent;
  };

  const parseImageUrl = (xml) => {
    const DOMParse = new DOMParser();
    const xmlDoc = DOMParse.parseFromString(xml, "text/html");
    const imgs = xmlDoc.documentElement.textContent.match(imgParseRegExp);

    const imagesSources = imgs?.reduce((acc, img) => {
      const src = img.match(/src\s*=\s*"([^"]+)"/);
      if (src && src[1]) {
        return [...acc, src[1]];
      }
      return acc;
    }, []);
    return imagesSources ? imagesSources[0] : null;
  };
  const getArtTags = (artType) => {
    const availibleTags = [];
    if (artType.isTechNews) {
      availibleTags.push("Технические новости");
    }
    if (artType.isAnnouncement) {
      availibleTags.push("Анонсы и события");
    }
    if (artType.isDigest) {
      availibleTags.push("Сводки новостей");
    }
    return availibleTags.length ? availibleTags : null;
  };
  const parseCards = cards.map((item) => {
    if (cards.length > 0) {
      return {
        date: format(new Date(item.issueDate), "dd.MM.yyyy"),
        articleUrl: item.url,
        articleUrlTitle: item.source.name,
        articleTitle: item.title.text,
        articleTags: getArtTags(item.attributes),
        imageUrl: parseImageUrl(item.content.markup),
        articleContent: parseXml(item.content.markup),
        wordCount: item.attributes.wordCount,
      };
    } else {
      return {};
    }
  });
  let isDone = parseCards.length <= offSet;
  return (
    <>
      {cards.length > 0 && (
        <div>
          <div className="flex justify-between flex-wrap mb-[109px]">
            {parseCards.slice(0, offSet).map((item, index) => (
              <div
                className="flex-col shadow-[0_0_20px_rgba(0,0,0,0.2)] w-full md:w-[641px] rounded-[10px] pt-[20px] px-[24px] md:px-[30px] pb-[35px] mb-[20px] break-all"
                key={index}
              >
                <div className="flex text-[#949494] text-sm">
                  <span className="mr-[20px] min-w-[90px]">{item.date}</span>
                  <a
                    className="underline decoration-solid"
                    href={item.articleUrl}
                  >
                    {item.articleUrlTitle}
                  </a>
                </div>
                <h4 className="font-medium md:text-2xl mt-[21px] mb-[20px] md:mb-[14px]">
                  {item.articleTitle}
                </h4>
                {item.articleTags &&
                  item.articleTags.map((tag) => (
                    <div
                      className="inline-block bg-[#FFB64F] rounded-[5px] text-xs py-[4px] px-[12px] mr-[4px] my-[14px]"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                {item.imageUrl && (
                  <img
                    className="max-w-full my-[14px] mx-auto"
                    src={item.imageUrl}
                    alt="article pic"
                  />
                )}
                <div
                  className="opacity-50"
                  dangerouslySetInnerHTML={{ __html: item.articleContent }}
                />
                <div className="flex justify-between">
                  <form action={item.articleUrl} target="_blank">
                    <button className="bg-[#7ce3e1] text-sm md:text-base rounded-[5px] my-[20px] py-[10px] px-[20px] tracking-wide">
                      Читать источник
                    </button>
                  </form>
                  <div className="text-[#949494] mt-[35px]">
                    {item.wordCount} слов&lang;а&rang;
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[20px] mb-[100px]">
            {!isDone && (
              <button
                onClick={showTenArticles}
                className="bg-[#5970FF] w-full md:w-fit text-white rounded-[5px] py-[16px] px-[50px] text-xl"
              >
                Показать больше
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default observer(ResultCard);
