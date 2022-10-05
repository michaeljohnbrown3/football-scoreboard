export class Team {
  constructor(teamId) {
    this.id = teamId;
    this.q1Score = 0;
    this.q2Score = 0;
    this.q3Score = 0;
    this.q4Score = 0;
    this.q5Score = 0;
    this.totalScore = 0;
    this.firstDowns = 0;
    this.totalYards = 0;
    this.totalPlays = 0;
    this.yardsPerPlay = 0;
    this.passingYards = 0;
    this.completions = 0;
    this.passingAttempts = 0;
    this.yardsPerPass = 0;
    this.rushingYards = 0;
    this.rushingAttempts = 0;
    this.yardsPerRush = 0;
    this.penalties = 0;
    this.penaltyYards = 0;
    this.turnovers = 0;
  }

  scoreSum() {
    return (
      this.q1Score + this.q2Score + this.q3Score + this.q4Score + this.q5Score
    );
  }

  perPlayCalc(yards, attempts) {
    return Math.round((yards / attempts) * 10) / 10;
  }
}

export const updateTeamStats = function (teamsArr, playsArr) {
  teamsArr.forEach(team => {
    team.completions = 0;
    team.firstDowns = 0;
    team.passingAttempts = 0;
    team.passingYards = 0;
    team.penalties = 0;
    team.penaltyYards = 0;
    team.q1Score = 0;
    team.q2Score = 0;
    team.q3Score = 0;
    team.q4Score = 0;
    team.q5Score = 0;
    team.rushingAttempts = 0;
    team.rushingYards = 0;
    team.totalPlays = 0;
    team.totalScore = 0;
    team.totalYards = 0;
    team.turnovers = 0;
    team.yardsPerPass = 0;
    team.yardsPerPlay = 0;
    team.yardsPerRush = 0;

    playsArr.forEach(play => {
      if (team.id === play.team) {
        team.completions += play.complete;
        team.firstDowns += play.passingFirstDown + play.rushingFirstDown;
        team.passingAttempts += play.complete + play.incomplete;
        team.passingYards += play.passingYards;
        team.penalties += 0;
        team.penaltyYards += 0;
        team.q1Score += play.q1Score;
        team.q2Score += play.q2Score;
        team.q3Score += play.q3Score;
        team.q4Score += play.q4Score;
        team.q5Score += play.q5Score;
        team.rushingAttempts += play.rushingAttempt;
        team.rushingYards += play.rushingYards;
        team.totalPlays +=
          play.complete + play.incomplete + play.rushingAttempt;
        team.totalScore =
          team.q1Score +
          team.q2Score +
          team.q3Score +
          team.q4Score +
          team.q5Score;
        team.totalYards += play.passingYards + play.rushingYards;
        team.turnovers +=
          play.interception + play.passingFumbleLost + play.rushingFumbleLost;
        team.yardsPerPass = team.passingYards / team.passingAttempts;
        team.yardsPerPlay = team.totalYards / team.totalPlays;
        team.yardsPerRush = team.rushingYards / team.rushingAttempts;
      }
    });
  });
};
