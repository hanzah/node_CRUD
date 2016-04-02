var PosterType = require('../../models/posterType');
var Q = require('q');

module.exports = function(){
	console.log('Seeding Poster Types');
	var posterTypes = [
		{
			name: 'name1',
			photo: 'photo1',
			icon: 'icon1'
		},
		{
			name: 'name2',
			photo: 'photo2',
			icon: 'icon2'
		},
		{
			name: 'name3',
			photo: 'photo3',
			icon: 'icon3'
		}
	];
	var defer = Q.defer();
	PosterType.create(posterTypes, defer.makeNodeResolver());
	return defer.promise;
}