/*
 * des:处理用户登录时链接地址跳转路径问题
 *	   例如：http://test.twss.com.cn/h5/user/login.html?_href=http%3A//test.twss.com.cn/mine.html
 *	   我们需要提取的地址是：_href=http%3A//test.twss.com.cn/mine.html
 *     返回：http%3A//test.twss.com.cn/mine.html
 *			[当用户登录成功后跳转到该url页面]
 * author:wfj
 * time:2015-07-25
 * email:177676656@qq.com
 */
define(function(require, exports, module) {
	var QueryString = function() {
		var query_string = {};
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (typeof query_string[pair[0]] === "undefined") {
				query_string[pair[0]] = pair[1];
			} else if (typeof query_string[pair[0]] === "string") {
				var arr = [query_string[pair[0]], pair[1]];
				query_string[pair[0]] = arr;
			} else {
				query_string[pair[0]].push(pair[1]);
			}
		}
		return query_string;
	}();
	module.exports = QueryString;
});