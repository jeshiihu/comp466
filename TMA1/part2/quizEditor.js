// $('#main').after('<div id="created_div"></div>');
// 

$("#addQuiz").click(function() {
	var id = "new";
	var title = "new";
	$("<button id=\""+ id+ "\" class=\"btn\" type=\"submit\"><h4>" + title + "</h4></button>").appendTo("#newQuizzes");
});

// THINK OF HUGE FILE WITH QUIZ INNARDS