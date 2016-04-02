module.exports = (function(){
	function create(req, res){
		res.status(201).json(req.user);
	}
	return {
		create: create
	}
})(); 