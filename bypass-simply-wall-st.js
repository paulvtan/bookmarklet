javascript: (function () {
  // This disable scroll event listener. The paywall cannot be re-triggered by scrolling again.
  window.addEventListener(
    "scroll",
    function (event) {
      event.stopPropagation();
    },
    true
  );
  // This removes the paywall popup dialog to asking to sign-up.
  const paywallDialog = document.querySelectorAll(
    '[data-cy-id="modal-ModalPortal-0-"]'
  );
  paywallDialog[0].parentNode.childNodes[0].className = "";
  // This removes the blurry background paywall.
  let paywallBackground = document.getElementById("root");
  paywallBackground.id = "";
})();
