<?php
	$cookie = 'username';

	$servername = 'student.athabascau.ca';
	$username = 'jessicahu22';
	$password = 'jessicahu22abyz';
	$dbname = 'jessicahu22';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	if(isset($_GET['getTopTen'])) {
		$query = "SELECT Url FROM Bookmarks GROUP BY Url ORDER BY COUNT(*) DESC LIMIT 10";
		$result = mysqli_query($conn, $query);

		$urls = array();
		while($url = mysqli_fetch_array($result))
			$urls[] = $url;
		echo json_encode($urls);
		exit();
	}
?>