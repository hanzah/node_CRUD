module.exports = (function(){
	function createDevice(user, record){
		return !!user && user.id == record.id
	}

	function futurePosters(user, record){
		return !!user
	}
	return {
		futurePosters: futurePosters,
		createDevice: createDevice
	}
})();