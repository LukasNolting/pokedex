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
  document.getElementById("loadMoreBtn").classList.add("no-click");
  document.getElementById("loadMoreBtn").innerHTML = "Please wait...";
  for (let i = pokemons; i < pokemons + morePokemon; i++) {
    const url = PokeIdURL[i];
    let response = await fetch(url);
    let pokemonAsJSON = await response.json();
    pokemonAsJsonComp.push(pokemonAsJSON);
    renderPokemon(i);
  }
  pokemons += morePokemon;
  document.getElementById("loadMoreBtn").classList.remove("no-click");
  document.getElementById("loadMoreBtn").innerHTML = "Load more Pokemon";
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
  document.getElementById('big-Card').innerHTML = 
  renderPokemonBigCard(pokeId,pokeImg,pokeName,pokeType,i);
  document.getElementById(`pokeCardBigColor${i}`).classList.add(`box-shadow-${color}`);
  document.getElementById("body").classList.add("noscroll");
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
      document.getElementById(`card-overview${i}`).innerHTML = "";
      document.getElementById(`card-overview${i}`).innerHTML = /*html*/ `
      <div class="card-overview">
        <div class="card-overview-center">
      <div class="flex-align-center-gap10"><img src="../img/height.svg" class="icon-big-card"><b class="width">Height:</b> ${height} m</div>
      <div class="flex-align-center-gap10"><img src="../img/weight.svg" class="icon-big-card"><b class="width">Weight:</b> ${weight} kg</div>
      <div class="flex-align-center-gap10">
      <img src="../img/pokeball.png" class="icon-big-card">
      <b class="width">Abilities: </b>
      <div class="flex-column">${ability}</div>
      </div>
      </div>
      </div>
      `;  
      document.getElementById("about").classList.add("active"); 
      document.getElementById("stats").classList.remove("active"); 
      document.getElementById("moves").classList.remove("active"); 
}

function renderOverviewAbilities(pokeAbilities){
    return /*html*/ `
    <div class="abilities-ow"> ${pokeAbilities}</div>
    `;
}

function renderMoves(i){
  let moves = pokemonAsJsonComp[i]["moves"];
  let move = [];

  for (let j = 0; j < 6; j++) {
    let pokeMove =
      moves[j]["move"]["name"].charAt(0).toUpperCase() +
      moves[j]["move"]["name"].slice(1);
      move += `<div class="moves-list"><img src="../img/pokeball.png" class="icon-big-card">${pokeMove}</div>`;
      }

  document.getElementById(`card-overview${i}`).innerHTML = "";
  document.getElementById(
    `card-overview${i}`).innerHTML = `<div class="card-moves">
      ${move}</div>`;

  document.getElementById("moves").classList.add("active");
  document.getElementById("about").classList.remove("active");
  document.getElementById("stats").classList.remove("active"); 
  event.stopPropagation(); 
}

function renderStats(i){
  renderChart(i);
}



function closeBigCard() {
  document.getElementById("pokeCardBig").classList.add("d-none");
  document.getElementById("container-big-background").classList.add("d-none");
  document.getElementById("container-big").classList.add("d-none");
  document.getElementById("body").classList.remove("noscroll");
}

function loadNextPokemon(i) {
  if (i == pokemonAsJsonComp.length - 1) {
   i = 0;
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