const axios = require("axios");

class APIHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "localhost:8000",
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(characterid) {
    return this.api.get(`/characters/${characterid}`);
  }

  createOneRegister(characterInfo) {
    return this.api.post("/characters", characterInfo);
  }

  updateOneRegister(characterid, characterInfo) {
    return this.api.put(`/characters/${characterid}`, characterInfo);
  }

  deleteOneRegister(characterid) {
    return this.api.delete(`/characters/${characterid}`);
  }
}

module.exports = APIHandler;
