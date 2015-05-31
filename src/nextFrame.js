// A simple requestAnimationFrame polyfill.
//
// Inspired by:
//
//   https://github.com/chrisdickinson/raf
//   http://jsmodules.io/
//
// Curran Kelleher May 2015
var nextFrame = this.requestAnimationFrame || setTimeout;
export default nextFrame;
