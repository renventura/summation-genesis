jQuery(document).ready(function($){function s(){var s=$(this).scrollTop();Math.abs(s)>d?s-n>l?a.hasClass("stuck")&&a.slideUp("fast"):l>=s+n&&a.addClass("stuck").slideDown():a.hasClass("stuck")&&a.hide().removeClass("stuck"),l=s}var e=$(".site-header"),a=e.clone(),t,d=e.outerHeight(),l=0,n=30;"enabled"===e.data("sticky-header")&&(a.addClass("header-clone"),e.after(a),setInterval(function(){t&&(s(),t=!1)},250),$(window).scroll(function(){t=!0}))});