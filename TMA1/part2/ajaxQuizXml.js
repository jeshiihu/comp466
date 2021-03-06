

// https://www.xul.fr/en-xml-ajax.html
function GetXmlHttp()
{
	var xmlHttp; 
	if (window.ActiveXObject !== undefined)     // Standard object
	{ 
	    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} 
	else   // Internet Explorer 
	{
	    xmlHttp = new XMLHttpRequest();     // Firefox, Safari, ...
	}

	return xmlHttp;
}

function GetQuestions(xmlFile)
{ 
	var xmlHttp = GetXmlHttp();
	xmlHttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200)
			DisplayQuestions(this);
	};

	xmlHttp.open("GET", xmlFile, true);
	xmlHttp.send();
}

function MarkQuestions(xmlFile)
{ 
	var xmlHttp = GetXmlHttp();
	xmlHttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200)
			CalculateResult(this);
	};

	xmlHttp.open("GET", xmlFile, true);
	xmlHttp.send();
}


function DisplayQuestions(xml)
{
	var submitButton = document.getElementById("submit");
	submitButton.disabled = false;
	var score = document.getElementById("score");
	score.style.display = 'none';

	$('#quizContent').empty();
	$("#quizTitle").empty();
	var xmlDoc = xml.responseXML;
	var title = GetNodeValue(xmlDoc, "title");
	var init = "<h2>" + title + "</h2>";
	$(init).appendTo("#quizTitle");

	var questions = xmlDoc.getElementsByTagName("question");
	for(var i = 0; i < questions.length; i++)
	{
		var form = "<form>";
		var quesText = GetNodeValue(questions[i], "questionText");
		quesText = "Question " + (i+1) + ": " + quesText;

		form += "<p>" + quesText + "</p><br/>";
		form += GetAnswersText(questions[i], "a", i);
		form += GetAnswersText(questions[i], "b", i);
		form += GetAnswersText(questions[i], "c", i);
		form += GetAnswersText(questions[i], "d", i);
		form += "</form>";

		$(form).appendTo("#quizContent");
	}
}

function GetAnswersText(question, letter, index)
{
	var answerText = GetNodeValue(question, letter);
	var input = "<input type=\"radio\" name=\"" + index + "\" value=\"" + letter + "\">";
	input += '<p>'+answerText + "</p><br/>";
	return input;
}

function GetNodeValue(parent, tag)
{	try 
	{
		return parent.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
	} catch(e) 
	{
		return "Error Loading Value";
	}
}

$('#submit').click(function()
{
	var quizFile = (this.value) + ".xml";
	MarkQuestions(quizFile);
	this.disabled = true;
});

function CalculateResult(xml)
{
	var correct = 0;
	var xmlDoc = xml.responseXML;
	var correctAnswers = xmlDoc.getElementsByTagName("answer");
	for(var i = 0; i < correctAnswers.length; i++)
	{
		HighlightCorrectAnswer(i, correctAnswers[i].textContent);
		try {
			var query = 'input[name = "'+ i + '"]:checked';
			var userAnswer = document.querySelector(query).value;
			if(userAnswer == correctAnswers[i].textContent)
				correct++;
			else
				HighlightWrongAnswer(i, userAnswer);
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	percentage = (correct/correctAnswers.length*100).toFixed(2);
	var score = document.getElementById("score");
	score.textContent = "SCORE: " + percentage + "%"
	score.style.display = 'inline';
	location.href = "#";
	location.href = "#quizTitle";
}

function HighlightCorrectAnswer(index, ans)
{
	HighlightAnswer(index,ans,"green");
}

function HighlightWrongAnswer(index, ans)
{
	HighlightAnswer(index,ans,"red");
}

function HighlightAnswer(index, ans, hilicolor)
{
	var groupedAnswers = document.getElementsByName(index);
	for(var i = 0; i < groupedAnswers.length; i++)
	{
		if(groupedAnswers[i].value == ans)
		{
			var answerText = groupedAnswers[i].nextElementSibling;
			answerText.style.color = hilicolor;
		}

	}
}






