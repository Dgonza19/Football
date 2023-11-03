"use strict";

const teamsList = document.getElementById("teamSelect")

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  const teamBtn = document.getElementById("teamBtn");
  teamBtn.onclick = teamBtnClicked;
  initTeamsDropDown();
}

function teamBtnClicked() {
  // do something with the selected value 
  const footballP = document.getElementById("pMessage");

  if(teamsList.value == null) {
    teamsList.textContent == "Please select a team!"
  }
  else{
    let teamCode = teamsList.value;
    let selectedTeam;
    for(let team of teams){
      if(team.code == teamCode){selectedTeam = team;
      break;
    }
    }
    let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who plays in ${selectedTeam.plays}.`;
    footballP.textContent = message;
  }


  
  console.log();
}

function initTeamsDropDown() {
  



  let length = teams.length;
  for (let i = 0; i < teams.length; i++) {

    let theOption = new Option(teams[i].name, teams[i].code)

    teamsList.appendChild(theOption);
  }
}



















