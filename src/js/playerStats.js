/*
const awayTotalCompletions = document.querySelector('.away-total-completions');
const awayTotalPassYards = document.querySelector('.away-total-pass-yards');
const awayTotalPassAverage = document.querySelector('.away-total-pass-average');
const awayTotalPassTouchdowns = document.querySelector(
  '.away-total-pass-touchdowns'
);
const awayTotalPassLong = document.querySelector('.away-total-pass-long');

const qb1 = [20, 33, 260, 2, 0];
const rb1 = [16, 49, 0, 8];
const rb2 = [8, 31, 0, 23];
const rb3 = [2, 20, 0, 16];
const rb4 = [6, 15, 0, 7];
const rb5 = [1, 1, 1, 1];
const wr1 = [7, 102, 2, 39];
const wr2 = [3, 60, 0, 24];
const wr3 = [3, 45, 0, 25];
const kr1 = [2, 45, 0, 24];
const pr1 = [1, 0, 0, 0];
const k1 = [1, 2, 25, 3, 3];

const awayPassTotal = [qb1[0], qb1[1], qb1[2], qb1[3], qb1[4]];

const averageYrds = function (att, yrds) {
  return Math.round((yrds / att) * 100 * 10) / 10;
};

const awayRushTotal = [
  rb1[0] + rb2[0] + rb3[0] + rb4[0] + rb5[0],
  rb1[1] + rb2[1] + rb3[1] + rb4[1] + rb5[1],
  rb1[2] + rb2[2] + rb3[2] + rb4[2] + rb5[2],
  rb1[3] + rb2[3] + rb3[3] + rb4[3] + rb5[3],
];
const awayRecTotal = [
  wr1[0] + wr2[0] + wr3[0],
  wr1[1] + wr2[1] + wr3[1],
  wr1[2] + wr2[2] + wr3[2],
  wr1[3] + wr2[3] + wr3[3],
];
const awayKrTotal = [kr1[0], kr1[1], kr1[2], kr1[3], kr1[4]];
console.log(awayRushTotal);

const appendStat = function (el, stat) {
  el.textContent = `${stat}`;
};

const appendTwoNumStat = function (el, stat1, stat2) {
  el.textContent = `${stat1}/${stat2}`;
};

*/

// appendTwoNumStat(awayTotalCompletions, qb1[0], qb1[1]);
// appendStat(awayTotalPassYards, qb1[2]);
// appendStat(awayTotalPassAverage, averageYrds(qb1[2], qb1[1]));
// appendStat(awayTotalPassTouchdowns, qb1[3]);
// appendStat(awayTotalPassLong, qb1[4]);
// document.querySelector('.game-btn__revert').addEventListener('click', );

class Quarterback {
  constructor(name, comp, incomp, yards) {
    this.name = name;
    this.comp = comp;
    this.incomp = incomp;
    this.att = comp + incomp;
    this.yards = yards;
  }
}

const jt = new Quarterback('Jordan Travis', 22, 12, 262);
// console.log(jt);
jt.comp = 23;
jt.yards = 277;
// console.log(jt);

// console.log(new Quarterback('Tate Rodemaker', 2, 5, 33));

// Submit

// if quarterback exists, amend stats to quarterback object
// if quarterback does not exist, create quarterback object, save to variable

// PassPlay class
// collects passer, receiver, yards, complete, incomplete, firstDown, touchdown, interception, fumble, twoPoints, safety
// stores play data in an array, loop through plays to identify if player exists
// also creates an array of players
// deleting play updates both arrays and adjusts the display
