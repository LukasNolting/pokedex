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
}

async function renderScreenInfos() {
  renderPokemon(loadPokemonNumber);
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
    pokeImg = pokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"];
    pokeType = pokemonAsJson["types"];
    pokeId = pokemonAsJson["id"];
    let color = pokemonAsJson["types"][0]["type"]["name"];

    let card = document.getElementById("card-container");
    card.innerHTML += renderCardSmall(pokeName, pokeId, i, pokeImg);

    for (let j = 0; j < pokemonAsJson["types"].length; j++) {
      pokeType = pokemonAsJson["types"][j]["type"][`name`];
      document.getElementById(`type${i}`).innerHTML += `<div class='pokeType'>${pokeType}</div>`;
      if (j == 0) {
        document.getElementById(`pokeCard${i}`).classList.add(`box-shadow-${color}`);
      }
    }
  }
}

function renderCardSmall(pokeName, pokeId, i, pokeImg) {
  return /*html*/ `<div class="card" id="pokeCard${pokeId}" onclick="renderCardBig(${pokeId})">
        <div class="card-head">
            <div class='pokeName' id="${pokeName}">${pokeName}</div>
            <div class='pokeId' id="${pokeId}">#${pokeId}</div>
        </div>
        <div class="card-content">
            <div class="pokeTypeContainer" id="type${i}"></div>
            <img class='pokeImg' src="${pokeImg}" alt="${pokeName}">
        </div>
    </div>`;
}



// FOTOGALERIE

function renderCardBig(pokeId) {
   let pokeType = [];
   pokeType = pokemons["types"];
  let color = pokemons[pokeId]["types"][0]["type"]["name"];
  pokeName = pokemons[pokeId]["name"];
  pokeImg = pokemons[pokeId]["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("img-click").classList.remove("d-none");
  document.getElementById("img-click").innerHTML = /*html*/ `

<div id="img-click-close" class="img-click" onclick="closeImg()">
    <div class="img-load-head">
      </div>
      <div class="img-load">
        <div class="content-flex">
          <img src="./img/prev.png" alt="previous image" class="img-load-arrows" onclick="loadPrevImg(${pokeId}, '${pokeImg}', '${pokeName}')"/> 
          <div class="poke-content">
            <div class="card-big" id="pokeCardBig${pokeId}">
              <div class="card-head">
                <div class='pokeName' id="${pokeName}">${pokeName}</div>
                <div class='pokeId' id="${pokeId}">#${pokeId}</div>
                <div>
                  </div>
                  <img src="./img/cross.png" alt="close image" class="close-img" id="closeimg"/>
                </div>
                <div class="card-content">
                <img class='pokeImg' src="${pokeImg}" alt="${pokeId}">
                <div class="pokeTypeContainer" id="type-big${pokeId}"></div>
              </div>
            </div>
          </div>
<img src="./img/next.png" alt="next image" class="img-load-arrows" onclick="loadNextImg(${pokeId}, '${pokeImg}', '${pokeName}')"/>
      </div>
      </div>
</div>`;

for (let j = 0; j < pokemons[pokeId]["types"].length; j++) {
      pokeType = pokemons[pokeId]["types"][j]["type"][`name`];
      document.getElementById(`type-big${pokeId}`).innerHTML += `<div class='pokeType'>${pokeType}</div>`;
      if (j == 0) {
        document.getElementById(`pokeCardBig${pokeId}`).classList.add(`box-shadow-${color}`);
      }
    }
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
  renderCardBig(i);
  event.stopPropagation();
}

function loadPrevImg(i) {
  if (i == 1) {
    i = maxPokemonRender - 1;
  } else {
    i--;
  }
  renderCardBig(i);
  event.stopPropagation();
}
