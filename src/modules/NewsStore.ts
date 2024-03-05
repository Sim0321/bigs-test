import axios from "axios";
import { action, makeObservable, observable } from "mobx";

// interface DataType {
//   status: string;
//   totalResults: number;
//   articles: Article[];
// }

const apikey = import.meta.env.VITE_NEWS_API_KEY;

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

class News {
  id: number;
  author?: string;
  content?: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;

  constructor(
    id: number,
    description: string,
    publishedAt: string,
    title: string,
    url: string,
    urlToImage: string,
    author?: string,
    content?: string
  ) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.description = description;
    this.publishedAt = publishedAt;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
  }
}

export class NewsStore {
  rootStore;

  news: Article[] = [];
  total: number = 0;

  constructor(root: unknown) {
    makeObservable(this, {
      news: observable,
      total: observable,
      setNews: action,
    });

    this.rootStore = root;
  }

  setNews = async (page: number) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apikey}&pageSize=10&page=${page}`
        // `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=10&page=${page}`
        // `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=${page}`
      );
      console.log("새로 불러옴");
      console.log(response.data);
      this.news = response.data.articles.map(
        (article: Article, i: number) =>
          new News(
            i + 1,
            article.description,
            article.publishedAt,
            article.title,
            article.url,
            article.urlToImage,
            article.author,
            article.content
          )
      );

      this.total = response.data.totalResults;
    } catch (e) {
      console.log(e);
    }
  };

  // nextPage = () => {
  //   this.currentPage += 1;
  // };

  // prevPage = () => {
  //   if (this.currentPage > 1) {
  //     this.currentPage -= 1;
  //   }
  // };

  // getPageNews = (page: number): Article[] => {
  //   const startIndex = (page - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   return this.news.slice(startIndex, endIndex);
  // };
}
// createMovie(title, createdAt){
//   this.news= [
//     ...this.news,
//     new news(this.news[this.news[title]]) ~~~
//   ]
// }

//  또 다른 함수
