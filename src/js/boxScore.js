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

const otHeader = document.querySelector('.ot-header');
const quarterDisplay = document.querySelector('.header__quarter');
const quarterAdvanceBtn = document.querySelector('.game-btn__quarter');
const quarters = ['1st', '2nd', '3rd', '4th', '0T', 'FINAL'];

let awayBoxScore = [0, 0, 0, 0, 0];
let homeBoxScore = [0, 0, 0, 0, 0];
let awayScore;
let homeScore;

awayScore = awayBoxScore.reduce((prev, cur) => prev + cur, 0);
homeScore = homeBoxScore.reduce((prev, cur) => prev + cur, 0);

const appendScore = function (score, el) {
  el.textContent = `${score}`;
};

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

let quarterIndex = 1;
quarterAdvanceBtn.addEventListener('click', function advanceQuarter() {
  const awayOT = document.querySelector('.away-ot');
  const homeOT = document.querySelector('.home-ot');

  if (quarterIndex == 4 && homeScore !== awayScore) {
    quarterDisplay.textContent = quarters[5];
  } else {
    quarterDisplay.textContent = quarters[quarterIndex++];
  }
  if (quarterIndex == 6) {
    quarterAdvanceBtn.removeEventListener('click', advanceQuarter);
  }
  if (quarterIndex == 5 && homeScore == awayScore) {
    otHeader.removeAttribute('class', 'hidden');
    awayOT.removeAttribute('class', 'hidden');
    homeOT.removeAttribute('class', 'hidden');
  }
});
