function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1))//单个
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));//集合
		}else{
			return document.getElementsByTagName(str);
		}
	}
	//参数:键,值,有效期(单位是：天)
// 返回值:无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}


// 功能:获取cookie(根据键获取值)
// 参数:键
//返回值:值
function getCookie(key){
	var str = unescape(document.cookie);
	// 分割成数组(;)
	var arr = str.split(";");
	// 从数组查找key=
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].split("=")[1];
		}
	}
	return null;
}

// 功能:删除cookie
// 参数:键
// 返回值:无
function removeCookie(key){
	saveCookie(key,"",-1);//将设置cookie的时效设置为过去就删除cookie
}
