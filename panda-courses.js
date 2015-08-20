if (Meteor.isClient) {
  Template.registerHelper('isSession', function(session) {
    if (session && Session.get(session) === "subscribedSuccess") {
      return true;
    }
  });
  Template.home.rendered = function() {
    console.log('If you\'re reading this its too late. The animation happened.');
    $.Velocity.RegisterUI("transition.slide", {
      defaultDuration: 2000,
      calls: [
        [{
          opacity: 0
        }, .02],
        [{
          opacity: 1,
          translateY: "30px"
        }, 1, {
          easing: [220, 18]
        }]
      ]
    });
    $(".glider").velocity("transition.slide", {
      stagger: 50,
      drag: true,
      delay: 800
    });
  };
};

// You can as well pass different parameters on each call
var mailChimp = new MailChimp( /* apiKey, { version: '2.0' } */ );

mailChimp.call('campaigns', 'list', {
    start: 0,
    limit: 1000
  },
  // Callback beauty in action
  function(error, result) {
    if (error) {
      console.error('[MailChimp][Campaigns][List] Error: %o', error);
    } else {
      // Do something with your data!
      console.info('[MailChimp][Campaigns][List]: %o', result);
    }
  }
);
