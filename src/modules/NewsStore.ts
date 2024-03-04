import axios from "axios";
import { action, makeObservable, observable } from "mobx";

interface DataType {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  author?: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  content?: string;
}

// class News {
//   // author?: string;
//   // content?: string;
//   // description: string;
//   // publishedAt: string;
//   // title: string;
//   // url: string;
//   // urlToImage: string;

//   constructor() // description: string,
//   // publishedAt: string,
//   // title: string,
//   // url: string,
//   // urlToImage: string,
//   // author?: string,
//   // content?: string

//   {
//     // this.author = author;
//     // this.content = content;
//     // this.description = description;
//     // this.publishedAt = publishedAt;
//     // this.title = title;
//     // this.url = url;
//     // this.urlToImage = urlToImage;

//   }
// }

export class NewsStore {
  rootStore;

  news: DataType | null = null;

  constructor(root: unknown) {
    makeObservable(this, {
      news: observable,
      setNews: action,
    });

    this.rootStore = root;
  }

  setNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=6b6bb7fef1af41d1b1674b6978823990"
        // "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=6b6bb7fef1af41d1b1674b6978823990"
      );
      console.log("response ::", response.data);
      this.news = response.data;

      // const articles = response.data.articles;
      // this.news = articles.map((article: Article) => {
      //   return new News(
      //     article.description,
      //     article.publishedAt,
      //     article.title,
      //     article.url,
      //     article.urlToImage,
      //     article.author,
      //     article.content
      //   );
      // });
    } catch (e) {
      console.log(e);
    }
  };
}
// createMovie(title, createdAt){
//   this.news= [
//     ...this.news,
//     new news(this.news[this.news[title]]) ~~~
//   ]
// }

//  또 다른 함수
