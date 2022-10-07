import { updateTeamStatDisplay } from './teamStatsContainer';

export const appendPlayNarration = function (
  el,
  play,
  playsArr,
  teamStatContainer,
  team,
  selectedTeam
) {
  if (play.complete == 1) {
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
};
