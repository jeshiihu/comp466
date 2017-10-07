
$("#edit").click(function()
{
	var questions = document.getElementsByClassName("question");
	var answers = document.getElementsByClassName("answer");

	for (var i = 0; i < questions.length; i++) 
	{
		questions[i].style.display = "inline";
		questions[i].style.border = "0.5px solid black"
		questions[i].removeAttribute("readonly");
	}	

	for (var i = 0; i < answers.length; i++) 
	{
		answers[i].style.display = "inline";
		answers[i].style.border = "0.5px solid black"
		answers[i].removeAttribute("readonly");
	}	
});

