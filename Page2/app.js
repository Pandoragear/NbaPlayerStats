function fetchData(){
   fetch("http://data.nba.net/10s/prod/v1/2020/players.json").then(response => {
     return response.json()

   }).then(data => {
       console.log(data.league.standard);
   })
}

fetchData();

