(function() {
	var btn = document.getElementById('unit1Quiz');
	var quizDialog = document.getElementById('quiz');
	btn.addEventListener('click', 
		function() {
			quizDialog.showModal();
		}
	);

	// wait for submit
	var submit = document.getElementById('submit');
	submit.addEventListener('click', 
		function() {
			quizDialog.close();
		}
	);

	// wait for submit
	var cancel = document.getElementById('cancel');
	cancel.addEventListener('click', 
		function() {
			quizDialog.close();
		}
	);
})();