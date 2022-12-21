/////////////
//STYLES FOR FADE IN DIV ANIMATION
/////////////
//WELCOME//
/////////////
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 480) {
    $('#welcometitle').fadeIn();
  } else {
    $('#welcometitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#welcomecontent').fadeIn();
  } else {
    $('#welcomecontent').fadeOut();
  }
});

/////////////
//PROJECTS//
/////////////
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1050) {
    $('#projectstitle').fadeIn();
  } else {
    $('#projectstitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1200) {
    $('#myjournaltitle').fadeIn();
  } else {
    $('#myjournaltitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1300) {
    $('#myjournalimg').fadeIn();
  } else {
    $('#myjournalimg').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1400) {
    $('#myjournaltext').fadeIn();
  } else {
    $('#myjournaltext').fadeOut();
  }
});

/////////////
//SFT//
/////////////
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1700) {
    $('#sfttitle').fadeIn();
  } else {
    $('#sfttitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1800) {
    $('#sftimg').fadeIn();
  } else {
    $('#sftimg').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2500) {
    $('#sfttext').fadeIn();
  } else {
    $('#sfttext').fadeOut();
  }
});

/////////////
//EXPERIENCE//
/////////////
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3150) {
    $('#experiencetitle').fadeIn();
  } else {
    $('#experiencetitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3350) {
    $('#experiencecontent').fadeIn();
  } else {
    $('#experiencecontent').fadeOut();
  }
});

/////////////
//EDUCATION//
/////////////
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3850) {
    $('#educationtitle').fadeIn();
  } else {
    $('#educationtitle').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3980) {
    $('#educationcontent').fadeIn();
  } else {
    $('#educationcontent').fadeOut();
  }
});