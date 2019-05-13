const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('numberIsPrime:result-calculated', (event) => {
    const primeAnswer = event.detail;
    this.displayResult(primeAnswer);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result) {
    resultElement.textContent = "Yes! It's a prime number."
  } else {
    resultElement.textContent = "No! It's not a prime number."
  }
};

module.exports = ResultView;
