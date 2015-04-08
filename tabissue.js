if (Meteor.isClient) {


Template.layout.rendered = function(){
 	 $('ul.tabs').tabs()
	}
}

//The only way to do it is to have each page render, which is not effective if there are N pages.
Template.layout.rendered = function(){
 	 $('ul.tabs').tabs()
	}
}

