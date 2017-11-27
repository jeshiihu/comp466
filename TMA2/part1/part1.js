
// https://www.w3schools.com/js/js_cookies.asp
function GetCookie(cname) 
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

window.onload = function()
{
	$('#topTen').empty();
	$.get('part1.php',
		{'getTopTen': ""},
		function(data) {
			if(data.length == 0)
				$('#topTen').append("<h1 id='noBookmarks'>No Booksmarks have been added</h1>");

			for(var i = 0; i < data.length; i++){
				var url = data[i].Url;
				AddUrlListItem(url);
			}
		}, "json");
}

function AddUrlListItem(url)
{
	var li = "<li><a target='_blank' href='" + url + "'>" + url + "</a></li>";
	$('#topTen').append(li);
}