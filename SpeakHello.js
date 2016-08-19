(function (window) {
var helloSpeaker = {};
helloSpeaker.speakWord = "Hello";
helloSpeaker.sayHello = function speak(name) {
  console.log(helloSpeaker.speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);