

$("#edit").click(function()
{
	EnableEditing(true);
});

$("#save").click(function()
{
	EnableEditing(false);
});

function EnableEditing(isEnabled)
{
	var display = isEnabled ? 'inline' : "none";
	var border = isEnabled ? "0.5px solid black" : "0 none transparent";

	var saveBtn = document.getElementById("save");
	save.style.display = display;

	var addQuesBtn = document.getElementById("addQuestion");
	addQuesBtn.style.display = display;

	var deleteQuestionBtns = document.getElementsByClassName("delete");
	for(var i = 0; i < deleteQuestionBtns.length; i++)
		deleteQuestionBtns[i].style.display = display;

	var questions = document.getElementsByClassName("question");
	var answers = document.getElementsByClassName("answer");

	for (var i = 0; i < questions.length; i++) 
	{
		questions[i].style.border = border;
		if(isEnabled)
			questions[i].removeAttribute("readonly");
		else
			questions[i].setAttribute("readonly", "readonly");
	}	

	for (var i = 0; i < answers.length; i++) 
	{
		answers[i].style.border = border;
		if(isEnabled)
			answers[i].removeAttribute("readonly");
		else
			answers[i].setAttribute("readonly", "readonly");
	}	
}

