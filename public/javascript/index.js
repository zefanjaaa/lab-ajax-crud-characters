const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      // Iteration 3.1
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let idValue = document.getElementsByName("character-id-delete");
      charactersAPI.deleteOneRegister(idValue[0].value);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      let name = document.getElementsByName("name").value;
      let weapon = document.getElementsByName("weapon").value;
      let occupation = document.getElementsByName("occupation").value;
      let cartoon = document.getElementsByName("cartoon").checked;

      let newCharacter = { name, weapon, occupation, cartoon };
      charactersAPI.createOneRegister(newCharacter);
    });
});
