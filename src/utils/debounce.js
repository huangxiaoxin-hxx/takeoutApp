function debounce(fnName, delay) {
  var timer = null;
  return function() {
    // var context = this;
    var args = arguments;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      this[fnName](args);
    }, delay);
  };
}

export default debounce;
