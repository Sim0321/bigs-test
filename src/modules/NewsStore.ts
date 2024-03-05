import axios from "axios";
import { action, makeObservable, observable } from "mobx";

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

  newsList: Article[] = [];
  news: Article[] = [];
  total: number = 0;
  message: string | undefined;
  page: number = 1;
  pageSize: number = 10;
  sortBy: string = "최신 순";
  searchIn: string = "title";

  constructor(root: unknown) {
    makeObservable(this, {
      newsList: observable,
      news: observable,
      total: observable,
      message: observable,
      page: observable,
      searchIn: observable,

      setNewsList: action,
      setPage: action,
      setSortBy: action,
      setSearchIn: action,
    });

    this.rootStore = root;
  }

  setNewsList = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${apikey}&pageSize=100`
      );

      if (response.data.totalResults === 0) {
        this.message = "검색 결과가 없습니다.";
      } else {
        this.newsList = response.data.articles.map(
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

        this.news = [...this.newsList].slice(
          (this.page - 1) * this.pageSize,
          this.page * this.pageSize
        );
      }

      this.total = response.data.totalResults;
    } catch (e) {
      console.log(e);
      this.message = "데이터를 불러오는 중에 오류가 발생했습니다.";
    }
  };

  setPage = (page: number) => {
    this.page = page;
    this.updatePage();
  };

  setSortBy = (sortBy: string) => {
    this.sortBy = sortBy;

    if (sortBy === "최신 순") {
      this.news = [...this.newsList].slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    } else {
      const reversedList = [...this.newsList].reverse();
      this.news = reversedList.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    }
  };

  updatePage = () => {
    if (this.sortBy === "최신 순") {
      this.news = [...this.newsList].slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    } else {
      const reversedList = [...this.newsList].reverse();
      this.news = reversedList.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    }
  };

  setSearchIn = (searchIn: string) => {
    console.log(searchIn);
    this.searchIn = searchIn;
  };

  setSearchNews = async (searchValue: string) => {
    // console.log("searchValue ::", searchValue);
    // console.log("In ::", this.searchIn);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=kr&category=business&apiKey=${apikey}&pageSize=100&searchIn=${this.searchIn}`
      );

      if (response.data.totalResults === 0) {
        this.message = "검색 결과가 없습니다.";
      } else {
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

        this.news = [...this.news].slice(
          (this.page - 1) * this.pageSize,
          this.page * this.pageSize
        );
      }

      this.total = response.data.totalResults;
    } catch (e) {
      console.log(e);
      this.message = "데이터를 불러오는 중에 오류가 발생했습니다.";
    }
  };
}
