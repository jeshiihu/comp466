
window.onload = function()
{
	CalculateMortgage();
}

var freqSelect = document.getElementById("payFrequency");
freqSelect.onchange = function()
{
	CalculateMortgage();
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

// http://mortgage.lovetoknow.com/Calculate_Mortgage_Payments_Formula

function CalculateMortgage()
{
	var amt = document.getElementById("amt").value;
	var interest = document.getElementById("interest").value;
	var amortization = document.getElementById("amortization").value;
	var payFrequency = document.getElementById("payFrequency").value;

	if(amt == "" || interest == "" || amortization == "")
	{
		Display("", "");
		return;
	}	

	var interestRate = GetInterest(amt, interest, payFrequency);
	var totalNumPayments = amortization*GetPV(payFrequency);
	var term = Math.pow((1+interestRate), totalNumPayments);


	var payment = GetMortgagePayment(amt, interestRate, term);
	var totalInterest = GetTotalInterest(payment, totalNumPayments, amt);

	Display(payment, totalInterest);
}

function Display(pay, int)
{
	var paymentText = document.getElementById("payment");
	var totInt = document.getElementById("totInterest");

	paymentText.textContent = pay.toFixed(2);
	totInt.textContent = int.toFixed(2);
}

function GetInterest(amt, interest, freq)
{
	// calculate interest
	var i = interest/100;
	var pv = GetPV(freq);
	return i/pv;
}

function GetPV(freq)
{
	// 52 weeks in a year
	if(freq == "month")
		return 12;
	else if(freq == "bi")
		return 52/2;
	else
		return 52;
}

function GetMortgagePayment(principle, interest, term)
{
	return principle*((interest*term)/(term-1));
}

function GetTotalInterest(payment, numPay, principle)
{
	return (payment*numPay)-principle;
}