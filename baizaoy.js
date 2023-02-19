/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
kk键盘解锁会员
脚本名称:kk键盘解锁会员
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/kk.weshine.im\/v1.0\/fontshop\/albumlist.+$ url script-response-body kk.js
[mitm] 
hostname = *.kk.*
*******************************
Surge

[Script]
^http[s]?:\/\/kk.weshine.im\/v1.0\/fontshop\/albumlist.+$ requires-body=1,max-size=0,script-path=kk.js

[MITM]
hostname = *.kk.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.nickname= "傅立恒专用";
obj.data.user_type= 5;
obj.data.vip_expired_time= 4096364004000;
obj.data.vip_use= 1;
obj.data.user_type= 5;
obj.data.vip_expired_time= 4096364004000;
obj.data.vvip_use= 1;
obj.data.is_vip= 1;
obj.data.user_type= 5;
obj.data.vip_expired_time= 4096364004000;
obj.data.lock= 1;
obj.data.is_pay= 1;
obj.data.count= 99999;
obj.data.code= "9999";
    $done({body: JSON.stringify(obj)});
