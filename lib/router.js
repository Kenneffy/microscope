Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	//we are defining waitOn globally at router level
	waitOn: function() {
		return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
	}
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
	name: 'postPage',
	data: function(){ return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function(){
	if(! Meteor.user()){
		this.render('accessDenied');
	} else {
		this.next();
	}
}


// This tells Iron Router to show the “not found” page not just for invalid routes but also for the
// postPage route, whenever the data function returns a “falsy” (i.e. null , false , undefined ,
// or empty) object.
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});



