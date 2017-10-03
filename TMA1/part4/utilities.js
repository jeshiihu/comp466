var measurementBtn = document.getElementById('measure');
var measurementDlg = document.getElementsByClassName('dlg')[0];
measurementBtn.onclick = function() {
	measurementDlg.style.display = 'block';
}

var closeBtn = document.getElementById('cancel')
closeBtn.onclick = function() {
	measurementDlg.style.display = 'none';
}