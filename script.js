(function () {
  const inputRange = document.getElementById('input-range'),
        inputNumber = document.getElementById('input-number'),
        dogs = document.getElementsByClassName('js-dog');

  let oldVal = 0;


  function activeClass(val) {
    const elementId = `dog-${Math.floor(val / 10)}`;
    let labels = Array.from(document.getElementsByTagName('label'));
    
    labels.forEach(label => label.classList.remove('text-danger'));
    
    labels.filter(label => label.htmlFor === elementId)[0].classList.add('text-danger');
  
    Array.from(dogs)
          .forEach(dog => dog.id === elementId ? dog.checked = true : dog.checked = false);
  }

  function isEqual(newVal) {
    return Math.floor(oldVal / 10) === Math.floor(newVal / 10);
  }

  // click dogs
  function handleDog(evt) {
    evt.stopPropagation();
    const id = evt
                .currentTarget.getAttributeNode('id').value
                .split('-')[1];

    oldVal = id * 10;

    activeClass(oldVal);
    inputRange.value = oldVal;
    inputNumber.value = oldVal;
  }

  // Change input range
  function handleInputRange(evt) {
    const newVal = evt.currentTarget.value;
    inputNumber.value = newVal;
    
    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  }

  // Change input Number
  function handleInputNumber(evt) {
    const newVal = evt.currentTarget.value;
    inputRange.value = newVal;

    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  }

  function addListeners() {
    Array.from(dogs).forEach(dog => dog.addEventListener('click', handleDog, true));
    inputRange.addEventListener('change', handleInputRange);
    inputNumber.addEventListener('change', handleInputNumber);
  }

  document.addEventListener('DOMContentLoaded', addListeners);
})();
