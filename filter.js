function filterSelection(val) {
  var cards = document.getElementsByClassName("card");
  if (val === "all") {
    for (var c of cards) {
      c.style.display = "inline";
    }
  } else {
    var box = document.getElementById(val);
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
        c.style.display = "inline";
      }
    }
  }
}
