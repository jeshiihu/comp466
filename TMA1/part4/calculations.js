
// https://stackoverflow.com/questions/469357/html-text-input-allows-only-numeric-input
// $("dlg").
// 	var inputs = document.getElementsByTagName('input')
// 	for (var i = 0; i < inputs.length ; i++) {
// 		inputs[i].reset();
// 	};
// }


function NumericDecimalOnly(input, obj)
{
	var ev = input || window.event;
	var keydown = event.keyCode || event.which;
	keydown = String.fromCharCode(keydown);
	var regex = /[0-9]|\./;
	var regexDec = /\./;
	var alreadyContainsDecimal = regexDec.test(keydown) && regexDec.test(obj.value);
	if(!regex.test(keydown) || alreadyContainsDecimal) 
	{
		event.returnValue = false;
		if(ev.preventDefault) 
			ev.preventDefault();
	}
}

function CalculateOnKeyPress(input, obj)
{
	NumericDecimalOnly(input, obj);
	ConvertMeasurement();
}

function ConvertMeasurement()
{
	var input = document.getElementById('input').value;
	var output = document.getElementById('output').value;
	var value = document.getElementById('userVal').value;

	var regexDec = /^\.$/; //exactly
	var invalidVal = value.length == 0 || regexDec.test(value);
	if(input.length == 0 || output.length == 0 || invalidVal)
		return;

	var tbxResult = document.getElementById('res');
	tbxResult.value = MeasurementCalculation(input, output, value);
}

function MeasurementCalculation(input, output, value)
{
	return value;
}