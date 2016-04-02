module.exports = (function(){
	function get(user, record){
		return !!user
	}
	function create(user, record){
		return !!user
	}
	return {
		get: get,
		create: create
	}
})();