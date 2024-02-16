const checkBtnLm = document.getElementById('check-btn');
const clearBtnLm = document.getElementById('clear-btn');
const resultLm = document.getElementById('results-div');
const inputLm = document.getElementById('user-input');

function testRegex(regex, str) {
  return regex.test(str);
}

function validateNumber() {
  const input = inputLm.value.trim();
  const regex = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[-\s.]?\d{3}[-\s.]?\d{4}$/;

  if (!input) {
    alert('Please provide a phone number');
    return;
  }

  resultLm.innerHTML = testRegex(regex, input)
    ? `<p><span class="valid-input">Valid</span> US number: <span>${input}<span></p>`
    : `<p><span class="invalid-input">Invalid</span> US number: <span>${input}<span></p>`; 
}

function clearResluts() {
  resultLm.innerHTML = '';
  inputLm.value = '';
}


inputLm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateNumber();
  }
});

checkBtnLm.addEventListener('click', validateNumber);

clearBtnLm.addEventListener('click', clearResluts);