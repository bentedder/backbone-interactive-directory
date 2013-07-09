app = {
	
	models: {},
	views: {},
	collections: {},
	routers: {},
	init: function() {
		directory = new app.views.People(directoryData);
		
		appRouter = new app.routers.Router();
		Backbone.history.start();
	}
	
}

app.routers.Router = Backbone.Router.extend({

	routes: {
		'filter/:type': 'urlFilter'
	},
	
	urlFilter: function(type) {
		directory.filterType = type;
		directory.trigger('change:filterType');
	}
	
});