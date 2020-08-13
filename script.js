(function () {
  const inputRange = document.getElementById('input-range'),
        inputNumber = document.getElementById('input-number'),
        dogs = document.getElementsByClassName('js-dog');

  let oldVal = 0;


  function activeClass(val) {
    const elementId = `dog-${val}`;
    let labels = Array.from(document.getElementsByTagName('label'));
    
    labels.forEach(label => label.classList.remove('text-danger'));
    
    labels.filter(label => label.htmlFor === elementId)[0].classList.add('text-danger');
  
    Array.from(dogs)
          .forEach(dog => dog.id === elementId ? dog.checked = true : dog.checked = false);
  }

  function isEqual(newVal) {
    return oldVal === normalize(newVal);
  }

  function normalize(val) {
    if (val < 5) {
      return 0;
    } else if (val < 10) {
      return 1;
    } else if (val < 25) {
      return 2;
    } else if (val < 40) {
      return 3;
    } else {
      return 4;
    }
  }

  function deNormalize(val) {
    switch(+val) {
      case 0:
        val = 0;
        break;
      case 1:
        val = 5;
        break;
      case 2:
        val = 10;
        break;
      case 3:
        val = 25;
        break;
      default:
        val = 40;
    }
    return val;
  }

  // click dogs
  function handleDog(evt) {
    evt.stopPropagation();
    const id = evt
                .currentTarget.getAttributeNode('id').value
                .split('-')[1];

    oldVal = id;

    activeClass(oldVal);
    const realValue = deNormalize(oldVal);
    inputRange.value = realValue;
    inputNumber.value = realValue;
  }

  // Change input range
  function handleInputRange(evt) {
    const newVal = evt.currentTarget.value;
    inputNumber.value = newVal;
    
    if (!isEqual(newVal)) {
      oldVal = normalize(newVal);
      activeClass(oldVal);
    }
  }

  // Change input Number
  function handleInputNumber(evt) {
    const newVal = evt.currentTarget.value;
    inputRange.value = newVal;

    if (!isEqual(newVal)) {
      oldVal = normalize(newVal);
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
