let responseAsJson = ``;
let responseLength = 0;
let maxPokemonRender = 20;
let loadPokemonNumber = 1;
let pokemonAsJson = ``;

async function loadAPI(index) {
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=1400`;
  let response = await fetch(url);
  responseAsJson = await response.json();
  responseLength = responseAsJson["count"];
  loadPokemon(1);
  renderScreenInfos();
}

async function loadPokemon(index) {
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${index}`;
  let pokemon = await fetch(urlPokemon);
  pokemonAsJson = await pokemon.json();
}

async function renderScreenInfos() {
  let responseLength = responseAsJson["count"];
  renderPokemon(loadPokemonNumber);
  console.log(pokemonAsJson);
}

function loadMore() {
  let index = loadPokemonNumber + 20;
  loadPokemonNumber = index;
  maxPokemonRender = maxPokemonRender + 20;
  renderPokemon(loadPokemonNumber);
}

async function renderPokemon(loadPokemonNumber) {
  let pokeName = [];
  let pokeImg = [];
  let pokeType = [];
  for (let i = loadPokemonNumber; i < maxPokemonRender; i++) {
    await loadPokemon(i);
    pokeName = [responseAsJson["results"][i - 1]["name"]];
    pokeImg =
      pokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"];
    pokeType = pokemonAsJson["types"];

    let card = document.getElementById("card-container");
    card.innerHTML += `<div class="card">
        <div class="card-head">
            <div id="${pokeName}">${pokeName}</div>
            <div id=""></div>
        </div>
        <div class="card-content">
            <div id="type${i}"></div>
            <img src="${pokeImg}" alt="${pokeName}">
        </div>
    </div>`;

    for (let j = 0; j < pokemonAsJson["types"].length; j++) {
      pokeType = pokemonAsJson["types"][j]["type"][`name`];
      renderType(pokeType, i);
    }
  }
}

function renderType(pokeType, i) {
  document.getElementById(`type${i}`).innerHTML += `${pokeType}<br>`;
}

function openSearch() {
  document.getElementById("nav-normal").classList.add("d-none");
  document.getElementById("nav-search").classList.remove("d-none");
}
function closeSearch() {
  document.getElementById("nav-normal").classList.remove("d-none");
  document.getElementById("nav-search").classList.add("d-none");
}
