

// https://www.xul.fr/en-xml-ajax.html
function GetXmlHttp()
{
	var xmlHttp; 
	if (window.XMLHttpRequest)     // Standard object
	{ 
	    xmlHttp = new XMLHttpRequest();     // Firefox, Safari, ...
	} 
	else if (window.ActiveXObject)   // Internet Explorer 
	{
	    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
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

function DisplayQuestions(xml)
{
	$('#quizContent').empty();
	$("#quizTitle").empty();
	var xmlDoc = xml.responseXML;
	var title = GetNodeValue(xmlDoc, "title");
	var init = "<h2>" + title + "</h2>";
	$(init).appendTo("#quizTitle");

	var questions = xmlDoc.getElementsByTagName("question");
	for(var i = 0; i < questions.length; i++)
	{
		var quesNum = "q" + (i+1);
		var form = "<form id=\"" + quesNum + "\">";
		form += "Question " + (i+1) + ": ";

		var quesText = GetNodeValue(questions[i], "questionText");
		form += "<input class=\"question\" value=\"" + quesText + "\">";
		form += "<button class=\"delete\">Delete</button><br/>"

		form += GetAnswer(questions[i], "a");
		form += GetAnswer(questions[i], "b");
		form += GetAnswer(questions[i], "c");
		form += GetAnswer(questions[i], "d");
		form += "</form>";

		$(form).appendTo("#quizContent");
	}
}

function GetAnswer(question, letter)
{
	var answerText = GetNodeValue(question, letter);
	var input = "<input type=\"radio\" name=\"" + letter + "\" value=\"" + letter + "\">";
	input += "<input class=\"answer\" type=\"text\" readonly=\"readonly\" value=\"" + answerText + "\"><br/>";
	return input;
}

function GetNodeValue(parent, tag)
{	try 
	{
		return parent.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
	} catch(e) {
		return "Error Loading Value";
	}
}




