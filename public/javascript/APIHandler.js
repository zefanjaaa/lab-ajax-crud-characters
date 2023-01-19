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

  getOneRegister = (characterId) => {
    const oneCharacterView = document.querySelector(".characters-container");
    return this.api.get(`/characters/${characterId}`).then((result) => {
      console.log(result.data);
      const oneCharacter = result.data;
      oneCharacterView.innerHTML = `<div class="character-info">
    <div class="id">Id: ${oneCharacter.id}</div>
    <div class="name">Name: ${oneCharacter.name}</div>
    <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${oneCharacter.cartoon}</div>
    <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
  </div>`;
    });
  };

  // getOneRegister(characterid) {
  //   const oneCharacterView = document.querySelector(".characters-container");
  //   return this.api
  //     .get(`${this.BASE_URL}/characters/${characterid}`)
  //     .then((result) => {
     
  //       oneCharacterView.innerHTML = {};

  //       // for (let i = 0; i < oneCharacter.length; i++) {
  //       //   oneCharacterView.innerHTML =
  //       //     document.querySelector(".character-info",oneCharacter);
  //       const oneCharacter = result.data
  //       // document.querySelector('.character-info' , oneCharacter)
  //       oneCharacterView.innerHTML = oneCharacter
  //       })
      
  // }

  createOneRegister(characterInfo) {
    return this.api
      .post(`${this.BASE_URL}/characters`, characterInfo)
      .then((characterInfo) => {
        console.log("New Character", characterInfo);
        this.getFullList();
      })
      .catch((error) => {
        console.log("There is an error", error);
      });
  }

  updateOneRegister(characterid, characterInfo) {
    return this.api
      .put(`${this.BASE_URL}/characters/${characterid}`, characterInfo)
      .then((characterInfo, characterid) => {
        console.log("character updated", characterInfo, characterid);
      })
      .catch((error) => {
        console.log("There is an error", error);
      });
  }

  deleteOneRegister(characterid) {
    return this.api.delete(`${this.BASE_URL}/characters/${characterid}`);
  }
}
