// Render small Cards onload

function renderPokemonSmallCard(pokeId, pokeName, pokeType, pokeImg, i) {
  return /*html*/ `<div class="card-small" id="pokeCard${i}" onclick="renderPokemonBig(${i})">
        <div class="card-head">
            <div class='pokeName' id="nameSmall${pokeName}">${pokeName}</div>
            <div class='pokeId' id="idSmall${pokeId}">#${pokeId}</div>
        </div>
        <div class="card-content-small">
            <div class="pokeTypeContainer">${pokeType}</div>
            <img class='pokeImg' src="${pokeImg}" alt="${pokeName}">
        </div>
    </div>`;
}

// Render Types / Classes on small Cards

function cardPokeTypesSmall(pokeType) {
  return /*html*/ `<div class='pokeType'>${pokeType}</div>`;
}

// Render big Cards onclick

function renderPokemonBigCard(pokeId, pokeImg, pokeName, pokeType, i) {
  document.getElementById("container-big").classList.remove("d-none");
  return /*html*/ `<div id="pokeCardBig" class="show-big">
  <img
    src="./img/prev.png"
    alt="previous"
    class="img-load-arrows"
    onclick="loadPrevPokemon(${i})"
  />
  <div class="card text-center" id="pokeCardBigColor${i}">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" onclick="loadOverview()">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onclick="loadStats()">Stats</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onclick="loadAbilities()">Moves</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="flex-sb">
        <h5 class="card-title" id="name-big${pokeName}">${pokeName}</h5>
        <div class="pokeIdBig" id="id-big${pokeId}">#${pokeId}</div>
      </div>
      <div class="card-content">
        <img class="pokeImg-big" src="${pokeImg}" alt="${pokeId}" />
        <div class="pokeTypeContainerBig">${pokeType}</div>
      </div>
      <div id="card-overview">
        
      </div>
    </div>
  </div>
  <img
    src="./img/next.png"
    alt="next image"
    class="img-load-arrows"
    onclick="loadNextPokemon(${i})"
  />
</div>
`;
}

function cardPokeTypesBig(pokeTypes) {
  return /*html*/ `<div class='pokeType-big'>${pokeTypes}</div>`;
}
