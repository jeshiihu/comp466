
$(".navigators button").click(function()
{
	var btnID = this.id;
	var xmlFile = btnID + ".xml";
	GetQuestions(xmlFile);

	if(btnID == "addQuiz")
	{
		var editBtn = document.getElementById("edit");
		editBtn.style.display = 'none';
	}

	DisplayDlg();
});

$("#cancel").click(function()
{ 
	HideDialog();
});

$("#submit").click(function()
{ 
	// HideDialog();
});

function HideDialog()
{
	var dlg = document.getElementById("dlg");
	dlg.style.display = 'none';
	DisplayBackground();
}

function DisplayDlg()
{	
	var dlg = document.getElementById("dlg");
	dlg.style.display = "block";

	HideBackground();
}

function HideBackground()
{
	if(document.getElementById("tutorial"))
		document.getElementById("tutorial").style.display = 'none';
	document.body.style.backgroundColor = 'gray';
}

function DisplayBackground()
{
	if(document.getElementById("tutorial"))
		document.getElementById("tutorial").style.display = 'block';
	document.body.style.backgroundColor = 'white';
}