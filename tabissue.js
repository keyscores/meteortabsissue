if (Meteor.isClient) {


	Template.layout.rendered = function(){
		 $('ul.tabs').tabs()
		},
		
	Template.body.rendered = function(){
		 $('ul.tabs').tabs()
		},

	Template.notIdeal.rendered = function(){
		 $('ul.tabs').tabs()
		}
}