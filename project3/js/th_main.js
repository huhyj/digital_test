			$(function(){
//모바일tab
				$(".panel:not(:first)").css({"display":"none"});
				$(".tab > li > a").click(function(){
					$(this).next(".panel").css("display","block");
				    $(this).parent("li").siblings().children().next(".panel").css("display","none");
				    return false;
				});
				$(".gnb.menu > li:eq(1) > a").click(function(){
				   	$(this).next(".panel2").show();
				});

//모바일gnb
				$(".m_l_button_cnt .sub").hide();
				$(".m_l_button a").click(function(){
					$(".m_menu").css("display","block");
					if($(".m_l_button_cnt").css("marginLeft")=="-100%"){
                        $(this).children("img").attr("src","images/close.png");
                        $(".m_l_button_cnt").show().animate({"marginLeft":"0%"},400);
                        $(".m_menu").css("backgroundColor","white");
						$("body").css({"height":"100%","overflow":"hidden"});
					}
					else{
						$("body").css({"height":"100%","overflow":"auto"});
                        $(this).children("img").attr("src","images/three_m.png");
                        $(".m_l_button_cnt").show().animate({"marginLeft":"-100%"},400);
                        $(".m_menu").css("backgroundColor","transparent");
						$(".m_menu").css("display","none");
						$(".m_l_button_cnt").css("display","none");
                    }    
					return false;
				});
                $(".m_l_button_cnt > li").mouseenter(function(){
					$(this).css("backgroundColor","#000");
					$(this).children("a").css("backgroundColor","#000");
                    $(this).children().next("ul").stop().slideDown("fast");
                    $(this).siblings().children().next("ul").hide();
                }).mouseleave(function(){
					$(this).css("backgroundColor","#2d6278");
					$(this).children("a").css("backgroundColor","#2d6278");
				});

//스크롤업
				$("#scroll_top").hide();
				$(window).scroll(function(){
					if($(document).scrollTop()>300){$("#scroll_top").css({"position":"fixed","right":"2%","bottom":"3%"}).slideDown().fadeIn();}
					else{$("#scroll_top").fadeOut();}
				});

				$("#scroll_top").click(function(){
					$("html, body").animate({"scrollTop":$("html, body").offset().top}, 500);
					return false;
				});
				

//비주얼 슬라이딩
				$(".sliding_loop .show_img").prepend($(".sliding_loop .show_img li:last"));
				$(".sliding_loop .show_img").css("marginLeft","-100%");

				//다음버튼클릭시 이벤트
				$(".sliding_loop .next").click(function(){
					$(".sliding_loop .show_img").animate({"marginLeft":"-=100%"}, "linear", function(){
						$(".sliding_loop .show_img").append( $(".sliding_loop .show_img li:first") );
						$(".sliding_loop .show_img").css("marginLeft","-100%");
					});
					return false;
				});

				//이전버튼클릭시 이벤트
				$(".sliding_loop .prev").click( function(){
					$(".sliding_loop .show_img").animate({"marginLeft":"+=100%"}, "linear",		 function(){
						$(".sliding_loop .show_img").prepend($(".sliding_loop .show_img li:last"));
						$(".sliding_loop .show_img").css("marginLeft","-100%");
					});
					return false; 
				});

				//interval
				var timer = window.setInterval(function(){$(".sliding_loop .next").click();}, 2500);
				var now = true;

				//pause버튼클릭시 이벤트
				$(".pause").click(function(){
					//움직이고 있으면 멈추고 재생그림으로 바꾸고 now = false
					//안 움직이고 있으면 움직이게 하고 멈춤그림으로 바꾸고 now = true
					if(now){
						window.clearInterval(timer);
						$(".pause").children("a").children("img").attr("src","images/play_btn.png");
						now = false;
					}
					else{
						timer = window.setInterval(function(){$(".sliding_loop .next").click();} , 3000);
						$(".pause").children("a").children("img").attr("src","images/pause_btn.png");
						now = true;
					}
					return false;
				});
				
//비주얼 dot
				$(".dot li:eq(0)").css({"backgroundColor":"#096db6"});
                $(".dot li:eq(0)").click(function(){
                    $(this).css({"backgroundColor":"#096db6"});
                    $(".dot li:not(:eq(0))").css({"backgroundColor":"white"});
                    $(".dot li:last").css({"backgroundColor":"transparent"});
                    $(".show_img").animate({"marginLeft":(-100*1)+"%"});
                    return false;
                });
                $(".dot li:eq(1)").click(function(){
                    $(this).css({"backgroundColor":"#096db6"});
                    $(".dot li:not(:eq(1))").css({"backgroundColor":"white"});
                    $(".dot li:last").css({"backgroundColor":"transparent"});
                    $(".show_img").animate({"marginLeft":(-100*2)+"%"});
                    return false;
                });
                $(".dot li:eq(2)").click(function(){
                    $(this).css({"backgroundColor":"#096db6"});
                    $(".dot li:not(:eq(2))").css({"backgroundColor":"white"});
                    $(".dot li:last").css({"backgroundColor":"transparent"});
                    $(".show_img").animate({"marginLeft":(-100*3)+"%"});
                    return false;
                });
                $(".dot li:eq(3)").click(function(){
                    $(this).css({"backgroundColor":"#096db6"});
                    $(".dot li:not(:eq(3))").css({"backgroundColor":"white"});
                    $(".dot li:last").css({"backgroundColor":"transparent"});
                    $(".show_img").animate({"marginLeft":(-100*0)+"%"});
                    return false;
                });
                
//gnb
				$(".gnb .sub").hide();
				$(".gnb > li").mouseenter(function(){
					$(this).children().next("ul").stop().slideDown();
					$(this).siblings().children().next("ul").slideUp();
				}).mouseleave(function(){
					$(".gnb .sub").stop().slideUp();
				});
				
//mc1 tab기능
				$(".mc1_panel:not(:first)").css("display","none");
				$(".a4.a41 li:eq(0) a").css({"backgroundColor":"#fefbf7","color":"black"});
				$(".a4.a41 > li > a").click(function(){
					$(this).css({"backgroundColor":"#fefbf7","color":"black"});
					var mc_t = $(this).parent().index();
					$(".mc1_thema_panel div").css("display","none");
					$(".mc1_thema_panel div:eq("+mc_t+")").css("display","block");
					$(".a4.a41 li:not(:eq("+mc_t+")) a").css({"backgroundColor":"#096db6","color":"white"});
					return false;
				});
				
//mc2 tab기능
				$(".mc2_panel:not(:first)").css("display","none");
				$(".mc2 .land li:eq(0) a").css({"font-weight":"bold", "color":"black"});
				$(".mc2 .land > li > a").click(function(){
					$(this).css({"font-weight":"bold", "color":"black"});
					var mc_t2 = $(this).parent().index();
					$(".mc2_top_panel div").css("display","none");
					$(".mc2_top_panel div:eq("+mc_t2+")").css("display","block");
					$(".mc2 .land li:not(:eq("+mc_t2+")) a").css({"font-weight":"normal", "color":"black"});
					return false;
				});
				
//banner1
				//countdown
				var countDown = new Date("Dec 31, 2020 23:59:59").getTime();
				var x = setInterval(function(){
					var now = new Date().getTime();
					var distance = countDown - now;

					var days = Math.floor(distance/(1000*60*60*24));
					var hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
					var minutes = Math.floor(distance%(1000*60*60)/(1000*60));
					var seconds = Math.floor(distance%(1000*60)/1000);

					document.getElementById('days').innerHTML = days;
					document.getElementById('hours').innerHTML = hours;
					document.getElementById('minutes').innerHTML = minutes;
					document.getElementById('seconds').innerHTML = seconds;

					if(distance<0){
						clearInterval(x);
						document.getElementsByClassName('content').innerHTML = '카운트다운 종료';
					}
				},1000);

//mc3
				//tab기능
				$(".mc3_panel:not(:first)").css("display","none");
				$(".mc3 .land li:eq(0) a").css({"font-weight":"bold", "color":"black"});
				$(".mc3 .land > li > a").click(function(){
					$(this).css({"font-weight":"bold", "color":"black"});
					var mc_t3 = $(this).parent().index();
					$(".mc3_best_panel div").css("display","none");
					$(".mc3_best_panel div:eq("+mc_t3+")").css("display","block");
					$(".mc3 .land li:not(:eq("+mc_t3+")) a").css({"font-weight":"normal", "color":"black"});
					return false;
				});
				
				//mouseenter시 animate효과로 cnt올리기
				$(".mc3 .a6").mouseenter(function(){
					//.best_cnt의 높이를 늘린다.
					$(this).children().next(".best_cnt").stop().animate({"top":"50%"});
					$(this).children().next(".best_cnt").children(".mc3_exp").stop().slideUp();
					$(this).children().next(".best_cnt").children(".mc3_title").stop().css({"paddingTop":"7%"});
				}).mouseleave(function(){
					$(".best_cnt").stop().animate({"top":"65%"});
					$(this).children().next(".best_cnt").children(".mc3_exp").stop().slideDown();
					$(".mc3_title").stop().css({"paddingTop":"5%"});
				});
                
//mc4
		//.a2.a21
				/*
				//mc4_event 자동 슬라이딩효과
                $(".sliding_loop2 .show_img2").prepend($(".sliding_loop2 .show_img2 li:last"));
				$(".sliding_loop2 .show_img2").css("marginLeft","-100%");

				function sliding(){
					$(".sliding_loop2 .show_img2").animate({"marginLeft":"-=100%"}, "linear", function(){
						$(".sliding_loop2 .show_img2").append( $(".sliding_loop2 .show_img2 li:first") );
						$(".sliding_loop2 .show_img2").css("marginLeft","-100%");
					});
				}
				
				var timer = window.setInterval(function(){sliding();}, 2000);
				*/
				
				/*
				//겹치면서 슬라이딩(한샘)
				var arr = ["images/mc4/mc4_event1.jpg", "images/mc4/mc4_event2.jpg", "images/mc4/mc4_event3.jpg", "images/mc4/mc4_event4.jpg"];
				i = 0;
				$(".dot2 li:eq(i)").click(function(){
					if(i==3){i=-1;}
					$(".show_box2 img").before("<img src='" + arr[++i] + "' alt=''/>");
					$(".show_box2 img:last").fadeOut(function(){
						$(".show_box2 img:not(:first)").remove();
					});
					return false;
				});
				*/

				//탭눌렀을때 슬라이딩효과
				$(".dot2 li:eq(0)").css({"backgroundColor":"black"});
				$(".dot2 > li").click(function(){
					$(this).css({"backgroundColor":"black"});
					var dot = $(this).index();
					$(".dot2 li:eq("+dot+")").css("display","block");
					$(".dot2 li:not(:eq("+dot+"))").css({"backgroundColor":"#096db6"});
					$(".sliding_loop2 .show_img2").animate({"marginLeft":(-100*dot)+"%"}, "linear");
					return false;
				});
				
		//.a2.a22
				//공지사항 mouseenter시에 bold
				$(".a2.a22 li").mouseenter(function(){
					$(this).css("fontWeight","bold");
				}).mouseleave(function(){
					$(this).css("fontWeight","normal");
				});
				
		//.a1 여행후
				$(".review_img").prepend($(".review_img ul:last"));
				$(".review_img").css({"marginLeft":"-31.3333%"});


				// 다음버튼
				$(".next2").click(function(){
					$(".review_img").animate({"marginLeft":"-=31.3333%"}, "linear", function(){
						$(".review_img").append($(".review_img ul:first"));
						$(".review_img").css({"marginLeft":"-31.3333%"});
					});
					return false;
				});

				// 이전버튼
				$(".prev2").click(function(){
					$(".review_img").animate({"marginLeft":"+=31.3333%"}, "linear", function(){
						$(".review_img").prepend($(".review_img ul:last"));
						$(".review_img").css({"marginLeft":"-31.3333%"});
					});
					return false;
				});
				
//popWrap
                //h3을 꾹 누른상태에서 움직이면 .popWrap이 움직인다.
				//이벤트대상 : .popWrap h3
				//이벤트 : 꾹 누른상태에서 (mousedown) => click  dbclick  mousedown(마우스를 누르고 있는 상태)  mouseup(마우스를 뗐을 때 발생하는 이벤트)  mousemove
				//이벤트핸들러 : 움직이면 (mousemove) .popWrap이 움직인다.

				//이벤트 : 마우스를 뗄때 mouseup
				//이벤트핸들러 : 안 움직이면(mousemove 안함) .popWrap이 안움직인다.
				$(".popWrap").css("cursor","pointer").mousedown(function(e){
					//msX,msY:클릭한 위치에서 팝업창의 위치를 뺀다.
					//팝업창 위치를 일정하게 위치하게 하기위해
					var msX = e.pageX - $(".popWrap").offset().left;
					var msY = e.pageY - $(".popWrap").offset().top;
					$(document).on("mousemove", function(e){
						$(".popWrap").css({"top":e.pageY - msY + "px", "left":e.pageX - msX + "px"});
					});
				}).mouseup(function(){
					$(document).off("mousemove");
				});
				
			});
            
			//[1]controlCookies();
			//체크박스가 체크되어 있다면 알림창(안보이게 숨기기) 띄우기
			//upgrade : setCookies(쿠키이름, 쿠키값, 1)을 설정
			//안보이게 숨기기
			function controlCookies(){
				/*
				if($("#subpop").is(":checked")){
					setCookie("subpop", "done", 1);
					$(".popWrap").hide();
				}
				else{$(".popWrap").hide();}
				*/
				$(".popWrap").hide();
			}
			
			//[2]getCookies(쿠키이름);
			//만약 쿠키가 체크되어 있다면 안보이게 숨기기
			//아니라면 보이기
			//$(function(){
			//	if(getCookie("subpop")=="done"){
			//		$(".popWrap").hide();
			//	}
			//	else{$(".popWrap").show();}
			//});