	$(function(){
        //왼쪽 네비바에 마우스올렸을 때 색상 변경
		$("#navbar li:not(:eq(1))").mouseenter(function(){
			$(this).css({"backgroundColor":"#25426e"});
		}).mouseleave(function(){
			$(this).css({"backgroundColor":"#5e92d1"});
		});
		$("#navbar li:eq(1)").css({"backgroundColor":"#25426e"});
        
		//outbound 버튼에 마우스올렸을 때
		$(".mc_status_box button").mouseenter(function(){
			$(this).css({"backgroundColor":"#139834"});
		}).mouseleave(function(){
			$(this).css({"backgroundColor":"#42cb70"});
		});
		
		//reject 버튼에 마우스올렸을 때
		$(".make_call").children().css("backgroundColor","#42cb70");
		$(".make_call").children().next().css("backgroundColor","#d85d55");
		$(".make_call").children().next().mouseenter(function(){
			$(this).css({"backgroundColor":"#ad1e14"});
		}).mouseleave(function(){
			$(this).css({"backgroundColor":"#d85d55"});
		});
			
		
//call 이벤트
		//평상시
		$(".outbound_btn").css("display","block");
		$(".make_call").css("display","none");
		
		//전화가 걸려옴
		$(".outbound_btn").click(function(){
			$(this).css("display","none");
			$(".make_call").css("display","block");
			$(".make_call .ac").css("display","block");
			$(".make_call .cc").css("width","50%");
		});
		
		//전화수락
		$(".make_call .ac").click(function(){
			$(this).css("display","none");
			$(".make_call .cc").css({"display":"block","width":"100%"});
		});
		
		//전화끊음
		$(".make_call .cc").click(function(){
			$(".make_call").css("display","none");
			$(".outbound_btn").css("display","block");
		});
	});	