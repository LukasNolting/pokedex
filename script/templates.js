// Render small Cards onload

function cardPokemonSmall(pokeName, pokeId, i, pokeImg) {
  return /*html*/ `<div class="card-small" id="pokeCard${pokeId}" onclick="renderPokemonBig(${pokeId})">
        <div class="card-head">
            <div class='pokeName' id="${pokeName}">${pokeName}</div>
            <div class='pokeId' id="${pokeId}">#${pokeId}</div>
        </div>
        <div class="card-content-small">
            <div class="pokeTypeContainer" id="type${i}"></div>
            <img class='pokeImg' src="${pokeImg}" alt="${pokeName}">
        </div>
    </div>`;
}

// Render Types / Classes on small Cards

function cardPokeTypesSmall(pokeType){
    return /*html*/ `<div class='pokeType'>${pokeType}</div>`;
}

// Render big Cards onclick

function cardPokemonBig(pokeId, pokeImg, pokeName) {
  return /*html*/ `<div id="img-click-close" class="img-click">
<img src="./img/prev.png" alt="previous" class="img-load-arrows" onclick="loadPrevPokemon(${pokeId}, '${pokeImg}', '${pokeName}')"/>  
      
<div class="card text-center" id="pokeCardBig${pokeId}">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" onclick="loadOverview()">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onclick="loadStats()">Stats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onclick="loadAbilities()">Abilities</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
            <div class="flex-sb">
          <h5 class="card-title" id="${pokeName}">Name: ${pokeName}</h5>
          <div class='pokeId' id="${pokeId}">#${pokeId}</div>
          </div>
                <div class="card-content">
                    <img class=pokeImg-big src="${pokeImg}" alt="${pokeId}">
                    <div class="pokeTypeContainer-big" id="type-big${pokeId}"></div>
                </div>
        </div>
    </div>
    <img src="./img/next.png" alt="next image" class="img-load-arrows" onclick="loadNextPokemon(${pokeId}, '${pokeImg}', '${pokeName}')"/>
      </div>
</div>
</div>`;
}

function loadOverview(){

}

// Render Types / Classes on big Cards

function cardPokeTypesBig(pokeType) {
  return /*html*/ `<div class='pokeType-big'>${pokeType}</div>`;
}