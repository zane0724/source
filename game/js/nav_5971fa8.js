"use strict";$(function(){for(var t=$("body").attr("class"),a=$(".nav-li>a"),o=0;o<a.length;o++){var i=t.indexOf($(a[o]).attr("name"));i>=0&&(a.removeClass("active"),$(a[o]).addClass("active"))}var s=$(".drop-down");s.parent("li").hover(function(){$(this).find(".drop-box").show().css("opacty",0).stop().animate({opacity:1},800)},function(){$(this).find(".drop-box").stop().hide().css("opacity",0)})});