define(function(require, exports, module) {
	require('../comment/base'); //C-公用部分
	require('../lib/swiper3.1.0.min.js');//L-轮播插件

	require('../units/gotop'); //U-返回顶部
	require('../units/elevator'); //U-首页楼层
	require('../units/regloginstatus'); //U-初始化登陆注册状态
	require('../units/logout'); //退出
	require('../units/getcategorylist'); //hover时获取分类列表
	require('../kit/swiperkit');//K轮播效果
});