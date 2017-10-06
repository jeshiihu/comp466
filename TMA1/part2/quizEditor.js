// $('#main').after('<div id="created_div"></div>');
// 

$("button").click(function() {
	var btnID = this.id;
	var htmlFile = btnID + ".html";

	DisplayDlg(htmlFile);
});

function DisplayDlg(htmlFile)
{
	var dlg = document.getElementsByClassName("dlgcontent");
	dlg.setAttribute("data", htmlFile);
	dlg.style.display = "block";
}
