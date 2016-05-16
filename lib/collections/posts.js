Posts = new Mongo.Collection('posts');

// Comments = new Mongo.Collection('comments');


Meteor.methods({
	postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			content: String,
			url: String
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
			submitted: new Date(),
			commentsCount: 0,
			upvoters: [],
			votes: 0
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	},
	upvote: function(postId) {
		check(this.userId, String);
		check(postId, String);

		var post = Posts.findOne(postId);

		if (!post)
			throw new Meteor.Error('invalid', 'Post not found');
		if (_.include(post.upvoters, this.userId))
			throw new Meteor.Error('invalid', 'Already upvoted this post');

		Posts.update(post._id, {
			$addToSet: {upvoters: this.userId},
			$inc: {votes: 1}
		});
	}
});

//only allows posting if you are logged in
// Posts.allow({
// 	insert: function(userId, doc) {
// 		return !! userId;
// 	}
// })


