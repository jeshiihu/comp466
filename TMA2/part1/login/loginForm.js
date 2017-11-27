

document.onreadystatechange = function() {
	user = GetCookie("username");
	if(user != "")
		location.href="userPages/userHomepage.html";
};

$('#viewLogin').click(function() {
	ShowLoginMenu('login');
});

$('#viewSignup').click(function() {
	ShowLoginMenu('sign up');
});

function ShowLoginMenu(name) {
	$('#topTenContainer').hide();
	$('#loginContainer').show();
	$('#loginContainer').attr('name', name);
	$('#tryMain').attr('value', name.toUpperCase());

	var altVal = name.toUpperCase() == "LOGIN" ? "SIGN UP" : "LOGIN";
	$('#altBtn').attr('value', altVal);
	EnableLogin(false);
}

// ///////////////////////////////////////////////////////////////////
// INPUT REQUESTS ////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
$('input[name$="username"]').keyup(function() {
	CheckValidUsername(this.value);
	CheckNonEmpty();
});

function CheckValidUsername(username) {
	var name = $('#loginContainer').attr('name');
	if(name.toLowerCase() == 'login') {
		CheckUsername(username, true);
	}
	else
		CheckUsername(username, false);

	return $('#error').text().length > 0;
}

$('input[name$="password"]').keyup(function() {
	if(!CheckNonEmpty())
		return;

	var user = $('input[name$="username"]').prop('value');
	CheckValidUsername(user);
});

function CheckNonEmpty() {
	if($('input[name$="password"]').prop('value').length <= 0 ||
		$('input[name$="username"]').prop('value').length <= 0) {
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
	EnableLogin(false);
	EnableAltBtn(false);
}

function HideError() {
	$('#error').text('');
	$('#error').hide();
	EnableLogin(true);
	EnableLogin(true);
}

function EnableLogin(enable) {
	$('#tryMain').prop('disabled', !enable);
	var colour = enable ? 'orangered' : 'gray';
	var hoverColour = enable ? '#df744a' : 'gray';

	$('#tryMain').css('background-color', colour);
	$('#tryMain').hover(function() {
		$(this).css('background-color', hoverColour);
	});
}

function EnableAltBtn(enable) {
	$('#altBtn').prop('disabled', !enable);
	var colour = enable ? 'darkorange' : 'gray';
	var hoverColour = enable ? 'orange' : 'gray';

	$('#altBtn').css('background-color', colour);
	$('#altBtn').hover(function() {
		$(this).css('background-color', hoverColour);
	});
}

// exists function will determine if we want to know if it exists for not
function CheckUsername(username, wantExists)
{
	$.get('login/loginSignup.php',
		{'userExists':username},
		function(data) {
			if(wantExists && data == false) {
				ShowError('The user name you have entered does not exist. Would you like to sign up instead?');
				EnableAltBtn(true);
			}
			else if(!wantExists && data == true) {
				ShowError('The user name you have entered has been taken. Would you like to login instead?');
				EnableAltBtn(true);
			}
			else if((wantExists && data == true) || (!wantExists && data == false)) {
				HideError();
				EnableAltBtn(false);
			}
			
			if($('input[name$="password"]').prop('value') == "")
				EnableLogin(false);
		});		
}

// ///////////////////////////////////////////////////////////////////
// TRY LOGIN / SIGNUP ////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

$('#tryMain').click(function() {
	AttemptSignUpLogin(this.getAttribute('value'));
});

$('#altBtn').click(function() {
	AttemptSignUpLogin(this.getAttribute('value'));
});

function AttemptSignUpLogin(btnVal) {
	if(!CheckNonEmpty())
		return;

	// send request to check if username exists
	var user = $('input[name$="username"]').prop('value');
	var pw = $('input[name$="password"]').prop('value');
	if(btnVal.toLowerCase() == 'login')
		CheckLogin(user, pw);
	else
		CheckSignUp(user, pw);
}

// really should salt pw...
function CheckLogin(user, pw) {
	$.get('login/loginSignup.php',
	{'loginUser': user,
	 'loginPw'  : pw},
	function(data) {
		if(data == false)
			ShowError('Invalid password');
		else {
			document.cookie = "username=" + user;
			location.href="userPages/userHomepage.html";
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
			location.href="userPages/userHomepage.html";
		}
	});
}















