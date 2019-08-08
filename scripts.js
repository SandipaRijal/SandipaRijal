function openTab(evt, tabName){
	//Declaring variables
	var i, description, tablinks;
	
	//get elements from class="description" and hide it
	description = document.getElementsByClassName("description");
	
	for (i = 0; i<description.length; i++){
		description[i].style.display = "none";
	}
	
	//get all elements with class="tablinks" and remove the cleass "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i=0; i<tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
															  document.getElementById(tabName).style.display=  "block";
		evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
