function fetchData(){
   fetch("http://data.nba.net/10s/prod/v1/2020/players.json").then(response => {
       console.log(response);
   });
}

fetchData();

