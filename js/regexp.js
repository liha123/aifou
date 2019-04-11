// 功能:正则验证
// 参数：需要验证的类型   phone：表示电话号码 
// 返回值:true或false
function regExp(type,str){
	switch(type){
		case "userphone": var reg = /^1[3-9]\d{9}$/i;break;
	}
	return reg.test(str);
}
