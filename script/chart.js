function renderChart(i) {
  let pokemonIndex = fetchPokemons["id"].indexOf(i);
  let card = document.getElementById(`card-overview${i}`);
  card.innerHTML = "";
  card.innerHTML = `<div class="card-overview"><canvas id="myChart" class="chart"></canvas></div>`;
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    label: "Base Stats",
    data: {
      labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
      datasets: [
        {
          data: [
            fetchPokemons["stats"][pokemonIndex][0]["base_stat"],
            fetchPokemons["stats"][pokemonIndex][1]["base_stat"],
            fetchPokemons["stats"][pokemonIndex][2]["base_stat"],
            fetchPokemons["stats"][pokemonIndex][3]["base_stat"],
            fetchPokemons["stats"][pokemonIndex][4]["base_stat"],
            fetchPokemons["stats"][pokemonIndex][5]["base_stat"],
          ],

          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.9)",
            "rgba(255, 159, 64, 0.9)",
            "rgba(255, 205, 86, 0.9)",
            "rgba(95, 192, 192, 0.9)",
            "rgba(54, 162, 235, 0.9)",
            "rgba(153, 102, 255, 0.9)",
            "rgba(201, 203, 207, 0.9)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          position: "average",
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.formattedValue;
            },
            title: function (tooltipItems, data) {
              return null;
            },
          },
          displayColors: false,
          labels: {
            color: "white",
          },
          position: "average",
          caretPadding: 10,
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          ticks: {
            color: "white",
          },
          max: 120,
          grid: {
            display: false,
          },
        },
      },
    },
  });

  document.getElementById("moves").classList.remove("active");
  document.getElementById("about").classList.remove("active");
  document.getElementById("stats").classList.add("active");
  event.stopPropagation();
}
