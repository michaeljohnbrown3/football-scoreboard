import { v4 as uuid } from 'uuid';
import { passPlayMarkup } from './inputMarkupjs/passPlayMarkup';
import { TeamStats } from './teamStats';
import * as boxScore from './boxScore';
import * as teamStatsContainer from './teamStatsContainer';
import * as boxScoreContainer from './boxScoreContainer';

export const displayPlays = function (container) {
  container.style.height = 'calc(100vh - 16.8rem)';
};

export const hidePlays = function (container) {
  container.style.height = '0';
};

const playInputActions = function () {
  const blurBackground = document.querySelector('#blur-background');
  const playInputContainer = document.querySelector('.play-input');

  blurBackground.setAttribute('class', 'blur-background');
  playInputContainer.style.display = 'block';
};

const renderLogo = function (team) {
  const inputLogo = document.querySelector('.play-input__logo');
  inputLogo.setAttribute('src', `img/${team}.png`);
};

const playInputActionsRemove = function () {
  const blurBackground = document.querySelector('#blur-background');
  const playInputContainer = document.querySelector('.play-input');

  blurBackground.setAttribute('class', 'hidden');
  playInputContainer.style.display = 'none';
};

///// Stats appended and updated

const calcAvg = function (yards, denom) {
  return isNaN(yards / denom) ? 0 : Math.round((yards / denom) * 10) / 10;
};

const appendPassStats = function (el, stats, team, id) {
  el.insertAdjacentHTML(
    'beforebegin',
    `<tr class="stat-line" id="${id}">
  <th class="stat-line" id="${team}-name">${stats.name}</th>
  <th class="stat-line" id="${team}-compatt">${stats.comp}/${stats.att}</th>
  <th class="stat-line" id="${team}-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-avg">${
      Math.round((stats.yards / stats.att) * 10) / 10
    }</th>
  <th class="stat-line" id="${team}-td">${stats.td}</th>
  <th class="stat-line" id="${team}-int">${stats.int}</th>
  </tr>
  `
  );
};

const appendRecStats = function (el, stats, team, id) {
  el.insertAdjacentHTML(
    'beforebegin',
    `<tr class="stat-line" id="${id}">
  <th class="stat-line" id="${team}-name">${stats.name}</th>
  <th class="stat-line" id="${team}-rec">${stats.rec}</th>
  <th class="stat-line" id="${team}-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-avg">${calcAvg(stats.yards, stats.rec)}</th>
  <th class="stat-line" id="${team}-td">${stats.td}</th>
  <th class="stat-line" id="${team}-long">${stats.longrec}</th>
  <th class="stat-line" id="${team}-trgt">${stats.trgt}</th>
  </tr>
  `
  );
};

const updatePassStats = function (el, stats, team) {
  el.innerHTML = `
  <th class="stat-line" id="${team}-name">${stats.name}</th>
  <th class="stat-line" id="${team}-compatt">${stats.comp}/${stats.att}</th>
  <th class="stat-line" id="${team}-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-avg">${
    Math.round((stats.yards / stats.att) * 10) / 10
  }</th>
  <th class="stat-line" id="${team}-td">${stats.td}</th>
  <th class="stat-line" id="${team}-int">${stats.int}</th>
  `;
};

const updateRecStats = function (el, stats, team) {
  el.innerHTML = `
  <th class="stat-line" id="${team}-name">${stats.name}</th>
  <th class="stat-line" id="${team}-rec">${stats.rec}</th>
  <th class="stat-line" id="${team}-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-avg">${calcAvg(stats.yards, stats.rec)}</th>
  <th class="stat-line" id="${team}-td">${stats.td}</th>
  <th class="stat-line" id="${team}-long">${stats.longrec}</th>
  <th class="stat-line" id="${team}-trgt">${stats.trgt}</th>
  `;
};

const updateTotalPassStats = function (el, stats, team) {
  el.innerHTML = `
  <th>Total</th>
  <th class="stat-line">${stats.comp}/${stats.att}</th>
  <th class="stat-line">${stats.yards}</th>
  <th class="stat-line">${Math.round((stats.yards / stats.att) * 10) / 10}</th>
  <th class="stat-line">${stats.td}</th>
  <th class="stat-line">${stats.int}</th>
  `;
};

const updateTotalRecStats = function (el, stats) {
  el.innerHTML = `
  <th>Total</th>
  <th class="stat-line">${stats.rec}</th>
  <th class="stat-line">${stats.yards}</th>
  <th class="stat-line">${calcAvg(stats.yards, stats.rec)}</th>
  <th class="stat-line">${stats.td}</th>
  <th class="stat-line">${stats.longrec}</th>
  `;
};

const updateTeamStats = function (el, stats, team) {
  el.innerHTML = `
  <tr>
    <th class="team-stats__cell" id="${team}-first-downs">${
    stats.firstDowns
  }</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-total-yards">${
    stats.totalYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-total-plays">${
    stats.totalPlays
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-play">${
    isNaN(stats.yardsPerPlay) ? '0.0' : Math.round(stats.yardsPerPlay * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-passing-yards">${
    stats.passingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-comp-att">${stats.completions}/${
    stats.attempts
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-pass">${
    isNaN(stats.yardsPerPass) ? '0.0' : Math.round(stats.yardsPerPass * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-rushing-yards">${
    stats.rushingYards
  }</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-rushes">${
    stats.rushingAttempts
  }</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-rush">${
    isNaN(stats.yardsPerRush) ? '0.0' : Math.round(stats.yardsPerRush * 10) / 10
  }</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-penalties">${stats.penalties}-${
    stats.penaltyYards
  }</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-turnovers">${stats.turnovers}</th>
  </tr>
  `;
};

const updateBoxScore = function (team, qtr, score) {
  const quarterScore = document.getElementById(`${team}-${qtr}`);
  quarterScore.textContent = `${score[qtr]}`;
};

const updateScore = function (el, boxScore) {
  el.textContent = `${boxScore.calcScore()}`;
};

// Classes

class Player {
  constructor(name, team) {
    this.name = name;
    this.comp = 0;
    this.inc = 0;
    this.att = 0;
    this.trgt = 0;
    this.rec = 0;
    this.yards = 0;
    this.longrec = 0;
    this.td = 0;
    this.int = 0;
    this.id = `${team}-${name.split(' ').join('').toLowerCase()}`;
    this.teamId = `${team}`;
    this.plays = [];
  }
}

class Play {
  constructor(
    playId,
    passName,
    recName,
    comp,
    inc,
    yards,
    firstDown,
    td,
    int,
    fum,
    safety
  ) {
    this.playId = playId;
    this.passer = passName;
    this.receiver = recName;
    this.complete = comp;
    this.incomplete = inc;
    this.yards = yards;
    this.firstDown = firstDown;
    this.touchdown = td;
    this.interception = int;
    this.fumble = fum;
    this.safety = safety;
  }
}

// Data storage

const passers = [];
const rushers = [];
const receivers = [];
const kickReturners = [];
const puntReturners = [];
const kickers = [];
const punters = [];
const defensiveReturners = [];
const plays = [];

// Play results

const passComplete = function (
  el,
  passer,
  receiver,
  yards,
  touchdown,
  firstDown,
  fumbleLost,
  twoPoints,
  safety,
  newQb,
  totalQb,
  newWr,
  totalWr,
  teamStat,
  playId,
  teamId
) {
  el.insertAdjacentHTML(
    'beforeend',
    `
    <div class="play plays-container__passing-play" id="play${playId}" data-play-id=${playId}>
      <img src="img/${teamId}.png" class="play__logo">
      <p class="plays-container__passing-play--text">
      ${passer} pass complete to ${receiver} for ${yards} yards${
      touchdown
        ? ' and a TOUCHDOWN!'
        : `${firstDown ? ' and a First Down!' : ''}`
    }${fumbleLost ? ' and fumbled' : ''}${
      twoPoints ? '. Two Point Conversion Successful' : ''
    }${safety ? ' and tackled for a SAFETY' : ''}
      </p>
      <div class="play__btns">
            <svg class="play__btn--icon play__btn--icon--edit" id="play${playId}-edit">
              <use xlink:href="img/sprite.svg#icon-compose"></use>
            </svg>
            <svg class="play__btn--icon" id="play${playId}-delete">
              <use xlink:href="img/sprite.svg#icon-squared-cross"></use>
            </svg>
        </div>
    </div>`
  );
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
  teamStat.yardsPerPass = teamStat.calcAvg(
    teamStat.passingYards,
    teamStat.attempts
  );
  teamStat.yardsPerPlay = teamStat.calcAvg(
    teamStat.totalYards,
    teamStat.totalPlays
  );
  firstDown ? (teamStat.firstDowns += 1) : (teamStat.firstDowns += 0);

  const editBtn = document.getElementById(`play${playId}-edit`);
  const deleteBtn = document.getElementById(`play${playId}-delete`);
  deleteBtn.addEventListener('click', function () {
    plays.splice(playId - 1, 1);
    console.log(`Play ${playId} deleted`);
  });
};

const passIncomplete = function (
  el,
  passer,
  newQb,
  totalQb,
  newWr,
  totalWr,
  teamStat,
  playId,
  teamId
) {
  el.insertAdjacentHTML(
    'beforeend',
    `
      <div class="play plays-container__passing-play" id="play${playId}" data-play-id=${playId}>
        <img src="img/${teamId}.png" class="play__logo">
        <p class="plays-container__passing-play--text">
        ${passer} pass incomplete
        </p>
        <div class="play__btns">
            <svg class="play__btn--icon play__btn--icon--edit" id="play${playId}-edit">
              <use xlink:href="img/sprite.svg#icon-compose"></use>
            </svg>
            <svg class="play__btn--icon" id="play${playId}-delete">
              <use xlink:href="img/sprite.svg#icon-squared-cross"></use>
            </svg>
        </div>
      </div>
      `
  );
  newQb.inc += 1;
  newQb.att += 1;
  newWr.trgt += 1;
  totalQb.inc += 1;
  totalQb.att += 1;
  totalWr.trgt += 1;
  teamStat.attempts += 1;
  teamStat.totalPlays = teamStat.calcTotalPlays();
  teamStat.yardsPerPass = teamStat.calcAvg(
    teamStat.passingYards,
    teamStat.attempts
  );
  teamStat.yardsPerPlay = teamStat.calcAvg(
    teamStat.totalYards,
    teamStat.totalPlays
  );
};

// const updateScore = function (qtr, team) {
//   const boxScore = document.getElementById(`${team}-${qtr}`);
// };

const touchdownThrown = function (
  newQb,
  totalQb,
  newWr,
  totalWr,
  boxScore,
  qtr
) {
  newQb.td += 1;
  totalQb.td += 1;
  newWr.td += 1;
  totalWr.td += 1;
  boxScore[qtr] += 6;
  // possibly create a class for scores?
};

const interceptionThrown = function (newQb, totalQb, teamStat) {
  newQb.int += 1;
  totalQb.int += 1;
  teamStat.turnovers += 1;
};

const createPassPlay = function (team) {
  const passStatEl = document.getElementById(`${team}-passer-totals`);
  const recStatEl = document.getElementById(`${team}-receiving-totals`);
  const teamStatsEl = document.getElementById(`${team}-team-stats`);
  const playsEl = document.getElementById(`${team}-plays-container`);
  const teamScoreEl = document.getElementById(`${team}-score`);

  const quarter = document.querySelector(`.header__quarter`).dataset.quarter;
  const playId = uuid();

  const passer = document.getElementById(`passer-${team}`).value;
  const receiver = document.getElementById(`receiver-${team}`).value;
  const yards = document.getElementById(`yards-${team}`).value;
  const complete = document.getElementById(`complete-${team}`).checked;
  const incomplete = document.getElementById(`incomplete-${team}`).checked;
  const firstDown = document.getElementById(`first-down-${team}`).checked;
  const touchdown = document.getElementById(`touchdown-${team}`).checked;
  const interception = document.getElementById(`interception-${team}`).checked;
  const fumbleLost = document.getElementById(`fumble-lost-${team}`).checked;
  const twoPoints = document.getElementById(`two-points-${team}`).checked;
  const safety = document.getElementById(`safety-${team}`).checked;
  const teamId = team;

  const newPlay = new Play(
    playId,
    passer,
    receiver,
    complete,
    incomplete,
    yards,
    firstDown,
    touchdown,
    interception,
    fumbleLost,
    safety
  );
  plays.push(newPlay);
  console.log(plays);

  const teamStatAlt = teamStatsContainer.teamStats.find(
    team => team.id === teamId
  );
  const boxScoreAlt = boxScoreContainer.boxScoresArr.find(
    team => team.id === teamId
  );

  if (passers.length > 0) {
    const selectedPasser = passers.find(pass => pass.name === passer);
    const selectedRec = receivers.find(
      rec =>
        rec.id === `${teamId}-${receiver.split(' ').join('').toLowerCase()}`
    );

    if (selectedPasser === undefined && selectedRec === undefined) {
      const newQb = new Player(passer, teamId);
      const newWr = new Player(receiver, teamId);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);
      const totalReceivers = receivers.find(
        rec => rec.id === `${teamId}-total`
      );

      if (totalPassers === undefined) {
        const newTotalPassers = new Player('Total', teamId);
        const newTotalReceivers = new Player('Total', teamId);
        if (complete === true) {
          passComplete(
            playsEl,
            passer,
            receiver,
            yards,
            touchdown,
            firstDown,
            fumbleLost,
            twoPoints,
            safety,
            newQb,
            newTotalPassers,
            newWr,
            newTotalReceivers,
            teamStatAlt,
            playId,
            teamId
          );
        }
        if (incomplete == true) {
          passIncomplete(
            playsEl,
            passer,
            newQb,
            newTotalPassers,
            newWr,
            newTotalReceivers,
            teamStatAlt,
            playId,
            teamId
          );
        }
        if (touchdown == true) {
          touchdownThrown(
            newQb,
            newTotalPassers,
            newWr,
            newTotalReceivers,
            boxScoreAlt,
            quarter
          );
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
          passComplete(
            playsEl,
            passer,
            receiver,
            yards,
            touchdown,
            firstDown,
            fumbleLost,
            twoPoints,
            safety,
            newQb,
            totalPassers,
            newWr,
            totalReceivers,
            teamStatAlt,
            playId,
            teamId
          );
        }

        if (incomplete == true) {
          passIncomplete(
            playsEl,
            passer,
            newQb,
            totalPassers,
            newWr,
            totalReceivers,
            teamStatAlt,
            playId,
            teamId
          );
        }

        if (touchdown == true) {
          touchdownThrown(
            newQb,
            totalPassers,
            newWr,
            totalReceivers,
            boxScoreAlt,
            quarter
          );
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
      const newQb = new Player(passer, teamId);
      const wrStats = document.getElementById(`${selectedRec.id}`);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);
      const totalReceivers = receivers.find(
        rec => rec.id === `${teamId}-total`
      );

      if (complete === true) {
        passComplete(
          playsEl,
          selectedPasser,
          receiver,
          yards,
          touchdown,
          firstDown,
          fumbleLost,
          twoPoints,
          safety,
          newQb,
          totalPassers,
          selectedRec,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (incomplete === true) {
        passIncomplete(
          playsEl,
          newQb.name,
          newQb,
          totalPassers,
          selectedRec,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (touchdown === true) {
        touchdownThrown(
          newQb,
          totalPassers,
          selectedRec,
          totalReceivers,
          boxScoreAlt,
          quarter
        );
      }

      if (interception === true) {
        interceptionThrown(newQb, totalPassers, teamStatAlt);
      }

      passers.push(newQb);
      appendPassStats(passStatEl, newQb, teamId, newQb.id);
      updateRecStats(wrStats, selectedRec, teamId);
      updateTotalPassStats(passStatEl, totalPassers, teamId);
      updateTotalRecStats(recStatEl, totalReceivers);
    }

    if (selectedPasser !== undefined && selectedRec === undefined) {
      const qbStats = document.getElementById(`${selectedPasser.id}`);
      const newWr = new Player(receiver, teamId);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);
      const totalReceivers = receivers.find(
        rec => rec.id === `${teamId}-total`
      );

      if (complete === true) {
        passComplete(
          playsEl,
          selectedPasser.name,
          receiver,
          yards,
          touchdown,
          firstDown,
          fumbleLost,
          twoPoints,
          safety,
          selectedPasser,
          totalPassers,
          newWr,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (incomplete === true) {
        passIncomplete(
          playsEl,
          selectedPasser.name,
          selectedPasser,
          totalPassers,
          newWr,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (touchdown === true) {
        touchdownThrown(
          selectedPasser,
          totalPassers,
          newWr,
          totalReceivers,
          boxScoreAlt,
          quarter
        );
      }

      if (interception === true) {
        interceptionThrown(selectedPasser, totalPassers, teamStatAlt);
      }

      receivers.push(newWr);
      updatePassStats(qbStats, selectedPasser, teamId);
      appendRecStats(recStatEl, newWr, teamId, newWr.id);
      updateTotalPassStats(passStatEl, totalPassers, teamId);
      updateTotalRecStats(recStatEl, totalReceivers);
    }

    if (selectedPasser !== undefined && selectedRec !== undefined) {
      const qbStats = document.getElementById(`${selectedPasser.id}`);
      const wrStats = document.getElementById(`${selectedRec.id}`);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);
      const totalReceivers = receivers.find(
        rec => rec.id === `${teamId}-total`
      );

      if (complete === true) {
        passComplete(
          playsEl,
          selectedPasser.name,
          receiver,
          yards,
          touchdown,
          firstDown,
          fumbleLost,
          twoPoints,
          safety,
          selectedPasser,
          totalPassers,
          selectedRec,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (incomplete === true) {
        passIncomplete(
          playsEl,
          selectedPasser.name,
          selectedPasser,
          totalPassers,
          selectedRec,
          totalReceivers,
          teamStatAlt,
          playId,
          teamId
        );
      }

      if (touchdown === true) {
        touchdownThrown(
          selectedPasser,
          totalPassers,
          selectedRec,
          totalReceivers,
          boxScoreAlt,
          quarter
        );
      }

      if (interception === true) {
        interceptionThrown(selectedPasser, totalPassers, teamStatAlt);
      }
      updatePassStats(qbStats, selectedPasser, teamId);
      updateRecStats(wrStats, selectedRec, teamId);
      updateTotalPassStats(passStatEl, totalPassers, teamId);
      updateTotalRecStats(recStatEl, totalReceivers);
    }
  }

  if (passers.length === 0) {
    const newQb = new Player(passer, teamId);
    const newWr = new Player(receiver, teamId);
    const totalPassers = new Player('Total', teamId);
    const totalReceivers = new Player('Total', teamId);

    if (complete === true) {
      passComplete(
        playsEl,
        passer,
        receiver,
        yards,
        touchdown,
        firstDown,
        fumbleLost,
        twoPoints,
        safety,
        newQb,
        totalPassers,
        newWr,
        totalReceivers,
        teamStatAlt,
        playId,
        teamId
      );
    }

    if (incomplete == true) {
      passIncomplete(
        playsEl,
        passer,
        newQb,
        totalPassers,
        newWr,
        totalReceivers,
        teamStatAlt,
        playId,
        teamId
      );
    }

    if (touchdown == true) {
      touchdownThrown(
        newQb,
        totalPassers,
        newWr,
        totalReceivers,
        boxScoreAlt,
        quarter
      );
    }

    if (interception == true) {
      interceptionThrown(newQb, totalPassers, teamStatAlt);
    }

    passers.push(newQb);
    passers.push(totalPassers);
    receivers.push(newWr);
    receivers.push(totalReceivers);
    appendPassStats(passStatEl, newQb, teamId, newQb.id);
    appendRecStats(recStatEl, newWr, teamId, newWr.id);
    updateTotalPassStats(passStatEl, totalPassers, teamId);
    updateTotalRecStats(recStatEl, totalReceivers);
  }
  updateTeamStats(teamStatsEl, teamStatAlt, teamId);
  updateBoxScore(teamId, quarter, boxScoreAlt);
  updateScore(teamScoreEl, boxScoreAlt);
};

const submitBtnAction = function (team) {
  const submitBtn = document.querySelector('.play-input__submit');
  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    playInputActionsRemove();
    createPassPlay(team);
  });
};

export const displayPassPlayInput = function (team) {
  playInputActions();

  const playInputContainer = document.querySelector('.play-input');
  passPlayMarkup(playInputContainer, team);
  renderLogo(team);
  submitBtnAction(team);
};
