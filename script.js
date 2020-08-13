function dogs() {
  return {
    index: 0,
    value: 0,
    handleDog($event) {
      this.index = +($event.target.id.split('-')[1]);
      this.value = deNormalize(this.index);
      $event.target.checked = true;
    },
    handleInit() {
      this.$watch('index', index => {        
        Array.from(document.getElementById('list').children).forEach(li => {
          let input = li.getElementsByTagName('input')[0];

          if (input.id === `dog-${index}`) {
            input.setAttribute('checked', 'checked');
            input.checked = true;
          } else {
            input.checked = false;
            input.removeAttribute('checked');
          }
        });  
      });

      this.$watch('value', value =>{
        this.index = normalize(value);
      });
    }
  };
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
