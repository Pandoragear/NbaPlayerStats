// This fetch data on pulling the player statistics

function fetchData() {
  fetch("http://data.nba.net/data/10s/prod/v1/2020/players/1628983_profile.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.league.standard.stats.latest);
      const profile = data.league.standard.stats.latest;
      const html = profile.ppg;
      const next = profile.rpg;

      document.querySelector("#stat").innerHTML = `apg: ${html}` ; 
      document.querySelector("#stats").innerHTML = `rpg: ${next}` ; 

    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
