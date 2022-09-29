/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/boxScore.js":
/*!****************************!*\
  !*** ./src/js/boxScore.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxScoreContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxScoreContainer */ "./src/js/boxScoreContainer.js");

/*
const awayFirst = document.querySelector('.away-first');
const awaySecond = document.querySelector('.away-second');
const awayThird = document.querySelector('.away-third');
const awayFourth = document.querySelector('.away-fourth');
const awayScoreDisplay = document.querySelector('.header__away--score');

const homeFirst = document.querySelector('.home-first');
const homeSecond = document.querySelector('.home-second');
const homeThird = document.querySelector('.home-third');
const homeFourth = document.querySelector('.home-fourth');
const homeScoreDisplay = document.querySelector('.header__home--score');
*/

var otHeader = document.querySelector('.ot-header');
var quarterDisplay = document.querySelector('.header__quarter');
var quarterAdvanceBtn = document.querySelector('.game-btn__quarter');
var quarters = ['1st', '2nd', '3rd', '4th', '0T', 'FINAL'];
/*
let awayBoxScore = [0, 0, 0, 0, 0];
let homeBoxScore = [0, 0, 0, 0, 0];
let awayScore;
let homeScore;

awayScore = awayBoxScore.reduce((prev, cur) => prev + cur, 0);
homeScore = homeBoxScore.reduce((prev, cur) => prev + cur, 0);

const appendScore = function (score, el) {
  el.textContent = `${score}`;
};
*/
// appendScore(awayBoxScore[0], awayFirst);
// appendScore(awayBoxScore[1], awaySecond);
// appendScore(awayBoxScore[2], awayThird);
// appendScore(awayBoxScore[3], awayFourth);
// appendScore(awayBoxScore[4], awayOT);
// appendScore(awayScore, awayScoreDisplay);
// appendScore(homeBoxScore[0], homeFirst);
// appendScore(homeBoxScore[1], homeSecond);
// appendScore(homeBoxScore[2], homeThird);
// appendScore(homeBoxScore[3], homeFourth);
// appendScore(homeBoxScore[4], homeOT);
// appendScore(homeScore, homeScoreDisplay);

var awayScore;
var homeScore;
var quarterIndex = 1;

function advanceQuarter() {
  var awayOT = document.querySelector('.away-ot');
  var homeOT = document.querySelector('.home-ot');
  awayScore = _boxScoreContainer__WEBPACK_IMPORTED_MODULE_0__.boxScoresArr[0].calcScore();
  homeScore = _boxScoreContainer__WEBPACK_IMPORTED_MODULE_0__.boxScoresArr[1].calcScore();

  function displayOvertime(el) {
    el.removeAttribute('class', 'hidden');
    el.setAttribute('class', 'box-score__cell');
  }

  if (quarterIndex === 4 && homeScore !== awayScore) {
    quarterDisplay.textContent = quarters[5];
  } else {
    quarterDisplay.textContent = quarters[quarterIndex++];
  }

  if (quarterIndex === 6) {
    quarterAdvanceBtn.removeEventListener('click', advanceQuarter);
  }

  if (quarterIndex === 5 && homeScore === awayScore) {
    displayOvertime(otHeader);
    displayOvertime(awayOT);
    displayOvertime(homeOT);
  }

  quarterDisplay.dataset.quarter = "q".concat(quarterIndex);
  console.log(quarterIndex);
}

quarterAdvanceBtn.addEventListener('click', advanceQuarter);

/***/ }),

/***/ "./src/js/boxScoreContainer.js":
/*!*************************************!*\
  !*** ./src/js/boxScoreContainer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendBoxScore": () => (/* binding */ appendBoxScore),
/* harmony export */   "boxScoresArr": () => (/* binding */ boxScoresArr)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BoxScore = /*#__PURE__*/function () {
  function BoxScore(team) {
    _classCallCheck(this, BoxScore);

    this.id = "".concat(team);
    this.q1 = 0;
    this.q2 = 0;
    this.q3 = 0;
    this.q4 = 0;
    this.q5 = 0;
  }

  _createClass(BoxScore, [{
    key: "calcScore",
    value: function calcScore() {
      return this.q1 + this.q2 + this.q3 + this.q4 + this.q5;
    }
  }]);

  return BoxScore;
}();

var boxScoresArr = [];
var appendBoxScore = function appendBoxScore(el, adv, team) {
  var newBoxScoreObj = new BoxScore(team);
  el.innerHTML = "\n  <th class=\"box-score__cell ".concat(adv, "-name\" id=\"").concat(team, "-box-logo\"></th>\n  <th class=\"box-score__cell ").concat(adv, "-first\" id=\"").concat(team, "-q1\">").concat(newBoxScoreObj.q1, "</th>\n  <th class=\"box-score__cell ").concat(adv, "-second\" id=\"").concat(team, "-q2\">").concat(newBoxScoreObj.q2, "</th>\n  <th class=\"box-score__cell ").concat(adv, "-third\" id=\"").concat(team, "-q3\">").concat(newBoxScoreObj.q3, "</th>\n  <th class=\"box-score__cell ").concat(adv, "-fourth\" id=\"").concat(team, "-q4\">").concat(newBoxScoreObj.q4, "</th>\n  <th class=\"box-score__cell ").concat(adv, "-ot hidden\" id=\"").concat(team, "-q5\">").concat(newBoxScoreObj.q5, "</th>\n  ");
  boxScoresArr.push(newBoxScoreObj);
};

/***/ }),

/***/ "./src/js/inputMarkupjs/passPlayMarkup.js":
/*!************************************************!*\
  !*** ./src/js/inputMarkupjs/passPlayMarkup.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passPlayMarkup": () => (/* binding */ passPlayMarkup)
/* harmony export */ });
var passPlayMarkup = function passPlayMarkup(el, adv) {
  el.innerHTML = "\n  <form class=\"play-input__pass\">\n    <h2 class=\"play-input__pass--title\">Passing Play</h2>\n    <div class=\"play-input__container\">\n      <div class=\"play-input__logo-container\">\n        <img src=\"img/fsu.png\" alt=\"logo\" class=\"play-input__logo\">\n      </div>\n      <div class=\"play-input__type-inputs\">\n        <label for=\"passer\">Passer</label>\n        <input type=\"text\" id=\"passer-".concat(adv, "\" class=\"play-input__pass--passer\" placeholder=\"Passer\" required>\n        <label for=\"receiver\">Receiver</label>\n        <input type=\"text\" id=\"receiver-").concat(adv, "\" class=\"play-input__pass--receiver\" placeholder=\"Receiver\">\n        <label for=\"yards\">Yards</label>\n        <input type=\"number\" id=\"yards-").concat(adv, "\" class=\"play-input__pass--yards\" placeholder=\"Yards\">\n      </div>\n      <div class=\"play-input__click-inputs\">\n        <div>\n          <input type=\"radio\" id=\"complete-").concat(adv, "\" name=\"completion\" class=\"play-input__pass--completion\">\n          <label for=\"complete\">Complete</label>\n        </div>\n        <div>\n          <input type=\"radio\" id=\"incomplete-").concat(adv, "\" name=\"completion\" class=\"play-input__pass--completion\">\n          <label for=\"incomplete\">Incomplete</label>\n        </div>\n        <h3>Results</h3>\n        <div>\n          <input type=\"checkbox\" id=\"first-down-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"first-down\">First Down</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" id=\"touchdown-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"touchdown\">Touchdown</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" id=\"interception-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"interception\">Interception</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" id=\"fumble-lost-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"fumble-lost\">Fumble Lost</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" id=\"two-points-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"two-points\">2pt Conversion Successful</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" id=\"safety-").concat(adv, "\" class=\"play-input__pass--results\">\n          <label for=\"safety\">Safety</label>\n        </div>\n      </div>\n      <button class=\"play-input__submit\">Submit</button>\n    </div>\n  </form>\n  ");
};

/***/ }),

/***/ "./src/js/playerStats.js":
/*!*******************************!*\
  !*** ./src/js/playerStats.js ***!
  \*******************************/
/***/ (() => {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Quarterback = /*#__PURE__*/_createClass(function Quarterback(name, comp, incomp, yards) {
  _classCallCheck(this, Quarterback);

  this.name = name;
  this.comp = comp;
  this.incomp = incomp;
  this.att = comp + incomp;
  this.yards = yards;
});

var jt = new Quarterback('Jordan Travis', 22, 12, 262); // console.log(jt);

jt.comp = 23;
jt.yards = 277; // console.log(jt);
// console.log(new Quarterback('Tate Rodemaker', 2, 5, 33));
// Submit
// if quarterback exists, amend stats to quarterback object
// if quarterback does not exist, create quarterback object, save to variable
// PassPlay class
// collects passer, receiver, yards, complete, incomplete, firstDown, touchdown, interception, fumble, twoPoints, safety
// stores play data in an array, loop through plays to identify if player exists
// also creates an array of players
// deleting play updates both arrays and adjusts the display

/***/ }),

/***/ "./src/js/playerStatsContainer.js":
/*!****************************************!*\
  !*** ./src/js/playerStatsContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendStatSheet": () => (/* binding */ appendStatSheet)
/* harmony export */ });
var appendStatSheet = function appendStatSheet(el, adv, team) {
  el.innerHTML = "\n  <div class=\"".concat(adv, "-stats__passing\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Passing</h2>\n          <table class=\"").concat(adv, "-stats__table\" id=\"").concat(team, "-passers\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">C/ATT</th>\n              <th class=\"stat-line-header\">YDS</th>\n              <th class=\"stat-line-header\">AVG</th>\n              <th class=\"stat-line-header\">TD</th>\n              <th class=\"stat-line-header\">INT</th>\n            </tr>\n            <tr class=\"stat-line\"></tr>\n            <tr class=\"stat-line__total\" id=\"").concat(team, "-passer-totals\">\n              <th>Total</th>\n              <th class=\"").concat(adv, "-total-completions\">0/0</th>\n              <th class=\"").concat(adv, "-total-pass-yards\">0</th>\n              <th class=\"").concat(adv, "-total-pass-average\">0.0</th>\n              <th class=\"").concat(adv, "-total-pass-touchdowns\">0</th>\n              <th class=\"").concat(adv, "-total-pass-long\">0</th>\n            </tr>\n          </table>\n        </div>\n        <div class=\"").concat(adv, "-stats__rushing\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Rushing</h2>\n          <table class=\"").concat(adv, "-stats__table\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">CAR</th>\n              <th class=\"stat-line-header\">YDS</th>\n              <th class=\"stat-line-header\">AVG</th>\n              <th class=\"stat-line-header\">TD</th>\n              <th class=\"stat-line-header\">LONG</th>\n            </tr>\n            <tr class=\"stat-line\" id=\"").concat(team, "-rushers></tr>\n            <tr class=\"stat-line__total\" id=\"").concat(team, "-rusher-totals\">\n              <th>Total</th>\n              <th class=\"").concat(adv, "-total-carries\">0</th>\n              <th class=\"").concat(adv, "-total-rush-yards\">0</th>\n              <th class=\"").concat(adv, "-total-rush-average\">0.0</th>\n              <th class=\"").concat(adv, "-total-rush-touchdown\">0</th>\n              <th class=\"").concat(adv, "-total-rush-long\">0</th>\n            </tr>\n          </table>\n        </div>\n        <div class=\"").concat(adv, "-stats__receiving\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Receiving</h2>\n          <table class=\"").concat(adv, "-stats__table\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">REC</th>\n              <th class=\"stat-line-header\">YDS</th>\n              <th class=\"stat-line-header\">AVG</th>\n              <th class=\"stat-line-header\">TD</th>\n              <th class=\"stat-line-header\">LONG</th>\n              <th class=\"stat-line-header\">TRGT</th>\n            </tr>\n            <tr class=\"stat-line\"></tr>\n            <tr class=\"stat-line__total\" id=\"").concat(team, "-receiving-totals\">\n              <th>Total</th>\n              <th>0</th>\n              <th>0</th>\n              <th>0.0</th>\n              <th>0</th>\n              <th>0</th>\n              <th>0</th>\n            </tr>\n          </table>\n        </div>\n        <div class=\"").concat(adv, "-stats__kick-returns\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Kick Returns</h2>\n          <table class=\"").concat(adv, "-stats__table\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">RET</th>\n              <th class=\"stat-line-header\">YDS</th>\n              <th class=\"stat-line-header\">AVG</th>\n              <th class=\"stat-line-header\">TD</th>\n              <th class=\"stat-line-header\">LONG</th>\n            </tr>\n            <tr class=\"stat-line\" id=\"").concat(team, "-kick-returners></tr>\n            <tr class=\"stat-line__total\">\n            <th>Total</th>\n            <th>0</th>\n            <th>0</th>\n            <th>0.0</th>\n            <th>0</th>\n            <th>0</th>\n          </tr>\n          </table>\n        </div>\n        <div class=\"").concat(adv, "-stats__punt-returns\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Punt Returns</h2>\n          <table class=\"").concat(adv, "-stats__table\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">RET</th>\n              <th class=\"stat-line-header\">YDS</th>\n              <th class=\"stat-line-header\">AVG</th>\n              <th class=\"stat-line-header\">TD</th>\n              <th class=\"stat-line-header\">LONG</th>\n            </tr>\n            <tr class=\"stat-line\" id=\"").concat(team, "-punt-returners></tr>\n            <tr class=\"stat-line__total\">\n            <th>Total</th>\n            <th>0</th>\n            <th>0</th>\n            <th>0.0</th>\n            <th>0</th>\n            <th>0</th>\n          </tr>\n          </table>\n        </div>\n        <div class=\"").concat(adv, "-stats__kicking\">\n          <h2 class=\"").concat(adv, "-stats__stat-header\">Kicking</h2>\n          <table class=\"").concat(adv, "-stats__table\">\n            <tr class=\"stat-line-header\">\n              <th class=\"stat-line-header\"></th>\n              <th class=\"stat-line-header\">FG</th>\n              <th class=\"stat-line-header\">PCT</th>\n              <th class=\"stat-line-header\">LONG</th>\n              <th class=\"stat-line-header\">XP</th>\n              <th class=\"stat-line-header\">PTS</th>\n            </tr>\n            <tr class=\"stat-line\" id=\"").concat(team, "-kickers></tr>\n            <tr class=\"stat-line__total\">\n            <th>Total</th>\n            <th>0/0</th>\n            <th>0.0%</th>\n            <th>0</th>\n            <th>0/0</th>\n            <th>0</th>\n          </tr>\n          </table>\n        </div>\n  ");
};

/***/ }),

/***/ "./src/js/plays.js":
/*!*************************!*\
  !*** ./src/js/plays.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPassPlayInput": () => (/* binding */ displayPassPlayInput),
/* harmony export */   "displayPlays": () => (/* binding */ displayPlays),
/* harmony export */   "hidePlays": () => (/* binding */ hidePlays)
/* harmony export */ });
/* harmony import */ var _inputMarkupjs_passPlayMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputMarkupjs/passPlayMarkup */ "./src/js/inputMarkupjs/passPlayMarkup.js");
/* harmony import */ var _teamStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamStats */ "./src/js/teamStats.js");
/* harmony import */ var _teamStats__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_teamStats__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _boxScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxScore */ "./src/js/boxScore.js");
/* harmony import */ var _teamStatsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamStatsContainer */ "./src/js/teamStatsContainer.js");
/* harmony import */ var _boxScoreContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxScoreContainer */ "./src/js/boxScoreContainer.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var displayPlays = function displayPlays(container) {
  container.style.height = 'calc(100vh - 16.8rem)';
};
var hidePlays = function hidePlays(container) {
  container.style.height = '0';
};

var playInputActions = function playInputActions() {
  var blurBackground = document.querySelector('#blur-background');
  var playInputContainer = document.querySelector('.play-input');
  blurBackground.setAttribute('class', 'blur-background');
  playInputContainer.style.display = 'block';
};

var renderLogo = function renderLogo(team) {
  var inputLogo = document.querySelector('.play-input__logo');
  inputLogo.setAttribute('src', "img/".concat(team, ".png"));
};

var playInputActionsRemove = function playInputActionsRemove() {
  var blurBackground = document.querySelector('#blur-background');
  var playInputContainer = document.querySelector('.play-input');
  blurBackground.setAttribute('class', 'hidden');
  playInputContainer.style.display = 'none';
}; ///// Stats appended and updated


var calcAvg = function calcAvg(yards, denom) {
  return isNaN(yards / denom) ? 0 : Math.round(yards / denom * 10) / 10;
};

var appendPassStats = function appendPassStats(el, stats, team, id) {
  el.insertAdjacentHTML('beforebegin', "<tr class=\"stat-line\" id=\"".concat(id, "\">\n  <th class=\"stat-line\" id=\"").concat(team, "-name\">").concat(stats.name, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-compatt\">").concat(stats.comp, "/").concat(stats.att, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-yards\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-avg\">").concat(Math.round(stats.yards / stats.att * 10) / 10, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-td\">").concat(stats.td, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-int\">").concat(stats["int"], "</th>\n  </tr>\n  "));
};

var appendRecStats = function appendRecStats(el, stats, team, id) {
  el.insertAdjacentHTML('beforebegin', "<tr class=\"stat-line\" id=\"".concat(id, "\">\n  <th class=\"stat-line\" id=\"").concat(team, "-name\">").concat(stats.name, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-rec\">").concat(stats.rec, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-yards\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-avg\">").concat(calcAvg(stats.yards, stats.rec), "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-td\">").concat(stats.td, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-long\">").concat(stats.longrec, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-trgt\">").concat(stats.trgt, "</th>\n  </tr>\n  "));
};

var updatePassStats = function updatePassStats(el, stats, team) {
  el.innerHTML = "\n  <th class=\"stat-line\" id=\"".concat(team, "-name\">").concat(stats.name, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-compatt\">").concat(stats.comp, "/").concat(stats.att, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-yards\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-avg\">").concat(Math.round(stats.yards / stats.att * 10) / 10, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-td\">").concat(stats.td, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-int\">").concat(stats["int"], "</th>\n  ");
};

var updateRecStats = function updateRecStats(el, stats, team) {
  el.innerHTML = "\n  <th class=\"stat-line\" id=\"".concat(team, "-name\">").concat(stats.name, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-rec\">").concat(stats.rec, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-yards\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-avg\">").concat(calcAvg(stats.yards, stats.rec), "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-td\">").concat(stats.td, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-long\">").concat(stats.longrec, "</th>\n  <th class=\"stat-line\" id=\"").concat(team, "-trgt\">").concat(stats.trgt, "</th>\n  ");
};

var updateTotalPassStats = function updateTotalPassStats(el, stats, team) {
  el.innerHTML = "\n  <th>Total</th>\n  <th class=\"stat-line\">".concat(stats.comp, "/").concat(stats.att, "</th>\n  <th class=\"stat-line\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\">").concat(Math.round(stats.yards / stats.att * 10) / 10, "</th>\n  <th class=\"stat-line\">").concat(stats.td, "</th>\n  <th class=\"stat-line\">").concat(stats["int"], "</th>\n  ");
};

var updateTotalRecStats = function updateTotalRecStats(el, stats) {
  el.innerHTML = "\n  <th>Total</th>\n  <th class=\"stat-line\">".concat(stats.rec, "</th>\n  <th class=\"stat-line\">").concat(stats.yards, "</th>\n  <th class=\"stat-line\">").concat(calcAvg(stats.yards, stats.rec), "</th>\n  <th class=\"stat-line\">").concat(stats.td, "</th>\n  <th class=\"stat-line\">").concat(stats.longrec, "</th>\n  ");
};

var updateTeamStats = function updateTeamStats(el, stats, team) {
  el.innerHTML = "\n  <tr>\n    <th class=\"team-stats__cell\" id=\"".concat(team, "-first-downs\">").concat(stats.firstDowns, "</th>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-total-yards\">").concat(stats.totalYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-total-plays\">").concat(stats.totalPlays, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-play\">").concat(isNaN(stats.yardsPerPlay) ? '0.0' : Math.round(stats.yardsPerPlay * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-passing-yards\">").concat(stats.passingYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-comp-att\">").concat(stats.completions, "/").concat(stats.attempts, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-pass\">").concat(isNaN(stats.yardsPerPass) ? '0.0' : Math.round(stats.yardsPerPass * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-rushing-yards\">").concat(stats.rushingYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-rushes\">").concat(stats.rushingAttempts, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-rush\">").concat(isNaN(stats.yardsPerRush) ? '0.0' : Math.round(stats.yardsPerRush * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-penalties\">").concat(stats.penalties, "-").concat(stats.penaltyYards, "</th>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-turnovers\">").concat(stats.turnovers, "</th>\n  </tr>\n  ");
};

var updateBoxScore = function updateBoxScore(team, qtr, score) {
  var quarterScore = document.getElementById("".concat(team, "-").concat(qtr));
  quarterScore.textContent = "".concat(score[qtr]);
};

var updateScore = function updateScore(el, boxScore) {
  el.textContent = "".concat(boxScore.calcScore());
};

var Player = /*#__PURE__*/_createClass(function Player(name, team) {
  _classCallCheck(this, Player);

  this.name = name;
  this.comp = 0;
  this.inc = 0;
  this.att = 0;
  this.trgt = 0;
  this.rec = 0;
  this.yards = 0;
  this.longrec = 0;
  this.td = 0;
  this["int"] = 0;
  this.id = "".concat(team, "-").concat(name.split(' ').join('').toLowerCase());
  this.teamId = "".concat(team);
  this.plays = [];
});

var Play = /*#__PURE__*/_createClass(function Play(playId, passName, recName, comp, inc, yards, firstDown, td, _int, fum, safety) {
  _classCallCheck(this, Play);

  this.playId = playId;
  this.passer = passName;
  this.receiver = recName;
  this.complete = comp;
  this.incomplete = inc;
  this.yards = yards;
  this.firstDown = firstDown;
  this.touchdown = td;
  this.interception = _int;
  this.fumble = fum;
  this.safety = safety;
});

var passers = [];
var rushers = [];
var receivers = [];
var kickReturners = [];
var puntReturners = [];
var kickers = [];
var punters = [];
var defensiveReturners = [];
var plays = [];

var passComplete = function passComplete(el, passer, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, newQb, totalQb, newWr, totalWr, teamStat, playId) {
  el.insertAdjacentHTML('beforeend', "\n    <div class=\"play plays-container__passing-play\" data-play-id=".concat(playId, ">\n      <p class=\"plays-container__passing-play--text\">\n      ").concat(passer, " pass complete to ").concat(receiver, " for ").concat(yards, " yards").concat(touchdown ? ' and a TOUCHDOWN!' : "".concat(firstDown ? ' and a First Down!' : '')).concat(fumbleLost ? ' and fumbled' : '').concat(twoPoints ? '. Two Point Conversion Successful' : '').concat(safety ? ' and tackled for a SAFETY' : '', "\n      </p>\n    </div>"));
  newQb.comp += 1;
  newQb.att += 1;
  newQb.yards += yards * 1;
  newWr.rec += 1;
  newWr.yards += yards * 1;
  newWr.trgt += 1;
  totalQb.comp += 1;
  totalQb.att += 1;
  totalQb.yards += yards * 1;
  totalWr.rec += 1;
  totalWr.yards += yards * 1;
  totalWr.trgt += 1;
  teamStat.completions += 1;
  teamStat.attempts += 1;
  teamStat.passingYards += yards * 1;
  teamStat.totalPlays = teamStat.calcTotalPlays();
  teamStat.totalYards = teamStat.calcTotalYards();
  teamStat.yardsPerPass = teamStat.calcAvg(teamStat.passingYards, teamStat.attempts);
  teamStat.yardsPerPlay = teamStat.calcAvg(teamStat.totalYards, teamStat.totalPlays);
  firstDown ? teamStat.firstDowns += 1 : teamStat.firstDowns += 0;
};

var passIncomplete = function passIncomplete(el, passer, newQb, totalQb, newWr, totalWr, teamStat, playId) {
  el.insertAdjacentHTML('beforeend', "\n      <div class=\"play plays-container__passing-play\" data-play-id=".concat(playId, ">\n        <img src=\"img/fsu.png\" class=\"play__logo\">\n        <p class=\"plays-container__passing-play--text\">\n        ").concat(passer, " pass incomplete\n        </p>\n        <div class=\"play__btns\">\n            <svg class=\"play__btn--icon\">\n              <use xlink:href=\"img/compose.svg\"></use>\n            </svg>\n            <svg class=\"play__btn--icon\">\n              <use xlink:href=\"img/squared-cross.svg\"></use>\n            </svg>\n        </div>\n      </div>\n      "));
  newQb.inc += 1;
  newQb.att += 1;
  newWr.trgt += 1;
  totalQb.inc += 1;
  totalQb.att += 1;
  totalWr.trgt += 1;
  teamStat.attempts += 1;
  teamStat.totalPlays = teamStat.calcTotalPlays();
  teamStat.yardsPerPass = teamStat.calcAvg(teamStat.passingYards, teamStat.attempts);
  teamStat.yardsPerPlay = teamStat.calcAvg(teamStat.totalYards, teamStat.totalPlays);
}; // const updateScore = function (qtr, team) {
//   const boxScore = document.getElementById(`${team}-${qtr}`);
// };


var touchdownThrown = function touchdownThrown(newQb, totalQb, newWr, totalWr, boxScore, qtr) {
  newQb.td += 1;
  totalQb.td += 1;
  newWr.td += 1;
  totalWr.td += 1;
  boxScore[qtr] += 6; // possibly create a class for scores?
};

var interceptionThrown = function interceptionThrown(newQb, totalQb, teamStat) {
  newQb["int"] += 1;
  totalQb["int"] += 1;
  teamStat.turnovers += 1;
};

var createPassPlay = function createPassPlay(team) {
  var passStatEl = document.getElementById("".concat(team, "-passer-totals"));
  var recStatEl = document.getElementById("".concat(team, "-receiving-totals"));
  var teamStatsEl = document.getElementById("".concat(team, "-team-stats"));
  var playsEl = document.getElementById("".concat(team, "-plays-container"));
  var teamScoreEl = document.getElementById("".concat(team, "-score"));
  var quarter = document.querySelector(".header__quarter").dataset.quarter;
  var playId = plays.length + 1;
  var passer = document.getElementById("passer-".concat(team)).value;
  var receiver = document.getElementById("receiver-".concat(team)).value;
  var yards = document.getElementById("yards-".concat(team)).value;
  var complete = document.getElementById("complete-".concat(team)).checked;
  var incomplete = document.getElementById("incomplete-".concat(team)).checked;
  var firstDown = document.getElementById("first-down-".concat(team)).checked;
  var touchdown = document.getElementById("touchdown-".concat(team)).checked;
  var interception = document.getElementById("interception-".concat(team)).checked;
  var fumbleLost = document.getElementById("fumble-lost-".concat(team)).checked;
  var twoPoints = document.getElementById("two-points-".concat(team)).checked;
  var safety = document.getElementById("safety-".concat(team)).checked;
  var teamId = team;
  var newPlay = new Play(playId, passer, receiver, complete, incomplete, yards, firstDown, touchdown, interception, fumbleLost, safety);
  plays.push(newPlay);
  console.log(plays);
  var teamStatAlt = _teamStatsContainer__WEBPACK_IMPORTED_MODULE_3__.teamStats.find(function (team) {
    return team.id === teamId;
  });
  var boxScoreAlt = _boxScoreContainer__WEBPACK_IMPORTED_MODULE_4__.boxScoresArr.find(function (team) {
    return team.id === teamId;
  });

  if (passers.length > 0) {
    var selectedPasser = passers.find(function (pass) {
      return pass.name === passer;
    });
    var selectedRec = receivers.find(function (rec) {
      return rec.id === "".concat(teamId, "-").concat(receiver.split(' ').join('').toLowerCase());
    });

    if (selectedPasser === undefined && selectedRec === undefined) {
      var newQb = new Player(passer, teamId);
      var newWr = new Player(receiver, teamId);
      var totalPassers = passers.find(function (pass) {
        return pass.id === "".concat(teamId, "-total");
      });
      var totalReceivers = receivers.find(function (rec) {
        return rec.id === "".concat(teamId, "-total");
      });

      if (totalPassers === undefined) {
        var newTotalPassers = new Player('Total', teamId);
        var newTotalReceivers = new Player('Total', teamId);

        if (complete === true) {
          passComplete(playsEl, passer, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, newQb, newTotalPassers, newWr, newTotalReceivers, teamStatAlt, playId);
        }

        if (incomplete == true) {
          passIncomplete(playsEl, passer, newQb, newTotalPassers, newWr, newTotalReceivers, teamStatAlt, playId);
        }

        if (touchdown == true) {
          touchdownThrown(newQb, newTotalPassers, newWr, newTotalReceivers, boxScoreAlt, quarter);
        }

        if (interception == true) {
          interceptionThrown(newQb, newTotalPassers, teamStatAlt);
        }

        passers.push(newQb);
        passers.push(newTotalPassers);
        receivers.push(newWr);
        receivers.push(newTotalReceivers);
        appendPassStats(passStatEl, newQb, teamId, newQb.id);
        appendRecStats(recStatEl, newWr, teamId, newWr.id);
        updateTotalPassStats(passStatEl, newTotalPassers, teamId);
        updateTotalRecStats(recStatEl, newTotalReceivers);
      } else {
        if (complete === true) {
          passComplete(playsEl, passer, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, newQb, totalPassers, newWr, totalReceivers, teamStatAlt, playId);
        }

        if (incomplete == true) {
          passIncomplete(playsEl, passer, newQb, totalPassers, newWr, totalReceivers, teamStatAlt, playId);
        }

        if (touchdown == true) {
          touchdownThrown(newQb, totalPassers, newWr, totalReceivers, boxScoreAlt, quarter);
        }

        if (interception == true) {
          interceptionThrown(newQb, totalPassers, teamStatAlt);
        }

        passers.push(newQb);
        receivers.push(newWr);
        appendPassStats(passStatEl, newQb, teamId, newQb.id);
        appendRecStats(recStatEl, newWr, teamId, newWr.id);
        updateTotalPassStats(passStatEl, totalPassers, teamId);
        updateTotalRecStats(recStatEl, totalReceivers);
      }
    }

    if (selectedPasser === undefined && selectedRec !== undefined) {
      var _newQb = new Player(passer, teamId);

      var wrStats = document.getElementById("".concat(selectedRec.id));

      var _totalPassers = passers.find(function (pass) {
        return pass.id === "".concat(teamId, "-total");
      });

      var _totalReceivers = receivers.find(function (rec) {
        return rec.id === "".concat(teamId, "-total");
      });

      if (complete === true) {
        passComplete(playsEl, selectedPasser, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, _newQb, _totalPassers, selectedRec, _totalReceivers, teamStatAlt, playId);
      }

      if (incomplete === true) {
        passIncomplete(playsEl, _newQb.name, _newQb, _totalPassers, selectedRec, _totalReceivers, teamStatAlt, playId);
      }

      if (touchdown === true) {
        touchdownThrown(_newQb, _totalPassers, selectedRec, _totalReceivers, boxScoreAlt, quarter);
      }

      if (interception === true) {
        interceptionThrown(_newQb, _totalPassers, teamStatAlt);
      }

      passers.push(_newQb);
      appendPassStats(passStatEl, _newQb, teamId, _newQb.id);
      updateRecStats(wrStats, selectedRec, teamId);
      updateTotalPassStats(passStatEl, _totalPassers, teamId);
      updateTotalRecStats(recStatEl, _totalReceivers);
    }

    if (selectedPasser !== undefined && selectedRec === undefined) {
      var qbStats = document.getElementById("".concat(selectedPasser.id));

      var _newWr = new Player(receiver, teamId);

      var _totalPassers2 = passers.find(function (pass) {
        return pass.id === "".concat(teamId, "-total");
      });

      var _totalReceivers2 = receivers.find(function (rec) {
        return rec.id === "".concat(teamId, "-total");
      });

      if (complete === true) {
        passComplete(playsEl, selectedPasser.name, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, selectedPasser, _totalPassers2, _newWr, _totalReceivers2, teamStatAlt, playId);
      }

      if (incomplete === true) {
        passIncomplete(playsEl, selectedPasser.name, selectedPasser, _totalPassers2, _newWr, _totalReceivers2, teamStatAlt, playId);
      }

      if (touchdown === true) {
        touchdownThrown(selectedPasser, _totalPassers2, _newWr, _totalReceivers2, boxScoreAlt, quarter);
      }

      if (interception === true) {
        interceptionThrown(selectedPasser, _totalPassers2, teamStatAlt);
      }

      receivers.push(_newWr);
      updatePassStats(qbStats, selectedPasser, teamId);
      appendRecStats(recStatEl, _newWr, teamId, _newWr.id);
      updateTotalPassStats(passStatEl, _totalPassers2, teamId);
      updateTotalRecStats(recStatEl, _totalReceivers2);
    }

    if (selectedPasser !== undefined && selectedRec !== undefined) {
      var _qbStats = document.getElementById("".concat(selectedPasser.id));

      var _wrStats = document.getElementById("".concat(selectedRec.id));

      var _totalPassers3 = passers.find(function (pass) {
        return pass.id === "".concat(teamId, "-total");
      });

      var _totalReceivers3 = receivers.find(function (rec) {
        return rec.id === "".concat(teamId, "-total");
      });

      if (complete === true) {
        passComplete(playsEl, selectedPasser.name, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, selectedPasser, _totalPassers3, selectedRec, _totalReceivers3, teamStatAlt, playId);
      }

      if (incomplete === true) {
        passIncomplete(playsEl, selectedPasser.name, selectedPasser, _totalPassers3, selectedRec, _totalReceivers3, teamStatAlt, playId);
      }

      if (touchdown === true) {
        touchdownThrown(selectedPasser, _totalPassers3, selectedRec, _totalReceivers3, boxScoreAlt, quarter);
      }

      if (interception === true) {
        interceptionThrown(selectedPasser, _totalPassers3, teamStatAlt);
      }

      updatePassStats(_qbStats, selectedPasser, teamId);
      updateRecStats(_wrStats, selectedRec, teamId);
      updateTotalPassStats(passStatEl, _totalPassers3, teamId);
      updateTotalRecStats(recStatEl, _totalReceivers3);
    }
  }

  if (passers.length === 0) {
    var _newQb2 = new Player(passer, teamId);

    var _newWr2 = new Player(receiver, teamId);

    var _totalPassers4 = new Player('Total', teamId);

    var _totalReceivers4 = new Player('Total', teamId);

    if (complete === true) {
      passComplete(playsEl, passer, receiver, yards, touchdown, firstDown, fumbleLost, twoPoints, safety, _newQb2, _totalPassers4, _newWr2, _totalReceivers4, teamStatAlt, playId);
    }

    if (incomplete == true) {
      passIncomplete(playsEl, passer, _newQb2, _totalPassers4, _newWr2, _totalReceivers4, teamStatAlt, playId);
    }

    if (touchdown == true) {
      touchdownThrown(_newQb2, _totalPassers4, _newWr2, _totalReceivers4, boxScoreAlt, quarter);
    }

    if (interception == true) {
      interceptionThrown(_newQb2, _totalPassers4, teamStatAlt);
    }

    passers.push(_newQb2);
    passers.push(_totalPassers4);
    receivers.push(_newWr2);
    receivers.push(_totalReceivers4);
    appendPassStats(passStatEl, _newQb2, teamId, _newQb2.id);
    appendRecStats(recStatEl, _newWr2, teamId, _newWr2.id);
    updateTotalPassStats(passStatEl, _totalPassers4, teamId);
    updateTotalRecStats(recStatEl, _totalReceivers4);
  }

  updateTeamStats(teamStatsEl, teamStatAlt, teamId);
  updateBoxScore(teamId, quarter, boxScoreAlt);
  updateScore(teamScoreEl, boxScoreAlt);
};

var submitBtnAction = function submitBtnAction(team) {
  var submitBtn = document.querySelector('.play-input__submit');
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    playInputActionsRemove();
    createPassPlay(team);
  });
};

var displayPassPlayInput = function displayPassPlayInput(team) {
  playInputActions();
  var playInputContainer = document.querySelector('.play-input');
  (0,_inputMarkupjs_passPlayMarkup__WEBPACK_IMPORTED_MODULE_0__.passPlayMarkup)(playInputContainer, team);
  renderLogo(team);
  submitBtnAction(team);
};

/***/ }),

/***/ "./src/js/teamLoad.js":
/*!****************************!*\
  !*** ./src/js/teamLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awayTeamId": () => (/* binding */ awayTeamId),
/* harmony export */   "homeTeamId": () => (/* binding */ homeTeamId),
/* harmony export */   "kickoffInit": () => (/* binding */ kickoffInit),
/* harmony export */   "teamLoader": () => (/* binding */ teamLoader)
/* harmony export */ });
/* harmony import */ var _assets_data_teams_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/data/teams.json */ "./src/assets/data/teams.json");
/* harmony import */ var _playerStatsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerStatsContainer */ "./src/js/playerStatsContainer.js");
/* harmony import */ var _boxScoreContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxScoreContainer */ "./src/js/boxScoreContainer.js");
/* harmony import */ var _teamStatsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamStatsContainer */ "./src/js/teamStatsContainer.js");
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var awaySelector = document.querySelector('#away');
var homeSelector = document.querySelector('#home');
var teamSelector = document.querySelector('.team-select');
var blurBackground = document.querySelector('.blur-background');
var teamLoader = function teamLoader() {
  _assets_data_teams_json__WEBPACK_IMPORTED_MODULE_0__.forEach(function (team) {
    var awayOption = document.createElement('option');
    awayOption.textContent = "".concat(team.name, " ").concat(team.nickname);
    awayOption.setAttribute('value', "".concat(team.id));
    awaySelector.appendChild(awayOption);
    var homeOption = document.createElement('option');
    homeOption.textContent = "".concat(team.name, " ").concat(team.nickname);
    homeOption.setAttribute('value', "".concat(team.id));
    homeSelector.appendChild(homeOption);
  });
};
var awayLogo = document.querySelector('.header__away--logo');
var awayLogoContainer = document.querySelector('.header__away--logo-container');
var homeLogo = document.querySelector('.header__home--logo');
var homeLogoContainer = document.querySelector('.header__home--logo-container');
var awayName = document.querySelector('.header__away--name');
var homeName = document.querySelector('.header__home--name');
var awayStats = document.querySelector('.away-stats');
var homeStats = document.querySelector('.home-stats');

var _document$querySelect = document.querySelectorAll('.away-btn'),
    _document$querySelect2 = _toArray(_document$querySelect),
    awayBtn = _document$querySelect2.slice(0);

var _document$querySelect3 = document.querySelectorAll('.home-btn'),
    _document$querySelect4 = _toArray(_document$querySelect3),
    homeBtn = _document$querySelect4.slice(0);

var awayRankInput = document.querySelector('#away-rank');
var homeRankInput = document.querySelector('#home-rank');
var quarterDisplay = document.querySelector('.header__quarter');
var quarters = ['1st', '2nd', '3rd', '4th', '0T', 'FINAL'];
var awayPlaysContainers = document.querySelector('.away-plays-container');
var homePlaysContainers = document.querySelector('.home-plays-container');
var awayBoxScoreContainer = document.querySelector('.box-score__away');
var homeBoxScoreContainer = document.querySelector('.box-score__home');

var appendLogo = function appendLogo(team, el) {
  el.setAttribute('src', "img/".concat(team.id, ".png"));
};

var setBackground = function setBackground(team, el) {
  el.style.backgroundColor = "".concat(team.primaryColor);
};

var appendName = function appendName(team, el, rank) {
  el.innerHTML = "<span class=\"header__rank\">".concat(rank.value, "</span>").concat(team.abbName);
};

var appendBackgroundLogo = function appendBackgroundLogo(team, el) {
  el.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('img/".concat(team.id, ".png')");
};

var statsLogo = function statsLogo(team, el) {
  el.forEach(function (e) {
    e.innerHTML = "<img class=\"small-logo\" src=\"img/".concat(team.id, ".png\">");
  });
};

var teamStatsLogo = function teamStatsLogo(team, el) {
  el.innerHTML = "<img class=\"small-logo\" src=\"img/".concat(team.id, ".png\">");
};

var applyBtnColor = function applyBtnColor(team, el) {
  el.forEach(function (e) {
    e.style.backgroundColor = "".concat(team.secondaryColor);
    e.style.color = "".concat(team.primaryColor);
  });
};

var setPlaysContainerId = function setPlaysContainerId(team, el) {
  el.setAttribute('id', "".concat(team, "-plays-container"));
};

var awayTeamId;
var homeTeamId;
var kickoffInit = function kickoffInit() {
  teamSelector.setAttribute('class', 'hidden');
  blurBackground.setAttribute('class', 'hidden');
  quarterDisplay.textContent = quarters[0];
  var awaySelected = awaySelector.value;
  var homeSelected = homeSelector.value;
  var awayScore = document.querySelector('.header__away--score');
  var homeScore = document.querySelector('.header__home--score');
  _assets_data_teams_json__WEBPACK_IMPORTED_MODULE_0__.forEach(function (team) {
    if (awaySelected === team.id) {
      var awayPlayerStats = document.querySelector('.away-stats');
      var awayTeamStats = document.querySelector('.team-stats__away');
      awayTeamStats.setAttribute('id', "".concat(awaySelected, "-team-stats"));
      var awayTeamStatsLogo = document.querySelector('.team-stats__away--logo');
      awayScore.setAttribute('id', "".concat(awaySelected, "-score"));
      (0,_boxScoreContainer__WEBPACK_IMPORTED_MODULE_2__.appendBoxScore)(awayBoxScoreContainer, 'away', awaySelected);
      (0,_teamStatsContainer__WEBPACK_IMPORTED_MODULE_3__.appendTeamStats)(awayTeamStats, awaySelected);

      var _document$querySelect5 = document.querySelectorAll('.away-name'),
          _document$querySelect6 = _toArray(_document$querySelect5),
          awayStatNames = _document$querySelect6.slice(0);

      appendLogo(team, awayLogo);
      teamStatsLogo(team, awayTeamStatsLogo);
      setBackground(team, awayLogoContainer);
      setBackground(team, awayName);
      appendName(team, awayName, awayRankInput);
      appendBackgroundLogo(team, awayStats);
      statsLogo(team, awayStatNames);
      applyBtnColor(team, awayBtn);
      awayTeamId = team.id;
      (0,_playerStatsContainer__WEBPACK_IMPORTED_MODULE_1__.appendStatSheet)(awayPlayerStats, 'away', awayTeamId);
      setPlaysContainerId(team.id, awayPlaysContainers);
    }

    if (homeSelected === team.id) {
      var homePlayerStats = document.querySelector('.home-stats');
      var homeTeamStats = document.querySelector('.team-stats__home');
      homeTeamStats.setAttribute('id', "".concat(homeSelected, "-team-stats"));
      var homeTeamStatsLogo = document.querySelector('.team-stats__home--logo');
      homeScore.setAttribute('id', "".concat(homeSelected, "-score"));
      (0,_boxScoreContainer__WEBPACK_IMPORTED_MODULE_2__.appendBoxScore)(homeBoxScoreContainer, 'home', homeSelected);
      (0,_teamStatsContainer__WEBPACK_IMPORTED_MODULE_3__.appendTeamStats)(homeTeamStats, homeSelected);

      var _document$querySelect7 = document.querySelectorAll('.home-name'),
          _document$querySelect8 = _toArray(_document$querySelect7),
          homeStatNames = _document$querySelect8.slice(0);

      appendLogo(team, homeLogo);
      teamStatsLogo(team, homeTeamStatsLogo);
      setBackground(team, homeLogoContainer);
      setBackground(team, homeName);
      appendName(team, homeName, homeRankInput);
      appendBackgroundLogo(team, homeStats);
      statsLogo(team, homeStatNames);
      applyBtnColor(team, homeBtn);
      homeTeamId = team.id;
      (0,_playerStatsContainer__WEBPACK_IMPORTED_MODULE_1__.appendStatSheet)(homePlayerStats, 'home', homeTeamId);
      setPlaysContainerId(team.id, homePlaysContainers);
    }
  });
  var boxScoreAway = _boxScoreContainer__WEBPACK_IMPORTED_MODULE_2__.boxScoresArr.find(function (team) {
    return team.id === awaySelected;
  });
  var boxScoreHome = _boxScoreContainer__WEBPACK_IMPORTED_MODULE_2__.boxScoresArr.find(function (team) {
    return team.id === homeSelected;
  });
  awayScore.textContent = boxScoreAway.calcScore();
  homeScore.textContent = boxScoreHome.calcScore();
};

/***/ }),

/***/ "./src/js/teamStats.js":
/*!*****************************!*\
  !*** ./src/js/teamStats.js ***!
  \*****************************/
/***/ (() => {

/*
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
*/

/***/ }),

/***/ "./src/js/teamStatsContainer.js":
/*!**************************************!*\
  !*** ./src/js/teamStatsContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTeamStats": () => (/* binding */ appendTeamStats),
/* harmony export */   "teamStats": () => (/* binding */ teamStats)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TeamStats = /*#__PURE__*/function () {
  function TeamStats(team) {
    _classCallCheck(this, TeamStats);

    this.id = "".concat(team);
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

  _createClass(TeamStats, [{
    key: "calcTotalYards",
    value: function calcTotalYards() {
      return this.passingYards + this.rushingYards;
    }
  }, {
    key: "calcTotalPlays",
    value: function calcTotalPlays() {
      return this.attempts + this.rushingAttempts;
    }
  }, {
    key: "calcAvg",
    value: function calcAvg(yards, att) {
      return yards / att;
    }
  }]);

  return TeamStats;
}();

var teamStats = [];
var appendTeamStats = function appendTeamStats(el, team) {
  var teamStatObj = new TeamStats(team);
  el.innerHTML = "\n  <tr>\n    <th class=\"team-stats__cell\" id=\"".concat(team, "-first-downs\">").concat(teamStatObj.firstDowns, "</th>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-total-yards\">").concat(teamStatObj.totalYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-total-plays\">").concat(teamStatObj.totalPlays, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-play\">").concat(isNaN(teamStatObj.yardsPerPlay) ? '0.0' : Math.round(teamStatObj.yardsPerPlay * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-passing-yards\">").concat(teamStatObj.passingYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-comp-att\">").concat(teamStatObj.completions, "/").concat(teamStatObj.attempts, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-pass\">").concat(isNaN(teamStatObj.yardsPerPass) ? '0.0' : Math.round(teamStatObj.yardsPerPass * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-rushing-yards\">").concat(teamStatObj.rushingYards, "</th>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-rushes\">").concat(teamStatObj.rushingAttempts, "</td>\n  </tr>\n  <tr>\n    <td class=\"team-stats__cell\" id=\"").concat(team, "-yards-rush\">").concat(isNaN(teamStatObj.yardsPerRush) ? '0.0' : Math.round(teamStatObj.yardsPerRush * 10) / 10, "</td>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-penalties\">").concat(teamStatObj.penalties, "-").concat(teamStatObj.penaltyYards, "</th>\n  </tr>\n  <tr>\n    <th class=\"team-stats__cell\" id=\"").concat(team, "-turnovers\">").concat(teamStatObj.turnovers, "</th>\n  </tr>\n  </div>\n  ");
  teamStats.push(teamStatObj);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes openUp {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: calc(100vh - 16.8rem);\n  }\n}\n.hidden {\n  display: none;\n}\n\n.small-logo {\n  max-height: 3rem;\n  max-width: 3rem;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.blur-background {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  height: 100vh;\n  width: 100vw;\n}\n\n.play-input {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 50%;\n  width: 70%;\n  background-color: #fff;\n  font-size: 1.8rem;\n  display: none;\n  font-family: \"Varela Round\", sans-serif;\n}\n.play-input__type-inputs {\n  display: flex;\n  flex-direction: column;\n}\n.play-input__click-inputs {\n  display: flex;\n  flex-direction: column;\n}\n.play-input__logo {\n  max-height: 12rem;\n  max-width: 12rem;\n}\n.play-input__pass {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.play-input__pass--title {\n  text-align: center;\n}\n.play-input__container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.team-select {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  height: 50%;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 1000;\n}\n.team-select__home, .team-select__away {\n  font-family: \"Varela Round\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  height: 8.4rem;\n  border: 2px solid #000;\n  background-color: rgb(20, 20, 20);\n}\n.button-container__away, .button-container__home {\n  width: calc(50% - 15rem);\n  display: flex;\n  justify-content: space-evenly;\n}\n.button-container__game {\n  width: 30rem;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.away-btn,\n.home-btn {\n  padding: 1rem;\n  border-radius: 10px;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  width: 10rem;\n}\n\n.game-btn {\n  padding: 1rem;\n  border-radius: 10px;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  width: 8rem;\n}\n\n.header {\n  display: flex;\n  height: 8.4rem;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  border: 2px solid #000;\n}\n.header__away, .header__home {\n  display: flex;\n}\n.header__away--name, .header__home--name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-style: italic;\n  font-size: 5rem;\n  height: 8rem;\n  width: calc(50vw - 27rem);\n  text-shadow: 1px 1px 8px #000;\n}\n.header__away--score, .header__home--score {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n  box-shadow: inset 0 0 10px #000;\n}\n.header__away--logo-container, .header__home--logo-container {\n  height: 8rem;\n  width: 12rem;\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__away--logo, .header__home--logo {\n  max-height: 9rem;\n  max-width: 10rem;\n  background-color: transparent;\n  filter: drop-shadow(2px 2px 10px #000);\n}\n.header__away--name {\n  background-color: rgb(120, 47, 64);\n  color: #fff;\n}\n.header__home--name {\n  background-color: rgb(70, 29, 124);\n  color: #fff;\n}\n.header__away--logo-container {\n  background-color: rgb(120, 47, 64);\n}\n.header__home--logo-container {\n  background-color: rgb(70, 29, 124);\n}\n.header__score {\n  font-size: 6.5rem;\n  background-color: rgb(20, 20, 20);\n  color: #fff;\n  width: 10rem;\n}\n.header__quarter {\n  font-size: 3rem;\n  background-color: #000;\n  color: rgb(247, 227, 113);\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__rank {\n  background-color: transparent;\n  font-size: 3rem;\n  margin-right: 0.5rem;\n}\n.header__possession {\n  height: 4rem;\n  width: 4rem;\n  z-index: 1000;\n}\n\n.away-plays-container {\n  left: 0;\n}\n\n.home-plays-container {\n  right: 0;\n}\n\n.plays-container {\n  bottom: 8.4rem;\n  height: calc(100vh - 16.8rem);\n  height: 0;\n  width: calc(50vw - 15rem);\n  background-color: rgb(20, 20, 20);\n  position: absolute;\n  overflow: hidden;\n}\n\n.play {\n  padding: 0.2rem;\n  border: 2px solid #000;\n  width: 100%;\n  height: 3rem;\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.play__logo {\n  max-height: 2.5rem;\n  width: auto;\n}\n.play__btns {\n  display: flex;\n}\n.play__btn {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: rgb(20, 20, 20);\n}\n.play__btn--icon {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #fff;\n}\n\n.stat-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: calc(100vh - 16.8rem);\n}\n\n.center-container {\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  width: 30rem;\n  border: 2px solid #000;\n  overflow: hidden;\n}\n\n.box-score {\n  font-size: 2rem;\n  font-family: \"Varela Round\", sans-serif;\n}\n.box-score__cell {\n  padding: 0.5rem;\n}\n\n.team-stats__cell {\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 0.2rem;\n}\n\n.away-stats,\n.home-stats {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.2rem;\n  padding: 2rem 2rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow-y: auto;\n}\n.away-stats__table,\n.home-stats__table {\n  margin-left: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.stat-line-header {\n  padding: 0 1rem;\n}\n\n.team-stats {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: space-evenly;\n  text-align: center;\n}\n.team-stats__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n.team-stats__logo-space {\n  width: 11rem;\n}\n.team-stats__away--logo, .team-stats__home--logo {\n  display: inline-block;\n  width: fit-content;\n}", "",{"version":3,"sources":["webpack://./src/sass/abstracts/_animations.scss","webpack://./src/sass/main.scss","webpack://./src/sass/abstracts/_utilities.scss","webpack://./src/sass/base/_reset.scss","webpack://./src/sass/components/_blurBackground.scss","webpack://./src/sass/components/_playInput.scss","webpack://./src/sass/abstracts/_variables.scss","webpack://./src/sass/base/_typography.scss","webpack://./src/sass/components/_teamselect.scss","webpack://./src/sass/layout/_footer.scss","webpack://./src/sass/layout/_header.scss","webpack://./src/sass/layout/_plays.scss","webpack://./src/sass/layout/_stat.scss","webpack://./src/sass/layout/_teamstats.scss"],"names":[],"mappings":"AAAA;EACE;IACE,SAAA;ECEF;EDAA;IACE,6BAAA;ECEF;AACF;ACRA;EACE,aAAA;ADUF;;ACPA;EACE,gBAAA;EACA,eAAA;ADUF;;AEhBA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;AFmBF;;AEhBA;EACE,gBAAA;AFmBF;;AG5BA;EACE,eAAA;EACA,oCAAA;EACA,2BAAA;EACA,aAAA;EACA,YAAA;AH+BF;;AIpCA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,UAAA;EACA,sBCCY;EDAZ,iBAAA;EACA,aAAA;EACA,uCERa;AN+Cf;AIlCE;EACE,aAAA;EACA,sBAAA;AJoCJ;AIjCE;EACE,aAAA;EACA,sBAAA;AJmCJ;AIjCE;EACE,iBAAA;EACA,gBAAA;AJmCJ;AIhCE;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;AJkCJ;AIjCI;EACE,kBAAA;AJmCN;AI/BE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AJiCJ;;AO1EA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sBFGY;EEFZ,WAAA;EACA,UAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,aAAA;AP6EF;AO3EE;EAEE,uCDbW;ECcX,aAAA;EACA,sBAAA;EACA,mBAAA;AP4EJ;;AQ9FA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WHIY;EGHZ,cAAA;EACA,sBAAA;EACA,iCHIuB;AL6FzB;AQ/FE;EAEE,wBAAA;EACA,aAAA;EACA,6BAAA;ARgGJ;AQ7FE;EACE,YAAA;EACA,aAAA;EACA,6BAAA;AR+FJ;;AQ3FA;;EAEE,aAAA;EACA,mBAAA;EACA,uCFzBa;EE0Bb,iBAAA;EACA,yBAAA;EACA,YAAA;AR8FF;;AQ3FA;EACE,aAAA;EACA,mBAAA;EACA,uCFlCa;EEmCb,iBAAA;EACA,yBAAA;EACA,WAAA;AR8FF;;ASrIA;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,uCHJa;EGKb,sBAAA;ATwIF;AStIE;EAEE,aAAA;ATuIJ;ASrII;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EACA,6BAAA;ATuIN;ASpII;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,+BAAA;ATsIN;ASnII;EACE,YAAA;EACA,YAAA;EACA,iCJzBmB;EI0BnB,aAAA;EACA,mBAAA;EACA,uBAAA;ATqIN;ASlII;EACE,gBAAA;EACA,gBAAA;EACA,6BAAA;EACA,sCAAA;AToIN;AShIE;EACE,kCJ/CiB;EIgDjB,WJ5CU;AL8Kd;AS/HE;EACE,kCJvDiB;EIwDjB,WJjDU;ALkLd;AS9HE;EACE,kCJzDiB;ALyLrB;AS7HE;EACE,kCJhEiB;AL+LrB;AS5HE;EACE,iBAAA;EACA,iCJ3DqB;EI4DrB,WJ/DU;EIgEV,YAAA;AT8HJ;AS3HE;EACE,eAAA;EACA,sBJtEU;EIuEV,yBJjEY;EIkEZ,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AT6HJ;AS1HE;EACE,6BAAA;EACA,eAAA;EACA,oBAAA;AT4HJ;ASzHE;EACE,YAAA;EACA,WAAA;EACA,aAAA;AT2HJ;;AU1NA;EACE,OAAA;AV6NF;;AU1NA;EACE,QAAA;AV6NF;;AU1NA;EACE,cAAA;EACA,6BAAA;EACA,SAAA;EACA,yBAAA;EACA,iCLFuB;EKGvB,kBAAA;EACA,gBAAA;AV6NF;;AU1NA;EACE,eAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AV6NF;AU5NE;EACE,kBAAA;EACA,WAAA;AV8NJ;AU5NE;EACE,aAAA;AV8NJ;AU5NE;EACE,cAAA;EACA,aAAA;EACA,iCL1BqB;ALwPzB;AU7NI;EACE,cAAA;EACA,aAAA;EACA,ULjCQ;ALgQd;;AWxQA;EACE,aAAA;EACA,uBAAA;EACA,WNKY;EMJZ,6BAAA;AX2QF;;AWxQA;EACE,iCNGuB;EMFvB,aAAA;EACA,6BAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;AX2QF;;AWxQA;EACE,eAAA;EACA,uCLlBa;AN6Rf;AWzQE;EACE,eAAA;AX2QJ;;AWtQE;EACE,uCL3BW;EK4BX,iBAAA;EACA,kBAAA;EACA,eAAA;AXyQJ;;AWrQA;;EAEE,aAAA;EACA,sBAAA;EACA,uCLtCa;EKuCb,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;EACA,gBAAA;AXwQF;AWtQE;;EACE,iBAAA;EACA,qBAAA;AXyQJ;;AWrQA;EACE,eAAA;AXwQF;;AYjUA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;AZoUF;AYlUE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBAAA;AZoUJ;AYjUE;EACE,YAAA;AZmUJ;AYhUE;EAEE,qBAAA;EACA,kBAAA;AZiUJ","sourcesContent":["@keyframes openUp {\r\n  0% {\r\n    height: 0;\r\n  }\r\n  100% {\r\n    height: calc(100vh - 16.8rem);\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\n@keyframes openUp {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: calc(100vh - 16.8rem);\n  }\n}\n.hidden {\n  display: none;\n}\n\n.small-logo {\n  max-height: 3rem;\n  max-width: 3rem;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.blur-background {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  height: 100vh;\n  width: 100vw;\n}\n\n.play-input {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 50%;\n  width: 70%;\n  background-color: #fff;\n  font-size: 1.8rem;\n  display: none;\n  font-family: \"Varela Round\", sans-serif;\n}\n.play-input__type-inputs {\n  display: flex;\n  flex-direction: column;\n}\n.play-input__click-inputs {\n  display: flex;\n  flex-direction: column;\n}\n.play-input__logo {\n  max-height: 12rem;\n  max-width: 12rem;\n}\n.play-input__pass {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.play-input__pass--title {\n  text-align: center;\n}\n.play-input__container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.team-select {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  height: 50%;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 1000;\n}\n.team-select__home, .team-select__away {\n  font-family: \"Varela Round\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  height: 8.4rem;\n  border: 2px solid #000;\n  background-color: rgb(20, 20, 20);\n}\n.button-container__away, .button-container__home {\n  width: calc(50% - 15rem);\n  display: flex;\n  justify-content: space-evenly;\n}\n.button-container__game {\n  width: 30rem;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.away-btn,\n.home-btn {\n  padding: 1rem;\n  border-radius: 10px;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  width: 10rem;\n}\n\n.game-btn {\n  padding: 1rem;\n  border-radius: 10px;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  width: 8rem;\n}\n\n.header {\n  display: flex;\n  height: 8.4rem;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  border: 2px solid #000;\n}\n.header__away, .header__home {\n  display: flex;\n}\n.header__away--name, .header__home--name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-style: italic;\n  font-size: 5rem;\n  height: 8rem;\n  width: calc(50vw - 27rem);\n  text-shadow: 1px 1px 8px #000;\n}\n.header__away--score, .header__home--score {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n  box-shadow: inset 0 0 10px #000;\n}\n.header__away--logo-container, .header__home--logo-container {\n  height: 8rem;\n  width: 12rem;\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__away--logo, .header__home--logo {\n  max-height: 9rem;\n  max-width: 10rem;\n  background-color: transparent;\n  filter: drop-shadow(2px 2px 10px #000);\n}\n.header__away--name {\n  background-color: rgb(120, 47, 64);\n  color: #fff;\n}\n.header__home--name {\n  background-color: rgb(70, 29, 124);\n  color: #fff;\n}\n.header__away--logo-container {\n  background-color: rgb(120, 47, 64);\n}\n.header__home--logo-container {\n  background-color: rgb(70, 29, 124);\n}\n.header__score {\n  font-size: 6.5rem;\n  background-color: rgb(20, 20, 20);\n  color: #fff;\n  width: 10rem;\n}\n.header__quarter {\n  font-size: 3rem;\n  background-color: #000;\n  color: rgb(247, 227, 113);\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__rank {\n  background-color: transparent;\n  font-size: 3rem;\n  margin-right: 0.5rem;\n}\n.header__possession {\n  height: 4rem;\n  width: 4rem;\n  z-index: 1000;\n}\n\n.away-plays-container {\n  left: 0;\n}\n\n.home-plays-container {\n  right: 0;\n}\n\n.plays-container {\n  bottom: 8.4rem;\n  height: calc(100vh - 16.8rem);\n  height: 0;\n  width: calc(50vw - 15rem);\n  background-color: rgb(20, 20, 20);\n  position: absolute;\n  overflow: hidden;\n}\n\n.play {\n  padding: 0.2rem;\n  border: 2px solid #000;\n  width: 100%;\n  height: 3rem;\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.play__logo {\n  max-height: 2.5rem;\n  width: auto;\n}\n.play__btns {\n  display: flex;\n}\n.play__btn {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: rgb(20, 20, 20);\n}\n.play__btn--icon {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #fff;\n}\n\n.stat-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: calc(100vh - 16.8rem);\n}\n\n.center-container {\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  width: 30rem;\n  border: 2px solid #000;\n  overflow: hidden;\n}\n\n.box-score {\n  font-size: 2rem;\n  font-family: \"Varela Round\", sans-serif;\n}\n.box-score__cell {\n  padding: 0.5rem;\n}\n\n.team-stats__cell {\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 0.2rem;\n}\n\n.away-stats,\n.home-stats {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.2rem;\n  padding: 2rem 2rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow-y: auto;\n}\n.away-stats__table,\n.home-stats__table {\n  margin-left: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.stat-line-header {\n  padding: 0 1rem;\n}\n\n.team-stats {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: space-evenly;\n  text-align: center;\n}\n.team-stats__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n.team-stats__logo-space {\n  width: 11rem;\n}\n.team-stats__away--logo, .team-stats__home--logo {\n  display: inline-block;\n  width: fit-content;\n}",".hidden {\r\n  display: none;\r\n}\r\n\r\n.small-logo {\r\n  max-height: 3rem;\r\n  max-width: 3rem;\r\n}\r\n","*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n",".blur-background {\r\n  position: fixed;\r\n  background-color: rgba($color-black, 0.3);\r\n  backdrop-filter: blur(10px);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  // display: none;\r\n}\r\n",".play-input {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 50%;\r\n  width: 70%;\r\n  background-color: $color-white;\r\n  font-size: 1.8rem;\r\n  display: none;\r\n  font-family: $primary-font;\r\n\r\n  &__logo-container {\r\n  }\r\n\r\n  &__type-inputs {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  &__click-inputs {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  &__logo {\r\n    max-height: 12rem;\r\n    max-width: 12rem;\r\n  }\r\n\r\n  &__pass {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    &--title {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n}\r\n","// Colors\r\n$color-home-primary: rgb(70, 29, 124);\r\n$color-home-secondary: rgb(253, 208, 35);\r\n\r\n$color-away-primary: rgb(120, 47, 64);\r\n$color-away-secondary: rgb(206, 184, 136);\r\n\r\n$color-black: #000;\r\n$color-white: #fff;\r\n\r\n$color-score: $color-white;\r\n$color-score-background: rgb(20, 20, 20);\r\n\r\n$color-quarter: rgb(247, 227, 113);\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\r\n\r\n$primary-font: \"Varela Round\", sans-serif;\r\n",".team-select {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $color-white;\r\n  height: 50%;\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  z-index: 1000;\r\n\r\n  &__home,\r\n  &__away {\r\n    font-family: $primary-font;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n",".button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: $color-white;\r\n  height: 8.4rem;\r\n  border: 2px solid $color-black;\r\n  background-color: $color-score-background;\r\n\r\n  &__away,\r\n  &__home {\r\n    width: calc(50% - 15rem);\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  &__game {\r\n    width: 30rem;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n  }\r\n}\r\n\r\n.away-btn,\r\n.home-btn {\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  font-family: $primary-font;\r\n  font-size: 1.8rem;\r\n  text-transform: uppercase;\r\n  width: 10rem;\r\n}\r\n\r\n.game-btn {\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  font-family: $primary-font;\r\n  font-size: 1.8rem;\r\n  text-transform: uppercase;\r\n  width: 8rem;\r\n}\r\n",".header {\r\n  display: flex;\r\n  height: 8.4rem;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: $primary-font;\r\n  border: 2px solid $color-black;\r\n\r\n  &__away,\r\n  &__home {\r\n    display: flex;\r\n\r\n    &--name {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-transform: uppercase;\r\n      font-style: italic;\r\n      font-size: 5rem;\r\n      height: 8rem;\r\n      width: calc(50vw - 27rem);\r\n      text-shadow: 1px 1px 8px $color-black;\r\n    }\r\n\r\n    &--score {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      height: 8rem;\r\n      box-shadow: inset 0 0 10px $color-black;\r\n    }\r\n\r\n    &--logo-container {\r\n      height: 8rem;\r\n      width: 12rem;\r\n      background-color: $color-score-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n\r\n    &--logo {\r\n      max-height: 9rem;\r\n      max-width: 10rem;\r\n      background-color: transparent;\r\n      filter: drop-shadow(2px 2px 10px $color-black);\r\n    }\r\n  }\r\n\r\n  &__away--name {\r\n    background-color: $color-away-primary;\r\n    color: $color-white;\r\n  }\r\n\r\n  &__home--name {\r\n    background-color: $color-home-primary;\r\n    color: $color-white;\r\n  }\r\n\r\n  &__away--logo-container {\r\n    background-color: $color-away-primary;\r\n  }\r\n\r\n  &__home--logo-container {\r\n    background-color: $color-home-primary;\r\n  }\r\n\r\n  &__score {\r\n    font-size: 6.5rem;\r\n    background-color: $color-score-background;\r\n    color: $color-score;\r\n    width: 10rem;\r\n  }\r\n\r\n  &__quarter {\r\n    font-size: 3rem;\r\n    background-color: $color-black;\r\n    color: $color-quarter;\r\n    height: 100%;\r\n    width: 10rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__rank {\r\n    background-color: transparent;\r\n    font-size: 3rem;\r\n    margin-right: 0.5rem;\r\n  }\r\n\r\n  &__possession {\r\n    height: 4rem;\r\n    width: 4rem;\r\n    z-index: 1000;\r\n  }\r\n}\r\n",".away-plays-container {\r\n  left: 0;\r\n}\r\n\r\n.home-plays-container {\r\n  right: 0;\r\n}\r\n\r\n.plays-container {\r\n  bottom: 8.4rem;\r\n  height: calc(100vh - 16.8rem);\r\n  height: 0;\r\n  width: calc(50vw - 15rem);\r\n  background-color: $color-score-background;\r\n  position: absolute;\r\n  overflow: hidden;\r\n}\r\n\r\n.play {\r\n  padding: 0.2rem;\r\n  border: 2px solid $color-black;\r\n  width: 100%;\r\n  height: 3rem;\r\n  font-size: 1.4rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  &__logo {\r\n    max-height: 2.5rem;\r\n    width: auto;\r\n  }\r\n  &__btns {\r\n    display: flex;\r\n  }\r\n  &__btn {\r\n    height: 2.5rem;\r\n    width: 2.5rem;\r\n    background-color: $color-score-background;\r\n    &--icon {\r\n      height: 2.5rem;\r\n      width: 2.5rem;\r\n      fill: $color-white;\r\n    }\r\n  }\r\n}\r\n",".stat-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: $color-white;\r\n  height: calc(100vh - 16.8rem);\r\n}\r\n\r\n.center-container {\r\n  background-color: $color-score-background;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 30rem;\r\n  border: 2px solid $color-black;\r\n  overflow: hidden;\r\n}\r\n\r\n.box-score {\r\n  font-size: 2rem;\r\n  font-family: $primary-font;\r\n\r\n  &__cell {\r\n    padding: 0.5rem;\r\n  }\r\n}\r\n\r\n.team-stats {\r\n  &__cell {\r\n    font-family: $primary-font;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    padding: 0.2rem;\r\n  }\r\n}\r\n\r\n.away-stats,\r\n.home-stats {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: $primary-font;\r\n  font-size: 1.2rem;\r\n  padding: 2rem 2rem;\r\n  width: calc(50vw - 15rem);\r\n  height: calc(100vh - 16.8rem);\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  overflow-y: auto;\r\n\r\n  &__table {\r\n    margin-left: 2rem;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n}\r\n\r\n.stat-line-header {\r\n  padding: 0 1rem;\r\n}\r\n",".team-stats {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: space-evenly;\r\n  text-align: center;\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: flex-end;\r\n  }\r\n\r\n  &__logo-space {\r\n    width: 11rem;\r\n  }\r\n\r\n  &__away--logo,\r\n  &__home--logo {\r\n    display: inline-block;\r\n    width: fit-content;\r\n  }\r\n\r\n  &__headers {\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/data/teams.json":
/*!************************************!*\
  !*** ./src/assets/data/teams.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Alabama","uniName":"University of Alabama","abbName":"Alabama","initials":"ALA","id":"bama","nickname":"Crimson Tide","primaryColor":"rgb(158, 27, 50)","secondaryColor":"rgb(130, 138, 143)","conference":"SEC"},{"name":"Appalachian State","uniName":"Appalachian State University","abbName":"App State","initials":"ASU","id":"appst","nickname":"Mountaineers","primaryColor":"rgb(34, 34, 34)","secondaryColor":"rgb(255, 204, 0)","conference":"Sun Belt Conference"},{"name":"Arizona","uniName":"University of Arizona","abbName":"Arizona","initials":"ARI","id":"ari","nickname":"Wildcats","primaryColor":"rgb(204, 0, 51)","secondaryColor":"rgb(0, 51, 102)","conference":"Pac-12"},{"name":"Arizona State","uniName":"Arizona State University","abbName":"Arizona St","initials":"ASU","id":"asu","nickname":"Sun Devils","primaryColor":"rgb(140, 29, 64)","secondaryColor":"rgb(255, 198, 39)","conference":"Pac-12"},{"name":"Arkansas","uniName":"University of Arkansas","abbName":"Arkansas","initials":"ARK","id":"ark","nickname":"Razorbacks","primaryColor":"rgb(157, 34, 53)","secondaryColor":"rgb(255, 255, 255)","conference":"SEC"},{"name":"Auburn","uniName":"Auburn University","abbName":"Auburn","initials":"AUB","id":"aub","nickname":"Tigers","primaryColor":"rgb(12, 35, 64)","secondaryColor":"rgb(232, 119, 34)","conference":"SEC"},{"name":"Baylor","uniName":"Baylor University","abbName":"Baylor","initials":"BU","id":"bu","nickname":"Bears","primaryColor":"rgb(21, 71, 52)","secondaryColor":"rgb(255, 184, 28)","conference":"Big-12"},{"name":"Boston College","uniName":"Boston College","abbName":"Boston Coll","initials":"BC","id":"bc","nickname":"Eagles","primaryColor":"rgb(115, 0, 10)","secondaryColor":"rgb(203, 182, 119)","conference":"ACC"},{"name":"BYU","uniName":"Brigham Young University","abbName":"BYU","initials":"BYU","id":"byu","nickname":"Cougars","primaryColor":"rgb(0, 46, 93)","secondaryColor":"rgb(255, 255, 255)","conference":"Independent"},{"name":"California","uniName":"University of California at Berkeley","abbName":"Cal","initials":"CAL","id":"cal","nickname":"Golden Bears","primaryColor":"rgb(0, 50, 98)","secondaryColor":"rgb(253, 181, 21)","conference":"Pac-12"},{"name":"Clemson","uniName":"Clemson University","abbName":"Clemson","initials":"CU","id":"clemson","nickname":"Tigers","primaryColor":"rgb(245, 102, 0)","secondaryColor":"rgb(82, 45, 128)","conference":"ACC"},{"name":"Colorado","uniName":"Colorado University","abbName":"Colorado","initials":"CU","id":"colorado","nickname":"Buffaloes","primaryColor":"rgb(207, 184, 124)","secondaryColor":"rgb(0, 0, 0)","conference":"Pac-12"},{"name":"Duke","uniName":"Duke University","abbName":"Duke","initials":"DUKE","id":"duke","nickname":"Blue Devils","primaryColor":"rgb(0, 48, 135)","secondaryColor":"rgb(255, 255, 255)","conference":"ACC"},{"name":"Duquesne","uniName":"Duquesne","abbName":"Duquesne","initials":"DU","id":"duquesne","nickname":"Dukes","primaryColor":"rgb(4, 30, 66)","secondaryColor":"rgb(186, 12, 47)","conference":"Northeastern Conference"},{"name":"East Carolina","uniName":"East Carolina University","abbName":"E Carolina","initials":"ECU","id":"ecu","nickname":"Pirates","primaryColor":"rgb(89, 42, 138)","secondaryColor":"rgb(253, 200, 47)","conference":"AAC"},{"name":"Florida","uniName":"University of Florida","abbName":"Florida","initials":"UF","id":"uf","nickname":"Gators","primaryColor":"rgb(0, 33, 165)","secondaryColor":"rgb(250, 70, 22)","conference":"SEC"},{"name":"Florida State","uniName":"Florida State University","abbName":"Florida St","initials":"FSU","id":"fsu","nickname":"Seminoles","primaryColor":"rgb(120, 47, 64)","secondaryColor":"rgb(206, 184, 136)","conference":"ACC"},{"name":"Georgia","uniName":"University of Georgia","abbName":"Georgia","initials":"UGA","id":"uga","nickname":"Bulldogs","primaryColor":"rgb(186, 12, 47)","secondaryColor":"rgb(0, 0, 0)","conference":"SEC"},{"name":"Georgia Tech","uniName":"Georgia Institute of Technology","abbName":"Ga Tech","initials":"GT","id":"gt","nickname":"Yellow Jackets","primaryColor":"rgb(179, 163, 105)","secondaryColor":"rgb(0, 48, 87)","conference":"ACC"},{"name":"Illinois","uniName":"University of Illinois","abbName":"Illinois","initials":"ILL","id":"ill","nickname":"Fighting Illini","primaryColor":"rgb(19, 41, 75)","secondaryColor":"rgb(232, 74, 39)","conference":"B1G"},{"name":"Indiana","uniName":"Indiana University","abbName":"Indiana","initials":"IND","id":"ind","nickname":"Hoosiers","primaryColor":"rgb(153, 0, 0)","secondaryColor":"rgb(238, 237, 235)","conference":"B1G"},{"name":"Iowa","uniName":"University of Iowa","abbName":"Iowa","initials":"IOWA","id":"iowa","nickname":"Hawkeyes","primaryColor":"rgb(255, 205, 0)","secondaryColor":"rgb(0, 0, 0)","conference":"B1G"},{"name":"Iowa State","uniName":"Iowa State University","abbName":"Iowa St","initials":"ISU","id":"isu","nickname":"Cyclones","primaryColor":"rgb(200, 16, 46)","secondaryColor":"rgb(241, 190, 72)","conference":"Big-12"},{"name":"Kansas","uniName":"Kansas University","abbName":"Kansas","initials":"KU","id":"ku","nickname":"Jayhawks","primaryColor":"rgb(0, 81, 186)","secondaryColor":"rgb(232, 0, 13)","conference":"Big-12"},{"name":"Kansas State","uniName":"Kansas State University","abbName":"K State","initials":"KSU","id":"ksu","nickname":"Wildcats","primaryColor":"rgb(81, 40, 136)","secondaryColor":"rgb(209, 209, 209)","conference":"Big-12"},{"name":"Kentucky","uniName":"University of Kentucky","abbName":"Kentucky","initials":"UK","id":"uk","nickname":"Wildcats","primaryColor":"rgb(0, 51, 160)","secondaryColor":"rgb(255, 255, 255)","conference":"SEC"},{"name":"Louisana State","uniName":"Louisiana State University","abbName":"LSU","initials":"LSU","id":"lsu","nickname":"Tigers","primaryColor":"rgb(70, 29, 124)","secondaryColor":"rgb(253, 208, 35)","conference":"SEC"},{"name":"Louisville","uniName":"University of Louisville","abbName":"Louisville","initials":"UL","id":"ul","nickname":"Cardinals","primaryColor":"rgb(227, 27, 35)","secondaryColor":"rgb(0, 0, 0)","conference":"ACC"},{"name":"Maryland","uniName":"University of Maryland","abbName":"Maryland","initials":"UMD","id":"umd","nickname":"Terrapins","primaryColor":"rgb(224, 58, 62)","secondaryColor":"rgb(255, 213, 32)","conference":"B1G"},{"name":"Miami","uniName":"University of Miami","abbName":"Miami","initials":"MIA","id":"mia","nickname":"Hurricanes","primaryColor":"rgb(244, 115, 33)","secondaryColor":"rgb(0, 80, 48)","conference":"ACC"},{"name":"Michigan","uniName":"University of Michigan","abbName":"Michigan","initials":"UM","id":"um","nickname":"Wolverines","primaryColor":"rgb(0, 39, 76)","secondaryColor":"rgb(255, 203, 5)","conference":"B1G"},{"name":"Michigan State","uniName":"Michigan State University","abbName":"Michigan St","initials":"MSU","id":"msu","nickname":"Spartans","primaryColor":"rgb(24, 69, 59)","secondaryColor":"rgb(255, 255, 255)","conference":"B1G"},{"name":"Minnesota","uniName":"University of Minnesota","abbName":"Minnesota","initials":"MIN","id":"min","nickname":"Golden Gophers","primaryColor":"rgb(122, 0, 25)","secondaryColor":"rgb(255, 204, 51)","conference":"B1G"},{"name":"Ole Miss","uniName":"University of Mississippi","abbName":"Ole Miss","initials":"MISS","id":"miss","nickname":"Rebels","primaryColor":"rgb(204, 9, 47)","secondaryColor":"rgb(22, 43, 72)","conference":"SEC"},{"name":"Mississippi State","uniName":"Mississippi State University","abbName":"Miss St","initials":"MSU","id":"missst","nickname":"Bulldogs","primaryColor":"rgb(102, 0, 0)","secondaryColor":"rgb(255, 255, 255)","conference":"SEC"},{"name":"Missouri","uniName":"University of Missouri","abbName":"Missouri","initials":"MIZZOU","id":"mizzou","nickname":"Razorbacks","primaryColor":"rgb(0, 0, 0)","secondaryColor":"rgb(241, 184, 45)","conference":"SEC"},{"name":"Nebraska","uniName":"University of Nebraska","abbName":"Nebraska","initials":"NEB","id":"neb","nickname":"Cornhuskers","primaryColor":"rgb(227, 25, 55)","secondaryColor":"rgb(0, 0, 0)","conference":"B1G"},{"name":"North Carolina","uniName":"University of North Carolina","abbName":"N Carolina","initials":"unc","id":"unc","nickname":"Tar Heels","primaryColor":"rgb(123, 175, 212)","secondaryColor":"rgb(255, 255, 255)","conference":"ACC"},{"name":"North Carolina State","uniName":"North Carolina State University","abbName":"NC State","initials":"NCSU","id":"ncsu","nickname":"Wolfpack","primaryColor":"rgb(204, 0, 0)","secondaryColor":"rgb(0, 0, 0)","conference":"ACC"},{"name":"Northwestern","uniName":"Northwestern University","abbName":"N\'Western","initials":"NWU","id":"nwu","nickname":"Wildcats","primaryColor":"rgb(78, 42, 132)","secondaryColor":"rgb(255, 255, 255)","conference":"B1G"},{"name":"Notre Dame","uniName":"University of Notre Dame","abbName":"Notre Dame","initials":"ND","id":"nd","nickname":"Fighting Irish","primaryColor":"rgb(12, 35, 64)","secondaryColor":"rgb(201, 151, 0)","conference":"Independent"},{"name":"Ohio State","uniName":"Ohio State University","abbName":"Ohio St","initials":"OSU","id":"osu","nickname":"Buckeyes","primaryColor":"rgb(187, 0, 0)","secondaryColor":"rgb(102, 102, 102)","conference":"B1G"},{"name":"Oklahoma","uniName":"Oklahoma University","abbName":"Oklahoma","initials":"OU","id":"ou","nickname":"Sooners","primaryColor":"rgb(132, 23, 25)","secondaryColor":"rgb(253, 249, 216)","conference":"Big-12"},{"name":"Oklahoma State","uniName":"Oklahoma State University","abbName":"Oklahoma St","initials":"OSU","id":"oksu","nickname":"Cowboys","primaryColor":"rgb(255, 124, 25)","secondaryColor":"rgb(0, 0, 0)","conference":"Big-12"},{"name":"Oregon","uniName":"University of Oregon","abbName":"Oregon","initials":"ORE","id":"ore","nickname":"Ducks","primaryColor":"rgb(18, 71, 52)","secondaryColor":"rgb(254, 225, 35)","conference":"Pac-12"},{"name":"Oregon State","uniName":"Oregon State University","abbName":"Oregon St","initials":"OSU","id":"orest","nickname":"Beavers","primaryColor":"rgb(220, 68, 5)","secondaryColor":"rgb(0, 0, 0)","conference":"Pac-12"},{"name":"Penn State","uniName":"Pennsylvania State University","abbName":"Penn State","initials":"PSU","id":"psu","nickname":"Nittany Lions","primaryColor":"rgb(4, 30, 66)","secondaryColor":"rgb(255, 255, 255)","conference":"B1G"},{"name":"Pittsburgh","uniName":"University of Pittsburgh","abbName":"Pitt","initials":"PITT","id":"pitt","nickname":"Panthers","primaryColor":"rgb(0, 53, 148)","secondaryColor":"rgb(255, 184, 28)","conference":"ACC"},{"name":"Purdue","uniName":"Purdue University","abbName":"Purdue","initials":"PUR","id":"pur","nickname":"Boilermakers","primaryColor":"rgb(206, 184, 136)","secondaryColor":"rgb(0, 0, 0)","conference":"B1G"},{"name":"Rutgers","uniName":"Rutgers University","abbName":"Rutgers","initials":"RU","id":"ru","nickname":"Scarlet Knights","primaryColor":"rgb(204, 0, 51)","secondaryColor":"rgb(95, 106, 114)","conference":"B1G"},{"name":"South Carolina","uniName":"University of South Carolina","abbName":"S Carolina","initials":"USC","id":"scar","nickname":"Gamecocks","primaryColor":"rgb(115, 0, 10)","secondaryColor":"rgb(0, 0, 0)","conference":"SEC"},{"name":"Stanford","uniName":"Stanford University","abbName":"Stanford","initials":"STAN","id":"stan","nickname":"Cardinal","primaryColor":"rgb(140, 21, 21)","secondaryColor":"rgb(77, 79, 83)","conference":"Pac-12"},{"name":"Syracuse","uniName":"Syracuse University","abbName":"Syracuse","initials":"CUSE","id":"cuse","nickname":"Orange","primaryColor":"rgb(247, 105, 0)","secondaryColor":"rgb(0, 14, 84)","conference":"ACC"},{"name":"Tennessee","uniName":"University of Tennessee","abbName":"Tennessee","initials":"TENN","id":"tenn","nickname":"Volunteers","primaryColor":"rgb(255, 130, 0)","secondaryColor":"rgb(88, 89, 91)","conference":"SEC"},{"name":"Texas","uniName":"University of Texas","abbName":"Texas","initials":"TEX","id":"tex","nickname":"Longhorns","primaryColor":"rgb(191, 87, 0)","secondaryColor":"rgb(51, 63, 72)","conference":"Big-12"},{"name":"Texas A&M","uniName":"Texas Agriculture & Mechanical University","abbName":"Texas A&M","initials":"TAMU","id":"tamu","nickname":"Aggies","primaryColor":"rgb(80, 0, 0)","secondaryColor":"rgb(255, 255, 255)","conference":"SEC"},{"name":"Texas Christian","uniName":"Texas Christian University","abbName":"TCU","initials":"TCU","id":"tcu","nickname":"Horned Frogs","primaryColor":"rgb(77, 25, 121)","secondaryColor":"rgb(164, 189, 173)","conference":"Big-12"},{"name":"Texas Tech","uniName":"Texas Tech University","abbName":"Texas Tech","initials":"TTU","id":"ttu","nickname":"Red Raiders","primaryColor":"rgb(204, 0, 0)","secondaryColor":"rgb(0, 0, 0)","conference":"Big-12"},{"name":"UCF","uniName":"University of Central Florida","abbName":"UCF","initials":"UCF","id":"ucf","nickname":"Knights","primaryColor":"rgb(186, 155, 55)","secondaryColor":"rgb(0, 0, 0)","conference":"AAC"},{"name":"UCLA","uniName":"University of Calfornia Los Angeles","abbName":"UCLA","initials":"UCLA","id":"ucla","nickname":"Bruins","primaryColor":"rgb(45, 104, 196)","secondaryColor":"rgb(242, 169, 0)","conference":"Pac-12"},{"name":"USC","uniName":"University of Southern California","abbName":"USC","initials":"USC","id":"usc","nickname":"Trojans","primaryColor":"rgb(153, 27, 30)","secondaryColor":"rgb(255, 199, 44)","conference":"Pac-12"},{"name":"Utah","uniName":"University of Utah","abbName":"Utah","initials":"UTAH","id":"utah","nickname":"Utes","primaryColor":"rgb(204, 0, 0)","secondaryColor":"rgb(128, 128, 128)","conference":"Pac-12"},{"name":"Vanderbilt","uniName":"Vanderbilt University","abbName":"Vanderbilt","initials":"VANDY","id":"vandy","nickname":"Commodores","primaryColor":"rgb(0, 0, 0)","secondaryColor":"rgb(134, 109, 75)","conference":"SEC"},{"name":"Virgina","uniName":"University of Virginia","abbName":"Virginia","initials":"UVA","id":"uva","nickname":"Cavaliers","primaryColor":"rgb(35, 45, 75)","secondaryColor":"rgb(248, 76, 30)","conference":"ACC"},{"name":"Virginia Tech","uniName":"Virginia Polytechnic Institute and State University","abbName":"Va Tech","initials":"VT","id":"vt","nickname":"Hokies","primaryColor":"rgb(99, 0, 49)","secondaryColor":"rgb(207, 69, 32)","conference":"ACC"},{"name":"Wake Forest","uniName":"Wake Forest University","abbName":"Wake","initials":"Wake","id":"wake","nickname":"Demon Deacons","primaryColor":"rgb(158, 126, 56)","secondaryColor":"rgb(0, 0, 0)","conference":"ACC"},{"name":"Washington","uniName":"University of Washington","abbName":"Washington","initials":"WASH","id":"wash","nickname":"Huskies","primaryColor":"rgb(51, 0, 111)","secondaryColor":"rgb(183, 165, 122)","conference":"Pac-12"},{"name":"Washington State","uniName":"Washington State University","abbName":"WAZZOU","initials":"WAZZOU","id":"wazzou","nickname":"Cougars","primaryColor":"rgb(152, 30, 50)","secondaryColor":"rgb(94, 106, 113)","conference":"Pac-12"},{"name":"West Virginia","uniName":"West Virginia University","abbName":"W Virginia","initials":"WVU","id":"wvu","nickname":"Mountaineers","primaryColor":"rgb(0, 40, 85)","secondaryColor":"rgb(234, 170, 0)","conference":"Big-12"},{"name":"Wisconsin","uniName":"University of Wisconsin","abbName":"Wisconsin","initials":"WIS","id":"wis","nickname":"Badgers","primaryColor":"rgb(197, 5, 12)","secondaryColor":"rgb(255, 255, 255)","conference":"B1G"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _teamLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamLoad */ "./src/js/teamLoad.js");
/* harmony import */ var _boxScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxScore */ "./src/js/boxScore.js");
/* harmony import */ var _playerStatsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerStatsContainer */ "./src/js/playerStatsContainer.js");
/* harmony import */ var _teamStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teamStats */ "./src/js/teamStats.js");
/* harmony import */ var _teamStats__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_teamStats__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plays */ "./src/js/plays.js");
/* harmony import */ var _playerStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerStats */ "./src/js/playerStats.js");
/* harmony import */ var _playerStats__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_playerStats__WEBPACK_IMPORTED_MODULE_6__);







var kickoffBtn = document.querySelector('.start-game');
var awayPlaysBtn = document.querySelector('.away-btn__plays');
var homePlaysBtn = document.querySelector('.home-btn__plays');
var awayPassBtn = document.querySelector('.away-btn__pass');
var homePassBtn = document.querySelector('.home-btn__pass');
var awayPlaysContainer = document.querySelector('.away-plays-container');
var homePlaysContainer = document.querySelector('.home-plays-container');
_teamLoad__WEBPACK_IMPORTED_MODULE_1__.teamLoader();
kickoffBtn.addEventListener('click', _teamLoad__WEBPACK_IMPORTED_MODULE_1__.kickoffInit);

var clickDisplayPlays = function clickDisplayPlays(container, btn) {
  _plays__WEBPACK_IMPORTED_MODULE_5__.displayPlays(container);
  btn.removeEventListener('click', clickDisplayPlays);
  btn.addEventListener('click', function () {
    removePlayScreen(container, btn);
  });
};

var removePlayScreen = function removePlayScreen(container, btn) {
  _plays__WEBPACK_IMPORTED_MODULE_5__.hidePlays(container);
  btn.removeEventListener('click', removePlayScreen);
  btn.addEventListener('click', function () {
    clickDisplayPlays(container, btn);
  });
};

awayPlaysBtn.addEventListener('click', function (e) {
  clickDisplayPlays(awayPlaysContainer, awayPlaysBtn);
});
homePlaysBtn.addEventListener('click', function () {
  clickDisplayPlays(homePlaysContainer, homePlaysBtn);
});
awayPassBtn.addEventListener('click', function () {
  _plays__WEBPACK_IMPORTED_MODULE_5__.displayPassPlayInput(_teamLoad__WEBPACK_IMPORTED_MODULE_1__.awayTeamId);
});
homePassBtn.addEventListener('click', function () {
  _plays__WEBPACK_IMPORTED_MODULE_5__.displayPassPlayInput(_teamLoad__WEBPACK_IMPORTED_MODULE_1__.homeTeamId);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle773fc0dd36492aee20f5.js.map