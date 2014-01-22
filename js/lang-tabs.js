// Switch all Spark code examples on the page to a particular language when a
// tab for that language is clicked.

function changeLanguage(lang) {
  return function(e) {
    e.preventDefault();
    var scrollOffset = $(this).offset().top - $(document).scrollTop();
    $(".tab-pane").removeClass("active");
    $(".tab-pane-" + lang).addClass("active");
    $(".lang-tab").removeClass("active");
    $(".lang-tab-" + lang).addClass("active");
    $(document).scrollTop($(this).offset().top - scrollOffset);
  }
}

$(function() {
  var languages = ["scala", "java", "python"];
  for (var i = 0; i < languages.length; i++) {
    var lang = languages[i];
    $(".lang-tab-" + lang).click(changeLanguage(lang));
  }
});
