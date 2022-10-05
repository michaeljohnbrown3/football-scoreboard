export class Play {
  constructor(
    playId,
    playType,
    quarter,
    passName,
    recName,
    rushName,
    passYards,
    rushYards,
    comp,
    inc,
    passTd,
    rushTd,
    passFirstDown,
    rushFirstDown,
    passFumbleLost,
    rushFumbleLost,
    passSafety,
    rushSafety,
    int,
    teamId,
    passerId,
    receiverId,
    rusherId,
    rushes,
    q1Score,
    q2Score,
    q3Score,
    q4Score,
    q5Score
  ) {
    this.playId = playId;
    this.playType = playType;
    this.quarter = quarter;
    this.passer = passName;
    this.receiver = recName;
    this.rusher = rushName;
    this.passingYards = passYards * 1;
    this.rushingYards = rushYards * 1;
    this.complete = comp;
    this.incomplete = inc;
    this.passingTouchdown = passTd;
    this.rushingTouchdown = rushTd;
    this.passingFirstDown = passFirstDown;
    this.rushingFirstDown = rushFirstDown;
    this.passingFumbleLost = passFumbleLost;
    this.rushingFumbleLost = rushFumbleLost;
    this.passingSafety = passSafety;
    this.rushingSafety = rushSafety;
    this.interception = int;
    this.team = teamId;
    this.passerId = passerId;
    this.receiverId = receiverId;
    this.rusherId = rusherId;
    this.rushingAttempt = rushes;
    this.q1Score = q1Score;
    this.q2Score = q2Score;
    this.q3Score = q3Score;
    this.q4Score = q4Score;
    this.q5Score = q5Score;
  }
}
