
$(".navigators button").click(function()
{
	var btnID = this.id;
	var pattern = /quiz/;
	if(pattern.test(btnID))
	{
		var xmlFile = btnID + ".xml";
		GetQuestions(xmlFile);
	}
	else
	{
		var htmlFile = btnID + ".html";
		var obj = document.getElementById("dlgContent");
		obj.setAttribute("data", htmlFile);
	}

	DisplayDlg();
});

$("#cancel").click(function()
{ 
	HideDialog();
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