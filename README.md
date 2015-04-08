# Component initialization with Iron Router, Jquery, Materialize

Materialize needs jquery components to be initialized on DOM ready. Finding a way to initialize components on all views is tricky.

see here: http://meteortabsissue.meteor.com

From reading the docs: this should initialize everything the sub-templates require:

	Template.layout.rendered = function(){

 		 $('ul.tabs').tabs()
 	 
		}

	}

However, this only works on a hard page refresh, and not with links routing the views.

So instead you would have to initialize on each template that element will be used

Template.x.rendered ...

Template.y.rendered ...

BTW We've tried iron-router events:

    onRun

    onBeforeAction

    onAfterAction

All of these seem to happen before the route's template content is present. I noticed that onBeforeAction required a call to next() to go on, I even tried looking for the DOM content after the next call.

I also tried rewriting our routes like this:

    Router.route('someRoute', function() {
      this.render('someRoute');
      // look for DOM content, still not found
    });

