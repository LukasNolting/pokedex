let PokeIdURL = [];
let PokeName = [];
let PokeTypes = [];
let pokemons = 0;
let pokemonAsJsonComp = [];
let currentPokemon = [];

async function loadAPI() {
  let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302";
  let response = await fetch(url);
  let responseAsJson = await response.json();
  let pokemonList = responseAsJson["results"];
  for (let i = 0; i < pokemonList.length; i++) {
    PokeIdURL.push(pokemonList[i]["url"]);
    PokeName.push(pokemonList[i]["name"]);
  }
  loadPokemon();
}

async function loadPokemon() {
  for (let i = 0; i < 20; i++) {
    let url = PokeIdURL[i];
    let response = await fetch(url);
    let pokemonAsJSON = await response.json();
    pokemonAsJsonComp.push(pokemonAsJSON);
    renderPokemon(i);
  }
  pokemons = 20;
}

async function loadMore(morePokemon) {
  for (let i = pokemons; i < pokemons + morePokemon; i++) {
    const url = PokeIdURL[i];
    let response = await fetch(url);
    let pokemonAsJSON = await response.json();
    pokemonAsJsonComp.push(pokemonAsJSON);
    renderPokemon(i);
  }
  pokemons += morePokemon;
}

function renderPokemon(i) {
  let pokeName =
    pokemonAsJsonComp[i]["name"].charAt(0).toUpperCase() +
    pokemonAsJsonComp[i]["name"].slice(1);
  let pokeId = pokemonAsJsonComp[i]["id"];
  let pokeTypes = pokemonAsJsonComp[i]["types"];
  let pokeType = [];
  let pokeImg =
    pokemonAsJsonComp[i]["sprites"]["other"]["official-artwork"][
      "front_default"
    ];
  let color = pokemonAsJsonComp[i]["types"][0]["type"]["name"];

  for (let i = 0; i < pokeTypes.length; i++) {
    let pokeTypeElement = pokeTypes[i]["type"]["name"];
    pokeType += cardPokeTypesSmall(pokeTypeElement);
  }
  document.getElementById("card-container").innerHTML += renderPokemonSmallCard(
    pokeId,
    pokeName,
    pokeType,
    pokeImg,
    i
  );
  document.getElementById(`pokeCard${i}`).classList.add(`box-shadow-${color}`);
}

function renderPokemonBig(i) {
  let pokeName =
    pokemonAsJsonComp[i]["name"].charAt(0).toUpperCase() +
    pokemonAsJsonComp[i]["name"].slice(1);
  let pokeId = pokemonAsJsonComp[i]["id"];
  let pokeTypes = pokemonAsJsonComp[i]["types"];
  let pokeType = [];
  let pokeImg =
    pokemonAsJsonComp[i]["sprites"]["other"]["official-artwork"][
      "front_default"
    ];
  let color = pokemonAsJsonComp[i]["types"][0]["type"]["name"];
  for (let i = 0; i < pokeTypes.length; i++) {
    let pokeTypeElement = pokeTypes[i]["type"]["name"];
    pokeType += cardPokeTypesBig(pokeTypeElement);
  }
  document.getElementById("container-big").innerHTML = 
  renderPokemonBigCard(pokeId,pokeImg,pokeName,pokeType,i);
  document.getElementById(`pokeCardBigColor${i}`).classList.add(`box-shadow-${color}`);
  loadMoreLast(i);
  renderOverview(i);
}

function renderOverview(i){
      let height = pokemonAsJsonComp[`${i}`]["height"] / 10;
      let weight = pokemonAsJsonComp[`${i}`]["weight"] / 10;
      let abilities = pokemonAsJsonComp[i]["abilities"]
      let ability = [];
      for (let j = 0; j < abilities.length; j++) {
        let pokeAbilities =
          abilities[j]["ability"]["name"].charAt(0).toUpperCase() +
          abilities[j]["ability"]["name"].slice(1);
        ability += renderOverviewAbilities(pokeAbilities);
      }
      document.getElementById("card-overview").innerHTML = /*html*/ `
      <div class="card-overview">
      <div class="flex-align-center-gap10"><img src="../img/height.svg" class="icon-big-card">Height: ${height} m</div>
      <div class="flex-align-center-gap10"><img src="../img/weight.svg" class="icon-big-card">Weight: ${weight} kg</div>
      <div class="flex-align-center-gap10">
      Abilities: 
      <div class="flex-column">${ability}</div>
      </div>
      </div>
      `;    
}

function renderOverviewAbilities(pokeAbilities){
    return /*html*/ `
    <div class="abilities-ow"><img src="../img/pokeball.png" class="icon-big-card"> ${pokeAbilities}</div>
    `;
}

function loadMoreLast(i){
  if (i == pokemonAsJsonComp.length - 1){
    loadMore(2);
  } else {
    loadMore(1);
  }
}

function closeImg() {
  document.getElementById("pokeCardBig").classList.add("d-none");
  document.getElementById("container-big").classList.add("d-none");
}

function loadNextPokemon(i) {
  if (i == pokemonAsJsonComp.length - 1) {
  loadMore(1);
  } else {
    i++;
  }
  renderPokemonBig(i);
  event.stopPropagation();
}

function loadPrevPokemon(i) {
  if (i == 0) {
    i = pokemonAsJsonComp.length - 1;
  } else {
    i--;
  }
  renderPokemonBig(i);
  event.stopPropagation();
}