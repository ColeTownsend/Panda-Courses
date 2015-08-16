if (Meteor.isClient) {
  Template.registerHelper('isSession', function(session) {
    if (session && Session.get(session) === "subscribedSuccess") {
      return true;
    }
  });
  Template.home.rendered = function() {
    var listItems = document.querySelectorAll('.glider')
    var i = 0;
    console.log('If you\'re reading this its too late. The animation happened.')

    function show() {

      // Animate each line individually
      for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i]
          // Define initial properties
        dynamics.css(listItem, {
          opacity: 0,
          translateY: 20
        })

        // Animate to final properties
        dynamics.animate(listItem, {
          opacity: 1,
          translateY: 0
        }, {
          type: dynamics.spring,
          frequency: 300,
          friction: 280,
          duration: 800,
          delay: 80 + i * 40
        })
      }
    };
    setTimeout(show(), 600)
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
