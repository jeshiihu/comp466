var quizbtn = document.getElementById('quizbtn');
var quizDialog = document.getElementById('dlg');
var tutorial = document.getElementById('tutorial');
quizbtn.onclick = function() {
	quizDialog.style.display = 'block';
	HideTutorial();
}

var submit = document.getElementById('submit')
submit.onclick = function() {
	quizDialog.style.display = 'none';
	DisplayTutorial();
}

var cancel = document.getElementById('cancel');
cancel.onclick = function() { 
	quizDialog.style.display = 'none';
	DisplayTutorial();
}

function HideTutorial()
{
	tutorial.style.display = 'none';
	document.body.style.backgroundColor = 'gray';
}

function DisplayTutorial()
{
	tutorial.style.display = 'block';
	document.body.style.backgroundColor = 'white';
}
