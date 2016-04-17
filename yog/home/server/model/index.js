var INTERFACE = require('../interface')();

module.exports.getData = function(){
	return {
		title : 'FIS',
	};
};

module.exports.get = function(param){
	console.log(param);
	return yog.ralPromise('API', {
		query: param,
		method: 'POST',
		path: INTERFACE._getHomePageChannel
	});
};