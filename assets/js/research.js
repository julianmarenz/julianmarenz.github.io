(function () {
  function setAbstractState(button, isOpen) {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!panel) {
      return;
    }

    button.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = Array.from(document.querySelectorAll(".abstract-toggle"));

    buttons.forEach(function (button) {
      setAbstractState(button, false);

      button.addEventListener("click", function () {
        const willOpen = button.getAttribute("aria-expanded") !== "true";

        buttons.forEach(function (otherButton) {
          setAbstractState(otherButton, otherButton === button ? willOpen : false);
        });
      });
    });
  });
})();
