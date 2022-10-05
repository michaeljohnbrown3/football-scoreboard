import * as boxScoreContainer from './boxScoreContainer';
import * as plays from './plays';
import { teamLoader } from './teamLoad';
import { teamStatsArr } from './teamLoad';

const otHeader = document.querySelector('.ot-header');
const quarterDisplay = document.querySelector('.header__quarter');
const quarterAdvanceBtn = document.querySelector('.game-btn__quarter');
const quarters = ['1st', '2nd', '3rd', '4th', '0T', 'FINAL'];

let quarterIndex = 1;
let awayScore;
let homeScore;

function advanceQuarter() {
  const awayOT = document.querySelector('.away-ot');
  const homeOT = document.querySelector('.home-ot');
  awayScore = teamStatsArr[0].totalScore;
  homeScore = teamStatsArr[1].totalScore;

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
  quarterDisplay.dataset.quarter = `q${quarterIndex}`;
}

quarterAdvanceBtn.addEventListener('click', advanceQuarter);
