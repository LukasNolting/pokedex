
function renderChart(i){

let pokestats = [];
let pokehp = pokemonAsJsonComp[i]["stats"][0]["base_stat"];
let pokeattack = pokemonAsJsonComp[i]["stats"][1]["base_stat"];
let pokedefense = pokemonAsJsonComp[i]["stats"][2]["base_stat"];
let pokespecialattack = pokemonAsJsonComp[i]["stats"][3]["base_stat"];
let pokespecialdefense = pokemonAsJsonComp[i]["stats"][4]["base_stat"];
let pokespeed = pokemonAsJsonComp[i]["stats"][5]["base_stat"];
pokestats.push(
  pokehp,
  pokeattack,
  pokedefense,
  pokespecialattack,
  pokespecialdefense,
  pokespeed
);
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
          pokemonAsJsonComp[`${i}`]["stats"][0]["base_stat"],
          pokemonAsJsonComp[`${i}`]["stats"][1]["base_stat"],
          pokemonAsJsonComp[`${i}`]["stats"][2]["base_stat"],
          pokemonAsJsonComp[`${i}`]["stats"][3]["base_stat"],
          pokemonAsJsonComp[`${i}`]["stats"][4]["base_stat"],
          pokemonAsJsonComp[`${i}`]["stats"][5]["base_stat"],
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
        position: "average", // Setzen Sie die Tooltip-Position auf "average"
        caretPadding: 10, // Ändern Sie den Abstand zwischen der Bar und dem Tooltip
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