let responseAsJson = ``;
let responseLength = 0;
let maxPokemonRender = 21;
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
  renderPokemon(index);
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
    pokeId = pokemonAsJson["id"];
    let color = pokemonAsJson["types"][0]["type"]["name"];

    let card = document.getElementById("card-container");
    card.innerHTML += `<div class="card" id="pokeCard${i}" onclick="loadPokeValues(${pokeId}, ${pokeName})">
        <div class="card-head">
            <div class='pokeName' id="${pokeName}">${pokeName}</div>
            <div class='pokeId' id="${pokeId}">#${pokeId}</div>
        </div>
        <div class="card-content">
            <div class="pokeTypeContainer" id="type${i}"></div>
            <img class='pokeImg' src="${pokeImg}" alt="${pokeName}">
        </div>
    </div>`;

    for (let j = 0; j < pokemonAsJson["types"].length; j++) {
      pokeType = pokemonAsJson["types"][j]["type"][`name`];
      if (j == 0) {
        document.getElementById(
          `type${i}`
        ).innerHTML += `<div class='pokeType'>${pokeType}</div>`;
        document
          .getElementById(`pokeCard${i}`)
          .classList.add(`box-shadow-${color}`);
      }
    }
  }
}

function openSearch() {
  document.getElementById("nav-normal").classList.add("d-none");
  document.getElementById("nav-search").classList.remove("d-none");
}
function closeSearch() {
  document.getElementById("nav-normal").classList.remove("d-none");
  document.getElementById("nav-search").classList.add("d-none");
}

// FOTOGALERIE

function loadPokeValues(pokeId, pokeName) {
  document.getElementById("img-click").classList.remove("d-none");
  document.getElementById("img-click").innerHTML = /*html*/ `

<div id="img-click-close" class="img-click" onclick="closeImg()">
    <div class="img-load-head">
      <img src="./img/cross.png" alt="close image" class="close-img" id="closeimg"/>
    </div>
    <div class="img-load">
      <div class="content-flex">
                <img src="./img/prev.png" alt="previous image" class="img-load-arrows" onclick="loadPrevImg(${pokeId})"/> 
      <div class="poke-content">
        <div class="card" id="pokeCard${pokeId}">
          <div class="card-head">
            <div class='pokeName' id="${pokeName}">${pokeName}</div>
            <div class='pokeId' id="${pokeId}">#${pokeId}</div>
          </div>
        <div class="card-content">
          <div class="pokeTypeContainer" id="type${pokeId}"></div>
            
          </div>
      </div>
      </div>
<img src="./img/next.png" alt="next image" class="img-load-arrows" onclick="loadNextImg(${pokeId})"/>
      </div>
      </div>
</div>`;
}

function closeImg() {
  document.getElementById("img-click-close").classList.add("d-none");
  document.getElementById("img-click").classList.add("d-none");
}

function loadNextImg(i) {
  if (i == maxPokemonRender-1) {
    i = 1;
  } else {
    i++;
  }
  loadPokeValues(i);
  event.stopPropagation();
}

function loadPrevImg(i) {
  if (i == 1) {
    i = maxPokemonRender - 1;
  } else {
    i--;
  }
  loadPokeValues(i);
  event.stopPropagation();
}
