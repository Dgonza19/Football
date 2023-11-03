"use strict";

window.onload = function () {
  const teamList = document.getElementById('teamList');
  const teamBtn = document.getElementById('teamBtn');
  const message = document.getElementById('message');

  initTeamsDropDown();
}

  teamBtn.onclick = function () {
      const selectedTeam = teamList.value; // Get the selected team code
      const teamName = getTeamName(selectedTeam); // Get the team name based on the code
      message.textContent = `You selected the ${teamName}.`; // Display a message with the selected team name
  };

function initTeamsDropDown() {
    const teams = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
    ];

    for (let i = 0; i < teams.length; i++) {
        let theOption = new Option(teams[i].name, teams[i].code);
        teamList.appendChild(theOption);
    }
}

function getTeamName(teamCode) {
  const teams = [
      { code: "DAL", name: "Dallas Cowboys" },
      { code: "DEN", name: "Denver Broncos" },
      { code: "HOU", name: "Houston Texans" },
      { code: "KAN", name: "Kansas City Chiefs" },
  ];

  for (let i = 0; i < teams.length; i++) {
      if (teams[i].code === teamCode) {
          return teams[i].name;
      }
  }
  return "Unknown Team";
}

