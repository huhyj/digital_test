$(function(){
    // 로그인
    $("#LoginBtn").click(function(){
        location.href="./main_01.html";
    });

	// 사이드 바 배경색
	var url = window.location.pathname.split('/').pop();

	$(".main_sidebar li a").each(function(){
		if(url=="main_01.html"){
			$("li.customerList a").addClass("selected_sidebar");
		}
		else if(url == "main_02.html"){
			$("li.listGroupManager a").addClass("selected_sidebar");
		}
		else if(url == "main_03.html"){
			$("li.groupListManager a").addClass("selected_sidebar");
		}
		else if(url == "main_04.html"){
			$("li.deletedList a").addClass("selected_sidebar");
		}
		else if(url == "main_05.html"){
			$("li.blackList a").addClass("selected_sidebar");
		}
        else if(url == "main_05_sub.html"){
			$("li.blackList a").addClass("selected_sidebar");
		}
	});

	// 리스트 개수
	var cnt_list1 = $(".table_middle tbody tr").length;
	$(".list_cnt1").text("총 리스트 개수 : " + cnt_list1 + "개");
    var cnt_list2 = $(".table_middle tbody tr").length;
	$(".list_cnt2").text("총 리스트 그룹 개수 : " + cnt_list2 + "개");
    var cnt_list3 = $(".table_middle tbody tr").length;
	$(".list_cnt3").text("캠페인 개수 : " + cnt_list3 + "개");
    var cnt_list4 = $(".table_middle tbody tr").length;
	$(".list_cnt4").text("총 블랙리스트 개수 : " + cnt_list4 + "개");
    
	// 블랙 리스트 관리 - 블랙 리스트 상세보기
	$(".table_blackList tbody tr").dblclick(function(){
		location.href="./main_05_sub.html";
	});	
	
    // 그룹 정보 수정
    $(".table_groupManager tbody tr").on("dblclick", function(){
        var array = new Array();
        var td = $(this).children();
        td.each(function(i){
            array.push(td.eq(i).text());
        });
        
        $("body").append("<div class='modaloverlay'></div><div class='contentoverlay' style='height:360px; top:calc(50% - 220px);'></div>");
        $(".modaloverlay").fadeIn();
        $(".contentoverlay").fadeIn().html(
            "<div id='popup_edit_group' style='padding:0px'><label for='groupId'>그룹 ID</label><input type='text' name='groupId' id='groupId' value=" + array[1] + " disabled><label for='campaignId'>캠페인 ID</label><input type='text' name='campaignId' id='campaignId' value=" + array[2] + " disabled><label for='groupName'>그룹 이름</label><input type='text' name='groupName' id='groupName' value=" + array[3] + "><label for='listCount'>리스트 개수</label><input type='text' name='listCount' id='listCount' value=" + array[4] + " disabled><label for='filterCondition' style='height:24px'>필터 조건</label><select name='field' id='Filter_1' class='filtering' disabled><option>" + array[5] + "</option></select><select name='field' id='Filter_2' class='filtering' disabled><option value=''></option></select><label for='statusCode'>진행 상태</label><input type='text' name='statusCode' id='statusCode' value=" + array[6] + " disabled><label for='constructor'>생성자</label><input type='text' name='constructor' id='constructor' value=" + array[7] + " disabled><label for='constructTime'>생성 날짜 및 시간</label><input type='text' name='constructTime' id='constructTime' value=" + array[8] + " disabled><input type='hidden' name='constructIp' id='constructIp'><label for='modifier'>수정자</label><input type='text' name='modifier' id='modifier' value=" + array[9] + " disabled><label for='modifiyTime'>수정 날짜 및 시간</label><input type='text' name='modifiyTime' id='modifiyTime' value=" + array[10] + " disabled></div>"
        ).append("<div class='setting_ok'>수정</div><div class='closed'>취소</div>"
        );
        $("#groupName").focus();
        var before_edit = td.eq(3);

        $(".contentoverlay .setting_ok").click(function(){
            var edit = $("#groupName").val();
            before_edit.text(edit);
            $(".modaloverlay, .contentoverlay").remove();
        });
        $(".contentoverlay .closed").click(function(){
            $(".modaloverlay, .contentoverlay").remove();
        });
    });
    
    // 설정창
    $("#setting_popup").click(function(){
        $("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
        $(".modaloverlay").fadeIn();
        $(".contentoverlay").fadeIn().html(
            "<div id='set'><p>고객 전화번호 개수 설정 <span>(고객 전화번호1은 디폴트값 입니다.)</span></p><input type='checkbox' id='set_check' name='set_check' disabled><label>고객 전화번호1</label><input type='checkbox' id='set_check' name='set_check'><label>고객 전화번호2</label><input type='checkbox' id='set_check' name='set_check'><label>고객 전화번호3</label><input type='checkbox' id='set_check' name='set_check'><label>고객 전화번호4</label><input type='checkbox' id='set_check' name='set_check'><label>고객 전화번호5</label></div>"
        ).append("<div class='setting_ok'>설정</div><div class='closed'>취소</div>"
        );

        $(".contentoverlay .closed, .contentoverlay .setting_ok").click(function(){
            $(".modaloverlay, .contentoverlay").hide();
        });
    });

    // 검색 기능
	$("#searchBoard").keyup(function(){
		var in_word = $(this).val();
		$(".table_middle tbody tr").hide();
		
		var out_word = $(".table_middle tbody tr td:contains('" + in_word + "')");
		
		if(in_word == ""){
			$(".table_middle tbody tr").show();
		}
		else{
			$(out_word).parent().show();
		}
	});
});

/* ------------------------------------ JAVASCRIPT ------------------------------------ */
// input창에 숫자만 입력받기
/*$(document).on("keyup", "input:text[numberOnly]", function(){
    $(this).val($(this).val().replace(/[^0-9]/gi,""));
    console.log("숫자만");
});*/

// 캠페인 선택
function campaignIdCheck(){
	var selectedId = $("#campaignId option:selected").val();
    $("input[name=check_cnt]").prop("checked", false);
    var cnt_list = $(".table_middle tbody tr").length;
    var count = 0;
    
    $(".table_customerList tbody tr").each(function(){
        if(selectedId == null || selectedId == "" || selectedId == ''){
            $(this).show();
            $(".list_cnt").text("총 리스트 개수 : " + cnt_list + "개");
        }
        else if(selectedId !== $(this).children('td').eq(1).text()){
            $(this).hide();
            count++;
        }
        else{
            $(this).show();
        }
        var list_cnt = cnt_list - count;
        $(".list_cnt").text("총 리스트 개수 : " + list_cnt + "개");
    });
    
}

// 체크박스 전체 선택
function check_all() {
	if($("#check_all").is(":checked")){
		$("input[name=check_cnt]").prop("checked", true);
	}else{
		$("input[name=check_cnt]").prop("checked", false);
	}
}

// 체크박스 일부 선택 후 삭제
function checked_list(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    var visi_list = $(".table_customerList tbody tr:visible").length;
    
	for(var i=0; i<check_count; i++){
		if(checkbox[i].checked == true){
			$(".table_customerList tbody tr").eq(i).hide();
            count++;
		}
        else{}
	}
    var list_cnt = visi_list - count;
    $("input[name=check_cnt]").prop("checked", false);
    $(".list_cnt").text("총 리스트 개수 : " + list_cnt + "개");
}

// 캠페인할당 버튼
function assignCampaign(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    for(var i=0; i<check_count; i++){
		if(checkbox[i].checked == true){
            count++;
			$("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
            $(".modaloverlay").fadeIn();
            $(".contentoverlay").fadeIn().html(
                "<div id='popup_groupManagerAssign'><div class='assign_content'><form id='AssignForm' name='AssignForm'><label for='campaignAssign'>캠페인ID</label><select id='campaignAssign' name='campaignAssign'><option>1000</option><option>1001</option><option>1002</option></select></form><p>* 선택하신 " + count + "개의 그룹을 할당할 캠페인을 선택해주세요.</p></div></div>"
            ).append("<div class='setting_ok'>할당</div><div class='closed'>취소</div>");
		}
        else{}
	}
    $(".contentoverlay .closed, .contentoverlay .setting_ok").click(function(){
        $(".modaloverlay, .contentoverlay").hide();
        $("input[name=check_cnt]").prop("checked", false);
    });
}

// 그룹삭제 버튼
function deleteList(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    var count2 = 0;
    var visi_list = $(".table_middle tbody tr:visible").length;
    
    for(var i=0; i<check_count; i++){
        
		if(checkbox[i].checked == true){
            count++;
			$("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
            $(".modaloverlay").fadeIn();
            $(".contentoverlay").fadeIn().html(
                "<div id='set2'><p><span class='count'>" + count + "</span>개의 그룹을 삭제하시겠습니까?</p></div>"
            ).append("<div class='setting_ok'>삭제</div><div class='closed'>취소</div>");
		}
        else{}
	}
    
    $(".contentoverlay .setting_ok").click(function(){
        for(var i=0; i<check_count; i++){
            if(checkbox[i].checked == true){
                $(".table_middle tbody tr").eq(i).hide();
                count2++;
            }
            else{}
        }
        var list_cnt = visi_list - count2;
        $(".list_cnt").text("총 리스트 그룹 개수 : " + list_cnt + "개");
        $("input[name=check_cnt]").prop("checked", false);
        $(".modaloverlay, .contentoverlay").hide();
    });
    
    $(".contentoverlay .closed").click(function(){        
        $(".list_cnt").text("총 리스트 그룹 개수 : " + visi_list + "개");
        $(".modaloverlay, .contentoverlay").hide();
        $("input[name=check_cnt]").prop("checked", false);
    });
}


// 리스트 신규추가
function addNewGroup(){
    $("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
    $(".modaloverlay").fadeIn();
    $(".contentoverlay").fadeIn().html(
        "<div id='popup_add_group'><div class='add_new_group'><label for='NewGroupName'>그룹 이름</label><input type='text' name='NewGroupName' id='NewGroupName'/></div><p>* 신규로 등록될 리스트 개수는 <span class='cnt_list'>00</span>개 입니다.</p><p style='opacity:0.4'>(엑셀파일 추가 예시)</p></div>"
    ).append("<div class='setting_ok'>추가</div><div class='closed'>취소</div>"
    );
    
    document.getElementById("NewGroupName").focus();

    $(".contentoverlay .closed, .contentoverlay .setting_ok").click(function(){
        $(".modaloverlay, .contentoverlay").hide();
    });
}

// 리스트 복원
function restoreList(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    var count2 = 0;
    var visi_list = $(".table_middle tbody tr:visible").length;
    
    for(var i=0; i<check_count; i++){
        
		if(checkbox[i].checked == true){
            count++;
			$("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
            $(".modaloverlay").fadeIn();
            $(".contentoverlay").fadeIn().html(
                "<div id='set2'><p><span class='count'>" + count + "</span>개의 리스트를 복원하시겠습니까?</p></div>"
            ).append("<div class='setting_ok'>복원</div><div class='closed'>취소</div>");
		}
        else{}
	}
    
    $(".contentoverlay .setting_ok").click(function(){
        for(var i=0; i<check_count; i++){
            if(checkbox[i].checked == true){
                $(".table_middle tbody tr").eq(i).hide();
                count2++;
            }
            else{}
        }
        var list_cnt = visi_list - count2;
        $(".list_cnt").text("총 리스트 그룹 개수 : " + list_cnt + "개");
        $("input[name=check_cnt]").prop("checked", false);
        $(".modaloverlay, .contentoverlay").hide();
    });
    
    $(".contentoverlay .closed").click(function(){        
        $(".list_cnt").text("총 리스트 그룹 개수 : " + visi_list + "개");
        $(".modaloverlay, .contentoverlay").hide();
        $("input[name=check_cnt]").prop("checked", false);
    });
}

// 리스트 영구삭제
function perDeleteList(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    var count2 = 0;
    var visi_list = $(".table_middle tbody tr:visible").length;
    
    for(var i=0; i<check_count; i++){
        
		if(checkbox[i].checked == true){
            count++;
			$("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
            $(".modaloverlay").fadeIn();
            $(".contentoverlay").fadeIn().html(
                "<div id='set2'><p><span class='count'>" + count + "</span>개의 리스트를 영구적으로 삭제하시겠습니까?</p></div>"
            ).append("<div class='setting_ok'>영구삭제</div><div class='closed'>취소</div>");
		}
        else{}
	}
    
    $(".contentoverlay .setting_ok").click(function(){
        for(var i=0; i<check_count; i++){
            if(checkbox[i].checked == true){
                $(".table_middle tbody tr").eq(i).hide();
                count2++;
            }
            else{}
        }
        var list_cnt = visi_list - count2;
        $(".list_cnt").text("총 리스트 그룹 개수 : " + list_cnt + "개");
        $("input[name=check_cnt]").prop("checked", false);
        $(".modaloverlay, .contentoverlay").hide();
    });
    
    $(".contentoverlay .closed").click(function(){        
        $(".list_cnt").text("총 리스트 그룹 개수 : " + visi_list + "개");
        $(".modaloverlay, .contentoverlay").hide();
        $("input[name=check_cnt]").prop("checked", false);
    });
}

// 블랙리스트 액셀추가
function addNewBlack(){
    $("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
    $(".modaloverlay").fadeIn();
    $(".contentoverlay").fadeIn().html(
        "<div id='popup_add_group'><p style='margin-top:45px; font-size:15px;'>* 신규로 등록될 블랙리스트 개수는 <span class='cnt_list'>00</span>개 입니다.</p><p style='opacity:0.4; margin-top:15px;'>(엑셀파일 추가 예시)</p></div>"
    ).append("<div class='setting_ok'>추가</div><div class='closed'>취소</div>"
    );

    $(".contentoverlay .closed, .contentoverlay .setting_ok").click(function(){
        $(".modaloverlay, .contentoverlay").hide();
    });
}

// 블랙리스트 개별추가
function addBlack(){
    var black_id = $(".table_blackListDetail tbody tr").children().eq(1).text();
    var visi_list = $(".table_blackListDetail tbody tr:visible").length;
    var list_cnt = visi_list + 1;
    
    $("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
    $(".modaloverlay").fadeIn();
    $(".contentoverlay").fadeIn().html(
        "<div id='popup_add_black'><div class='customer_key'><label for='customerId'>고객키</label><input type='text' name='customerId' id='customerId' numberOnly></div><p>* 이 블랙리스트는 캠페인ID <span>" + black_id + "</span>에 추가됩니다.</p></div>"
    ).append("<div class='setting_ok'>추가</div><div class='closed'>취소</div>"
    );
    
    document.getElementById("customerId").focus();
    
    $(".contentoverlay .setting_ok").click(function(){
        var customerid = $("#customerId").val();
        var array = new Array();
        $(".table_blackListDetail tbody tr").each(function(i){
            array.push($(this).children().eq(2).text());
        });
        
        if(array.includes(customerid)){
            alert("동일한 고객키가 존재합니다.");
            $(".modaloverlay, .contentoverlay").remove();
        }
        else{
            $(".table_blackListDetail tbody").append("<tr><td style='width:35px; min-width:35px;'><input type='checkbox' id='check' name='check_cnt'></td><td>1003</td><td>" + customerid + "</td><td>admin20001</td><td>2020/12/01</td></tr>");
            $(".modaloverlay, .contentoverlay").remove();
            $(".list_cnt").text("총 블랙리스트 개수 : " + list_cnt + "개");
        }
    });
    $(".contentoverlay .closed").click(function(){
        $(".modaloverlay, .contentoverlay").remove();
    });
    
    $("input[name=check_cnt]").prop("checked", false);
}

// 블랙리스트 삭제
function delete_black(){
    var checkbox = document.getElementsByName("check_cnt");
	var check_count = checkbox.length;
    var count = 0;
    var visi_list = $(".table_blackListDetail tbody tr:visible").length;
    
	for(var i=0; i<check_count; i++){
		if(checkbox[i].checked == true){
			$(".table_blackListDetail tbody tr").eq(i).hide();
            count++;
		}
        else{}
	}
    var list_cnt = visi_list - count;
    $("input[name=check_cnt]").prop("checked", false);
    $(".list_cnt").text("총 블랙리스트 개수 : " + list_cnt + "개");
}











