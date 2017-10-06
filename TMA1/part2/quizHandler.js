var quizbtn = document.getElementById('quizbtn');
var quizDialog = document.getElementsByClassName('dlg')[0];
var tutorial = document.getElementById('tutorial');

$("button").click(function() {
	var btnID = this.id;
	var htmlFile = btnID + ".html";

	DisplayDlg(htmlFile);
	HideBackground();
});

var submit = document.getElementById('submit')
submit.onclick = function() {
	quizDialog.style.display = 'none';
	DisplayBackground();
}

var cancel = document.getElementById('cancel');
cancel.onclick = function() { 
	quizDialog.style.display = 'none';
	DisplayBackground();
}

function HideBackground()
{
	tutorial.style.display = 'none';
	document.body.style.backgroundColor = 'gray';
}

function DisplayBackground()
{
	tutorial.style.display = 'block';
	document.body.style.backgroundColor = 'white';
}
