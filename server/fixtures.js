if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/',
		content: 'Great site!'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com',
		content: 'Superb!'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com',
		content: "m3teor"
	});
}