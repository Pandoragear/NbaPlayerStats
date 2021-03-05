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
      const html = data.league.standard.stats.latest.map(user =>{
          return `
          <div class ="user">
          <p> Name: ${user.firstName} ${user.lastName}</p>
          </div>

          `; 
      })
      .join("");
      console.log(html);
      document.querySelector("#stat").insertAdjacentHTML("afterbegin", html); 
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
