export const appendStatSheet = function (el, adv, team) {
  el.innerHTML = `
  <div class="${adv}-stats__passing">
          <h2 class="${adv}-stats__stat-header">Passing</h2>
          <table class="${adv}-stats__table" id="${team}-passers-table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">C/ATT</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">INT</th>
            </tr>
            <tr class="stat-line" id="${team}-passers"></tr>
            <tr class="stat-line__total" id="${team}-passer-totals">
              <th class="stat-line__name">TOTAL PASSING</th>
              <th class="${adv}-total-completions">0/0</th>
              <th class="${adv}-total-pass-yards">0</th>
              <th class="${adv}-total-pass-average">0.0</th>
              <th class="${adv}-total-pass-touchdowns">0</th>
              <th class="${adv}-total-pass-long">0</th>
            </tr>
          </table>
        </div>
        <div class="${adv}-stats__rushing">
          <h2 class="${adv}-stats__stat-header">Rushing</h2>
          <table class="${adv}-stats__table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">CAR</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">LONG</th>
            </tr>
            <tr class="stat-line" id="${team}-rushers"></tr>
            <tr class="stat-line__total" id="${team}-rusher-totals">
              <th class="stat-line__name">TOTAL RUSHING</th>
              <th class="${adv}-total-carries">0</th>
              <th class="${adv}-total-rush-yards">0</th>
              <th class="${adv}-total-rush-average">0.0</th>
              <th class="${adv}-total-rush-touchdown">0</th>
              <th class="${adv}-total-rush-long">0</th>
            </tr>
          </table>
        </div>
        <div class="${adv}-stats__receiving">
          <h2 class="${adv}-stats__stat-header">Receiving</h2>
          <table class="${adv}-stats__table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">REC</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">LONG</th>
              <th class="stat-line-header">TRGT</th>
            </tr>
            <tr class="stat-line" id="${team}-receivers"></tr>
            <tr class="stat-line__total" id="${team}-receiving-totals">
              <th class="stat-line__name">TOTAL RECEIVING</th>
              <th>0</th>
              <th>0</th>
              <th>0.0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
          </table>
        </div>
        <div class="${adv}-stats__kick-returns">
          <h2 class="${adv}-stats__stat-header">Kick Returns</h2>
          <table class="${adv}-stats__table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">RET</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">LONG</th>
            </tr>
            <tr class="stat-line" id="${team}-kick-returners></tr>
            <tr class="stat-line__total">
            <th class="stat-line__name">No Kick Returners</th>
            <th>0</th>
            <th>0</th>
            <th>0.0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          </table>
        </div>
        <div class="${adv}-stats__punt-returns">
          <h2 class="${adv}-stats__stat-header">Punt Returns</h2>
          <table class="${adv}-stats__table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">RET</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">LONG</th>
            </tr>
            <tr class="stat-line" id="${team}-punt-returners></tr>
            <tr class="stat-line__total">
            <th class="stat-line__name">No Punt Returners</th>
            <th>0</th>
            <th>0</th>
            <th>0.0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          </table>
        </div>
        <div class="${adv}-stats__kicking">
          <h2 class="${adv}-stats__stat-header">Kicking</h2>
          <table class="${adv}-stats__table">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">FG</th>
              <th class="stat-line-header">PCT</th>
              <th class="stat-line-header">LONG</th>
              <th class="stat-line-header">XP</th>
              <th class="stat-line-header">PTS</th>
            </tr>
            <tr class="stat-line" id="${team}-kickers></tr>
            <tr class="stat-line__total">
            <th class="stat-line__name">No Kickers</th>
            <th>0/0</th>
            <th>0.0%</th>
            <th>0</th>
            <th>0/0</th>
            <th>0</th>
          </tr>
          </table>
        </div>
  `;
};

export const appendPasserStats = function (el, passer) {
  el.insertAdjacentHTML(
    'beforebegin',
    `
    <tr class="stat-line" id="${passer.playerId}-passing" data-id="${passer.playerId}">
      <th class="stat-line__name">${passer.number} - ${passer.name}</th>
      <th class="stat-line">${passer.completions}/${passer.passAttempts}</th>
      <th class="stat-line">${passer.passingYards}</th>
      <th class="stat-line">${passer.yardsPerPass}</th>
      <th class="stat-line">${passer.passingTouchdowns}</th>
      <th class="stat-line">${passer.interceptions}</th>
    </tr>
    `
  );
};

export const updatePasserStats = function (passer) {
  const passerEl = document.getElementById(`${passer.playerId}-passing`);
  passerEl.innerHTML = `
  <th class="stat-line__name">${passer.number} - ${passer.name}</th>
  <th class="stat-line">${passer.completions}/${passer.passAttempts}</th>
  <th class="stat-line">${passer.passingYards}</th>
  <th class="stat-line">${passer.yardsPerPass}</th>
  <th class="stat-line">${passer.passingTouchdowns}</th>
  <th class="stat-line">${passer.interceptions}</th>
  `;
};

export const updateTotalPasserStats = function (team) {
  const totalPassEl = document.getElementById(`${team.id}-passer-totals`);
  console.log(team.id);
  totalPassEl.innerHTML = `
              <th class="stat-line__name">TOTAL PASSING</th>
              <th class="stat-line">${team.completions}/${
    team.passingAttempts
  }</th>
              <th class="stat-line">${team.passingYards}</th>
              <th class="stat-line">${
                Math.round(team.yardsPerPass * 10) / 10
              }</th>
              <th class="stat-line">${team.passingTouchdowns}</th>
              <th class="stat-line">${team.interceptions}</th>
  `;
};

export const appendReceiverStats = function (el, receiver) {
  el.insertAdjacentHTML(
    'beforebegin',
    `
    <tr class="stat-line" id="${receiver.playerId}-receiving" data-id="${receiver.playerId}">
      <th class="stat-line__name">${receiver.number} - ${receiver.name}</th>
      <th class="stat-line">${receiver.receptions}</th>
      <th class="stat-line">${receiver.receivingYards}</th>
      <th class="stat-line">${receiver.yardsPerReception}</th>
      <th class="stat-line">${receiver.receivingTouchdowns}</th>
      <th class="stat-line">${receiver.longestReception}</th>
      <th class="stat-line">${receiver.targets}</th>
    </tr>
    `
  );
};

export const updateReceiverStats = function (receiver) {
  const receiverEl = document.getElementById(`${receiver.playerId}-receiving`);
  receiverEl.innerHTML = `
  <th class="stat-line__name">${receiver.number} - ${receiver.name}</th>
  <th class="stat-line">${receiver.receptions}</th>
  <th class="stat-line">${receiver.receivingYards}</th>
  <th class="stat-line">${receiver.yardsPerReception}</th>
  <th class="stat-line">${receiver.receivingTouchdowns}</th>
  <th class="stat-line">${receiver.longestReception}</th>
  <th class="stat-line">${receiver.targets}</th>
  `;
};

export const updateTotalReceivingStats = function (team) {
  const totalRecEl = document.getElementById(`${team.id}-receiving-totals`);
  totalRecEl.innerHTML = `
              <th class="stat-line__name">TOTAL RECEIVING</th>
              <th class="stat-line">${team.completions}</th>
              <th class="stat-line">${team.passingYards}</th>
              <th class="stat-line">${
                Math.round(team.yardsPerReception * 10) / 10
              }</th>
              <th class="stat-line">${team.passingTouchdowns}</th>
  `;
};

export const appendRusherStats = function (el, rusher) {
  el.insertAdjacentHTML(
    'beforebegin',
    `
    <tr class="stat-line" id="${rusher.playerId}-rushing" data-id="${rusher.playerId}">
      <th class="stat-line__name">${rusher.number} - ${rusher.name}</th>
      <th class="stat-line">${rusher.rushingAttempts}</th>
      <th class="stat-line">${rusher.rushingYards}</th>
      <th class="stat-line">${rusher.yardsPerRush}</th>
      <th class="stat-line">${rusher.rushingTouchdowns}</th>
      <th class="stat-line">${rusher.longestRush}</th>
    </tr>
    `
  );
};

export const updateRusherStats = function (rusher) {
  const rusherEl = document.getElementById(`${rusher.playerId}-rushing`);
  rusherEl.innerHTML = `
  <th class="stat-line__name">${rusher.number} - ${rusher.name}</th>
  <th class="stat-line">${rusher.rushingAttempts}</th>
  <th class="stat-line">${rusher.rushingYards}</th>
  <th class="stat-line">${rusher.yardsPerRush}</th>
  <th class="stat-line">${rusher.rushingTouchdowns}</th>
  <th class="stat-line">${rusher.longestRush}</th>
  `;
};

export const updateTotalRushingStats = function (team) {
  const totalRushEl = document.getElementById(`${team.id}-rusher-totals`);
  totalRushEl.innerHTML = `
              <th class="stat-line__name">TOTAL RUSHING</th>
              <th class="stat-line">${team.rushingAttempts}</th>
              <th class="stat-line">${team.rushingYards}</th>
              <th class="stat-line">${
                Math.round(team.yardsPerRush * 10) / 10
              }</th>
              <th class="stat-line">${team.rushingTouchdowns}</th>
  `;
};
