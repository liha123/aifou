<?php

	header("Content-type:text/html;charset=utf-8");

// 1.接受前端传来的数据(获取用户输入的内容)
	$userphone = $_POST['userphone'];
	$userpass = $_POST['userpass'];
//2.处理 建立连接
	$con = mysql_connect("localhost","root","root");
	if (!$con) {
		die("连接失败");
	}
	// 选择数据库
	mysql_select_db("aifou",$con);

// 3.执行sql语句
	$sqlStr = "insert into users
         values('$userphone','$userpass')";
    $result = mysql_query($sqlStr,$con);
	
	//echo $sqlStr
//4、关闭数据库
	mysql_close($con);
	
	//三、给前端响应
	echo "1";

?>