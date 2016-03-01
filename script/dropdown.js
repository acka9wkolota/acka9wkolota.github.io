$(document).ready(function(){
    $('[data-feature=dropdown]').click(function () {
        $(this).next().toggleClass("dropdown-visible");
    });
});

// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown-button')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

