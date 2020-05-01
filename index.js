var wrapper = $('#wrapper'),
  panes = $('.pane'),
  active = $('.active');

var minPane, maxPane;

function updateSizes() {
  var win = $(window).width();
  maxPane = win * .8;
  minPane = (win - maxPane) / (panes.length - 1);
}

function init() {
  updateSizes();
  active.css('width', maxPane);
  panes.not(active).css('width', minPane);
}

$(window).resize(init);

panes.click(function() {
  if ($(this).hasClass('active')) return;
  
  // Old active pane
  active.animate({
    width: minPane
  }, 200);
  active.toggleClass('active');

  // New active pane
  active = $(this);
  active.animate({
    width: maxPane
  }, 200);
  active.toggleClass('active');
});

// Go
init();
