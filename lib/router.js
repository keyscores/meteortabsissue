Router.route('/', function () {
  this.render('notIdeal'),
  this.layout("layout")
  });

Router.route('/ideal', function () {
  this.render('ideal'),
  this.layout("layout")
  });
  
Router.route('/notIdeal', function () {
  this.render('notIdeal'),
  this.layout("layout")
  });