var measurementBtn = document.getElementById('measure');
var measurementDlg = document.getElementsByClassName('dlg')[0];
measurementBtn.onclick = function() {
	measurementDlg.style.display = 'block';
}

var tipBtn = document.getElementById('tip');
var tipDlg = document.getElementsByClassName('dlg')[2];
tipBtn.onclick = function() {
	tipDlg.style.display = 'block';
}

var closeMeasureBtn = document.getElementById('cancelMeasurement')
closeMeasureBtn.onclick = function() {
	measurementDlg.style.display = 'none';
}

var closeTipBtn = document.getElementById('cancelTip')
closeTipBtn.onclick = function() {
	tipDlg.style.display = 'none';
}