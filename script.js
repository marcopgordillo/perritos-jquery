$.noConflict();
jQuery(document).ready(function ($) {
  const weight = $("#weight");
  const weightInput = $("#weight-input");

  $("#list>li").click(function () {
    const id = $(this).data("id");
    activeClass(id * 10);
    weight.val(id * 10);
    weightInput.val(id * 10);
  });

  weight.change(function () {
    const val = $(this).val();
    weightInput.val(val);
    console.log(val);
    activeClass(val);
  });

  weightInput.change(function () {
    const val = $(this).val();
    weight.val(val);
    activeClass(val);
  });

  function activeClass(val) {
    $("#list>li").removeClass("text-danger");
    $(`#dog-${Math.floor(val / 10)}`).addClass("text-danger");
  }
});
