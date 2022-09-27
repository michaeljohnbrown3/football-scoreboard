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
