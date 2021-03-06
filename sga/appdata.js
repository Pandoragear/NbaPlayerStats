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
      const ppg = profile.ppg;
      const rpg = profile.rpg;
      const apg = profile.apg;
      const mpg = profile.mpg;
      const assists = profile.assists;
      const blocks = profile.blocks;
      const steals = profile.steals;
      const turnovers = profile.turnovers;
      const point = profile.assists;
      const gamesPlayed = profile.gamesPlayed;

      document.querySelector("#ppg").innerHTML = `ppg: ${ppg}` ; 
      document.querySelector("#rpg").innerHTML = `rpg: ${rpg}` ; 
      document.querySelector("#apg").innerHTML = `apg: ${apg}` ; 
      document.querySelector("#mpg").innerHTML = `mpg: ${mpg}` ; 
      document.querySelector("#assists").innerHTML = `assists: ${assists}` ; 
      document.querySelector("#blocks").innerHTML = `blocks: ${blocks}` ; 
      document.querySelector("#steals").innerHTML = `steals: ${steals}` ; 
      document.querySelector("#turnovers").innerHTML = `turnovers: ${turnovers}` ; 
      document.querySelector("#point").innerHTML = `point: ${point}` ; 
      document.querySelector("#gamesPlayed").innerHTML = `gamesPlayed: ${gamesPlayed}` ; 

    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();