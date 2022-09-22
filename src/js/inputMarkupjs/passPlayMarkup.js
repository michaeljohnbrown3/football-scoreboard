export const passPlayMarkup = function (el, adv) {
  el.innerHTML = `
  <form class="play-input__pass">
    <h2 class="play-input__pass--title">Passing Play</h2>
    <div class="play-input__container">
      <div class="play-input__logo-container">
        <img src="img/fsu.png" alt="logo" class="play-input__logo">
      </div>
      <div class="play-input__type-inputs">
        <label for="passer">Passer</label>
        <input type="text" id="passer-${adv}" class="play-input__pass--passer" placeholder="Passer" required>
        <label for="receiver">Receiver</label>
        <input type="text" id="receiver-${adv}" class="play-input__pass--receiver" placeholder="Receiver">
        <label for="yards">Yards</label>
        <input type="number" id="yards-${adv}" class="play-input__pass--yards" placeholder="Yards">
      </div>
      <div class="play-input__click-inputs">
        <div>
          <input type="radio" id="complete-${adv}" name="completion" class="play-input__pass--completion">
          <label for="complete">Complete</label>
        </div>
        <div>
          <input type="radio" id="incomplete-${adv}" name="completion" class="play-input__pass--completion">
          <label for="incomplete">Incomplete</label>
        </div>
        <h3>Results</h3>
        <div>
          <input type="checkbox" id="first-down-${adv}" class="play-input__pass--results">
          <label for="first-down">First Down</label>
        </div>
        <div>
          <input type="checkbox" id="touchdown-${adv}" class="play-input__pass--results">
          <label for="touchdown">Touchdown</label>
        </div>
        <div>
          <input type="checkbox" id="interception-${adv}" class="play-input__pass--results">
          <label for="interception">Interception</label>
        </div>
        <div>
          <input type="checkbox" id="fumble-lost-${adv}" class="play-input__pass--results">
          <label for="fumble-lost">Fumble Lost</label>
        </div>
        <div>
          <input type="checkbox" id="two-points-${adv}" class="play-input__pass--results">
          <label for="two-points">2pt Conversion Successful</label>
        </div>
        <div>
          <input type="checkbox" id="safety-${adv}" class="play-input__pass--results">
          <label for="safety">Safety</label>
        </div>
      </div>
      <button class="play-input__submit">Submit</button>
    </div>
  </form>
  `;
};
