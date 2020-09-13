javascript: (function () {
  var str =
    "<font size=2 face=arial><h2>Images from page: " +
    window.location.href +
    "</h2>";
  var already_got_img = {};
  if (document.images.length == 0) {
    alert("no images in this page");
  } else {
    str += "<h3>" + document.images.length + " images found</h3><hr>\n";
    for (i = 0; i < document.images.length; i++) {
      var img_src = document.images[i].src;
      if (!already_got_img[img_src]) {
        str +=
          "<img src='" +
          document.images[i].src +
          "'><br>\n" +
          '<a href="' +
          document.images[i].src +
          '">' +
          document.images[i].src +
          "</a><br>" +
          document.images[i].width +
          "x" +
          document.images[i].height +
          "<br><br>" +
          "<hr noshade size=1>\n";
        already_got_img[img_src] = 1;
      }
    }
    var o = window.open("", "_blank");
    var newdoc = o.document;
    newdoc.write(str);
    newdoc.close();
  }
})();
