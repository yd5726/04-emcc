//jQuery 기본 문법
/*$(function(){
	// $ : 찾아라
	// .click() : 클릭
});
*/
// 자세히 보기
// .rounded-rect or #detail-open 버튼 클릭시
// 팝업으로 제품의 상세/추가 정보를 출력한다.
// 단, 자바스크립트로 작성한다.
// javascript -> document.querySelector() : 첫 번째 일치하는 요소를 css 선택자로 선택
//				 document.querySelectorAll() : 모든 일치하는 요소를 선택 ==> 집합(Collection
// 				 옛날) window.document.getElementsByName ....
/*
$(function() {
	$("#detail-open").click(function() {
		//$(".item-detail").show("slow");
		// .removeClass() : 클래스 선택자 제거 메소드
		$(".item-detail").removeClass("d-none");
	})
	$("#close").click(function() {
		//$(".item-detail").hide("fast");
		// .addClass() : 클래스 선택자 추가 메소드
		$(".item-detail").addClass("d-none");
	})
});
*/
// 생산제품
window.addEventListener("DOMContentLoaded", function(){
	// 닫기 버튼 클릭하면, .item-detal을 보여줘
	// 1. 닫기 버튼 지정, 팝업내용 지정
	const openBT = document.querySelector("#open");
	const closeBT = document.querySelector("#close");
	const itemDIV = document.querySelector(".item-detail");
	
	// 2. 자세히 버튼에 할 일을 지정 (when)
	openBT.addEventListener("click", function(){
		//console.dir(itemDIV);	// itemDIV라는 DOM(Document Object Model) 구조를 출력
		itemDIV.classList.remove("d-none");
	});	// 이벤트 리스너 : 이벤트 여러가지(추가) 지정
			
	// 2. 닫기 버튼에 할 일을 지정 (when)
	closeBT.addEventListener("click", function(){
		//console.dir(itemDIV);	// itemDIV라는 DOM(Document Object Model) 구조를 출력
		itemDIV.classList.add("d-none");
	});	// 이벤트 리스너 : 이벤트 여러가지(추가) 지정
			
	// 1. small-img에 마우스가 올려지면
	// 2. big-img에 이미지가(id="img1") 업데이트 된다.
	const smallIMG = document.querySelectorAll(".small-img li");
	const img1 = document.querySelector("#img1");
	smallIMG[0].addEventListener("mouseenter", function(){
		//console.log("0번 사진을 #img1에 업데이트");
		//console.log(img1.getAttribute("src"));
		img1.setAttribute("src","https://picsum.photos/id/1/2000/2000");
	})
	smallIMG[1].addEventListener("mouseenter", function(){
		//console.log("1번 사진을 #img1에 업데이트");
		img1.setAttribute("src","https://picsum.photos/id/10/2000/2000");
	})
	smallIMG[2].addEventListener("mouseenter", function(){
		//console.log("2번 사진을 #img1에 업데이트");
	img1.setAttribute("src","https://picsum.photos/id/100/2000/2000");
	})
	/* side panel*/
	//const openSidePanel = document.querySelector(".burger");
	//const closeSidePanel = document.querySelector("#closePanel");
	
	const toggleSidePanel = document.querySelector("#closePanel");
	const sidePanel = document.querySelector("#sidePanel");
	const screen = document.querySelector(".screen");
	
	/*
	const toggleSidePanel = $("#closePanel");
	const sidePanel = $("#sidePanel");
	*/
	toggleSidePanel.addEventListener("click", function(){
		if(sidePanel.classList.contains("collapsed")){
			sidePanel.classList.remove("collapsed");
			toggleSidePanel.innerHTML = "&gt";
			screen.classList.remove("d-none");
		}else{
			sidePanel.classList.add("collapsed");
			toggleSidePanel.innerHTML = "&lt";
			screen.classList.add("d-none");
		}
	});
	
	/*
	toggleSidePanel.addEventListener("click", function(e){
		console.log(e.target);
	});
	*/
	/*
	toggleSidePanel.click(function(){
		if(sidePanel.hasClass("collapsed")){
			//console.log("있음");
			sidePanel.removeClass("collapsed");
		}else{
			//console.log("없음");
			sidePanel.addClass("collapsed");
		}
	});
	*/
})
