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
