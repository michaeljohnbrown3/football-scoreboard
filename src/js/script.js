import './../sass/main.scss';
import * as teamLoad from './teamLoad';
import * as boxScore from './boxScore';
import * as playerStatsContainer from './playerStatsContainer';
import * as plays from './plays';
import * as playerStats from './playerStats';
import { teamStats } from './teamStatsContainer';
import { updateBoxScoreDisplay } from './boxScoreContainer';

const kickoffBtn = document.querySelector('.start-game');
const awayPlaysBtn = document.querySelector('.away-btn__plays');
const homePlaysBtn = document.querySelector('.home-btn__plays');
const awayOffenseBtn = document.querySelector('.away-btn__offense');
const homeOffenseBtn = document.querySelector('.home-btn__offense');
const awayPlusOne = document.querySelector('.away-btn__plus-one');
const homePlusOne = document.querySelector('.home-btn__plus-one');
const awayPlaysContainer = document.querySelector('.away-plays-container');
const homePlaysContainer = document.querySelector('.home-plays-container');
const quarter = document.querySelector('.header__quarter').dataset.quarter;

teamLoad.teamLoader();

kickoffBtn.addEventListener('click', teamLoad.kickoffInit);

const clickDisplayPlays = function (container, btn) {
  plays.displayPlays(container);
  btn.removeEventListener('click', clickDisplayPlays);
  btn.addEventListener('click', () => {
    removePlayScreen(container, btn);
  });
};

const removePlayScreen = function (container, btn) {
  plays.hidePlays(container);
  btn.removeEventListener('click', removePlayScreen);
  btn.addEventListener('click', () => {
    clickDisplayPlays(container, btn);
  });
};

awayPlaysBtn.addEventListener('click', e => {
  clickDisplayPlays(awayPlaysContainer, awayPlaysBtn);
});

homePlaysBtn.addEventListener('click', () => {
  clickDisplayPlays(homePlaysContainer, homePlaysBtn);
});

awayOffenseBtn.addEventListener('click', () => {
  plays.displayOffensePlayInput(teamLoad.awayTeamId);
});

homeOffenseBtn.addEventListener('click', () => {
  plays.displayOffensePlayInput(teamLoad.homeTeamId);
});

awayPlusOne.addEventListener('click', () => {
  console.log('add 1');
  const team = teamLoad.awayTeamId;
  console.log(team);
  teamLoad.teamStatsArr.forEach(tm => {
    if (tm.id === team) {
      if (quarter === 'q1') {
        tm.q1Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q2') {
        tm.q2Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q3') {
        tm.q3Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q4') {
        tm.q4Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q5') {
        tm.q5Score += 1;
      }
    }
    tm.totalScore = tm.scoreSum();
    updateBoxScoreDisplay(team, tm);
  });
});

homePlusOne.addEventListener('click', () => {
  console.log('add 1');
  const team = teamLoad.homeTeamId;
  console.log(team);
  teamLoad.teamStatsArr.forEach(tm => {
    if (tm.id === team) {
      if (quarter === 'q1') {
        tm.q1Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q2') {
        tm.q2Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q3') {
        tm.q3Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q4') {
        tm.q4Score += 1;
      }
    }
    if (tm.id === team) {
      if (quarter === 'q5') {
        tm.q5Score += 1;
      }
    }
    tm.totalScore = tm.scoreSum();
    updateBoxScoreDisplay(team, tm);
  });
});
