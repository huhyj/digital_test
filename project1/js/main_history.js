//기본
	$(function(){
		$(".h_lnfo li:eq(3)").css({"margin":"0px"});
		$(".h_icon li:eq(2)").css({"border":"none"});
		$(".inbound").css({"border":"none"});
		
		//왼쪽 네비바에 마우스올렸을 때 색상 변경
		$("#navbar li:not(:eq(4))").mouseenter(function(){
			$(this).css({"backgroundColor":"#25426e"});
		}).mouseleave(function(){
			$(this).css({"backgroundColor":"#5e92d1"});
		});
		$("#navbar li:eq(4)").css({"backgroundColor":"#25426e"});
		
		//logon_state1의 .log_time 시간 업데이트
		function realTime(){
			var now = new Date();
			var hours = now.getHours();
			var minutes = now.getMinutes();
			var seconds = now.getSeconds();
			var time = hours + ":" + minutes + ":" + seconds;
			$(".log_time").html(time);
		}
		$(function(){
			var timer = setInterval(function(){realTime();},1000);
			realTime();
		});
		
		//h_right 클릭시 사이트맵 팝업
		$(".site_map_pop").css("display","none");
		$(".h_right").click(function(){
			if($(".site_map_pop").css("display")=="none"){
				$(".site_map_pop").css("display","block");
				$(".h_right img").attr("src","img/interaction/menu_close.png");
			}
			else{
				$(".site_map_pop").css("display","none");
				$(".h_right img").attr("src","img/interaction/menu.png");
			}
			$(".site_map_pop li").mouseenter(function(){
				$(this).children().children("span").css({"fontWeight":"bold"});
			}).mouseleave(function(){
				$(this).children().children("span").css({"fontWeight":"normal"});
			});
		});
	});
	
//수정
	$(function(){
		//c_type_info에 마우스 올렸을 때 그림경로 바꾸기
		$(".c_type_info li:eq(6)").mouseenter(function(){
			$(this).children("img").attr("src","img/interaction/audio_img_over.png");
		}).mouseleave(function(){
			$(this).children("img").attr("src","img/interaction/audio_img.png");
		});
		$(".h_tab_left li").click(function(){
			$(this).siblings().css({"border":"1px solid #d2d3d3","borderBottom":"1px solid #5e92d1"});
			$(this).css({"border":"1px solid #5e92d1","borderBottom":"1px solid #ffffff"});
		});
	});