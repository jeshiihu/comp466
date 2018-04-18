

document.onreadystatechange = function() {
	user = GetCookie("username");
	if(user != "")
		location.href="userPages/homepage.html";
};

// ///////////////////////////////////////////////////////////////////
// INPUT REQUESTS ////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
$('#btnLogin').click(function() 
{
	if(ChecksFieldsAreValid(true))
		CheckLogin();
});

$('#btnSignUp').click(function() 
{
	if(ChecksFieldsAreValid(false))
		CheckSignUp();
});

function ChecksFieldsAreValid(checkUserExists)
{
	if(!CheckNonEmpty())
		return false;

	CheckUsername(checkUserExists);
	return $('#error').text().length == 0;
}

function CheckNonEmpty() {
	if($('input[name$="username"]').prop('value').length <= 0 ||
		$('input[name$="password"]').prop('value').length <= 0) 
	{
		ShowError('Please fill out all fields');
		return false;
	}

	HideError();
	return true;
}

// ///////////////////////////////////////////////////////////////////
// RESPONSE TO PHP ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

function ShowError(msg) {
	$('#error').text(msg);
	$('#error').show();
}

function HideError() {
	$('#error').text('');
	$('#error').hide();
}

// exists function will determine if we want to know if it exists for not
function CheckUsername(wantExists)
{
	var user = $('input[name$="username"]').prop('value');
	$.get('login/loginSignup.php',
		{'userExists':user},
		function(data) 
		{
			if(wantExists && data == false)
				ShowError('The user name you have entered does not exist.');
			else if(!wantExists && data == true)
				ShowError('The user name you have entered has been taken.');
			else if((wantExists && data == true) || (!wantExists && data == false)) {
				HideError();
			}
		}
	);		
}

// really should salt pw...
function CheckLogin()
{
	var user = $('input[name$="username"]').prop('value');
	var pw = $('input[name$="password"]').prop('value');

	$.get('login/loginSignup.php',
	{'loginUser': user,
	 'loginPw'  : pw},
	function(data) {
		if(data == false)
			ShowError('Invalid password');
		else {
			document.cookie = "username=" + user;
			location.href="userPages/homepage.html";
		}
	});
}

function CheckSignUp(user, pw) {
	$.post('login/loginSignup.php',
	{'signupUser': user,
	 'signupPw'  : pw},
	function(data) {
		if(data == false)
			ShowError('Unable to add user, please try again.');
		else {
			document.cookie = "username=" + user;
			location.href="userPages/homepage.html";
		}
	});
}















