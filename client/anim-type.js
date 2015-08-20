if (Meteor.isClient) {
  var typewriter = Meteor.npmRequire('typewriter');
  var twSpan = document.getElementById('typewriter');
  var tw = typewriter(twSpan).withAccuracy(95)
    .withMinimumSpeed(5)
    .withMaximumSpeed(17)
    .build();
  console.log("tw")

  tw.put('$ ')
    .waitRange(500, 1000)
    .type('cd gits')
    .put('<br/>')
    .waitRange(1000, 1500)
    .put('meteor create panda-courses<br/>')
    .put('$ ')
    .waitRange(1000, 1500)
    .type('cd panda-courses')
    .put('<br/>')
    .wait(200)
    .put('$ meteor<br/>')
    .wait(500)
    .put('[[[[[ ~/Documents/gits/panda-courses ]]]]]<br/>')
    .put('<br/>')
    .wait(100)
    .put('=> Started proxy. <br/>')
    .wait(100)
    .put('=> Started proxy. <br/>')
    .put('<br/>')
    .wait(100)
    .put('=> Started your app. <br/>')
    .put('<br/>')
    .wait(100)
    .put('=> App running at: http://localhost:4000/ </br>');
}
