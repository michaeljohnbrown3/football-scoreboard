import './../sass/main.scss';
import * as teamLoad from './teamLoad';
import * as boxScore from './boxScore';
import * as playerStatsContainer from './playerStatsContainer';
import * as plays from './plays';
import * as playerStats from './playerStats';

const kickoffBtn = document.querySelector('.start-game');
const awayPlaysBtn = document.querySelector('.away-btn__plays');
const homePlaysBtn = document.querySelector('.home-btn__plays');
const awayPassBtn = document.querySelector('.away-btn__pass');
const homePassBtn = document.querySelector('.home-btn__pass');
const awayPlaysContainer = document.querySelector('.away-plays-container');
const homePlaysContainer = document.querySelector('.home-plays-container');

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

awayPassBtn.addEventListener('click', () => {
  plays.displayOffensePlayInput(teamLoad.awayTeamId);
});

homePassBtn.addEventListener('click', () => {
  plays.displayOffensePlayInput(teamLoad.homeTeamId);
});
