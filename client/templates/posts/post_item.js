Template.postItem.helpers({
	//"this" gets set to the post object created
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});

Template.postItem.events({
	'click .likeButton' : function(e){
		e.preventDefault();

		let likeCounter = 0
		if (Meteor.user()){
			likeCounter++
			alert(likeCounter);
		} else {
			alert('You need to be logged in to like that post');
		}
	// Meteor.call('likePost');
	}
});

//if client clicks on "like" button..
//total likes for post will increase by one

//server side changes happening
//