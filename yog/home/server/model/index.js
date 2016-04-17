
var INTERFACE = require('../interface');

module.exports.getData = function(){
	return {
		title : 'FIS',
	};
};

module.exports.get = function(param){
	return yog.ralPromise('API', {
		query: param,
		method: 'post',
		path: INTERFACE._getHomePageChannel
	});
};