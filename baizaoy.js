/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
白噪音+解锁会员
脚本名称:白噪音+解锁会员
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/matrix.fingerplay.cn\/user\/fetchUserInfo.+$ url script-response-body matrix.js
[mitm] 
hostname = *.matrix.*
*******************************
Surge

[Script]
^http[s]?:\/\/matrix.fingerplay.cn\/user\/fetchUserInfo.+$ requires-body=1,max-size=0,script-path=matrix.js

[MITM]
hostname = *.matrix.*

*******************************/
var obj = JSON.parse($response.body);
    obj.vip= 1;
obj.phone= "傅立恒专用";
    $done({body: JSON.stringify(obj)});
