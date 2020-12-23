//js
$(function(){
	//.logon_state 로그인상태에 따라 불 색깔 바꾸기
    $("#state_form").click(function(){
        if($(this).val() == "logout"){$(".log_light").css({"background-color":"#ff6363"});}
        else{$(".log_light").css({"background-color":"#42cb70"});}
    });
    
	//.logon_ctn li에 마우스 올렸을 때 배경, 글씨색 바꾸기
	$(".logon_ctn li:eq(0)").mouseenter(function(){
		$(this).children().css({"backgroundColor":"#5e92d1"});
		$(this).children().children("span").css({"color":"#fff"});
	}).mouseleave(function(){
		$(this).children().css({"backgroundColor":"#fff"});
		$(this).children().children("span").css({"color":"#9a9a9a"});
	});
	
	//.logon_ctn li에 마우스 올렸을 때 그림경로 바꾸기
	$(".logon_ctn li:eq(0)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/interaction_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/interaction_btn.png");
	});
/*	$(".logon_ctn li:eq(1)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/report_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/report_btn.png");
	});
	$(".logon_ctn li:eq(2)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/monitoring_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/monitoring_btn.png");
	});
	$(".logon_ctn li:eq(3)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/management_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/management_btn.png");
	});
	$(".logon_ctn li:eq(4)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/kms_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/kms_btn.png");
	});
	$(".logon_ctn li:eq(5)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/setting_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/setting_btn.png");
	});
	$(".logon_ctn li:eq(6)").mouseenter(function(){
		$(this).children().children("img").attr("src","img/logon/wallboard_act_btn.png");
	}).mouseleave(function(){
		$(this).children().children("img").attr("src","img/logon/wallboard_btn.png");
	});*/
	return false;
});

//java
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