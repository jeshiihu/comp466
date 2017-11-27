var user;

document.onreadystatechange = function() {
	user = GetCookie('username');
	if(user == "")
		location.href="../part1.html";
};

window.onload = function() { 
	$('#user').text(user + '|');
	DisplayUrls();
};

function DisplayUrls()
{
	$('#urlList').empty();
	$.get('userPages.php',
		{'getUserUrls': user},
		function(data) {
			if(data.length == 0)
				$('#urlList').append("<h1 id='noBookmarks'> You have no bookmarks :(</h1>");

			for(var i = 0; i < data.length; i++){
				var url = data[i].Url;
				AddUrlToPage(url);
			}
		}, "json");
}

function AddUrlToPage(url) {
	var urlElement = CreateUrlElement(url);
	$('#urlList').prepend(urlElement);
	if($('#noBookmarks'))
		$('#noBookmarks').remove();
}

function CreateUrlElement(url) {
	var urlElement = "<div class='url' id='" + url + "'>"
	urlElement += "<a target='_blank' href='" + url + "'>" + url + "</a>";
	urlElement += "<input class='edit' type='submit' value=''>";
	urlElement += "<input class='delete' type='submit' value=''>";
	urlElement += "</div><hr>"
	return urlElement;
}

////////////////////////////////////////////////////////////////////
// LOGOUT //////////////////////////////////////////////////////////
$('#logout').click(function() {
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/~jessicahu22/comp466_a2/part1;";
	location.href="../part1.html";
});

////////////////////////////////////////////////////////////////////
// ADD DELETE //////////////////////////////////////////////////////////
$('#addUrl').click(function() {
	var url = $('#urlInput').prop('value');
	AddNewUrl(url);
});

// will add if valid url
function AddNewUrl(url)
{
	$.post('userPages.php',
		{'addUrl': url,
		 'user': user},
		function(data) {
			if(data == false)
				ShowDatabaseError("Unable to add URL. Please ensure it is valid.");
			else if(data == -1)
				ShowDatabaseError("This url has already been added to your list!");
			else {
				ShowDatabaseError("");
				AddUrlToPage(url);
			}
		});
}

function UpdateUrl(url, oldUrl) {
	$.post('userPages.php',
		{'updateUrl': url,
		 'user': user,
		 'oldUrl': oldUrl},
		function(data){
			if(data == false)
				ShowDatabaseError("Unable to update URL. Please ensure it is valid.");
			else if(data == -1)
				ShowDatabaseError("This url has already been added to your list!");
			else {
				ShowDatabaseError("");
				UpdateEditedLink(url);
			}
		});
}

// $('.delete')[0].parentNode
$(document).on('click', '.delete', function() {
	var url = this.parentNode.getAttribute('id');
	$.post('userPages.php',
		{'deleteUrl':url},
		function(data) {
			if(data == false)
				ShowDatabaseError("Unable to delete the url" + url);
			else {
				ShowDatabaseError("");
				DisplayUrls();			
			}
		})
});

// var curr, new disable everything 
var prevUrl;
$(document).on('click', '.edit', function() {
	$(':input').prop('disabled', true);

	var link = this.previousElementSibling;
	link.setAttribute("id", "replaceWithEditableLink");
	var linkUrl = link.getAttribute('href');

	prevUrl = linkUrl;
	var newEdit = "<input id='editableLink' type='text' value='" + linkUrl + "'>";
	newEdit += "<input id='saveUrl' class='btn' type='submit' value='SAVE'>";
	newEdit += "<input id='cancelUrl' class='btn' type='submit' value='CANCEL'>";
	$("#replaceWithEditableLink").after(newEdit);
	$("#replaceWithEditableLink").remove();
});

function UpdateEditedLink(url)
{
	var urlElement = "<a target='_blank' href='" + url + "'>" + url + "</a>";
	$('#editableLink').before(urlElement);
	$('#editableLink').remove();
	$('#saveUrl').remove();
	$('#cancelUrl').remove();

	$(':input').prop('disabled', false);
}

$(document).on('click', '#saveUrl', function() 
{
	UpdateUrl(this.previousElementSibling.value, prevUrl);
});

$(document).on('click', '#cancelUrl', function() 
{
	UpdateEditedLink(prevUrl);
});

function ShowDatabaseError(msg)
{
	$('#error').text(msg);
}

