/**


Coding by one seok

2022.06.30.Thu.

Check.js javaScript Code....


 */

function joinCheck() {
	if(document.frm.Customer_Name.value.length == 0 ) {
		alert ("고객성명이 입력되지 않았습니다" ) ;
		frm.Customer_Name.focus();
		return false();
	}

	
	if(document.frm.Customer_Address.value.length == 0 ) {
		alert ("주소가 입력되지 않았습니다" ) ;
		frm.Customer_Address.focus();
		return false();
	}
	
	
	if(document.frm.Customer_Tel.value.length == 0 ) {
		alert ("전화번호가 입력되지 않았습니다" ) ;
		frm.Customer_Tel.focus();
		return false();
	}
	
	
	if(document.frm.Customer_SEX.value.length == 0 ) {
		alert ("성별이 입력되지 않았습니다" ) ;
		frm.Customer_SEX.focus();
		return false();
	}
	
	
	if(document.frm.Customer_Birth.value.length == 0 ) {
		alert ("고객생년월일이 입력되지 않았습니다" ) ;
		frm.Customer_Birth.focus();
		return false();
	}
	
	
	success(); // 함수 작성 필요
	return true ; //② 반환 값 참


}	


function success() {
	alert ("회원등록이 완료 되었습니다" ) ;
	
	}	

// searchCheck() 추가


function searchCheck() {
	window.location = "CustomerList.jsp" ;
	
	}	


function modify() {
	alert ("회원정보수정이 완료 되었습니다" ) ;
	
	}	

function travel_modify() {
	alert ("여행지정보수정이 완료 되었습니다" ) ;
	
	}
	
function TpModify() {
	alert ("이동수단수정이 완료 되었습니다" ) ;
	
	}	


function searchCheck02() {
	window.location = "TravelList.jsp" ;
	
	}

function searchCheck03() {
	window.location = "TpList.jsp" ;
	
	}
