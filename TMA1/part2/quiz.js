
var quizbtn = document.getElementById('quizbtn');
var quizDialog = document.getElementById('quiz');
quizbtn.onclick = function() {
	quizDialog.style.display = 'block';
}

var submit = document.getElementById('submit')
submit.onclick = function() {
	quizDialog.style.display = 'none';
}

var cancel = document.getElementById('cancel');
cancel.onclick = function() { 
	quizDialog.style.display = 'none';
}