

$("button").click(function() {
	var btnID = this.id;
	var htmlFile = btnID + ".html";

	DisplayDlg(htmlFile);
});

function DisplayDlg(htmlFile)
{
	var dlgContent = document.getElementById("dlgContent");
	dlgContent.setAttribute("data", htmlFile);

	var dlg = document.getElementById("dlg");
	dlg.style.display = "block";
}

$("#cancel").click(function() { 
	var dlg = document.getElementById("dlg");
	dlg.style.display = "none";
});