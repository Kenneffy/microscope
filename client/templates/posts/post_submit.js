Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

			var post = {
				url: $(e.target).find('[name=url]').val(),
				title: $(e.target).find('[name=title]').val()
			};

			Meteor.methods({
			  'postInsert': function () {
			    // .. do other stuff ..
			    console.log('works');
			    if (error)
			    	return alert(error.reason);

			    Router.go('postPage', {_id: result._id});
			  }
			});
			Meteor.call('postInsert');

		// 	Meteor.call('postInsert', post, function(error, result) {
		// 	// display the error to the user and abort
		// 		if (error)
		// 			return alert(error.reason);

		// 	Router.go('postPage', {_id: result._id});
		// });
	}
});