!(function(global, factory) {
  module.exports = factory(global);
})(window !== undefined ? window : this, function(window) {
  var matrix = function() {
    console.log("hello matrix");
  };
  // 这一步是核心
  window.matrix = matrix;
  return matrix;
});
