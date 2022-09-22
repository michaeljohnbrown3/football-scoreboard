export const appendBoxScore = function (el, adv, team) {
  el.innerHTML = `
  <th class="box-score__cell ${adv}-name" id="${team}-box-logo"></th>
  <th class="box-score__cell ${adv}-first" id="${team}-q1">0</th>
  <th class="box-score__cell ${adv}-second" id="${team}-q2">0</th>
  <th class="box-score__cell ${adv}-third" id="${team}-q3">0</th>
  <th class="box-score__cell ${adv}-fourth" id="${team}-q4">0</th>
  <th class="box-score__cell ${adv}-ot hidden" id="${team}-ot">0</th>
  `;
};
