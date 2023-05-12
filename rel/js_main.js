			$(function(){
//스크롤업
                $(".scroll_first").click(function(){
                    $("html, body").animate({"scrollTop":$(".mc_1").offset().top - 60}, 500);
                    return false;
                });
                $(".scroll_second").click(function(){
                    $("html, body").animate({"scrollTop":$(".mc_2").offset().top - 60}, 500);
                    return false;
                });
                $(".scroll_third").click(function(){
                    $("html, body").animate({"scrollTop":$(".mc_3").offset().top - 60}, 500);
                    return false;
                });
                $(".scroll_last").click(function(){
                    $("html, body").animate({"scrollTop":$(".mc_4").offset().top - 60}, 500);
                    return false;
                });
                $(window).scroll(function(){
                    if($(document).scrollTop()>$(".mc_1").offset().top - 60){$("#gnb_box .gnb").css({"position":"fixed"})}
                    else{$("#gnb_box .gnb").css({"position":"relative"})}
                });
				
			});
