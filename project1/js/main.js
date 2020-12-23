//기본
	$(function(){
		$(".h_lnfo li:eq(3)").css({"margin":"0px"});
		$(".h_icon li:eq(2)").css({"border":"none"});
		$(".inbound").css({"border":"none"});
		
		//왼쪽 네비바에 마우스올렸을 때 색상 변경
		$("#navbar li:not(:eq(0))").mouseenter(function(){
			$(this).css({"backgroundColor":"#25426e"});
		}).mouseleave(function(){
			$(this).css({"backgroundColor":"#5e92d1"});
		});
		$("#navbar li:eq(0)").css({"backgroundColor":"#25426e"});
		
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
		
		//로그온바의 call,mail,chat 상태바 애니메이션
		$(".log_state_bar").click(function(){
			if($(this).children().css("marginLeft")=="0px"){
				$(this).children().animate({"marginLeft":"21px"},200);
			}
			else{$(this).children().animate({"marginLeft":"0px"},200);}
		});
	});