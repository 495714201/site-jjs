module.exports = {
	allData: function(){
		return [
			{id: 1, name: 'name01', sex: 'man', age: 25},
			{id: 2, name: 'name02', sex: 'man', age: 26},
			{id: 3, name: 'name03', sex: 'sex', age: 23},
			{id: 4, name: 'name04', sex: 'sex', age: 24}
		];
	},
	getUser: function(id) {
		var data = this.allData();
		for (var i = 0, len = data.length; i < len; i++) {
			var _id = data[i].id;
			if (_id == id) {
				return data[i];
			}
		}
		return null;
	}
};