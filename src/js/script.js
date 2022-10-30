function manage(txt) {
    var bt = document.getElementById('submit');
    if (txt.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}

//function for showing dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

//function for not showing dropdown menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
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

