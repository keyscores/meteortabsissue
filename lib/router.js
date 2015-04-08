Router.route('/', function () {
  this.render('Home'),
  this.layout("Layout")
  });

Router.route('/about', function () {
  this.render('about'),
  this.layout("Layout")
  });
  
Router.route('/other', function () {
  this.render('other'),
  this.layout("Layout")
  });