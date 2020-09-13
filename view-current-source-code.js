javascript: (function () {
  var c = unescape(document.documentElement.innerHTML);
  c = c.replace(/</g, "&lt;");
  c = c.replace(/%/g, "&#25;");
  var cl = c.split("\n");
  var c2 = "";
  for (var i = 0; i < cl.length; i++) {
    c2 += "<b style='display:'>" + (i + 1) + ". </b>" + cl[i] + "\n";
  }
  var str =
    "VIEW SOURCE OF: " +
    window.location +
    " (" +
    cl.length +
    " lines; " +
    c.length +
    " bytes) <b>[<a href=\"javascript:var a = document.getElementsByTagName('b');for (var i = 0; i<a.length; i++) {a[i].style.display='none';}\">hide line numbers</a>]</b><hr noshade size=1><pre>" +
    c2;
  var o = window.open("", "_blank");
  if (o) {
    o.document.write(str);
    o.document.close();
  } else {
    document.body.innerHTML = str;
  }
})();
