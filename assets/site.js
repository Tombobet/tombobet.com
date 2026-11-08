// How many client spots are open right now. Change this one number and every page follows.
var OPEN_SPOTS = 2;

(function () {
  var label = OPEN_SPOTS <= 0 ? "Fully booked" : OPEN_SPOTS === 1 ? "1 spot left" : OPEN_SPOTS + " spots left";
  document.querySelectorAll("[data-spots]").forEach(function (el) {
    el.textContent = label;
    if (OPEN_SPOTS <= 0) el.parentElement.classList.add("full");
  });
})();
