import { NewsStore } from "./NewsStore";

export class RootStore {
  newsStore;

  constructor() {
    this.newsStore = new NewsStore(this);
  }
}
