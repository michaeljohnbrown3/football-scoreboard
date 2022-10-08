export const offensivePlayMarkup = function (el, team) {
  el.innerHTML = `
  <div class="play-input-close">
    <svg class="play-input-close__svg">
      <use xlink:href="img/sprite.svg#icon-cancel-circle"></use>
    </svg>
  </div>
  <form class="offensive-play-input">
  <h2 class="offensive-play-input__title">Offensive Play Input</h2>
  <div class="play-input-container">
  <img src="img/${team}.png" alt="logo" class="play-input__logo">
    <div class="play-input__selectors">
      <div class="play-input__selectors--type">
        <div>
          <input type="radio" id="${team}-pass-input" name="play-type" value="pass" required>
          <label class="play-input__selectors--type-btn passer-background" for="${team}-pass-input">Pass</label>
        </div>
        <div>
          <input type="radio" id="${team}-rush-input" name="play-type" value="rush" required>
          <label class="play-input__selectors--type-btn rusher-background" for="${team}-rush-input">Rush</label>
        </div>
      </div>
      <div class="play-input__selectors--pass">
        <div class="play-input__pass-players">
          <label for="passer">Passer</label>
          <div class="play-input__player-input" id="${team}-passer-input">
            <input type="number" id="passer-${team}-number" class="play-input__players--number" placeholder="#" required>
            <input type="text" id="passer-${team}" class="play-input__players" placeholder="Passer" required>
          </div>
          <label for="receiver">Target</label>
          <div class="play-input__player-input" id="${team}-receiver-input">
            <input type="number" id="receiver-${team}-number" class="play-input__players--number" placeholder="#" required>
            <input type="text" id="receiver-${team}" class="play-input__players" placeholder="Target">
          </div>
        </div>
        <div class="play-input__pass-result">
          <div>
            <input type="radio" id="${team}-complete" name="completion" value="complete" required>
            <label class="play-input__completion-btn complete-btn-background" for="${team}-complete">Complete</label>
          </div>
          <div>
            <input type="radio" id="${team}-incomplete" name="completion" value="incomplete" required>
            <label class="play-input__completion-btn incomplete-btn-background" for="${team}-incomplete">Incomplete</label>
          </div>
        </div>
        <div class="play-input__pass-complete-options">
          <div class="play-input__pass-complete-options--yards">
            <label for="${team}-passing-yards-gained">Yards</label>
            <input type="number" id="${team}-passing-yards-gained" class="play-input__pass-yards-gained" placeholder="0">
          </div>
          <h4>Select all that apply</h4>
          <div class="play-input__pass-complete-options--booleans">
            <div>
              <input class="play-input__pass-complete-options--boolean-checkbox" type="checkbox" id="${team}-passing-first-down" name="first-down" value="firstdown">
              <label class="play-input__pass-complete-options--boolean-btn" for="${team}-passing-first-down">First Down</label>
            </div>
            <div>
              <input class="play-input__pass-complete-options--boolean-checkbox" type="checkbox" id="${team}-passing-touchdown" name="passing-touchdown" value="touchdown">
              <label class="play-input__pass-complete-options--boolean-btn" for="${team}-passing-touchdown">Touchdown</label>
            </div>
            <div>
              <input class="play-input__pass-complete-options--boolean-checkbox" type="checkbox" id="${team}-passing-fumble-lost" name="passing-fumble-lost" value="fumble">
              <label class="play-input__pass-complete-options--boolean-btn" for="${team}-passing-fumble-lost">Fumble Lost</label>
            </div>
            <div>
              <input class="play-input__pass-complete-options--boolean-checkbox" type="checkbox" id="${team}-passing-safety" name="passing-safety" value="safety">
              <label class="play-input__pass-complete-options--boolean-btn" for="${team}-passing-safety">Safety</label>
            </div>
          </div>
        </div>
      </div>
      <div class="play-input__pass-incomplete-options">
        <h4>Select all that apply</h4>
        <div class="play-input__pass-complete-options--booleans">
          <div>
            <input class="play-input__pass-complete-options--boolean-checkbox" type="checkbox" id="${team}-interception" name="interception" value="interception">
            <label class="play-input__pass-complete-options--boolean-btn" for="${team}-interception">Interception</label>
          </div>
        </div>
      </div>
      <div class="play-input__selectors--rush">
        <div class="play-input__rush-players">
          <label for="rusher-${team}">Rusher</label>
          <div class="play-input__player-input" id="${team}-rusher-input">
            <input type="number" id="rusher-${team}-number" class="play-input__players--number" placeholder="#" required>
            <input type="text" id="rusher-${team}" class="play-input__players" placeholder="Rusher" required>
          </div>
        </div>
        <div class="play-input__rush-options">
          <div class="play-input__rush-options--yards">
            <label for="${team}-rushing-yards-gained">Yards</label>
            <input type="number" id="${team}-rushing-yards-gained" class="play-input__rush-yards-gained" placeholder="0">
          </div>
          <h4>Select all that apply</h4>
          <div class="play-input__rush-options--booleans">
            <div>
              <input class="play-input__rush-options--boolean-checkbox" type="checkbox" id="${team}-rushing-first-down" name="rushing-first-down" value="firstdown">
              <label class="play-input__rush-options--boolean-btn" for="${team}-rushing-first-down">First Down</label>
            </div>
            <div>
              <input class="play-input__rush-options--boolean-checkbox" type="checkbox" id="${team}-rushing-touchdown" name="rushing-touchdown" value="touchdown">                <label class="play-input__rush-options--boolean-btn" for="${team}-rushing-touchdown">Touchdown</label>
            </div>
            <div>
              <input class="play-input__rush-options--boolean-checkbox" type="checkbox" id="${team}-rushing-fumble-lost" name="rushing-fumble-lost" value="fumble">
              <label class="play-input__rush-options--boolean-btn" for="${team}-rushing-fumble-lost">Fumble Lost</label>
            </div>
            <div>
              <input class="play-input__rush-options--boolean-checkbox" type="checkbox" id="${team}-rushing-safety" name="rushing-safety" value="safety">                
              <label class="play-input__rush-options--boolean-btn" for="${team}-rushing-safety">Safety</label>
            </div>
          </div>
        </div>
      </div>
      <div class="play-input__selectors--pat">
        
      </div>
    </div>
  </div>
  <div class="play-input__submit-container">
    <button type="submit" class="play-input__submit">Submit</button>
  </div>
</form>
  `;
  const passBtn = document.querySelector(`#${team}-pass-input`);
  const rushBtn = document.querySelector(`#${team}-rush-input`);

  passBtn.addEventListener('click', () => {
    document.querySelector('.play-input__selectors--type').style.display =
      'none';
    document.querySelector('.play-input__selectors--pass').style.display =
      'flex';
  });

  rushBtn.addEventListener('click', () => {
    document.querySelector('.play-input__selectors--type').style.display =
      'none';
    document.querySelector('.play-input__selectors--rush').style.display =
      'flex';
    document.querySelector('.play-input__submit').style.display = 'block';
  });

  const completeBtn = document.querySelector(`#${team}-complete`);
  const incompleteBtn = document.querySelector(`#${team}-incomplete`);

  completeBtn.addEventListener('click', () => {
    document.querySelector('.play-input__pass-result').style.display = 'none';
    document.querySelector('.play-input__pass-complete-options').style.display =
      'flex';
    document.querySelector('.play-input__submit').style.display = 'block';
  });
  incompleteBtn.addEventListener('click', () => {
    document.querySelector('.play-input__pass-result').style.display = 'none';
    document.querySelector(
      '.play-input__pass-incomplete-options'
    ).style.display = 'flex';
    document.querySelector('.play-input__submit').style.display = 'block';
  });
};
