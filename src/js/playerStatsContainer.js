export const appendStatSheet = function (el, adv, team) {
  el.innerHTML = `
  <div class="${adv}-stats__passing">
          <h2 class="${adv}-stats__stat-header">Passing</h2>
          <table class="${adv}-stats__table" id="${team}-passers">
            <tr class="stat-line-header">
              <th class="stat-line-header"></th>
              <th class="stat-line-header">C/ATT</th>
              <th class="stat-line-header">YDS</th>
              <th class="stat-line-header">AVG</th>
              <th class="stat-line-header">TD</th>
              <th class="stat-line-header">INT</th>
            </tr>
            <tr class="stat-line"></tr>
            <tr class="stat-line__total" id="${team}-passer-totals">
              <th>Total</th>
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
            <tr class="stat-line" id="${team}-rushers></tr>
            <tr class="stat-line__total" id="${team}-rusher-totals">
              <th>Total</th>
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
            <tr class="stat-line"></tr>
            <tr class="stat-line__total" id="${team}-receiving-totals">
              <th>Total</th>
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
            <th>Total</th>
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
            <th>Total</th>
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
            <th>Total</th>
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
