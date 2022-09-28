class BoxScore {
  constructor(team) {
    this.id = `${team}`;
    this.q1 = 0;
    this.q2 = 0;
    this.q3 = 0;
    this.q4 = 0;
    this.q5 = 0;
  }

  calcScore() {
    return this.q1 + this.q2 + this.q3 + this.q4 + this.q5;
  }
}

export const boxScoresArr = [];

export const appendBoxScore = function (el, adv, team) {
  const newBoxScoreObj = new BoxScore(team);
  el.innerHTML = `
  <th class="box-score__cell ${adv}-name" id="${team}-box-logo"></th>
  <th class="box-score__cell ${adv}-first" id="${team}-q1">${newBoxScoreObj.q1}</th>
  <th class="box-score__cell ${adv}-second" id="${team}-q2">${newBoxScoreObj.q2}</th>
  <th class="box-score__cell ${adv}-third" id="${team}-q3">${newBoxScoreObj.q3}</th>
  <th class="box-score__cell ${adv}-fourth" id="${team}-q4">${newBoxScoreObj.q4}</th>
  <th class="box-score__cell ${adv}-ot hidden" id="${team}-q5">${newBoxScoreObj.q5}</th>
  `;
  boxScoresArr.push(newBoxScoreObj);
};
