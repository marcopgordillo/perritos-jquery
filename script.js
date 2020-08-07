$.noConflict();
jQuery(document).ready(function ($) {
  const inputRange = $("#weight"),
    inputNumber = $("#weight-input"),
    dogs = $(".js-dog");

  let oldVal = 0;

  // click dogs
  dogs.click(function () {
    oldVal = $(this).data("id") * 10;
    activeClass(oldVal);
    inputRange.val(oldVal);
    inputNumber.val(oldVal);
  });

  // Change input range
  inputRange.change(function () {
    const newVal = +$(this).val();
    inputNumber.val(newVal);
    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  });

  // Change input number
  inputNumber.change(function () {
    const newVal = +$(this).val();
    inputRange.val(newVal);
    if (!isEqual(newVal)) {
      oldVal = newVal;
      activeClass(oldVal);
    }
  });

  function isEqual(newVal) {
    return Math.floor(oldVal / 10) === Math.floor(newVal / 10);
  }

  function activeClass(val) {
    dogs.removeClass("text-danger");
    $(`#dog-${Math.floor(val / 10)}`).addClass("text-danger");
  }
});
