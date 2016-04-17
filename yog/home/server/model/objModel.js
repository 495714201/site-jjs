module.exports = {
	get: function(data){
		return yog.ralPromise('API', {
			query: data,
			method: 'get',
			path: '/student/courses/searchCourses'
		});
	}
};