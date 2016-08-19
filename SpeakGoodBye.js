(function (window) {
var byeSpeaker = {};
byeSpeaker.speakWord = "Good Bye";
byeSpeaker.sayGoodBye = function speak(name) {
  console.log(byeSpeaker.speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);