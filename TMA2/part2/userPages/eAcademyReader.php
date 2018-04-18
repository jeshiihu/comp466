<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL | E_STRICT);

	$servername = 'student.athabascau.ca';
	$username = 'jessicahu22';
	$password = 'jessicahu22abyz';
	$dbname = 'jessicahu22';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error)
		die("Connection failed: " . $conn->connect_error);

	if(isset($_GET['getUnits'])) 
	{
		$query = "SELECT * FROM Units";
		$result = mysqli_query($conn, $query);

		$units = array();
		while($unit = mysqli_fetch_array($result))
			$units[] = $unit;
		echo json_encode($units);
		exit();
	}

	if(isset($_GET['getUnitById']))
	{
		$id = $_GET['getUnitById'];
		$query = "SELECT * FROM Units WHERE ID = '$id'";
		$result = mysqli_query($conn, $query);
		
		$units = array();
		while($unit = mysqli_fetch_array($result))
			$units[] = $unit;
		if(count($units) <= 0)
			die("Unable to get Unit with ID = "+ $id);

		echo json_encode($units[0]);
	}

	if(isset($_GET['getChaptersByUnitId']))
	{
		$unitId = $_GET['getChaptersByUnitId'];
		$query = "SELECT * FROM Chapters WHERE UnitID = '$unitId'";
		$result = mysqli_query($conn, $query);

		$chapters = array();
		while($chap = mysqli_fetch_array($result))
			$chapters[] = $chap;
		echo json_encode($chapters);
	}

	if(isset($_GET['getSectionsByChapterId']))
	{
		$chapId = $_GET['getSectionsByChapterId'];
		$query = "SELECT * FROM Sections WHERE ChapterID = '$chapId'";
		$result = mysqli_query($conn, $query);

		$sections = array();
		while($sec = mysqli_fetch_array($result))
			$sections[] = $sec;
		echo json_encode($sections);
	}

	if(isset($_GET['getQuizByUnitId']))
	{
		$id = $_GET['getQuizByUnitId'];
		$query = "SELECT * FROM Quizzes WHERE ID = '$id'";
		$result = mysqli_query($conn, $query);
		
		$quizzes = array();
		while($quiz = mysqli_fetch_array($result))
			$quizzes[] = $quiz;
		if(count($quizzes) <= 0)
			die("Unable to get Quiz with Unit ID = "+ $id);

		echo json_encode($quizzes[0]);
	}

	if(isset($_GET['getQuizQuesByQuizId']))
	{
		$quizId = $_GET['getQuizQuesByQuizId'];
		$query = "SELECT * FROM QuizQuestions WHERE QuizID = '$quizId'";
		$result = mysqli_query($conn, $query);

		$questions = array();
		while($ques = mysqli_fetch_array($result))
			$questions[] = $ques;
		echo json_encode($questions);
	}

	if(isset($_GET['getQuizAnsByQuesId']))
	{
		$quesId = $_GET['getQuizAnsByQuesId'];
		$query = "SELECT * FROM QuizAnswers WHERE QuestionID = '$quesId'";
		$result = mysqli_query($conn, $query);

		$answers = array();
		while($ans = mysqli_fetch_array($result))
			$answers[] = $ans;
		echo json_encode($answers);
	}
?>