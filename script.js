const auctionData = {
  emerald: {
    name: "Deepslate Emerald Ore",
    prices: [650, 720, 810, 860, 890]
  },
  music: {
    name: "Creator Music Box",
    prices: [900, 1050, 1150, 1200]
  },
  reinforced: {
    name: "Reinforced Deepslate",
    prices: [6000, 7200, 8500, 9000]
  },
  head: {
    name: "Player Head",
    prices: [12000, 15000, 18000, 20000]
  }
};

let chart;

function showItem(key) {
  const item = auctionData[key];
  document.getElementById("itemTitle").innerText = item.name;

  const ctx = document.getElementById("priceChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: item.prices.map((_, i) => `Auction ${i + 1}`),
      datasets: [{
        label: "Price ($)",
        data: item.prices,
        borderColor: "#4cff4c",
        backgroundColor: "rgba(76,255,76,0.1)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            color: "white"
          }
        },
        x: {
          ticks: {
            color: "white"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "white"
          }
        }
      }
    }
  });
}