/*
 *
 * @file: 常用表单验证方法
 * @author: wfj
 */
define(function(require, exports, module) {
	var validate = {
		//邮箱检测
		mail: function(value) {
			return (/^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{0,31}@([0-9a-zA-Z][0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/)
				.test(value.trim());
		},
		//密码检测
		pwd: function(value) {
			return (/^[A-Za-z0-9_\!@#\$%\^&\*\(\)_\+=|<>,\.{}:;\]\[\~\/\?\"'\\-]{6,20}$/).test(value.trim());
		},
		//手机号码检测
		mobile: function(value) {
			return (/^(1\d{10})$/).test(value.trim());
		}
	};
	module.exports = validate;
});