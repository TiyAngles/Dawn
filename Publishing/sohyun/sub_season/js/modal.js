$(document).ready(function() {
  $("#modalBtn").on("click", function() {
    $(".modal-container").addClass("on");
  });
  $("#close").on("click", function() {
    $(".modal-container").removeClass("on");
  });
  $(".modal-container").on("click", function() {
    $(this).removeClass("on");
  });
});
