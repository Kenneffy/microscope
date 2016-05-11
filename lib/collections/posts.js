Posts = new Mongo.Collection('posts');

//only allows posting if you are logged in
// Posts.allow({
// 	insert: function(userId, doc) {
// 		return !! userId;
// 	}
// })
Meteor.methods({
	postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			url: String,
			content: String
		});

		var postWithSameLink = Posts.findOne({url: postAttributes.url});
		if (postWithSameLink) {
			return {
				postExists: true,
				_id: postWithSameLink._id
			}
		}
		
		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	},
	// likePost: function(){
	// 	return alert('ohhai');
	// }
});

//client side inserts are not allowed when "insecure" package is removed