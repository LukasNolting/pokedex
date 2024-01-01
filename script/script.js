let responseAsJson = ``;
let maxPokemonRender = 21;
let loadPokemonNumber = 1;
let pokemonAsJson = [];
let pokemons = [];

async function loadAPI(index) {
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=1400`;
  let response = await fetch(url);
  responseAsJson = await response.json();
  loadPokemon(1);
  renderScreenInfos();
}

async function loadPokemon(index) {
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${index}`;
  let pokemon = await fetch(urlPokemon);
  pokemonAsJson = await pokemon.json();
  pokemons.push(pokemonAsJson);
  // downloadAllPokemonData(1302);
}

async function renderScreenInfos() {
  renderPokemonSmall(loadPokemonNumber);
}

function loadMore() {
  let index = loadPokemonNumber + 20;
  loadPokemonNumber = index;
  maxPokemonRender = maxPokemonRender + 20;
  renderPokemonSmall(index);
}

async function renderPokemonSmall(loadPokemonNumber) {
  for (let i = loadPokemonNumber; i < maxPokemonRender; i++) {
    await loadPokemon(i);
    pokeName = pokemons[i]["name"].charAt(0).toUpperCase() + pokemons[i]["name"].slice(1);
    pokeImg = pokemons[i]["sprites"]["other"]["official-artwork"]["front_default"];
    pokeType = pokemons[i]["types"];
    pokeId = pokemons[i]["id"];
    let color = pokemons[i]["types"][0]["type"]["name"];
    let card = document.getElementById("card-container");
    card.innerHTML += cardPokemonSmall(pokeName, pokeId, i, pokeImg);

    for (let j = 0; j < pokemons[i]["types"].length; j++) {
      pokeTypesAll =  pokemons[i]["types"][j]["type"][`name`].charAt(0).toUpperCase() + pokemons[i]["types"][j]["type"][`name`].slice(1);
      document.getElementById(`type${i}`).innerHTML +=
        cardPokeTypesSmall(pokeTypesAll);
      if (j == 0) {
        document
          .getElementById(`pokeCard${i}`)
          .classList.add(`box-shadow-${color}`);
      }
    }
  }
}

function renderPokemonBig(pokeId) {
  let color = pokemons[pokeId]["types"][0]["type"]["name"];
  pokeType = pokemons["types"];
  pokeName =  pokemons[pokeId]["name"].charAt(0).toUpperCase() + pokemons[pokeId]["name"].slice(1);
  pokeImg = pokemons[pokeId]["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("img-click").classList.remove("d-none");
  document.getElementById("img-click").innerHTML = cardPokemonBig(pokeId,pokeImg,pokeName);

  for (let j = 0; j < pokemons[pokeId]["types"].length; j++) {
    pokeType =
      pokemons[pokeId]["types"][j]["type"][`name`].charAt(0).toUpperCase() +
      pokemons[pokeId]["types"][j]["type"][`name`].slice(1);
    document.getElementById(`type-big${pokeId}`).innerHTML += cardPokeTypesBig(pokeType);
    if (j == 0) {
      document.getElementById(`pokeCardBig${pokeId}`).classList.add(`box-shadow-${color}`);
    }
  }
}

function closeImg() {
  document.getElementById("img-click-close").classList.add("d-none");
  document.getElementById("img-click").classList.add("d-none");
}

function loadNextPokemon(i) {
  if (i == maxPokemonRender - 1) {
    i = 1;
  } else {
    i++;
  }
  renderPokemonBig(i);
  event.stopPropagation();
}

function loadPrevPokemon(i) {
  if (i == 1) {
    i = maxPokemonRender - 1;
  } else {
    i--;
  }
  renderPokemonBig(i);
  event.stopPropagation();
}



//  TEST

// let pokemonDataComplete = [];

// async function downloadAllPokemonData() {
//   // Für jedes Pokémon die Daten abrufen
//   for (let i = 0; i <= responseAsJson.count; i++) {
//     let response = await fetch(responseAsJson["results"][i]["url"]);
//     let pokemonData = await response.json();
//     pokemonDataComplete.push(await pokemonData);
//   }
// }
