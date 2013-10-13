function taxCalc()
{
var eur			= getFieldFloatValue("eur");
var workhours	= getFieldFloatValue("workhours");
var period		= getFieldFloatValue("period");
var year2010	= document.getElementById("year2010");
var year2011	= document.getElementById("year2011");
var year2012	= document.getElementById("year2012");
var year2013	= document.getElementById("year2013");
var input_1		= document.getElementById("input_1");
var input_2		= document.getElementById("input_2");
var input_3		= document.getElementById("input_3");
var p1			= document.getElementById("p1");
var p2			= document.getElementById("p2");
var p3			= document.getElementById("p3");
var pct1		= document.getElementById("pct1");
var pct2		= document.getElementById("pct2");
var pct3		= document.getElementById("pct3");

var socialtax	= document.getElementById("socialtax");
var grosswage	= document.getElementById("grosswage");
var ui_employer	= document.getElementById("ui_employer");
var ui_employee	= document.getElementById("ui_employee");
var fpp_1		= document.getElementById("fpp_1");
var incometax	= document.getElementById("incometax");
var netwage		= document.getElementById("netwage");
var wagefund	= document.getElementById("wagefund");
var taxes		= document.getElementById("taxes");
var localtaxes	= document.getElementById("localtaxes");
var pension		= document.getElementById("pension");

var socialtax_pct	= document.getElementById("socialtax_pct");
var grosswage_pct	= document.getElementById("grosswage_pct");
var ui_employer_pct	= document.getElementById("ui_employer_pct");
var ui_employee_pct	= document.getElementById("ui_employee_pct");
var fpp_1_pct		= document.getElementById("fpp_1_pct");
var incometax_pct	= document.getElementById("incometax_pct");
var netwage_pct		= document.getElementById("netwage_pct");
var wagefund_pct	= document.getElementById("wagefund_pct");

var taxfree_x	= document.getElementById("taxfree_x");
var ui1_x		= document.getElementById("ui1_x");
var ui2_x		= document.getElementById("ui2_x");
var pension_x	= document.getElementById("pension_x");

var year;
if 		(year2013.checked == true)	{year = 2013;}
else if (year2012.checked == true)	{year = 2012;}
else if (year2011.checked == true)	{year = 2011;}
else if (year2010.checked == true)	{year = 2010;}

var str = 0.33;		// social tax rate (33%)
//$minst_09 = 4350;	// monthly rate established by the state budget (for calculating min. social tax)

// income tax rate
var itr = 0.21;

//Tax revenue to local governments
var loc;
if (year <= 2012)	{loc = 0.114;}
else				{loc = 0.1157;} // 2013 - 11,57%; 2014 11,6%

// unemployment insurance premium rates (UIP):

// - premium paid by employers
var uip1;
if		(year == 2013)	{uip1 = 0.01;}
else					{uip1 = 0.014;} // 1,4%
// - premium paid by employees
var uip2;
if		(year == 2013)	{uip2 = 0.02;}
else					{uip2 = 0.028;} // 1,4%
uip1 = ui1_x.checked ? uip1 : 0;
uip2 = ui2_x.checked ? uip2 : 0;

// funded pension withholding from salary (fp1) and from social tax (fp2)
var fp1;
if		(year == 2010)							{fp1 = 0.02;}
else if (year == 2011 && p1.checked == true)	{fp1 = 0.01;}
else if	(year == 2011)							{fp1 = 0.02;}
else											{fp1 = 0.02;} // 4%
var fp2;
if		(year == 2010)							{fp2 = 0;}
else if (year == 2011 && p3.checked == true)	{fp2 = 0.04;}
else if	(year == 2011)							{fp2 = 0.02;}
else											{fp2 = 0.04;} // 4%

//var fp2011 = $_POST["fp2011"];

/*$input = $_POST["input"];
$taxfree_x	 = isset( $_POST["taxfree_x"] ) ? 1 : 0; 	// tax-free minimum checkbox
$ui1_x = isset( $_POST["ui1_x"] ) ? 1 : 0; 				// unemployment insurance for employers checkbox 
$ui2_x = isset( $_POST["ui2_x"] ) ? 1 : 0; 				// unemployment insurance for employees checkbox 
$pension_x	 = isset( $_POST["pension_x"] ) ? 1 : 0;  	// funded pension withholding checkbox*/

// Annual, monthly, hourly?
if (period == 1)	{workhours = workhours;}
else				{workhours = 1;}

var nper;
if (period == 3)	{nper = 12;}
else				{nper = 1;}

// tax-free minimum (TFM)
var tfm;
//if 		(year == 2007) {itr = itr_07; tfm = 2000;}
if	(year >= 2011)	{tfm = 144 * nper;}
else				{tfm = 143.8 * nper;}

var taxfree;
taxfree = taxfree_x.checked ? tfm : 0;

//CALCULATION BASE SUM
var sum = eur * workhours;

//funded pension checked?
//var fp1 = $pension_x*$fp;
fp1 = pension_x.checked ? fp1 : 0; //
fp2 = pension_x.checked ? fp2 : 0; //withholding

var income_tax_rate;
if ((sum/(1-(fp1))-taxfree)<=0) income_tax_rate = 0; 
else income_tax_rate = itr;

if (input_1.checked == true) 		grosswage.value = round((sum) / (1 + str + 1 * uip1), 2);
else if (input_2.checked == true)	grosswage.value = round(sum, 2);
else if (input_3.checked == true)   grosswage.value = round(((sum - taxfree) / (1 - income_tax_rate) + taxfree)/(1 - (fp1 + 1 * uip2)), 2);			//funded pension payment paid by employee

socialtax.value = round(grosswage.value * str, 2);
ui_employer.value = round(grosswage.value * 1 * uip1, 2);
ui_employee.value = round(grosswage.value * 1 * uip2, 2);
fpp_1.value = round(grosswage.value*fp1, 2);

// calculate income tax
if (grosswage.value < (taxfree + grosswage.value * (1*uip2+fp1))) 	incometax.value = round(0, 2);
//else if (input_2.checked == true && year < 2011)					incometax.value = round((grosswage.value*(1-(1*uip2))-fpp_1.value-taxfree)*itr, 0);
else																incometax.value = round((grosswage.value*(1-(1*uip2))-fpp_1.value-taxfree)*itr, 2);
netwage.value	= round(grosswage.value - ui_employee.value - fpp_1.value - incometax.value, 2); 		// calculate net wage
wagefund.value 	= round(1*grosswage.value + 1*ui_employer.value + 1*socialtax.value, 2); 					// calculate wage fund

// Pie chart values
localtaxes.value	= round(1*grosswage.value*loc, 2); // local taxes
pension.value		= round(grosswage.value*(fp1 + fp2), 2);
taxes.value			= round(1*ui_employer.value + 1*ui_employee.value + 1*socialtax.value + 1*incometax.value - 1*grosswage.value*fp2 - 1*localtaxes.value, 2); // calculate taxes*/

//Percent values
if (pct1.checked == true) {
socialtax_pct.value		= round(100*socialtax.value/wagefund.value, 2);
grosswage_pct.value		= round(100*grosswage.value/wagefund.value, 2);
ui_employer_pct.value	= round(100*ui_employer.value/wagefund.value, 2);
ui_employee_pct.value	= round(100*ui_employee.value/wagefund.value, 2);
fpp_1_pct.value			= round(100*fpp_1.value/wagefund.value, 2);
incometax_pct.value		= round(100*incometax.value/wagefund.value, 2);
netwage_pct.value		= round(100*netwage.value/wagefund.value, 2);
wagefund_pct.value		= round(100*wagefund.value/wagefund.value, 2);
}
if (pct2.checked == true) {
socialtax_pct.value		= round(100*socialtax.value/grosswage.value, 2);
grosswage_pct.value		= round(100*grosswage.value/grosswage.value, 2);
ui_employer_pct.value	= round(100*ui_employer.value/grosswage.value, 2);
ui_employee_pct.value	= round(100*ui_employee.value/grosswage.value, 2);
fpp_1_pct.value			= round(100*fpp_1.value/grosswage.value, 2);
incometax_pct.value		= round(100*incometax.value/grosswage.value, 2);
netwage_pct.value		= round(100*netwage.value/grosswage.value, 2);
wagefund_pct.value		= round(100*wagefund.value/grosswage.value, 2);
}
if (pct3.checked == true) {
socialtax_pct.value		= round(100*socialtax.value/netwage.value, 2);
grosswage_pct.value		= round(100*grosswage.value/netwage.value, 2);
ui_employer_pct.value	= round(100*ui_employer.value/netwage.value, 2);
ui_employee_pct.value	= round(100*ui_employee.value/netwage.value, 2);
fpp_1_pct.value			= round(100*fpp_1.value/netwage.value, 2);
incometax_pct.value		= round(100*incometax.value/netwage.value, 2);
netwage_pct.value		= round(100*netwage.value/netwage.value, 2);
wagefund_pct.value		= round(100*wagefund.value/netwage.value, 2);
}
}
function round(n,dec)
{
	X = n * Math.pow(10,dec);
	X= Math.round(X);
	return (X / Math.pow(10,dec)).toFixed(dec);
}
function resetValues(form)
{
  for(var i = 0; i < form.elements.length; i++) {
  if(form.elements[i].type == "text") { form.elements[i].value = "";}
  }
}
function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}