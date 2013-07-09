app = app || {};

app.models.Person = Backbone.Model.extend({
	defaults: {
		'ID': '',
		'firstname': '',
		'lastname': '',
		'homephone': '',
		'email': '',
		'parent': ''
	},
	
	initialize: function() {
		var self = this;
		if(this.get('parent') !== '') {
			self.set('type', 'student');
		} else {
			self.set('type', 'parent');
		}
	}
	
});

app.collections.People = Backbone.Collection.extend({
	
	model: app.models.Person,
	
	comparator: function(person) {
		return person.get('lastname');
	}
	
});