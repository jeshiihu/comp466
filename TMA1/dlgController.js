

$("button").click(function() {
	var btnID = this.id;
	var htmlFile = btnID + ".html";

	var dlgContent = document.getElementById("dlgContent");
	dlgContent.setAttribute("data", htmlFile);
	DisplayDlg();
});

$("#cancel").click(function() { 
	HideDialog();
});

$("#submit").click(function() { 
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