import { v4 as uuid } from 'uuid';
import { passPlayMarkup } from './inputMarkupjs/passPlayMarkup';
import { offensivePlayMarkup } from './inputMarkupjs/passPlayMarkup';
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
  playInputContainer.style.display = 'flex';
};

const createCancel = function () {
  const cancelButton = document.querySelector('.play-input-close');
  cancelButton.addEventListener('click', () => {
    const playInputContainer = document.querySelector('.play-input');
    playInputActionsRemove();
    playInputContainer.innerHTML = '';
  });
};

const appendOffenseBackgroundImages = function () {
  const passSelect = document.querySelector('.passer-background');
  const rushSelect = document.querySelector('.rusher-background');

  passSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('img/qb.jpg')`;
  rushSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('img/rb.jpg')`;

  passSelect.addEventListener('mouseover', () => {
    passSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('img/qb.jpg')`;
  });
  passSelect.addEventListener('mouseleave', () => {
    passSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('img/qb.jpg')`;
  });

  rushSelect.addEventListener('mouseover', () => {
    rushSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('img/rb.jpg')`;
  });
  rushSelect.addEventListener('mouseleave', () => {
    rushSelect.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('img/rb.jpg')`;
  });
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

class Team {
  constructor(teamId) {
    this.id = teamId;
    this.q1Score = 0;
    this.q2Score = 0;
    this.q3Score = 0;
    this.q4Score = 0;
    this.q5Score = 0;
    this.totalScore = 0;
    this.firstDowns = 0;
    this.totalPlays = 0;
    this.yardsPerPlay = 0;
    this.passingYards = 0;
    this.completions = 0;
    this.passingAttempts = 0;
    this.yardsPerPass = 0;
    this.rushingYards = 0;
    this.yardsPerRush = 0;
    this.penalties = 0;
    this.penaltyYards = 0;
    this.turnovers = 0;
  }

  scoreSum() {
    return (
      this.q1Score + this.q2Score + this.q3Score + this.q4Score + this.q5Score
    );
  }

  perPlayCalc(yards, attempts) {
    return Math.round((yards / attempts) * 10) / 10;
  }
}

class Player {
  constructor(name, number, team) {
    this.name = name;
    this.number = number * 1;
    this.playerId = uuid();
    this.passingYards = 0;
    this.rushingYards = 0;
    this.receivingYards = 0;
    this.completions = 0;
    this.incompletions = 0;
    this.passAttempts = 0;
    this.rushAttempts = 0;
    this.targets = 0;
    this.receptions = 0;
    this.longestPass = 0;
    this.longestRush = 0;
    this.longestReception = 0;
    this.passingTouchdowns = 0;
    this.rushingTouchdowns = 0;
    this.receivingTouchdowns = 0;
    this.interceptions = 0;
    this.teamId = team;
    this.plays = [];
  }
}

class Play {
  constructor(
    playId,
    playType,
    quarter,
    passName,
    recName,
    rushName,
    passYards,
    rushYards,
    comp,
    inc,
    passTd,
    rushTd,
    passFirstDown,
    rushFirstDown,
    passFumbleLost,
    rushFumbleLost,
    passSafety,
    rushSafety,
    int,
    teamId
  ) {
    this.playId = playId;
    this.playType = playType;
    this.quarter = quarter;
    this.passer = passName;
    this.receiver = recName;
    this.rusher = rushName;
    this.passingYards = passYards * 1;
    this.rushingYards = rushYards * 1;
    this.complete = comp;
    this.incomplete = inc;
    this.passingTouchdown = passTd;
    this.rushingTouchdown = rushTd;
    this.passingFirstDown = passFirstDown;
    this.rushingFirstDown = rushFirstDown;
    this.passingFumbleLost = passFumbleLost;
    this.rushingFumbleLost = rushFumbleLost;
    this.passingSafety = passSafety;
    this.rushingSafety = rushSafety;
    this.interception = int;
    this.team = teamId;
  }
}

// Data storage

const plays = [];
const players = [];
const teams = [];

// Play results
/*
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
*/

const createPlay = function (team) {
  const passStatEl = document.getElementById(`${team}-passer-totals`);
  const recStatEl = document.getElementById(`${team}-receiving-totals`);
  const teamStatsEl = document.getElementById(`${team}-team-stats`);
  const playsEl = document.getElementById(`${team}-plays-container`);
  const teamScoreEl = document.getElementById(`${team}-score`);

  const playTypeDefine = function () {
    if (document.getElementById(`${team}-pass-input`).checked) {
      return 'pass';
    }
    if (document.getElementById(`${team}-rush-input`).checked) {
      return 'rush';
    }
  };

  const convertCheckedToValue = function (input) {
    return input ? 1 : 0;
  };

  const playId = uuid();
  const playType = playTypeDefine();
  const quarter = document.querySelector(`.header__quarter`).dataset.quarter;

  const passerSelector = document.getElementById(`passer-selector-${team}`);
  const passerName = document.getElementById(`passer-${team}`);
  const passerNumber = document.getElementById(`passer-${team}-number`);
  const receiverSelector = document.getElementById(`receiver-selector-${team}`);
  const receiverName = document.getElementById(`receiver-${team}`);
  const receiverNumber = document.getElementById(`receiver-${team}-number`);
  const rusherSelector = document.getElementById(`rusher-selector-${team}`);
  const rusherName = document.getElementById(`rusher-${team}`);
  const rusherNumber = document.getElementById(`rusher-${team}-number`);

  const nameFunction = function (selector, number, name) {
    if (selector !== null) {
      let playerName;
      players.forEach(player => {
        if (player.playerId === selector.value) {
          playerName = player.name;
          player.plays.push(playId);
        }
      });
      return playerName;
    }
    if (number !== null && name !== null) {
      return name.value;
    }
  };

  const selectedPlayerFunction = function (selector, number, name) {
    if (selector !== null) {
      let playerId;
      players.forEach(player => {
        if (player.playerId === selector.value) {
          playerId = player.playerId;
        }
      });
      return playerId;
    }
    if (number !== null && name !== null) {
      let playerId;
      players.forEach(player => {
        if (player.name === name.value) {
          playerId = player.playerId;
        }
      });
      return playerId;
    }
  };

  const passer = nameFunction(passerSelector, passerNumber, passerName);
  const receiver = nameFunction(receiverSelector, receiverNumber, receiverName);
  const rusher = nameFunction(rusherSelector, rusherNumber, rusherName);

  const passingYards = document.getElementById(
    `${team}-passing-yards-gained`
  ).value;
  const rushingYards = document.getElementById(
    `${team}-rushing-yards-gained`
  ).value;
  const complete = convertCheckedToValue(
    document.getElementById(`${team}-complete`).checked
  );
  const incomplete = convertCheckedToValue(
    document.getElementById(`${team}-incomplete`).checked
  );
  const passingTouchdown = convertCheckedToValue(
    document.getElementById(`${team}-passing-touchdown`).checked
  );
  const rushingTouchdown = convertCheckedToValue(
    document.getElementById(`${team}-rushing-touchdown`).checked
  );
  const passingFirstDown = convertCheckedToValue(
    document.getElementById(`${team}-passing-first-down`).checked
  );
  const rushingFirstDown = convertCheckedToValue(
    document.getElementById(`${team}-rushing-first-down`).checked
  );
  const passingFumbleLost = convertCheckedToValue(
    document.getElementById(`${team}-passing-fumble-lost`).checked
  );
  const rushingFumbleLost = convertCheckedToValue(
    document.getElementById(`${team}-rushing-fumble-lost`).checked
  );
  const passingSafety = convertCheckedToValue(
    document.getElementById(`${team}-passing-safety`).checked
  );
  const rushingSafety = convertCheckedToValue(
    document.getElementById(`${team}-rushing-safety`).checked
  );
  const interception = convertCheckedToValue(
    document.getElementById(`${team}-interception`).checked
  );
  const teamId = team;

  if (passerName !== null && passerName.value !== '') {
    const newPasser = new Player(passer, passerNumber.value, teamId);
    newPasser.plays.push(playId);
    players.push(newPasser);
  }

  if (receiverName !== null && receiverName.value !== '') {
    const newReceiver = new Player(receiver, receiverNumber.value, teamId);
    newReceiver.plays.push(playId);
    players.push(newReceiver);
  }

  if (rusherName !== null && rusherName.value !== '') {
    const newRusher = new Player(rusher, rusherNumber.value, teamId);
    newRusher.plays.push(playId);
    players.push(newRusher);
  }

  const newPlay = new Play(
    playId,
    playType,
    quarter,
    passer,
    receiver,
    rusher,
    passingYards,
    rushingYards,
    complete,
    incomplete,
    passingTouchdown,
    rushingTouchdown,
    passingFirstDown,
    rushingFirstDown,
    passingFumbleLost,
    rushingFumbleLost,
    passingSafety,
    rushingSafety,
    interception,
    teamId
  );
  plays.push(newPlay);

  if (teams.length === 0) {
    const newTeam = new Team(teamId);
    teams.push(newTeam);
  }

  if (teams.length !== 0) {
    teams.forEach(team => {
      console.log(team.id);
      console.log(teamId);
      if (team.id === teamId) {
        return;
      }
      if (team.id !== teamId) {
        const newTeam = new Team(teamId);
        teams.push(newTeam);
      }
    });
  }

  console.log(plays);
  console.log(players);
  console.log(teams);

  const selectedPlayer = function () {
    if (passerSelector !== null) {
      return;
    }
  };

  const selectedPasser = selectedPlayerFunction(
    passerSelector,
    passerNumber,
    passerName
  );

  const selectedReceiver = selectedPlayerFunction(
    receiverSelector,
    receiverNumber,
    receiverName
  );

  const selectedRusher = selectedPlayerFunction(
    rusherSelector,
    rusherNumber,
    rusherName
  );

  const updatePassingStats = function () {
    players.forEach(player => {
      if (player.playerId === selectedPasser) {
        player.completions += newPlay.complete;
        player.incompletions += newPlay.incomplete;
        player.passAttempts += newPlay.complete + newPlay.incomplete;
        player.passingYards += newPlay.passingYards;
        player.longestPass = 'tbd';
        player.passingTouchdowns = newPlay.passingTouchdown;
        player.interceptions = newPlay.interception;
      }
    });
  };

  const updateReceivingStats = function () {
    players.forEach(player => {
      if (player.playerId === selectedReceiver) {
        player.receptions += newPlay.complete;
        player.targets += newPlay.complete + newPlay.incomplete;
        player.receivingYards += newPlay.passingYards;
        player.longestReception = 'tbd';
        player.receivingTouchdowns = newPlay.passingTouchdown;
      }
    });
  };

  const updateRushingStats = function () {
    players.forEach(player => {
      if (player.playerId === selectedRusher) {
        player.rushingYards = newPlay.rushingYards;
        player.rushAttempts += 1;
        player.longestRush = 'tbd';
        player.rushingTouchdowns += newPlay.rushingTouchdown;
      }
    });
  };

  updatePassingStats();
  updateReceivingStats();
  updateRushingStats();
  console.log(players);

  /*
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
  */
};

const submitBtnAction = function (team) {
  const submitBtn = document.querySelector('.play-input__submit');
  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    playInputActionsRemove();
    createPlay(team);
  });
};

const appendPlayerSelector = function (el, team, type, typeUp) {
  el.innerHTML = `
    <select name="${team}-players" class="selector-options" id="${type}-selector-${team}">
      <option class="selector-options"></option>
    </select>
  `;
  const playerSelector = document.getElementById(`${type}-selector-${team}`);
  const sortedPlayers = players.sort((a, b) => a.number - b.number);

  sortedPlayers.forEach(player => {
    if (player.teamId === team) {
      const playerOption = document.createElement('option');
      playerOption.textContent = `${player.number} - ${player.name}`;
      playerOption.value = `${player.playerId}`;
      playerOption.setAttribute('class', 'selector-options');
      playerSelector.appendChild(playerOption);
    }
  });
  const newPlayerOption = document.createElement('option');
  newPlayerOption.textContent = `-- Add New Player --`;
  newPlayerOption.setAttribute('class', 'selector-options');
  newPlayerOption.value = 'new';
  playerSelector.appendChild(newPlayerOption);
  playerSelector.addEventListener('change', () => {
    if (playerSelector.value === 'new') {
      el.innerHTML = `
      <input type="number" id="${type}-${team}-number" class="play-input__players--number" placeholder="#" required>
      <input type="text" id="${type}-${team}" class="play-input__players" placeholder="${typeUp}" required>
      `;
    }
  });
};

export const displayOffensePlayInput = function (team) {
  playInputActions();

  const playInputContainer = document.querySelector('.play-input');

  offensivePlayMarkup(playInputContainer, team);

  if (players.length !== 0) {
    const teamPasserInput = document.getElementById(`${team}-passer-input`);
    appendPlayerSelector(teamPasserInput, team, 'passer', 'Passer');
    const teamReceiverInput = document.getElementById(`${team}-receiver-input`);
    appendPlayerSelector(teamReceiverInput, team, 'receiver', 'Receiver');
    const teamRusherInput = document.getElementById(`${team}-rusher-input`);
    appendPlayerSelector(teamRusherInput, team, 'rusher', 'Rusher');
  }

  createCancel();
  renderLogo(team);
  appendOffenseBackgroundImages();
  submitBtnAction(team);
};
