$.noConflict();
jQuery(document).ready(function($) {
  let weight = $("#weight");

  $("#list>li").click(function () {
    const id = $(this).data("id");
    activeClass(id * 10);
    weight.val(id * 10);
  });

  weight.change(function () {
    const val = $(this).val();
    console.log(val);
    activeClass(val);
  });

  function activeClass(val) {
    $("#list>li").removeClass("text-danger");
    $(`#dog-${Math.floor(val / 10)}`).addClass("text-danger");
  }  
});
