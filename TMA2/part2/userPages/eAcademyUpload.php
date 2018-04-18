<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL | E_STRICT);

	$servername = 'student.athabascau.ca';
	$username = 'jessicahu22';
	$password = 'jessicahu22abyz';
	$dbname = 'jessicahu22';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	if(isset($_GET['verifyFilePath'])) 
	{
		clearstatcache();
		$path = $_GET['verifyFilePath'];
		print(file_exists($path) && FileIsXml($path));
	}

	if(isset($_POST['uploadFile'])) 
	{
		$file = $_POST['uploadFile'];
		$xml = simplexml_load_file($file) or die("Error: Cannot create object");

		foreach ($xml->unit as $unit)
		{
			echo "Adding a a unit!";
			UploadUnit($conn, $unit);
		}	

		return FALSE;
	}

	function GetAllChildrenAsStr($conn, SimpleXMLElement $node)
	{
		$children = "";
		foreach ($node->children() as $c) 
			$children = "{$children}{$c->asXML()}";

		return $conn->real_escape_string($children);
	}

	function UploadUnit($conn, $unit)
	{
		$title = $unit['title'];
		$ov = GetAllChildrenAsStr($conn, $unit->overview);
		$unitId = Insert($conn, "INSERT INTO Units (Title, Overview) VALUES ('$title', '$ov')");

		foreach ($unit->chapter as $chap) 
			UploadChapter($conn, $chap, $unitId);

		UploadQuiz($conn, $unit->quiz, $unitId);
	}

// 	echo "Quiz: {$x->quiz['title']}\r\n";

// for($i = 0; $i < $x->quiz->question->count(); $i++)
// {
//     $ques = $x->quiz->question[$i];
//     $indx = $i+1;
//     echo "Question {$indx}: {$ques['txt']}\r\n";
//     $letter = 'a';
//     for($j = 0; $j < $ques->ans->count(); $j++)
//     {
//         echo "{$letter}. {$ques->ans[$j]}   Correct: {$ques->ans[$j]['correct']}\r\n";
//         $letter++;
//     }

	function UploadQuiz($conn, $quiz, $unitId)
	{	
		$title = $quiz['title'];
		$quizId = Insert($conn, "INSERT INTO Quizzes (Title, UnitID) VALUES ('$title', '$unitId')");

		foreach ($quiz->question as $ques) 
			UploadQuestion($conn, $ques, $quizId);
	}

	function UploadQuestion($conn, $ques, $quizId)
	{	
		$txt = $ques['txt'];
		$quesId = Insert($conn, "INSERT INTO QuizQuestions (Question, QuizID) VALUES ('$txt', '$quizId')");

		foreach ($ques->ans as $ans) 
			UploadAnswer($conn, $ans, $quesId);
	}

	function UploadAnswer($conn, $ans, $quesId)
	{	
		$txt = $ans;
		$bit = $ans['correct'] == '0' ? 0 : 1;
		Insert($conn, "INSERT INTO QuizAnswers (Answer, Correct, QuestionID) VALUES ('$txt', '$bit', '$quesId')");
	}

	function UploadChapter($conn, $chap, $unitId)
	{
		echo "Unit ID: {$unitId}\r\n";
		$title = $chap['title'];
		$ov = GetAllChildrenAsStr($conn, $chap->overview);
		$chapterId = Insert($conn, "INSERT INTO Chapters (Title, Overview, UnitID) VALUES ('$title', '$ov', '$unitId')");

		foreach ($chap->section as $section) 
			UploadSection($conn, $section, $chapterId);
	}

	function UploadSection($conn, $section, $chapterId)
	{
		echo "Chapter ID: {$chapterId}\r\n";
		$title = $section['title'];
		$content = GetAllChildrenAsStr($conn, $section);
		Insert($conn, "INSERT INTO Sections (Title, Content, ChapterID) VALUES ('$title', '$content', '$chapterId')");
	}

	function Insert($conn, $query)
	{
		$query = trim(preg_replace('/\s+/', ' ', $query));
		echo "{$query}\r\n\r\n";

		$result = mysqli_query($conn, $query); // false failed
		if(!$result)
			die("Insert failed:\r\n{$query}\r\n\r\n");
		
		return mysqli_insert_id($conn);
	}

	function FileIsXml($path) 
	{
		$extLen = 4;
		$len = strlen($path);
		return $len > $extLen && substr($path, $len - $extLen, $len - 1) == ".xml";
	}
?>