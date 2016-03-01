function dropdownTopLeftFunc() {
  document.getElementById("dropdown-top-left").classList.toggle("show");
}

function dropdownTopRightFunc() {
  document.getElementById("dropdown-top-right").classList.toggle("show");
}



window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}