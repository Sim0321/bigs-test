import { useStores } from "@/modules/Context";
import { useNavigate } from "react-router-dom";

interface Article {
  id: number;
  author?: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  content?: string;
}

interface NewsProp {
  info: Article;
}

const News = ({ info }: NewsProp) => {
  const { newsStore } = useStores();
  const navigate = useNavigate();

  const navigateDetail = (id: number) => {
    newsStore.setNewsItem(id);
    navigate(`/news/${id}`);
  };
  return (
    <div className="news" key={info.id} onClick={() => navigateDetail(info.id)}>
      <div className="num">{info.id}</div>
      <div className="title">{info.title}</div>
      <div className="createdAt">{info.publishedAt.split("T")[0]}</div>
    </div>
  );
};

export default News;
