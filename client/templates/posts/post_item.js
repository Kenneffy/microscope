Template.postItem.helpers({
	//"this" gets set to the post object created
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});

Template.postItem.events({
	'click .upvote': function(e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}

});
