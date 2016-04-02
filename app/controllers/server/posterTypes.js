var PosterType = require('../../models/posterType');

module.exports = (function(){
	function index(req, res){
		PosterType.find(function(err, posterTypes){
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(posterTypes); 
			}
		});
	}
	return {
		index: index
	}
})();