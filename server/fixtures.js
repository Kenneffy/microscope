// Fixture data
if (Posts.find().count() === 0) {
var now = new Date().getTime();

// create two users
var kenId = Meteor.users.insert({
	profile: { name: 'Kenneth Yee' }
});
var ken = Meteor.users.findOne(kenId);

var benId = Meteor.users.insert({
	profile: { name: 'Ben Smith' }
});
var ben = Meteor.users.findOne(benId);


var telescopeId = Posts.insert({
	title: 'Introducing Telescope',
	userId: ben._id,
	author: ben.profile.name,
	url: 'http://sachagreif.com/introducing-telescope/',
	submitted: new Date(now - 7 * 3600 * 1000),
	commentsCount: 2,
	upvoters: [],
	votes: 0
});
Comments.insert({
	postId: telescopeId,
	userId: ken._id,
	author: ken.profile.name,
	submitted: new Date(now - 5 * 3600 * 1000),
	body: 'Interesting project ben, can I get involved?'
});
Comments.insert({
	postId: telescopeId,
	userId: ben._id,
	author: ben.profile.name,
	submitted: new Date(now - 3 * 3600 * 1000),
	body: 'You sure can ken!'
});
Posts.insert({
	title: 'Meteor',
	userId: ken._id,
	author: ken.profile.name,
	url: 'http://meteor.com',
	submitted: new Date(now - 10 * 3600 * 1000),
	commentsCount: 0,
	upvoters: [],
	votes: 0
});
Posts.insert({
	title: 'The Meteor Book',
	userId: ken._id,
	author: ken.profile.name,
	url: 'http://themeteorbook.com',
	submitted: new Date(now - 12 * 3600 * 1000),
	commentsCount: 0,
	upvoters: [],
	votes: 0
});
for (var i = 0; i < 10; i++) {
	Posts.insert({
		title: 'Test post #' + i,
		author: ben.profile.name,
		userId: ben._id,
		url: 'http://google.com/?q=test-' + i,
		submitted: new Date(now - i * 3600 * 1000 + 1),
		commentsCount: 0,
		upvoters: [],
		votes: 0
	});
	}
}