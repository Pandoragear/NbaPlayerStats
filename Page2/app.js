function fetchData() {
  fetch("http://data.nba.net/10s/prod/v1/2020/players.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.league.standard);
      const html = data.league.standard.map(user =>{
          return `<p> Name: ${user.firstName} </p>` 
      })
      console.log(html);
      document.querySelector("#stat").insertAdjacentHTML("afterbegin", "<h1>test </h1>"); 
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
