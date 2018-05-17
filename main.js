/**
 *
 */
document.getElementById("check").onclick = function(){
	var check1 = document.getElementById("name-input").value;
	var check2 = document.getElementById("name-check").checked;
	var check3 = document.getElementById("gender1").checked;
	var check4 = document.getElementById("gender2").checked;
	if(check1 == "" || check2 == false){
		alert("入力されていません");
	}if(check3 == false && check4 == false){
		alert("入力されていません");
	}
}