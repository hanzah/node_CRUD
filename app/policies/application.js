module.exports = function(req, res, policy){
	if(!policy){
	  res.json(401, 'Not authorized to perform action!');
	}
}