const axios = require("axios");

class APIHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "http://127.0.0.1:8000/characters",
    });
  }
}
