$(document).ready(function () {
  $('#tabButtons button').click(function () {
    var target = $(this).data('target');
    $('#tabContent .tab-pane').removeClass('show active');
    $(target).addClass('show active');
    $('#tabButtons button').removeClass('active');
    $(this).addClass('active');
    $('.bar').hide();
    $(this).next('.bar').show();
  });

  // Show bar below active button on page load
  $('#tabButtons button.active').each(function () {
    $(this).next('.bar').show();
  });
});

// onscroll the apply background color
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('navbar-bg');
    } else {
      $('#navbar').removeClass('navbar-bg');
    }
  });
});