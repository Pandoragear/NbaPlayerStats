function fetchData() {
  fetch("http://data.nba.net/10s/prod/v1/2020/players.json/jkl;jasdf")
    .then((response) => {
        console.log(response);
        if (!response.ok) {
            throw Error("Error");
        }
      return response.json();
    })
    .then((data) => {
      console.log(data.league.standard);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
