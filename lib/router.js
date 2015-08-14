Router.configure({
    layoutTemplate: 'home',
    loadingTemplate: 'Loading',
});

Iron.Router.hooks.scrollToTop = function() {
    window.scrollTo(0, 0);
    this.next();
};

Router.configure({
    progressSpinner: false
});

Router.onBeforeAction('scrollToTop');

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('notFound', {
        path: '*'
    });
});
