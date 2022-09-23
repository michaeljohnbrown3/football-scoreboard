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
  <th class="stat-line" id="${team}-avg">${calcAvg(
      stats.yards / stats.att
    )}</th>
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
  <th class="stat-line" id="${team}-avg">${calcAvg(
    stats.yards / stats.att
  )}</th>
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

const updateTotalPassStats = function (el, stats) {
  el.innerHTML = `
  <th>Total</th>
  <th class="stat-line">${stats.comp}/${stats.att}</th>
  <th class="stat-line">${stats.yards}</th>
  <th class="stat-line">${calcAvg(stats.yards / stats.att)}</th>
  <th class="stat-line">${stats.td}</th>
  <th class="stat-line">${stats.int}</th>
  `;
};

const updateTotalRecStats = function (el, stats) {
  el.innerHTML = `
  <th>Total</th>
  <th class="stat-line">${stats.rec}</th>
  <th class="stat-line">${stats.yards}</th>
  <th class="stat-line">${calcAvg(stats.yards / stats.rec)}</th>
  <th class="stat-line">${stats.td}</th>
  <th class="stat-line">${stats.longrec}</th>
  `;
};

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
const rushers = [];
const receivers = [];
const kickReturners = [];
const puntReturners = [];
const kickers = [];
const punters = [];
const defensiveReturners = [];
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
  totalQb,
  newWr,
  totalWr
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
  newWr.rec += 1;
  newWr.yards += yards * 1;
  newWr.trgt += 1;
  totalQb.comp += 1;
  totalQb.att += 1;
  totalQb.yards += yards * 1;
  totalWr.rec += 1;
  totalWr.yards += yards * 1;
  totalWr.trgt += 1;
};

const passIncomplete = function (el, passer, newQb, totalQb, newWr, totalWr) {
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
  newWr.trgt += 1;
  totalQb.inc += 1;
  totalQb.att += 1;
  totalWr.trgt += 1;
};

// const updateScore = function (qtr, team) {
//   const boxScore = document.getElementById(`${team}-${qtr}`);
// };

const touchdownThrown = function (newQb, totalQb, newWr, totalWr, team) {
  newQb.td += 1;
  totalQb.td += 1;
  newWr.td += 1;
  totalWr.td += 1;

  // possibly create a class for scores?
};

const interceptionThrown = function (newQb, totalQb) {
  newQb.int += 1;
  totalQb.int += 1;
};

const createPassPlay = function (team) {
  const passStatEl = document.getElementById(`${team}-passer-totals`);
  const recStatEl = document.getElementById(`${team}-receiving-totals`);
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
  const teamId = team;

  if (passers.length > 0) {
    const selectedPasser = passers.find(pass => pass.name === passer);
    const selectedRec = receivers.find(rec => rec.name === receiver);

    if (selectedPasser === undefined && selectedRec === undefined) {
      const newQb = new Player(passer, teamId);
      const newWr = new Player(receiver, teamId);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);
      const totalReceivers = receivers.find(
        rec => rec.id === `${teamId}-total`
      );
      if (totalPassers === undefined && totalReceivers === undefined) {
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
            newTotalReceivers
          );
        }

        if (incomplete == true) {
          passIncomplete(
            playsEl,
            passer,
            newQb,
            newTotalPassers,
            newWr,
            newTotalReceivers
          );
        }

        if (touchdown == true) {
          touchdownThrown(
            newQb,
            newTotalPassers,
            teamId,
            newWr,
            newTotalReceivers
          );
        }

        if (interception == true) {
          interceptionThrown(newQb, newTotalPassers);
        }

        passers.push(newQb);
        passers.push(newTotalPassers);
        receivers.push(newWr);
        receivers.push(newTotalReceivers);
        appendPassStats(passStatEl, newQb, teamId, newQb.id);
        appendRecStats(recStatEl, newWr, teamId, newWr.id);
        updateTotalPassStats(passStatEl, newTotalPassers);
        updateTotalRecStats(recStatEl, newTotalReceivers);
      } else if (totalPassers !== undefined && totalReceivers === undefined) {
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
            totalPassers,
            newWr,
            newTotalReceivers
          );
        }

        if (incomplete == true) {
          passIncomplete(
            playsEl,
            passer,
            newQb,
            totalPassers,
            newWr,
            newTotalReceivers
          );
        }

        if (touchdown == true) {
          touchdownThrown(
            newQb,
            totalPassers,
            teamId,
            newWr,
            newTotalReceivers
          );
        }

        if (interception == true) {
          interceptionThrown(newQb, totalPassers);
        }

        passers.push(newQb);
        passers.push(totalPassers);
        receivers.push(newWr);
        receivers.push(newTotalReceivers);
        appendPassStats(passStatEl, newQb, teamId, newQb.id);
        appendRecStats(recStatEl, newWr, teamId, newWr.id);
        updateTotalPassStats(passStatEl, totalPassers);
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
        receivers.push(newWr);
        appendPassStats(passStatEl, newQb, teamId, newQb.id);
        appendRecStats(recStatEl, newWr, teamId, newWr.id);
        updateTotalPassStats(passStatEl, totalPassers);
        updateTotalRecStats(recStatEl, totalReceivers);
      }
    }

    if (selectedPasser !== undefined) {
      const qbStats = document.getElementById(`${selectedPasser.id}`);
      const wrStats = document.getElementById(`${selectedRec.id}`);
      const totalPassers = passers.find(pass => pass.id === `${teamId}-total`);

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
      updateRecStats(wrStats, selectedRec, teamId);
      updateTotalPassStats(passStatEl, totalPassers);
      updateTotalRecStats(recStatEl, totalReceivers);
    }
  }

  if (passers.length === 0) {
    const newQb = new Player(passer, teamId);
    const newWr = new Player(receiver, teamId);
    const totalPassers = new Player('Total Passing', teamId);
    const totalReceivers = new Player('Total Receiving', teamId);

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
        totalReceivers
      );
    }

    if (incomplete == true) {
      passIncomplete(
        playsEl,
        passer,
        newQb,
        totalPassers,
        newWr,
        totalReceivers
      );
    }

    if (touchdown == true) {
      touchdownThrown(newQb, totalPassers, teamId);
    }

    if (interception == true) {
      interceptionThrown(newQb, totalPassers);
    }

    passers.push(newQb);
    passers.push(totalPassers);
    receivers.push(newWr);
    receivers.push(totalReceivers);
    appendPassStats(passStatEl, newQb, teamId, newQb.id);
    appendRecStats(recStatEl, newWr, teamId, newWr.id);
    updateTotalPassStats(passStatEl, totalPassers);
    updateTotalRecStats(recStatEl, totalReceivers);
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
