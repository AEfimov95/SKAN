import { makeAutoObservable, runInAction } from "mobx";
import { format } from "date-fns";
import * as API from "../api/api.js";

export default class resultInfo {
  savedUser = JSON.parse(localStorage.getItem("user"));
  histogram = 0;
  cards = 0;
  constructor() {
    makeAutoObservable(this);
  }
  getHistogram(method, sum) {
    const data = JSON.parse(localStorage.getItem("histogramData"));
    const period = [];
    const total = [];
    const risks = [];
    if (!data.data[0]) {
      method([{ period: '-', total: '-', risks: '-' }])
      return;
    };
    data.data[0].data.forEach((item) => {
      period.push(format(new Date(item.date), "dd.MM.yyyy"));
    });
    data.data[0].data.forEach((item) => {
      total.push(item.value);
    });
    data.data[1].data.forEach((item) => {
      risks.push(item.value);
    });
    const result = period.map((item, index) => {
      return { period: item, total: total[index], risks: risks[index] };
    });
    this.histogram = result;
    method(result);
    sum(total.reduce((a, b) => a + b));
  }
  async getCards(method) {
    const document = new API.DocumentsApi();
    const result = [];
    const ids = [];
    const data = JSON.parse(localStorage.getItem("searchResultItem"));
    data.items.forEach((item) => {
      ids.push(item.encodedId);
    });
    await document
      .apiV1DocumentsPost(
        true,
        { ids: ids },
        {
          headers: {
            Authorization: `Bearer ${this.savedUser.accessToken}`,
          },
        }
      )
      .then((response) => result.push(response));
    const cards = result[0].map((item) => {
      return item.ok;
    });
    this.cards = cards;
    method(cards);
  }
}
