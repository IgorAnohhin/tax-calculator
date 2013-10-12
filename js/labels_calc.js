function ChangeTaxFreeLabel(year) {
	var labelText = "";
	if(Number(year) > 2010) {
		labelText = "Arvesta maksuvaba tulu (144&euro; kuus)";
	}
	else {
		labelText = "Arvesta maksuvaba tulu (2250 kr / &euro;143.8 kuus)";
	}
	
	document.getElementById('taxfreeLabel').innerHTML = labelText;
}
function ChangeFundedPensionLabel(year) {
	var labelText = "";
	if(Number(year) == 2010) {
		labelText = "T��taja on esitanud pensioni II samba maksete j�tkamise avalduse";
	}
	else {
		labelText = "Kogumispension (II sammas)";
	}
	
	document.getElementById('fundedPensionLabel').innerHTML = labelText;
}
function ChangeUILabels(year) {
	var employerLabel = "";
	var employeeLabel = "";

	if (Number(year) == 2013) {
		employerLabel = "T��andja t��tuskindlustusmakse (1%)";
		employeeLabel = "T��taja (kindlustatu) t��tuskindlustusmakse (2%)";
	}
/*	else if (Number(year) <= 2012) {
		employerLabel = "T��andja t��tuskindlustusmakse (1,4%)";
		employeeLabel = "T��taja (kindlustatu) t��tuskindlustusmakse (2,8%)";
	}*/
	else {
		employerLabel = "T��andja t��tuskindlustusmakse (1,4%)";
		employeeLabel = "T��taja (kindlustatu) t��tuskindlustusmakse (2,8%)";
	}
	
	document.getElementById('UIEmployerLabel').innerHTML = employerLabel;
	document.getElementById('UIEmployeeLabel').innerHTML = employeeLabel;
}
function GetRadiobuttonValue(fieldName) {
	var field = document.forms['wage'].elements[fieldName];
	for (var i = 0; i < field.length; i++) {
		if (field[i].checked) {
			return field[i].value;
		}
	}
}
function toggleRowVisibility(show)
{
var rows = document.getElementById("hours_row").rows;
document.getElementById("hours_row").style.display = show ? "table-row" : "none";
}
function toggleRadioVisibility(year, show)
{
var fp2011 = document.getElementById("fp2011");
var pension_x = document.getElementById("pension_x");
	if(Number(year) == 2011 && pension_x.checked) {
		fp2011.style.display = "table-row";
	}
	else {
		fp2011.style.display = "none";
	}
}