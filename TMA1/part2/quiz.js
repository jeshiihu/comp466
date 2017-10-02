var quizDialog = document.getElementById('quizObj');

var submit = document.getElementById('submit')
submit.onclick = function() {
	quizDialog.style.display = 'none';
}

var cancel = document.getElementById('cancel');
cancel.onclick = function() { 
	quizDialog.style.display = 'none';
}
