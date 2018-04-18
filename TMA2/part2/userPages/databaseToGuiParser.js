
function DisplayErrMsg(err)
{
	$('#error').css('color', 'yellow');
	$('#error').text(err);
}

function DisplayInfo(msg)
{
	$('#error').css('color', 'white');
	$('#error').text(msg);
}

function ParseAndDisplayUnit(id)
{
	if(id == "")
		$("#selectionAndUpload").show();
	else
	{
		$("#unitSelected").show();
		$("#btnBackToSelection").show();
		$("#btnMark").show();
		DisplayUnit(id);
	}
}

function SanitizeString(str)
{
	str = str.replace(/\r?\n|\r/g, "");
	str = str.replace(/<para>/g, "<p>");
	str = str.replace(/<\/para>/g, "</p><br/>");

	str = SanitizeDefinitions(str);

	var re = /<image src="(.+\.png)">([\w\s]+)<\/image>/g;
	str = str.replace(re, '<img src="$1" alt="$2">');

	re = /<conclusion>([\w\s\.]+)<\/conclusion>/g;
	str = str.replace(re, '<h2><font color="yellow">$1<\/font></h2>');

	return str;
}

// sanitize to a proper html
function SanitizeDefinitions(str)
{
	var re = /<definition term="([\w\s]+)">/g;
	var html = str.replace(re, '<p><font color="mediumspringgreen" style="font-weight:bold">$1</font><font color="mediumspringgreen" style="font-weight:bold">: </font><font>');

	re = /<\/definition>/g;
	return html.replace(re, '</font></p><br/>');
}

function AddDiv(id, idToAddTo)
{
	idToAddTo = "#" + idToAddTo;
	$(idToAddTo).append("<div id="+id+"></div>");
}

function AddHeader(id, content, headerNum)
{
	id = "#" + id;
	$(id).append("<h"+headerNum + ">" + content + "</h"+headerNum+">");
	if(headerNum == 1)
		$(id).append("<hr>");
}

function AddOverview(id, content)
{
	id = "#" + id;
	$(id).append("<h3>Overview</h3>");

	var sanitizedContent = SanitizeString(content);
	$(id).append(sanitizedContent);
}

function AddContent(id, content)
{
	id = "#" + id;
	var sanitizedContent = SanitizeString(content);
	$(id).append(sanitizedContent);
}

function DisplayUnit(id)
{
	$.get('eAcademyReader.php',
		{'getUnitById': id},
		function(unit) 
		{
			if(unit == null)
				DisplayErrMsg("Error: Unable get unit by id: " + id);
			else
			{
				AddHeader("unitSelected", unit.Title, 1);
				AddOverview("unitSelected", unit.Overview);
				DisplayChapters(unit.ID);
				DisplayQuiz(unit.ID);
			}
		}
	, "json");
}

function DisplayQuiz(unitId)
{
	$.get('eAcademyReader.php',
		{'getQuizByUnitId': unitId},
		function(quiz) 
		{
			if(quiz == null)
				DisplayErrMsg("Error: Unable get quiz by unit id: " + unitId);
			else
			{
				var id = "quiz"+quiz.ID;
				AddDiv(id, "unitSelected");
				AddHeader(id, quiz.Title, 1);
				DisplayQuizQuestions(quiz.ID, id);
			}
		}
	, "json");
}

function DisplayQuizQuestions(quizId, divId)
{
	$.get('eAcademyReader.php',
		{'getQuizQuesByQuizId': quizId},
		function(questions) 
		{
			if(questions.length == 0)
				DisplayErrMsg("Error: Unable get questions by quiz id: " + quizId);
			else
			{
				for(var i = 0; i < questions.length; i++)
				{
					var ques = questions[i];
					AddQuestion(ques, divId);
				}
			}
		}
	, "json");
}

function AddQuestion(ques, divId)
{
	var quesId = "question" + ques.ID;
	$("#"+divId).append("<form id='"+quesId+"'><h4>"+ques.Question+"</h4></form><br/>");

	$.get('eAcademyReader.php',
		{'getQuizAnsByQuesId': ques.ID},
		function(answers) 
		{
			if(answers.length == 0)
				DisplayErrMsg("Error: Unable get answers by question id: " + ques.ID);
			else
			{
				for(var i = 0; i < answers.length; i++)
				{
					var ans = answers[i];
					$("#"+quesId).append('<input type="radio" name="'+quesId+'" value="'+ans.Correct+'">'+ans.Answer+'<br>');
				}
			}
		}
	, "json");
}

function DisplayChapters(unitId)
{
	$.get('eAcademyReader.php',
		{'getChaptersByUnitId': unitId},
		function(chapters) 
		{
			if(chapters.length == 0)
				DisplayErrMsg("Error: Unable get chapters by unit id: " + unitId);
			else
			{
				for(var i = 0; i < chapters.length; i++)
				{
					var chapter = chapters[i];
					AddChapter(chapter);
					DisplaySections(chapter.ID);
				}
			}
		}
	, "json");
}

function AddChapter(chapter)
{
	var id = "chapter" + chapter.ID
	AddDiv(id, "unitSelected");
	AddHeader(id, chapter.Title, 2);
	AddOverview(id, chapter.Overview);
}

function DisplaySections(chapId)
{
	$.get('eAcademyReader.php',
		{'getSectionsByChapterId': chapId},
		function(sections) 
		{
			if(sections.length == 0)
				DisplayErrMsg("Error: Unable get sections by chapter id: " + chapId);
			else
			{
				for(var i = 0; i < sections.length; i++)
				{
					var sec = sections[i];
					AddSection(sec, chapId);
				}
			}
		}
	, "json");
}

function AddSection(sec, chapId)
{
	var id = "section" + sec.ID
	AddDiv(id, "chapter" + chapId);
	AddHeader(id, sec.Title, 3);
	AddContent(id, sec.Content);	
}

$("#btnMark").click(function()
{
	var questions = document.getElementsByTagName("form");
	var total = questions.length;
	var correct = 0;
	for(var i = 0; i < questions.length; i++)
	{
   	var name = questions[i].id;
   	var checkedVal = $('input:radio[name='+name+']:checked').val();
   	var correctAns = $(':input:radio[name='+name+'][value=1]');
   	correctAns.after("<font color='lime'>RIGHT ANS</font>");

   	if(checkedVal == 1)
   		correct++;
	}
   
	$("#unitSelected").append("<h2>Percentage:"+(correct/total*100).toFixed(2)+"%</h2>")
});
