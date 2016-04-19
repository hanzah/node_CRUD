var PosterType = require('../../models/posterType');
var Q = require('q');

module.exports = function(){
	console.log('Seeding Poster Types');
	var posterTypes = [
		{
			name: 'Club',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme1.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon1.png'
		},
		{
			name: 'Drink',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme2.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon2.png'
		},
		{
			name: 'Social',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme3.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon3.png'
		},
		{
			name: 'Business',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme4.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon4.png'
		},
		{
			name: 'Birthday',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme5.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon5.png'
		},
		{
			name: 'Theater',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme6.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon6.png'
		},
		{
			name: 'Camping',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme7.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon7.png'
		},
		{
			name: 'Romance',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme8.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon8.png'
		},
		{
			name: 'Food',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme9.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon9.png'
		},
		{
			name: 'Family',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme10.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon10.png'
		},
		{
			name: 'Fun',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme11.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon11.png'
		},
		{
			name: 'Walk',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme12.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon12.png'
		},
		{
			name: 'Party',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme13.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon13.png'
		},
		{
			name: 'Nature',
			photo: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/themes/Theme14.png',
			icon: 'https://s3.eu-central-1.amazonaws.com/networks.meetup/icons/ThemeIcon14.png'
		}
	];
	var defer = Q.defer();
	PosterType.create(posterTypes, defer.makeNodeResolver());
	return defer.promise;
}