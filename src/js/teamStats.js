const awayFirstDownsDisplay = document.querySelector('.away-first-downs');
const homeFirstDownsDisplay = document.querySelector('.home-first-downs');
const awayTotalYdsDisplay = document.querySelector('.away-total-yards');
const homeTotalYdsDisplay = document.querySelector('.home-total-yards');
const awayPassingYdsDisplay = document.querySelector('.away-passing-yards');
const homePassingYdsDisplay = document.querySelector('.home-passing-yards');
const awayRushingYdsDisplay = document.querySelector('.away-rushing-yards');
const homeRushingYdsDisplay = document.querySelector('.home-rushing-yards');
const awayPenaltiesDisplay = document.querySelector('.away-penalties');
const homePenaltiesDisplay = document.querySelector('.home-penalties');
const awayTurnoversDisplay = document.querySelector('.away-turnovers');
const homeTurnoversDisplay = document.querySelector('.home-turnovers');

let awayFirstDowns = 0;
let homeFirstDowns = 0;
let awayPassingYards = 0;
let homePassingYards = 0;
let awayRushingYards = 0;
let homeRushingYards = 0;
let awayTotalYards = awayPassingYards + awayRushingYards;
let homeTotalYards = homePassingYards + homeRushingYards;
let awayPenNum = 0;
let awayPenYards = 0;
let homePenNum = 0;
let homePenYards = 0;
let awayTurnovers = 0;
let homeTurnovers = 0;

const appendTeamStats = function (el, stat) {
  el.textContent = `${stat}`;
};

const appendTwoNumTeamStat = function (el, stat1, stat2) {
  el.textContent = `${stat1}-${stat2}`;
};

appendTeamStats(awayFirstDownsDisplay, awayFirstDowns);
appendTeamStats(homeFirstDownsDisplay, homeFirstDowns);
appendTeamStats(awayTotalYdsDisplay, awayTotalYards);
appendTeamStats(homeTotalYdsDisplay, homeTotalYards);
appendTeamStats(awayPassingYdsDisplay, awayPassingYards);
appendTeamStats(homePassingYdsDisplay, homePassingYards);
appendTeamStats(awayRushingYdsDisplay, awayRushingYards);
appendTeamStats(homeRushingYdsDisplay, homeRushingYards);
appendTwoNumTeamStat(awayPenaltiesDisplay, awayPenNum, awayPenYards);
appendTwoNumTeamStat(homePenaltiesDisplay, homePenNum, homePenYards);
appendTeamStats(awayTurnoversDisplay, awayTurnovers);
appendTeamStats(homeTurnoversDisplay, homeTurnovers);
