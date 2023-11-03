function filterSelection(val) {
  var box = document.getElementById(val);
  var cards = document.getElementsByClassName("filter");
  var select = document.getElementsByClassName(val);
  if (box.checked) {
    for (var c of cards) {
      c.style.display = "none";
    }
    for (var s of select) {
      s.style.display = "inline";
    }
  } else {
    for (var c of cards) {
      c.style.display = "flex";
    }
  }
}
