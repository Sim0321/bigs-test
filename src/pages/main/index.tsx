import * as Style from "@/pages/main/styles/index.style";
// import axios from "axios";
import { useEffect } from "react";
import { useStores } from "@/modules/Context";
import { observer } from "mobx-react";

interface DataType {
  status: string;
  totalResults: number;
  articles: NewsType[];
}
interface NewsType {
  author?: string;
  content?: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

const Main = observer(() => {
  const { newsStore } = useStores();
  console.log("newsStore ::", newsStore.news);

  useEffect(() => {
    newsStore.setNews();
  }, []);
  return (
    <Style.MainWrap>
      <div className="search__container">
        <div className="search__sort-selector">오래된 순</div>

        <div className="search__keyword">
          <div className="search__keyword-selector">제목</div>
          <input type="text" className="search__input" />
        </div>
      </div>
      <div className="news__total">total {newsStore.news?.totalResults}</div>

      <div className="news__list-meta">
        <div className="num">번호</div>
        <div className="title">제목</div>
        <div className="createdAt">등록일자</div>
      </div>

      <div className="news__list">
        {newsStore.news &&
          newsStore.news.articles.map((el, i) => (
            <div className="news" key={i}>
              <div className="num">{i + 1}</div>
              <div className="title">{el.title}</div>
              <div className="createdAt">{el.publishedAt}</div>
            </div>
          ))}
      </div>
    </Style.MainWrap>
  );
});

export default Main;
