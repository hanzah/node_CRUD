var PosterType = require('../../models/posterType');
var Q = require('q');

module.exports = function(){
	console.log('Seeding Poster Types');
	var posterTypes = [
		{
			name: 'name1',
			photo: 'photo1',
			photoX2: 'photo1X2',
			photoX3: 'photo1X3',
			icon: 'icon1'
		},
		{
			name: 'name2',
			photo: 'photo2',
			photoX2: 'photo2X2',
			photoX3: 'photo2X3',
			icon: 'icon2'
		},
		{
			name: 'name3',
			photo: 'photo3',
			photoX2: 'photo3X2',
			photoX3: 'photo3X3',
			icon: 'icon3'
		}
	];
	var defer = Q.defer();
	PosterType.create(posterTypes, defer.makeNodeResolver());
	return defer.promise;
}