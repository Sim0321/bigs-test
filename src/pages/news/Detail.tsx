import { useStores } from "@/modules/Context";
import * as Style from "@/styles/pages/detail.style";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = observer(() => {
  const { newsStore } = useStores();
  const param = useParams();
  const navigate = useNavigate();

  // 새로고침시 데이터 불러오기
  useEffect(() => {
    if (!newsStore.newsItem) {
      newsStore.setNewsItem(Number(param?.id) - 1);
    }
  }, [newsStore.newsItem]);

  return (
    <Style.DetailWrap>
      {newsStore.newsItem && (
        <>
          <div className="detail__title">{newsStore.newsItem?.title}</div>
          <div className="detail__meta">
            <div className="detail__meta-author">
              작성자 : <span>{newsStore.newsItem?.author}</span>
            </div>
            <div className="detail__meta-publishedAt">
              등록날짜 :{" "}
              <span>{newsStore.newsItem?.publishedAt.split("T")[0]}</span>
            </div>
          </div>
          <div className="detail__description">
            {newsStore.newsItem?.description}
          </div>

          <Link
            to={newsStore.newsItem?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            영상 또는 뉴스링크
          </Link>
          <img className="urlToImage" src={newsStore.newsItem?.urlToImage} />

          <div className="to-list" onClick={() => navigate("/")}>
            목록으로
          </div>
        </>
      )}
    </Style.DetailWrap>
  );
});

export default Detail;
