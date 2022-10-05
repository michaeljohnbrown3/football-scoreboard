class TeamStats {
  constructor(team) {
    this.id = `${team}`;
    this.firstDowns = 0;
    this.totalPlays = 0;
    this.passingYards = 0;
    this.completions = 0;
    this.attempts = 0;
    this.rushingYards = 0;
    this.rushingAttempts = 0;
    this.penalties = 0;
    this.penaltyYards = 0;
    this.turnovers = 0;
    this.yardsPerPlay = 0;
    this.totalYards = 0;
    this.yardsPerPass = 0;
    this.yardsPerRush = 0;
  }

  calcTotalYards() {
    return this.passingYards + this.rushingYards;
  }

  calcTotalPlays() {
    return this.attempts + this.rushingAttempts;
  }

  calcAvg(yards, att) {
    return yards / att;
  }
}

export const teamStats = [];

export const appendTeamStats = function (el, team) {
  const teamStatObj = new TeamStats(team);
  el.innerHTML = `
  <tr>
    <th class="team-stats__cell" id="${team}-first-downs">${
    teamStatObj.firstDowns
  }</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-total-yards">${
    teamStatObj.totalYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-total-plays">${
    teamStatObj.totalPlays
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-play">${
    isNaN(teamStatObj.yardsPerPlay)
      ? '0.0'
      : Math.round(teamStatObj.yardsPerPlay * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-passing-yards">${
    teamStatObj.passingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-comp-att">${
    teamStatObj.completions
  }/${teamStatObj.attempts}</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-pass">${
    isNaN(teamStatObj.yardsPerPass)
      ? '0.0'
      : Math.round(teamStatObj.yardsPerPass * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-rushing-yards">${
    teamStatObj.rushingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-rushes">${
    teamStatObj.rushingAttempts
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-rush">${
    isNaN(teamStatObj.yardsPerRush)
      ? '0.0'
      : Math.round(teamStatObj.yardsPerRush * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-penalties">${
    teamStatObj.penalties
  }-${teamStatObj.penaltyYards}</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-turnovers">${
    teamStatObj.turnovers
  }</th>
  </tr>
  </div>
  `;

  teamStats.push(teamStatObj);
};

export const updateTeamStatDisplay = function (el, team, teamObj) {
  el.innerHTML = `
  <tr>
    <th class="team-stats__cell" id="${team}-first-downs">${
    teamObj.firstDowns
  }</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-total-yards">${
    teamObj.totalYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-total-plays">${
    teamObj.totalPlays
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-play">${
    isNaN(teamObj.yardsPerPlay)
      ? '0.0'
      : Math.round(teamObj.yardsPerPlay * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-passing-yards">${
    teamObj.passingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-comp-att">${teamObj.completions}/${
    teamObj.passingAttempts
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-pass">${
    isNaN(teamObj.yardsPerPass)
      ? '0.0'
      : Math.round(teamObj.yardsPerPass * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-rushing-yards">${
    teamObj.rushingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-rushes">${
    teamObj.rushingAttempts
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-rush">${
    isNaN(teamObj.yardsPerRush)
      ? '0.0'
      : Math.round(teamObj.yardsPerRush * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-penalties">${teamObj.penalties}-${
    teamObj.penaltyYards
  }</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-turnovers">${
    teamObj.turnovers
  }</th>
  </tr>
  </div>
  `;
};
