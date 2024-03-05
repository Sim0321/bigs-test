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
  message?: string;

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
  message: string | undefined;
  page: number = 1;

  constructor(root: unknown) {
    makeObservable(this, {
      news: observable,
      total: observable,
      message: observable,
      page: observable,
      setNews: action,
    });

    this.rootStore = root;
  }

  setNews = async (page: number, sortBy: string, searchWord: string) => {
    console.log("mobx page ::", page);
    try {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=10&page=${page}`;
      // let apiUrl = `https://newsapi.org/v2/everything?apiKey=${apikey}&pageSize=10&page=${page}`;

      if (sortBy) {
        apiUrl += `&sortBy=${sortBy}`;
      }
      if (searchWord) {
        apiUrl += `&q=${searchWord}`;
      }
      // console.log(apiUrl);
      const response = await axios.get(apiUrl);
      // const response = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apikey}&pageSize=10&page=${page}`
      //   // `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=10&page=${page}`
      //   // `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=${page}`
      // );
      // console.log("새로 불러옴");
      // console.log(response.data);

      if (response.data.totalResults === 0) {
        this.message = "검색 결과가 없습니다.";
      } else {
        this.news = response.data.articles.map(
          (article: Article, i: number) =>
            new News(
              (page - 1) * 10 + (i + 1),
              article.description,
              article.publishedAt,
              article.title,
              article.url,
              article.urlToImage,
              article.author,
              article.content
            )
        );
      }

      this.total = response.data.totalResults;
    } catch (e) {
      console.log(e);
      this.message = "데이터를 불러오는 중에 오류가 발생했습니다.";
    }
  };

  nextPage = () => {
    this.page += 1;
  };
  prevPage = () => {
    if (this.page > 1) {
      this.page -= 1;
    }
  };
}
