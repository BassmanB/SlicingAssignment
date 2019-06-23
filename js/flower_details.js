function openDialog() {
	var dialog = document.getElementById('dialog-window');
  	dialog.style.display = 'block';

}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
