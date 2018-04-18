var user;

document.onreadystatechange = function() {
	user = GetCookie('username');
	if(user == "")
		location.href="../part2.html";
};

window.onload = function() { 
	$('#user').text(user + '|');
	DisableStartUnitBtn();
	DisplayCourses();
	$("#unitSelected").hide();
	$("#btnMark").hide();
	$("#btnBackToSelection").hide();
};

$('#btnUpload').click(function()
{
	var path = $('input[name$="coursePath"]').prop('value');
	VerifyValidFilePath(path);
});

function VerifyValidFilePath(filePath)
{
	$.get('eAcademyUpload.php',
		{'verifyFilePath': filePath},
		function(data) 
		{
			if(data == false)
				DisplayErrMsg("Please input a valid file path to a .xml file");
			else
			{
				DisplayInfo("Loading your course file to the database...");
				UploadFile(filePath);
			}	
		}
	);
}

function UploadFile(filePath)
{
	$.post('eAcademyUpload.php',
		{'uploadFile': filePath},
		function(data) 
		{
			if(data == false)
				DisplayErrMsg("Error: Unable to upload file to the database.");
			else
				DisplayInfo("Successfully uploaded " + filePath);
		}
	);
}

function DisplayCourses()
{
	$.get('eAcademyReader.php',
		{'getUnits': user},
		function(data) {
			if(data.length == 0)
				DisplayErrMsg("An error occurred trying to read from the database.");

			for(var i = 0; i < data.length; i++)
				AddUnitToTable(data[i]);

		}, "json");
}

function AddUnitToTableTest(data)
{
	var row = "<tr id='" + data +"'><td>" + data + "</td><td>" + data + "</td></tr>";
	$("#tblCourses").append(row);
}

function AddUnitToTable(data)
{
	var id = data.ID;
	var title = data.Title;
	var row = "<tr id='" + id +"'><td>" + id + "</td><td>" + title + "</td></tr>";
	$("#tblCourses").append(row);
}

var selection = "";
$(document).on('click', '#tblCourses tr', function() 
{
	if(selection != "")
		$("#"+selection).children('td').css("background-color","white");

	selection = this.id;
	$(this).children('td').css('background-color', 'yellow');
	DisableStartUnitBtn();
});

function DisableStartUnitBtn()
{
	var id = "#btnStartUnit";
	if(selection == "")
	{
		$(id).attr('disabled','disabled');
		$(id).css('background-color', 'grey');
	}
	else
	{
		$(id).removeAttr('disabled');
		$(id).css('background-color', 'orangered');
	}
}

$("#btnStartUnit").click(function()
{
	$("#selectionAndUpload").hide();
	ParseAndDisplayUnit(selection);
});

$("#btnBackToSelection").click(function()
{
	$("#unitSelected").empty();
	$("#unitSelected").hide();
	$("#btnBackToSelection").hide();
	$("#btnMark").hide();
	DisableStartUnitBtn();
	ParseAndDisplayUnit("");
});
