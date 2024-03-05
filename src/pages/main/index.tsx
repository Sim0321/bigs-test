import * as Style from "@/styles/pages/main.style";
import { useEffect, useState } from "react";
import { useStores } from "@/modules/Context";
import { observer } from "mobx-react";
import Select from "@/components/common/Select";
import Input from "@/components/common/Input";
import Icon from "@/components/common/Icon";
import News from "@/components/news/News";
import { filterObject, searchObject } from "@/const";

const Main = observer(() => {
  const { newsStore } = useStores();
  console.log(Math.ceil(newsStore.total / 10));
  // console.log("newsStore ::", newsStore.news);

  const [page, setPage] = useState<number>(newsStore.page);
  console.log("page ::", page);
  // const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    newsStore.setNews(page, "publishedAt", "");
  }, [newsStore, page]);

  const clickPageNumber = (position: string) => {
    if (position === "start") {
      setPage(1);
    }
    if (position === "prev") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
    if (position === "next") {
      if (page < Math.ceil(newsStore.total / 10)) {
        setPage(page + 1);
      }
    }
    if (position === "end") {
      setPage(Math.ceil(newsStore.total / 10));
    }
  };

  return (
    <Style.MainWrap>
      {/* <button onClick={clickTest}>+</button> */}
      <div className="search__container">
        <Select optionObj={filterObject} width="250" />
        <div className="search__keyword">
          <Select optionObj={searchObject} width="140" />
          <Input
            placeholder="검색어를 입력해주세요"
            width="420"
            rightSlot={<Icon name="IconSearch" size={20} />}
            style={{ width: "450px", height: "40px", background: "#eef3f6" }}
          />
        </div>
      </div>
      <div className="news__total">
        total <span>{newsStore.total}</span>
      </div>

      <div className="news__list-meta">
        <div className="num">번호</div>
        <div className="title">제목</div>
        <div className="createdAt">등록일자</div>
      </div>

      <div className="news__list">
        {newsStore.news &&
          newsStore.news.map((el) => <News key={el.id} info={el} />)}
        {newsStore.message && newsStore.message}
      </div>

      <div className="news__navigation">
        <div className="start" onClick={() => clickPageNumber("start")}>
          <Icon name="IconStart" size={22} />
        </div>
        <div className="prev" onClick={() => clickPageNumber("prev")}>
          <Icon name="IconPrev" size={22} />
        </div>
        {Array.from({ length: Math.ceil(newsStore.total / 10) }).map(
          (_, index) => (
            <div
              className={page === index + 1 ? "active" : "number"}
              key={index}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </div>
          )
        )}
        <div className="next" onClick={() => clickPageNumber("next")}>
          <Icon name="IconNext" size={22} />
        </div>
        <div className="end" onClick={() => clickPageNumber("end")}>
          <Icon name="IconEnd" size={22} />
        </div>
      </div>
    </Style.MainWrap>
  );
});

export default Main;
