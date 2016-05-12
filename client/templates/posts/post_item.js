Template.postItem.helpers({
	//"this" gets set to the post object created
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});

Template.postItem.events({
	//remove this click event
	'click .likeButton' : function(e){
		e.preventDefault();

		// var post = {
		// 	totalLikes: 'helo'
		// };

		
		if (Meteor.user()){
			
			console.log(User.find());
			console.log(this.userId);
			console.log(Posts.find());
		} else {
			alert('You need to be logged in to like that post');
		}
		
		Meteor.call('likePost', function(error, result) {
		if (error)
			return alert(error.reason);

	});
	},
	'click .upvote': function(e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}

});

//if client clicks on "like" button..


//server side changes happening
//total likes of a certain post will increase by one 
//user 