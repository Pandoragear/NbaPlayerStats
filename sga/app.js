// This fetch data on the player first & Last name

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
          return `
          <div class ="user">
          <p> Name: ${user.firstName} ${user.lastName}</p>
          <p> Position: ${user.pos}</p>
          <p> draft: ${user.draft.pickNum}</p>
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
