/* ===========================================================
 * jquery.shuffle-images.js v1.0
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Shuffle Images let you display and shuffle multiple 
 * images by moving cursor around and many more ways to trigger.
 *
 * https://github.com/peachananr/shuffle-images
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    trigger: "imageMouseMove",
    triggerTarget: false,
    mouseMoveTrigger: 50,
    hoverTrigger: 200,
    scrollTrigger: 100,
    target: "> img"
  };  
  
  
  $.fn.shuffleImages = function(options){
    return this.each(function(){
      var settings = $.extend({}, defaults, options),
          el = $(this),
          prevLoc = 0,
          mouseMoveTrigger = settings.mouseMoveTrigger,
          hoverTrigger = settings.hoverTrigger,
          scrollTrigger = settings.scrollTrigger,
          triggerTarget = settings.triggerTarget;
      
      el.addClass("si-container").find(settings.target).css({
        maxWidth: "100%"
      }).not(":first-child").hide()
      el.find("> img:first-child").addClass("active")
      
      if (el.attr("data-si-mousemove-trigger")) mouseMoveTrigger = el.data("si-mousemove-trigger");
      
      if (el.attr("data-si-hover-trigger")) hoverTrigger = el.data("si-hover-trigger");
      
      if (el.attr("data-si-scroll-trigger")) scrollTrigger = el.data("si-scroll-trigger");
      if (settings.triggerTarget == false) triggerTarget = el;
      switch(settings.trigger) {
      case "imageMouseMove":
          triggerTarget.mousemove(function(event) {

            var math = Math.round(Math.sqrt(Math.pow(event.clientY, 2) +Math.pow( event.clientX, 2))) + 'px';
            
            
            if(Math.abs(parseInt(math) - prevLoc) > mouseMoveTrigger){

              var active = el.find("img.active");

              if (active.next().length > 0) {
                active.next().addClass("active").show();
                active.removeClass("active").hide();

              } else {
                el.find("img:first-child").addClass("active").show();
                active.removeClass("active").hide();

              }

              prevLoc = parseInt(math);
            }
          });
          break;
      case "imageHover":
          var triggerTime;
          triggerTarget.mouseover(function(e) {
            triggerTime = setInterval(function(){
              var active = el.find("img.active");

              if (active.next().length > 0) {
                active.next().addClass("active").show();
                active.removeClass("active").hide();

              } else {
                el.find("img:first-child").addClass("active").show();
                active.removeClass("active").hide();

              }
            }, hoverTrigger);
          }).mouseout(function(e) {
            clearInterval(triggerTime);
          });
          break;
      case "documentMouseMove":
          $(document).mousemove(function(event) {

            var math = Math.round(Math.sqrt(Math.pow(event.clientY, 2) +Math.pow(event.clientX, 2))) + 'px';

            if(Math.abs(parseInt(math) - prevLoc) > mouseMoveTrigger){

              var active = el.find("img.active");

              if (active.next().length > 0) {
                active.next().addClass("active").show();
                active.removeClass("active").hide();

              } else {
                el.find("img:first-child").addClass("active").show();
                active.removeClass("active").hide();

              }

              prevLoc = parseInt(math);
            }
          });
          break;
      case "documentScroll":
          $(document).on('touchmove mousewheel DOMMouseScroll', function(e, delta) {
            
            var math = $(document).scrollTop();
      
            if(Math.abs(parseInt(math) - prevLoc) > scrollTrigger){
      
              var active = el.find("img.active");
      
              if (active.next().length > 0) {
                active.next().addClass("active").show();
                active.removeClass("active").hide();
      
              } else {
                el.find("img:first-child").addClass("active").show();
                active.removeClass("active").hide();
      
              }
      
              prevLoc = parseInt($(document).scrollTop());
            }
          });
          break;
      default:
      }
      
    });
    
  }
  

}(window.jQuery);