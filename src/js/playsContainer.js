import { updateBoxScoreDisplay } from './boxScoreContainer';
import { updatePlayerStats } from './classesjs/player';
import { updateTeamStats } from './classesjs/team';
import {
  updatePasserStats,
  updateReceiverStats,
  updateRusherStats,
  updateTotalPasserStats,
  updateTotalReceivingStats,
  updateTotalRushingStats,
} from './playerStatsContainer';
import { updateTeamStatDisplay } from './teamStatsContainer';

export const appendPlayNarration = function (
  el,
  play,
  playsArr,
  teamsArr,
  playersArr
) {
  if (play.complete == 1) {
    console.log('complete pass');
    el.insertAdjacentHTML(
      'beforeend',
      `
        <div class="play plays-container__passing-play" id="play${
          play.playId
        }" data-play-id=${play.playId}>
          <img src="img/${play.team}.png" class="play__logo">
          <p class="plays-container__passing-play--text">
          ${play.passer} pass complete to ${play.receiver} for ${
        play.passingYards
      } yards${
        play.passingTouchdown
          ? ' and a TOUCHDOWN!'
          : `${play.passingFirstDown ? ' and a First Down!' : ''}`
      }${play.passingFumbleLost ? ' and fumbled' : ''}${
        play.passingSafety ? ' and tackled for a SAFETY' : ''
      }
          </p>
          <div class="play__btns">
                <svg class="play__btn--icon play__btn--icon--edit" id="play${
                  play.playId
                }-edit">
                  <use xlink:href="img/sprite.svg#icon-compose"></use>
                </svg>
                <svg class="play__btn--icon" id="play${play.playId}-delete">
                  <use xlink:href="img/sprite.svg#icon-squared-cross"></use>
                </svg>
            </div>
        </div>
    `
    );
  }
  if (play.incomplete == 1) {
    console.log('incomplete pass');
    el.insertAdjacentHTML(
      'beforeend',
      `
      <div class="play plays-container__passing-play" id="play${
        play.playId
      }" data-play-id=${play.playId}>
        <img src="img/${play.team}.png" class="play__logo">
        <p class="plays-container__passing-play--text">
        ${play.passer} pass ${
        play.receiverId === undefined ? '' : 'intended for ' + play.receiver
      } ${play.interception !== 1 ? ' is incomplete' : 'is INTERCEPTED!'}
        </p>
        <div class="play__btns">
              <svg class="play__btn--icon play__btn--icon--edit" id="play${
                play.playId
              }-edit">
                <use xlink:href="img/sprite.svg#icon-compose"></use>
              </svg>
              <svg class="play__btn--icon" id="play${play.playId}-delete">
                <use xlink:href="img/sprite.svg#icon-squared-cross"></use>
              </svg>
          </div>
      </div>
      `
    );
  }

  if (play.rushingAttempt == 1) {
    console.log('running play');
    el.insertAdjacentHTML(
      'beforeend',
      `
      <div class="play plays-container__passing-play" id="play${
        play.playId
      }" data-play-id=${play.playId}>
        <img src="img/${play.team}.png" class="play__logo">
        <p class="plays-container__passing-play--text">
        ${play.rusher} run for ${play.rushingYards} yards${
        play.rushingTouchdown
          ? ' and a TOUCHDOWN!'
          : `${play.rushingFirstDown ? ' and a First Down!' : ''}`
      }${play.rushingFumbleLost ? ' and fumbled' : ''}${
        play.rushingSafety ? ' and tackled for a SAFETY' : ''
      }
        </p>
        <div class="play__btns">
              <svg class="play__btn--icon play__btn--icon--edit" id="play${
                play.playId
              }-edit">
                <use xlink:href="img/sprite.svg#icon-compose"></use>
              </svg>
              <svg class="play__btn--icon" id="play${play.playId}-delete">
                <use xlink:href="img/sprite.svg#icon-squared-cross"></use>
              </svg>
          </div>
      </div>
      `
    );
  }

  const deleteBtn = document.getElementById(`play${play.playId}-delete`);
  const teamStatContainer = document.getElementById(`${play.team}-team-stats`);
  const passerStatContainer = document.getElementById(`${play.team}-passers`);
  const rushingStatContainer = document.getElementById(`${play.team}-rushers`);
  const receivingStatContainer = document.getElementById(
    `${play.team}-receivers`
  );

  deleteBtn.addEventListener('click', () => {
    console.log(`Delete play: ${play.playId}`);
    playsArr.forEach(playObj => {
      if (playObj.playId === play.playId) {
        const playDisplay = document.getElementById(`play${play.playId}`);
        playsArr.splice(playsArr.indexOf(playObj), 1);
        updateTeamStats(teamsArr, playsArr);
        updatePlayerStats(playersArr, playsArr);

        let selectedTeam;
        teamsArr.forEach(tm => {
          if (tm.id === play.team) {
            selectedTeam = tm;
          }
        });
        updateTeamStatDisplay(teamStatContainer, play.team, selectedTeam);
        playersArr.forEach(playerObj => {
          if (playerObj.name === play.passer) {
            updatePasserStats(playerObj);
          }
          if (playerObj.name === play.receiver) {
            updateReceiverStats(playerObj);
          }
          if (playerObj.name === play.rusher) {
            updateRusherStats(playerObj);
          }
        });
        updateBoxScoreDisplay(play.team, selectedTeam);
        updateTotalPasserStats(selectedTeam);
        updateTotalRushingStats(selectedTeam);
        updateTotalReceivingStats(selectedTeam);
        playDisplay.style.display = 'none';
      }
    });
  });
};
