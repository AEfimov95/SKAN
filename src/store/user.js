import { makeAutoObservable, runInAction } from "mobx";

import * as API from "../api/api.js";

export default class userInfo {
  account = new API.AccountApi();
  isAuth = false;
  savedUser = JSON.parse(localStorage.getItem("user"));
  error = "";
  userInfo = undefined;
  accountInfo = undefined;
  constructor() {
    makeAutoObservable(this);
  }
  checkAuth() {
    if (this.savedUser) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
  async login(getLogin, getPassword, gohome) {
    this.error = "";
    this.account
      .apiV1AccountLoginPost({ login: getLogin, password: getPassword })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        this.savedUser = JSON.parse(localStorage.getItem("user"));
        this.checkAuth();
        this.getInfo();
        gohome(true);
      })
      .catch(() => {
        runInAction(() => {
          this.error = "Неверно указан логин и/или пароль";
        });
      });
  }
  logout() {
    this.savedUser = undefined;
    localStorage.removeItem("user");
    this.checkAuth();
  }
  setAccountInfo(data) {
    this.accountInfo = data;
  }
  async getInfo() {
    if (this.accountInfo) return;
    this.userInfo = this.account
      .apiV1AccountInfoGet(!!this.savedUser, {
        headers: { Authorization: `Bearer ${this.savedUser.accessToken}` },
      })
      .then((response) => {
        this.setAccountInfo(response.eventFiltersInfo);
      })
      .catch(() => this.logout());
  }
}
