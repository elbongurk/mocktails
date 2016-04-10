$(document).ready(function() {
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});


/* mobile nav side slider */

$(document).ready(function(){
  $('.menu,.slide-fade,.sliding-panel-close').on('click touchstart',function (e) {
    $('.slide-content,.slide-fade').toggleClass('is-visible');
    $('#wrapper').toggleClass('is-obscured');
    e.preventDefault();
  });
});

/* mobile nav top slider */

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

$(function() {
  var menuToggle = $('#menu-button').unbind();
  $('#menu-items').removeClass("show");
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#menu-items').slideToggle(function(){
      if($('#menu-items').is(':hidden')) {
        $('#menu-items').removeAttr('style');
      }
    });
  });
  var menuItems = $('#menu-items a').unbind();
	menuItems.on('click', function(e) {
    $('#menu-items').removeAttr('style');
	});
});

$(function() {
  var menuToggle = $('#menu').unbind();
  $('#items').removeClass("show");
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#items').slideToggle(function(){
      if($('#items').is(':hidden')) {
        $('#items').removeAttr('style');
      }
    });
  });
  var menuItems = $('#items a').unbind();
	menuItems.on('click', function(e) {
    $('#items').removeAttr('style');
	});
});

/* requires jQuery */

$(function() {
  $('#slideshow img:gt(0)').hide();
  setInterval(function() {
    $('#slideshow :first-child')
      .fadeOut(1000)
      .next('img')
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);
});

/* Minimal Accordion Tabs */

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


