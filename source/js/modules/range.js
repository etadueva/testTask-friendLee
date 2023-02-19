const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');
let buttonPrice = document.querySelector('.calculator__range-result-placeholder--price');
let buttonContribution = document.querySelector('.calculator__range-result-placeholder--contribution');
let buttonTerm = document.querySelector('.calculator__range-result-placeholder--term');
let inbutPrice = document.querySelector('.calculator__range-result-number--price');
let inbutContribution = document.querySelector('.calculator__range-result-number--contribution');
let inbutTerm = document.querySelector('.calculator__range-result-number--term');
let rangePrice = document.querySelector('.calculator__range--price');
let rangeContribution = document.querySelector('.calculator__range--contribution');
let rangeTerm = document.querySelector('.calculator__range--term');

const stylizeRange = () => {
  const handleInputChange = (e) => {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }
  
  rangeInputs.forEach((input) => {
    input.addEventListener('input', handleInputChange)
  })
  
  numberInput.addEventListener('input', handleInputChange)
}

const showInputPrice = () => {
  buttonPrice.classList.add('calculator__range-result-placeholder--hidden');
    inbutPrice.classList.remove('calculator__range-result-number--hidden');
    inbutPrice.focus();
}

const showInputContribution = () => {
  buttonContribution.classList.add('calculator__range-result-placeholder--hidden');
  inbutContribution.classList.remove('calculator__range-result-number--hidden');
  inbutContribution.focus();
}

const showInputTerm = () => {
  buttonTerm.classList.add('calculator__range-result-placeholder--hidden');
  inbutTerm.classList.remove('calculator__range-result-number--hidden');
  inbutTerm.focus();
}

const hangEventHandlers = () => {
  buttonPrice.addEventListener('click', () => {
    showInputPrice();
  });

  buttonTerm.addEventListener('click', () => {
    showInputTerm();
  });

  buttonContribution.addEventListener('click', () => {
    showInputContribution();
  });

  rangePrice.addEventListener('click', () => {
    showInputPrice();
  });

  rangeContribution.addEventListener('click', () => {
    showInputContribution();
  });

  rangeTerm.addEventListener('click', () => {
    showInputTerm();
  });
};

export {stylizeRange, hangEventHandlers};