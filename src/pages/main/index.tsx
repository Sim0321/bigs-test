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

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    newsStore.setNewsList();
  }, [newsStore]);

  const clickPageNumber = (position: string) => {
    if (position === "start") {
      newsStore.setPage(1);
    }
    if (position === "prev") {
      if (newsStore.page > 1) {
        newsStore.setPage(newsStore.page - 1);
      }
    }
    if (position === "next") {
      if (newsStore.page < Math.ceil(newsStore.total / 10)) {
        newsStore.setPage(newsStore.page + 1);
      }
    }
    if (position === "end") {
      newsStore.setPage(Math.ceil(newsStore.total / 10));
    }
  };

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newsStore.setSearchNews(searchValue);
  };

  return (
    <Style.MainWrap>
      <div className="search__container">
        <Select optionObj={filterObject} width="250" name="filter" />
        <div className="search__keyword">
          <Select optionObj={searchObject} width="140" name="search" />
          <form onSubmit={onSubmit}>
            <Input
              placeholder="검색어를 입력해주세요"
              width="420"
              rightSlot={<Icon name="IconSearch" size={20} />}
              style={{
                minWidth: "200px",
                height: "40px",
                background: "#eef3f6",
              }}
              value={searchValue}
              onChange={onChangeSearchValue}
            />
          </form>
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
              className={newsStore.page === index + 1 ? "active" : "number"}
              key={index}
              onClick={() => newsStore.setPage(index + 1)}
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
