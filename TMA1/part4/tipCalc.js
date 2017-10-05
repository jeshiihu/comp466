
window.onload = function()
{
	ShowSideCalc();
}

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


var origAmt = document.getElementById("amt");
var tipPerctInput = document.getElementById("tipPercentage");
var tipAmtInput = document.getElementById("tipAmt");

function CalcTotal(obj)
{
	ShowSideCalc();
}

function ShowSideCalc()
{
	var orig = document.getElementById("totOrig");
	var tip= document.getElementById("totTip");
	var total = document.getElementById("total");

	orig.textContent = origAmt.value;
	tip.textContent = GetTipCalc();
	if(orig.textContent == "" || tip.textContent == "") return;

	total.textContent = parseFloat(orig.textContent) + parseFloat(tip.textContent);
}

var tipType = document.getElementById("tipType");
function GetTipCalc()
{
	if(origAmt.value == "") return "";

	if(tipType.value == "percent")
	{
		if(tipPerctInput.value == "") return "";
		return parseFloat(origAmt.value) * parseFloat(tipPerctInput.value)/100;
	}
	else
	{
		if(tipAmtInput.value == "") return "";
		return parseFloat(tipAmtInput.value);
	}
}

tipType.onchange = function()
{
	if(tipType.value == "percent")
	{
		tipAmtInput.disabled = true;
		tipPerctInput.disabled = false;
		tipAmtInput.value = "";
	}
	if(tipType.value == "dollar")
	{
		tipAmtInput.disabled = false;
		tipPerctInput.disabled = true;
		tipPerctInput.value = "";
	}
}