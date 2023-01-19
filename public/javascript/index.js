const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      // Iteration 3.1
      charactersAPI.getFullList();
    });

  // document
  //   .getElementById("fetch-one")
  //   .addEventListener("click", function (event) {
  //     let fetchOne = document.getElementsByName("character-id");
  //     charactersAPI.getOneRegister(fetchOne[0].value);
  //   });
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      // Iteration 3.2
      const characterId = document.querySelector(".character-id").value;
      charactersAPI.getOneRegister(characterId);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let idValue = document.getElementsByName("character-id-delete");
      charactersAPI.deleteOneRegister(idValue[0].value);
      charactersAPI.getFullList();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      let id = document.getElementsByName("chr-id")[1].value;
      let name = document.getElementsByName("name")[1].value;
      let weapon = document.getElementsByName("weapon")[1].value;
      let occupation = document.getElementsByName("occupation")[1].value;
      let cartoon = document.getElementsByName("cartoon")[1].checked;
      let editCharacter = { id, name, weapon, occupation, cartoon };
      charactersAPI.updateOneRegister(editCharacter);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      let name = document.getElementsByName("name")[0].value;
      let weapon = document.getElementsByName("weapon")[0].value;
      let occupation = document.getElementsByName("occupation")[0].value;
      let cartoon = document.getElementsByName("cartoon")[0].checked;

      let newCharacter = { name, weapon, occupation, cartoon };
      charactersAPI.createOneRegister(newCharacter);
    });
});
