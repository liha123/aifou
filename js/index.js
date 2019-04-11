function usercenter(){
	let user = getCookie("userphone");
	if(user!=null){
		$("#user").style.display = "none";
		$("#usercenter").style.display = "block";
		$("#logina").innerHTML = user;
	}else{
		$("#user").style.display = "block";
		$("#usercenter").style.display = "none";
	}
}