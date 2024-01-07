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
  document.getElementById("big-Card").classList.remove("d-none");
  return /*html*/ `
  
  <div id="container-big-background" class="big-background" onclick="closeBigCard()"></div>
  
  <div class="full-card">
  <img
    src="./img/prev.png"
    alt="previous"
    class="poke-load-arrows"
    onclick="loadPrevPokemon(${i})"
  />
  <!-- <div id="container-big" class="big-center"> -->
    <div id="pokeCardBig" class="show-big">
  <div class="card text-center" id="pokeCardBigColor${i}">

  <div class="close-big-card-cross">
    <img src="../img/cross.png" class="close-big-card-cross-img" onclick="closeBigCard()"></div>
    <div class="card-body">
      <div class="flex-sb">
        <h5 class="card-title" id="name-big${pokeName}">${pokeName}</h5>
        <div class="pokeIdBig" id="id-big${pokeId}"><img src="../img/pokeball.png" class="icon-big-card">#${pokeId}</div>
      </div>
      <div class="card-content">
        <img class="pokeImg-big" src="${pokeImg}" alt="${pokeId}" />
        <div class="pokeTypeContainerBig">${pokeType}</div>
      </div>
      <div>      
      <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" onclick="renderOverview(${i})" id="about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="renderStats(${i})" id="stats">Stats</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="renderMoves(${i})" id="moves">Moves</a>
      </li>
    </ul>
  </div>
      <div id="card-overview${i}">
        
      </div>
      <!-- </div> -->

    </div>
  </div>
</div>

</div>

<img
  src="./img/next.png"
  alt="next image"
  class="poke-load-arrows"
  onclick="loadNextPokemon(${i})"
  
/>


</div>`;
}

function cardPokeTypesBig(pokeTypes) {
  return /*html*/ `<div class='pokeType-big'>${pokeTypes}</div>`;
}
