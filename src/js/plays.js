import { passPlayMarkup } from './inputMarkupjs/passPlayMarkup';
import * as boxScore from './boxScore';

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

const appendPassStats = function (el, stats, team, id) {
  el.insertAdjacentHTML(
    'beforebegin',
    `<tr class="stat-line" id="${id}">
  <th class="stat-line" id="${team}-qb-name">${stats.name}</th>
  <th class="stat-line" id="${team}-qb-compatt">${stats.comp}/${stats.att}</th>
  <th class="stat-line" id="${team}-qb-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-qb-avg">${
      Math.round((stats.yards / stats.att) * 10) / 10
    }</th>
  <th class="stat-line" id="${team}-qb-td">${stats.td}</th>
  <th class="stat-line" id="${team}-qb-int">${stats.int}</th>
  </tr>
  `
  );
};

const updatePassStats = function (el, stats, team) {
  el.innerHTML = `
  <th class="stat-line" id="${team}-qb-name">${stats.name}</th>
  <th class="stat-line" id="${team}-qb-compatt">${stats.comp}/${stats.att}</th>
  <th class="stat-line" id="${team}-qb-yards">${stats.yards}</th>
  <th class="stat-line" id="${team}-qb-avg">${
    Math.round((stats.yards / stats.att) * 10) / 10
  }</th>
  <th class="stat-line" id="${team}-qb-td">${stats.td}</th>
  <th class="stat-line" id="${team}-qb-int">${stats.int}</th>
  `;
};

const updateTotalPassStats = function (el, stats) {
  el.innerHTML = `
  <th>Total</th>
  <th class="stat-line">${stats.comp}/${stats.att}</th>
  <th class="stat-line">${stats.yards}</th>
  <th class="stat-line">${Math.round((stats.yards / stats.att) * 10) / 10}</th>
  <th class="stat-line">${stats.td}</th>
  <th class="stat-line">${stats.int}</th>
  `;
};

class Passer {
  constructor(name, team) {
    this.name = name;
    this.comp = 0;
    this.inc = 0;
    this.att = 0;
    this.yards = 0;
    this.td = 0;
    this.int = 0;
    this.id = `${team}-qb-${name.split(' ').join('').toLowerCase()}`;
    this.teamId = `${team}`;
    this.plays = [];
  }
}

class PassPlay {
  constructor(
    passName,
    recName,
    comp,
    inc,
    yards = 0,
    firstDown,
    td,
    int,
    fum,
    two,
    safety
  ) {
    this.passer = passName;
    this.receiver = recName;
    this.complete = comp;
    this.incomplete = inc;
    this.yards = yards;
    this.firstDown = firstDown;
    this.touchdown = td;
    this.interception = int;
    this.fumble = fum;
    this.twoPoint = two;
    this.safety = safety;
    this.playType = 'pass';
  }
}

const passers = [];
const plays = [];

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
  totalQb
) {
  el.insertAdjacentHTML(
    'beforeend',
    `
    <div class="play plays-container__passing-play">
      <p class="plays-container__passing-play--text">
      ${passer} pass complete to ${receiver} for ${yards} yards${
      touchdown
        ? ' and a TOUCHDOWN!'
        : `${firstDown ? ' and a First Down!' : ''}`
    }${fumbleLost ? ' and lost a fumble' : ''}${
      twoPoints ? '. Two Point Conversion Successful' : ''
    }${safety ? ' and tackled for a SAFETY' : ''}
      </p>
    </div>`
  );
  newQb.comp += 1;
  newQb.att += 1;
  newQb.yards += yards * 1;
  totalQb.comp += 1;
  totalQb.att += 1;
  totalQb.yards += yards * 1;
};

const passIncomplete = function (el, passer, newQb, totalQb) {
  el.insertAdjacentHTML(
    'beforeend',
    `
      <div class="play plays-container__passing-play">
        <p class="plays-container__passing-play--text">
        ${passer} pass incomplete
        </p>
      </div>
      `
  );
  newQb.inc += 1;
  newQb.att += 1;
  totalQb.inc += 1;
  totalQb.att += 1;
};

const scoringPlays = [];

const updateScore = function () {};

const touchdownThrown = function (newQb, totalQb, team) {
  const boxScore = document.getElementById(`${team}-q1`);
  newQb.td += 1;
  totalQb.td += 1;
  quarterScore += 6;
  boxScore.innerHTML = quarterScore;

  // possibly create a class for scores?
};

const interceptionThrown = function (newQb, totalQb) {
  newQb.int += 1;
  totalQb.int += 1;
};

const createPassPlay = function (team) {
  const statEl = document.getElementById(`${team}-passer-totals`);
  const playsEl = document.getElementById(`${team}-plays-container`);
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
  const teamPasserTotals = document.getElementById(`${team}-passer-totals`);
  const teamId = team;

  if (passers.length > 0) {
    const selectedPasser = passers.find(pass => pass.name === passer);

    if (selectedPasser === undefined) {
      const newQb = new Passer(passer, teamId);
      const totalPassers = passers.find(
        pass => pass.id === `${teamId}-qb-total`
      );
      if (totalPassers === undefined) {
        const newTotalPassers = new Passer('Total', teamId);
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
            newTotalPassers
          );
        }

        if (incomplete == true) {
          passIncomplete(playsEl, passer, newQb, newTotalPassers);
        }

        if (touchdown == true) {
          touchdownThrown(newQb, newTotalPassers, teamId);
        }

        if (interception == true) {
          interceptionThrown(newQb, newTotalPassers);
        }

        passers.push(newQb);
        passers.push(newTotalPassers);
        appendPassStats(statEl, newQb, teamId, newQb.id);
        updateTotalPassStats(teamPasserTotals, newTotalPassers);
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
            totalPassers
          );
        }

        if (incomplete == true) {
          passIncomplete(playsEl, passer, newQb, totalPassers);
        }

        if (touchdown == true) {
          touchdownThrown(newQb, totalPassers, teamId);
        }

        if (interception == true) {
          interceptionThrown(newQb, totalPassers);
        }

        passers.push(newQb);
        appendPassStats(statEl, newQb, teamId, newQb.id);
        updateTotalPassStats(teamPasserTotals, totalPassers);
      }
    }

    if (selectedPasser !== undefined) {
      const qbStats = document.getElementById(`${selectedPasser.id}`);
      const totalPassers = passers.find(
        pass => pass.id === `${teamId}-qb-total`
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
          totalPassers
        );
      }

      if (incomplete === true) {
        passIncomplete(
          playsEl,
          selectedPasser.name,
          selectedPasser,
          totalPassers
        );
      }

      if (touchdown === true) {
        touchdownThrown(selectedPasser, totalPassers, teamId);
      }

      if (interception === true) {
        interceptionThrown(selectedPasser, totalPassers);
      }
      updatePassStats(qbStats, selectedPasser, teamId);
      updateTotalPassStats(teamPasserTotals, totalPassers);
    }
  }

  if (passers.length === 0) {
    const newQb = new Passer(passer, teamId);
    const totalPassers = new Passer('Total', teamId);

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
        totalPassers
      );
    }

    if (incomplete == true) {
      passIncomplete(playsEl, passer, newQb, totalPassers);
    }

    if (touchdown == true) {
      touchdownThrown(newQb, totalPassers, teamId);
    }

    if (interception == true) {
      interceptionThrown(newQb, totalPassers);
    }

    passers.push(newQb);
    passers.push(totalPassers);
    appendPassStats(statEl, newQb, teamId, newQb.id);
    updateTotalPassStats(teamPasserTotals, totalPassers);
  }
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
