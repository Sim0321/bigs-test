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
  console.log("newsStore ::", newsStore.news);

  const [page, setPage] = useState<number>(1);
  console.log("page ::", page);
  // const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    newsStore.setNews(page);
  }, [newsStore, page]);
  return (
    <Style.MainWrap>
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
      <div className="news__total">total {newsStore.total}</div>

      <div className="news__list-meta">
        <div className="num">번호</div>
        <div className="title">제목</div>
        <div className="createdAt">등록일자</div>
      </div>

      <div className="news__list">
        {newsStore.news &&
          newsStore.news.map((el) => <News key={el.id} info={el} />)}
      </div>

      <div className="page-navigation">
        {Array.from({ length: Math.ceil(newsStore.total / 10) }).map(
          (_, index) => (
            <button key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </Style.MainWrap>
  );
});

export default Main;
