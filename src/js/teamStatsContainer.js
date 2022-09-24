export const appendTeamStats = function (el, adv, team) {
  el.innerHTML = `
  <tr>
    <th class="team-stats__cell ${adv}-name" id="${team}-team-stat-logo"></th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-first-downs">0</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-total-yards">0</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-total-plays">0</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-play">0.0</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-passing-yards">0</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-comp-att">0/0</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-pass">0.0</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-rushing-yards">0</th>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-rushes">0</td>
  </tr>
  <tr>
    <td class="team-stats__cell" id="${team}-yards-rush">0.0</td>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-penalties">0-0</th>
  </tr>
  <tr>
    <th class="team-stats__cell" id="${team}-turnovers">0</th>
  </tr>
  `;
};
