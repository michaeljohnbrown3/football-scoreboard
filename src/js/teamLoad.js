import teams from './../assets/data/teams.json';
import { appendStatSheet } from './playerStatsContainer';
import { appendBoxScore } from './boxScoreContainer';
import { appendTeamStats } from './teamStatsContainer';

const awaySelector = document.querySelector('#away');
const homeSelector = document.querySelector('#home');
const teamSelector = document.querySelector('.team-select');
const blurBackground = document.querySelector('.blur-background');

export const teamLoader = () => {
  teams.forEach(team => {
    const awayOption = document.createElement('option');
    awayOption.textContent = `${team.name} ${team.nickname}`;
    awayOption.setAttribute('value', `${team.id}`);
    awaySelector.appendChild(awayOption);

    const homeOption = document.createElement('option');
    homeOption.textContent = `${team.name} ${team.nickname}`;
    homeOption.setAttribute('value', `${team.id}`);
    homeSelector.appendChild(homeOption);
  });
};

const awayLogo = document.querySelector('.header__away--logo');
const awayLogoContainer = document.querySelector(
  '.header__away--logo-container'
);
const homeLogo = document.querySelector('.header__home--logo');
const homeLogoContainer = document.querySelector(
  '.header__home--logo-container'
);
const awayName = document.querySelector('.header__away--name');
const homeName = document.querySelector('.header__home--name');
const awayStats = document.querySelector('.away-stats');
const homeStats = document.querySelector('.home-stats');

const [...awayBtn] = document.querySelectorAll('.away-btn');
const [...homeBtn] = document.querySelectorAll('.home-btn');
const awayRankInput = document.querySelector('#away-rank');
const homeRankInput = document.querySelector('#home-rank');
const quarterDisplay = document.querySelector('.header__quarter');
const quarters = ['1st', '2nd', '3rd', '4th', '0T', 'FINAL'];
const awayPlaysContainers = document.querySelector('.away-plays-container');
const homePlaysContainers = document.querySelector('.home-plays-container');
const awayBoxScoreContainer = document.querySelector('.box-score__away');
const homeBoxScoreContainer = document.querySelector('.box-score__home');

const appendLogo = function (team, el) {
  el.setAttribute('src', `img/${team.id}.png`);
};

const setBackground = function (team, el) {
  el.style.backgroundColor = `${team.primaryColor}`;
};

const appendName = function (team, el, rank) {
  el.innerHTML = `<span class="header__rank">${rank.value}</span>${team.abbName}`;
};

const appendBackgroundLogo = function (team, el) {
  el.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('img/${team.id}.png')`;
};

const statsLogo = function (team, el) {
  el.forEach(e => {
    e.innerHTML = `<img class="small-logo" src="img/${team.id}.png">`;
  });
};

const teamStatsLogo = function (team, el) {
  el.innerHTML = `<img class="small-logo" src="img/${team.id}.png">`;
};

const applyBtnColor = function (team, el) {
  el.forEach(e => {
    e.style.backgroundColor = `${team.secondaryColor}`;
    e.style.color = `${team.primaryColor}`;
  });
};

const setPlaysContainerId = function (team, el) {
  el.setAttribute('id', `${team}-plays-container`);
};

export let awayTeamId;
export let homeTeamId;

export const kickoffInit = () => {
  teamSelector.setAttribute('class', 'hidden');
  blurBackground.setAttribute('class', 'hidden');
  quarterDisplay.textContent = quarters[0];

  const awaySelected = awaySelector.value;
  const homeSelected = homeSelector.value;

  teams.forEach(team => {
    if (awaySelected === team.id) {
      const awayPlayerStats = document.querySelector('.away-stats');
      const awayTeamStats = document.querySelector('.team-stats__away');
      awayTeamStats.setAttribute('id', `${awaySelected}-team-stats`);
      const awayTeamStatsLogo = document.querySelector(
        '.team-stats__away--logo'
      );
      appendBoxScore(awayBoxScoreContainer, 'away', awaySelected);
      appendTeamStats(awayTeamStats, awaySelected);
      const [...awayStatNames] = document.querySelectorAll('.away-name');
      appendLogo(team, awayLogo);
      teamStatsLogo(team, awayTeamStatsLogo);
      setBackground(team, awayLogoContainer);
      setBackground(team, awayName);
      appendName(team, awayName, awayRankInput);
      appendBackgroundLogo(team, awayStats);
      statsLogo(team, awayStatNames);
      applyBtnColor(team, awayBtn);
      awayTeamId = team.id;
      appendStatSheet(awayPlayerStats, 'away', awayTeamId);
      setPlaysContainerId(team.id, awayPlaysContainers);
    }
    if (homeSelected === team.id) {
      const homePlayerStats = document.querySelector('.home-stats');
      const homeTeamStats = document.querySelector('.team-stats__home');
      homeTeamStats.setAttribute('id', `${homeSelected}-team-stats`);
      const homeTeamStatsLogo = document.querySelector(
        '.team-stats__home--logo'
      );
      appendBoxScore(homeBoxScoreContainer, 'home', homeSelected);
      appendTeamStats(homeTeamStats, homeSelected);
      const [...homeStatNames] = document.querySelectorAll('.home-name');
      appendLogo(team, homeLogo);
      teamStatsLogo(team, homeTeamStatsLogo);
      setBackground(team, homeLogoContainer);
      setBackground(team, homeName);
      appendName(team, homeName, homeRankInput);
      appendBackgroundLogo(team, homeStats);
      statsLogo(team, homeStatNames);
      applyBtnColor(team, homeBtn);
      homeTeamId = team.id;
      appendStatSheet(homePlayerStats, 'home', homeTeamId);
      setPlaysContainerId(team.id, homePlaysContainers);
    }
  });
};
