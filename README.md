# Component initialization with Iron Router, Jquery, Materialize

Materialize needs jquery components to be initialized on DOM ready. Finding a way to initialize components on all views is tricky.

From reading the docs: this should initialize everything the sub-templates require:

Template.layout.rendered = function(){
 	 $('ul.tabs').tabs()
	}
}

However, this only works on a hard page refresh, and not with links routing the views.

So instead you would have to initialize on each template that element will be used
Template.x.rendered ...
Template.y.rendered ...
