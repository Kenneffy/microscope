Posts = new Mongo.Collection('posts');

//only allows posting if you are logged in
Posts.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
})

//client side inserts are not allowed when "insecure" package is removed