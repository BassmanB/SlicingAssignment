function openDialog() {
	var dialog = document.getElementById('dialog-window');
	var flowerDetails = document.getElementById('flower-details');
  	dialog.style.display = 'block';
  	flowerDetails.style.opacity = 0.3;

}

function closeDialog() {
  var dialog = document.getElementById('dialog-window');
  var flowerDetails = document.getElementById('flower-details');
  dialog.style.display = 'none';
  flowerDetails.style.opacity = 1;
}

function changeActive(id){

	
	var toActive = document.getElementById(id);
	var removeActive = document.getElementsByClassName("active")
	
	if(removeActive.length > 0 ){
		removeActive[0].classList.toggle('active');
	}
	toActive.classList.add("active");
	
}

function activeState(){
	var el = document.getElementById("sightings");
	if(el.classList.contains("selected")){
		el.classList.toggle("selected");
	}else{
		el.classList.add("selected");
	}

}

document.addEventListener('DOMContentLoaded', function(){ 
    window.openDialog = openDialog;
	window.closeDialog = closeDialog;
	window.changeActive = changeActive;
	window.activeState = activeState;
}, false);


