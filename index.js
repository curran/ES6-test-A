// A simple requestAnimationFrame polyfill.
//
// Inspired by:
//
//   https://github.com/chrisdickinson/raf
//   http://jsmodules.io/
//
// Curran Kelleher May 2015
var nextFrame;
var f = () => "test";
if(typeof requestAnimationFrame === "undefined"){
  nextFrame = setTimeout;
} else {
  nextFrame = requestAnimationFrame;
}
export default nextFrame;
