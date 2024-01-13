// Render Small Cards onload

function renderPokemonSmallCard(pokeId, pokeName, pokeType, pokeImg) {
  return /*html*/ `<div class="card-small" id="pokeCard${pokeId}" onclick="renderPokemonBig(${pokeId})">
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

// Render Types on Small Cards

function cardPokeTypesSmall(pokeTypeElement, i, j) {
  return /*html*/ `<div class='pokeType box-shadow-${pokeTypeElement}' id='color-type-big${i}${j}'>${pokeTypeElement}</div>`;
}

// Render Big Cards onclick

function renderPokemonBigCard(pokeId, pokeImg, pokeName, pokeType, i) {
  document.getElementById("big-Card").classList.remove("d-none");
  return /*html*/ `<div
  id="container-big-background"
  class="big-background"
  onclick="closeBigCard()"
></div>
<div class="show-big" id="pokeCardBig">
  <img
    src="./img/prev.png"
    alt="previous"
    class="poke-load-arrows"
    onclick="loadPrevPokemon(${pokeId})"
  />
  <div id="container-big" class="full-card">
    <div class="card text-center" id="pokeCardBigColor${i}">
      <div class="close-big-card-cross">
        <img
          src="../img/cross.png"
          class="close-big-card-cross-img"
          onclick="closeBigCard()"
        />
      </div>
      <div class="card-body">
        <div class="flex-sb">
          <h5 class="card-title" id="name-big${pokeName}">${pokeName}</h5>
          <div class="pokeIdBig" id="id-big${pokeId}">
            <img src="../img/pokeball.png" class="icon-big-card" />#${pokeId}
          </div>
        </div>
        <div class="card-content">
          <img class="pokeImg-big" src="${pokeImg}" alt="${pokeId}" />
          <div class="pokeTypeContainerBig">${pokeType}</div>
        </div>
        <div class="card-content-bottom">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onclick="renderOverview(${i})"
                  id="about"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" onclick="renderStats(${i})" id="stats"
                  >Stats</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" onclick="renderMoves(${i})" id="moves"
                  >Moves</a
                >
              </li>
            </ul>
          </div>
          <div id="card-overview${i}"></div>
        </div>
      </div>
    </div>
  </div>
  <img
    src="./img/next.png"
    alt="next image"
    class="poke-load-arrows"
    onclick="loadNextPokemon(${pokeId})"
  />
</div>`;
}

// Render Types / Classes on Big Cards

function cardPokeTypesBig(pokeTypeElement, i, j) {
  return /*html*/ `<div class='pokeType-big box-shadow-${pokeTypeElement}' id='color-type-big${i}${j}'>${pokeTypeElement}</div>`;
}

// Render Tabs on Big Card

function renderOverviewTab(height, weight, ability) {
  return /*html*/ `
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
}

function renderOverviewAbilities(pokeAbilities) {
  return /*html*/ `
    <div class="abilities-ow"> ${pokeAbilities}</div>
    `;
}

function searchCardSmall(pokeId, pokeType, pokeImg, name) {
  return /*html*/ `<div
  class="card-small"
  id="pokeCardSearch${pokeId}"
  onclick="renderPokemonBig(${pokeId})">
  <div class="card-head">
    <div class="pokeName" id="nameSmall${name}">${name}</div>
    <div class="pokeId" id="idSmall${pokeId}">#${pokeId}</div>
  </div>
  <div class="card-content-small">
    <div class="pokeTypeContainer">${pokeType}</div>
    <img class="pokeImg" src="${pokeImg}" alt="${name}" />
  </div>
</div>`;
}
