Router.configure({
    // the default layout
    layoutTemplate: 'tanksLayout'
});

Router.route('/', function () {
    this.render('tank1');
    this.layout('tanksLayout');
});


Router.route('/second', function () {
    this.render('tempChart');
    this.layout('tanksLayout');
});
