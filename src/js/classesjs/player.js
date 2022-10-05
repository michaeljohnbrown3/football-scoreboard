import { v4 as uuid } from 'uuid';

export class Player {
  constructor(name, number, team) {
    this.name = name;
    this.number = number * 1;
    this.playerId = uuid();
    this.passingYards = 0;
    this.rushingYards = 0;
    this.receivingYards = 0;
    this.completions = 0;
    this.incompletions = 0;
    this.passAttempts = 0;
    this.rushingAttempts = 0;
    this.targets = 0;
    this.receptions = 0;
    this.longestPass = 0;
    this.longestRush = 0;
    this.longestReception = 0;
    this.passingTouchdowns = 0;
    this.rushingTouchdowns = 0;
    this.receivingTouchdowns = 0;
    this.interceptions = 0;
    this.yardsPerPass = 0;
    this.yardsPerRush = 0;
    this.yardsPerReception = 0;
    this.teamId = team;
    this.plays = [];
  }
}

export const updatePlayerStats = function (playersArr, playsArr) {
  const updatePassingStats = function () {
    playersArr.forEach(player => {
      player.completions = 0;
      player.incompletions = 0;
      player.passAttempts = 0;
      player.passingYards = 0;
      player.longestPass = 'tbd';
      player.passingTouchdowns = 0;
      player.interceptions = 0;
      player.yardsPerPass = 0;
      playsArr.forEach(play => {
        if (player.playerId === play.passerId) {
          player.completions += play.complete;
          player.incompletions += play.incomplete;
          player.passAttempts += play.complete + play.incomplete;
          player.passingYards += play.passingYards;
          player.longestPass = 'tbd';
          player.passingTouchdowns += play.passingTouchdown;
          player.interceptions += play.interception;
          player.yardsPerPass =
            Math.round((player.passingYards / player.passAttempts) * 10) / 10;
        }
      });
    });
  };

  const updateReceivingStats = function () {
    playersArr.forEach(player => {
      player.receptions = 0;
      player.targets = 0;
      player.receivingYards = 0;
      player.longestReception = 'tbd';
      player.receivingTouchdowns = 0;
      player.yardsPerReception = 0;
      playsArr.forEach(play => {
        if (player.playerId === play.receiverId) {
          player.receptions += play.complete;
          player.targets += play.complete + play.incomplete;
          player.receivingYards += play.passingYards;
          player.longestReception = 'tbd';
          player.receivingTouchdowns += play.passingTouchdown;
          player.yardsPerReception = isNaN(
            player.receivingYards / player.receptions
          )
            ? 0
            : Math.round((player.receivingYards / player.receptions) * 10) / 10;
        }
      });
    });
  };

  const updateRushingStats = function () {
    playersArr.forEach(player => {
      player.rushingYards = 0;
      player.rushingAttempts = 0;
      player.longestRush = 'tbd';
      player.rushingTouchdowns = 0;
      player.yardsPerRush = 0;
      playsArr.forEach(play => {
        if (player.playerId === play.rusherId) {
          player.rushingYards += play.rushingYards;
          player.rushingAttempts += play.rushingAttempt;
          player.longestRush = 'tbd';
          player.rushingTouchdowns += play.rushingTouchdown;
          player.yardsPerRush =
            Math.round((player.rushingYards / player.rushingAttempts) * 10) /
            10;
        }
      });
    });
  };

  updatePassingStats();
  updateReceivingStats();
  updateRushingStats();
};
