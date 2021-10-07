var ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", function (e) {
    cb();
  })
  : cb();
};


ready(function() {
  // Project code
});
