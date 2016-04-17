/**
 * @des: 首页相关接口
 */

var Index = require('../../model/index');
module.exports = function(req, res){

};

module.exports.get = function(req, res, next){
	var param = req.params;
	Index.get(param).then(function(data){
		res.render(data);
	},function(err){

	});
};

module.exports.post = function(req, res, next){

};

module.exports.put = function(req, res, next){

};

module.exports.delete = function(req, res, next){

};