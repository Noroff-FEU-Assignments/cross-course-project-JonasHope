function myFunction() {
	const menu = document.querySelector("#nav-list");
	
	if (menu.style.display === "block") {
	  menu.style.display = "none";
	} else {
	  menu.style.display = "block";
	}
  }