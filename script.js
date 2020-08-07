$.noConflict();
jQuery(document).ready(function ($) {
  const inputRange = $("#weight");
  const inputNumber = $("#weight-input");
  const dogs = $(".js-dog");
  let oldVal = 0;

  // click dogs
  dogs.click(function () {
    const id = $(this).data("id");
    oldVal = id * 10;
    activeClass(oldVal);
    inputRange.val(oldVal);
    inputNumber.val(oldVal);
  });

  // Change input range
  inputRange.change(function () {
    const newVal = $(this).val();
    inputNumber.val(newVal);
    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  });

  // Change input number
  inputNumber.change(function () {
    const newVal = $(this).val();
    inputRange.val(newVal);
    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  });

  function isEqual(newVal) {
    return Math.floor(oldVal / 10) === +Math.floor(newVal / 10);
  }

  function activeClass(val) {
    console.log(val);
    dogs.removeClass("text-danger");
    $(`#dog-${Math.floor(val / 10)}`).addClass("text-danger");
  }
});
