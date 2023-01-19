class APIHandler {
  /*   constructor() {
    this.api = axios.create({
      baseURL: "localhost:8000",
    });
  } */

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList = () => {
    const allCharactersView = document.querySelector(".characters-container");

    return (
      this.api
        .get("/characters")
        // Iteration 3.1
        .then((result) => {
          console.log(result.data);
          const charactersList = result.data;
          allCharactersView.innerHTML = "";
          // approach with for loop
          /* for (let i = 0; i < charactersList.length; i++) {
          allCharactersView.innerHTML += `<div class="character-info">
    <div class="id">Id: ${charactersList[i].id}</div>
    <div class="name">Name: ${charactersList[i].name}</div>
    <div class="occupation">Occupation: ${charactersList[i].occupation}</div>
    <div class="cartoon">Is a Cartoon? ${charactersList[i].cartoon}</div>
    <div class="weapon">Weapon: ${charactersList[i].weapon}</div>
  </div>`;
        } */
          // another approach with forEach()
          charactersList.forEach((element) => {
            const character = `<div class="character-info">
              <div class="id">Id: ${element.id}</div>
              <div class="name">Name: ${element.name}</div>
              <div class="occupation">Occupation: ${element.occupation}</div>
              <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
              <div class="weapon">Weapon: ${element.weapon}</div>
            </div>`;
            allCharactersView.innerHTML += character;
          });
        })
        .catch((error) => {
          console.log(`Something went wrong getting all characters ${error}`);
          allCharactersView.innerHTML = `<h3>Something went wrong. Try again later</h3>`;
        })
    );
  };

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
