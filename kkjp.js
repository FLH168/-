/******************************
⚠️如果放远程，请把kkjp.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:kk键盘解锁会员
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/kk\.weshine\.im\/v1\.0\/vip\/goodslist|https?:\/\/kk\.weshine\.im\/v1\.0\/voicelist|https?:\/\/kk\.weshine\.im\/v1\.0\/voice\/pvoiceDetail|https?:\/\/kkgif\.weshine\.im\/v1\.0\/index|https?:\/\/kk-flow\.weshine\.im\/v1\.0\/flow\/discover|https?:\/\/kk\.weshine\.im\/v1\.0\/voicecate|https?:\/\/kk\.weshine\.im\/v3\.0\/phrase\/albumcatelist|https?:\/\/kkgif\.weshine\.im\/v1\.0\/albums\/relevant|https?:\/\/kkgif\.weshine\.im\/v1\.0\/albums\/detail|https?:\/\/kkgif\.weshine\.im\/v1\.0\/albums\/relevant|https?:\/\/kkgif\.weshine\.im\/v1\.0\/albums\/detail|https?:\/\/kk\.weshine\.im\/v1\.0\/phrase\/album|https?:\/\/kk\.weshine\.im\/v2\.0\/phrase\/detail|https?:\/\/kk\.weshine\.im\/v2\.0\/phrase\/detail|https?:\/\/kk\.weshine\.im\/v2\.0\/phrase\/detail|https?:\/\/kk\.weshine\.im\/v3\.0\/skin\/albumlist|https?:\/\/kk\.weshine\.im\/v2\.0\/skin\/detail|https?:\/\/kk\.weshine\.im\/v1\.0\/fontshop\/albumlist|https?:\/\/kk\.weshine\.im\/v1\.0\/textassistant\/lists|https?:\/\/kk\.weshine\.im\/v1\.0\/bubble\/albumlist|https?:\/\/kk\.weshine\.im\/v1\.0\/speech\/albumlist|https?:\/\/kk\.weshine\.im\/v1\.0\/fontshop\/detail|https?:\/\/kk\.weshine\.im\/v1\.0\/speech\/albumlist|https?:\/\/kk\.weshine\.im\/v1\.0\/speech\/albumlist|https?:\/\/netapm\.music\.163\.com\/open\/api\/metric\/data\/upload\/v2.*? url script-response-body kkjp.js


[mitm]
hostname = kk.weshine.im,kk.weshine.im,kk.weshine.im,kkgif.weshine.im,kk-flow.weshine.im,kk.weshine.im,kk.weshine.im,kkgif.weshine.im,kkgif.weshine.im,kkgif.weshine.im,kkgif.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,kk.weshine.im,netapm.music.163.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/nickname\":"KK_feb9aaef56"/g,'nickname":"傅立恒专用"');
body = body.replace(/user_type\":1/g,'user_type":5');
body = body.replace(/vip_expired_time\":0/g,'vip_expired_time":4096364004000');
body = body.replace(/vip_use\":0/g,'vip_use":1');
body = body.replace(/user_type\":1/g,'user_type":5');
body = body.replace(/vip_expired_time\":0/g,'vip_expired_time":4096364004000');
body = body.replace(/vvip_use\":0/g,'vvip_use":1');
body = body.replace(/is_vip\":0/g,'is_vip":1');
body = body.replace(/user_type\":10/g,'user_type":5');
body = body.replace(/vip_expired_time\":1661702400/g,'vip_expired_time":4096364004000');
body = body.replace(/lock\":2/g,'lock":1');
body = body.replace(/is_pay\":0/g,'is_pay":1');
body = body.replace(/count\":10/g,'count":99999');
body = body.replace(/code\":"0"/g,'code":"9999"');
$done(body);
