/**
 * @des: 首页相关接口
 */

var INTERFACE = require('../../interface')();
module.exports = function(req, res){

};

module.exports.get = function(req, res, next){
	yog.ralPromise('SITEAPI', {
		query: req.params,
		method: 'POST',
		path: INTERFACE._getHomePageChannel
	}).then(function(data){
		res.render(data);
	}).catch(function(error){
		error.qq = req.server;
		res.json(error);
	});
};

module.exports.post = function(req, res, next){

};

module.exports.put = function(req, res, next){

};

module.exports.delete = function(req, res, next){

};