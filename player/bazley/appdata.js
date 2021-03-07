// This fetch data on pulling the player statistics

function fetchData() {
  fetch("http://data.nba.net/data/10s/prod/v1/2020/players/1629647_profile.json")
    .then((response) => {
      // will throw and error if cannot load page 
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.league.standard.stats.latest);

      // profile = where the data is point to inside the api 
      const profile = data.league.standard.stats.latest;

      // getting that specific data and assign it
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

      // place the api data onto hmtl 

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