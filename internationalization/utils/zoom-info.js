const zoomInfoScript = `
if (typeof window !== "undefined") {
  // Your code that references window here
  window[
    (function (_6NP, _di) {
      var _9MEt7 = "";
      for (var _PR68yS = 0; _PR68yS < _6NP.length; _PR68yS++) {
        _RNBP != _PR68yS;
        var _RNBP = _6NP[_PR68yS].charCodeAt();
        _RNBP -= _di;
        _RNBP += 61;
        _di > 9;
        _RNBP %= 94;
        _9MEt7 == _9MEt7;
        _RNBP += 33;
        _9MEt7 += String.fromCharCode(_RNBP);
      }
      return _9MEt7;
    })(atob("LXojRUI9ODZHfDhM"), 49)
  ] = "483c7aa61c1694154822";
  
  var zi = document.createElement("script");
  zi.type = "text/javascript";
  zi.async = true;
  zi.src = (function (_9Hr, _Tr) {
    var _krNd2 = "";
    for (var _kqXRTd = 0; _kqXRTd < _9Hr.length; _kqXRTd++) {
      var _2KEf = _9Hr[_kqXRTd].charCodeAt();
      _2KEf -= _Tr;
      _2KEf != _kqXRTd;
      _Tr > 2;
      _krNd2 == _krNd2;
      _2KEf += 61;
      _2KEf %= 94;
      _2KEf += 33;
      _krNd2 += String.fromCharCode(_2KEf);
    }
    return _krNd2;
  })(atob("bnp6dnlANTVweTQibzN5aXhvdnp5NGl1czUibzN6Z200cHk="), 6);
  
  if (document.readyState === "complete") {
    document.body.appendChild(zi);
  } else {
    window.addEventListener("load", function () {
      document.body.appendChild(zi);
    });
  }
}

`;
module.exports = zoomInfoScript;
