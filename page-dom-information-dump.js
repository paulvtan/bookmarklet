javascript: (function () {
  var obj = document;
  var str = "";
  var array = new Array();
  var i = 0;
  for (key in obj) {
    array[i] = key;
    i++;
  }
  array = array.sort();
  for (i = 0; i < array.length; i++) {
    var key = array[i];
    var value;
    try {
      value = obj[key];
    } catch (e) {
      value = "DUMP ERROR: key=" + key + "; e=" + e;
    }
    var value_str = value + "";
    if (
      value_str != "null" &&
      value_str.match(/[\[]native code/) == null &&
      value_str.match(/object HTMLCollection/) == null
    ) {
      value_str = value_str.replace(/</g, "&lt;");
      str += key + "=" + value_str + ";\n";
    }
  }
  var o = window.open("", "_blank");
  var newdoc = o.document;
  newdoc.write("<plaintext>" + str);
  newdoc.close();
})();
