javascript:(function() {
    var a = document.createElement('a');
    var href = null;
    var error = null;
    try {
        href = $('link[href*=".ico"]', document.head)[0]?.href || $('link[href*=".ico"]', document.head)?.href || null;
    } catch (err) {console.log("No .ico found in document.head"); error = err;}
    try {
        if (href === null) {
            href = $('link[href*=".png"]', document.head)[0]?.href || $('link[href*=".png"]', document.head)?.href || null;
        }
    } catch (err) {console.log("No .png found in document.head"); error = err;}
    try {
        if (href === null) {
            href = $('link[href*=".jpg"]', document.head)[0]?.href || $('link[href*=".jpg"]', document.head)?.href || null;
        }
    } catch (err) {console.log("No .jpg found in document.head"); error = err;}
    if (href === null) { alert("fail to extract icon 😢 \n\n" + error); return; }
    a.href = href;
    a.setAttribute('download', document.title);
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
})();