define(["jquery"], function ($) {
  return {
    init: function () {
      $(document).ready(function () {
        $(".small-box").hover(
          function ($ev_enter) {
            $(this).find(".back-ic").addClass("animate-blow");
          },
          function ($ev_exit) {
            $(this).find(".back-ic").removeClass("animate-blow");
          }
        );
      });
    },
  };
});
