function calculate() {
    var sum			= getFieldFloatValue("sum");
    var hours	    = getFieldFloatValue("hours");
    var pay_period	= getFieldFloatValue("pay_period");
    var year2010	= document.getElementById("year2010");
    var year2011	= document.getElementById("year2011");
    var year2012	= document.getElementById("year2012");
    var year2013	= document.getElementById("year2013");
    var data_1		= document.getElementById("data_1");
    var data_2		= document.getElementById("data_2");
    var data_3		= document.getElementById("data_3");
    var pen1			= document.getElementById("pen1");
    var pen2			= document.getElementById("pen2");
    var pen3			= document.getElementById("pen3");
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

    var str = 0.33;

    var itr = 0.21;

    var loc;
    if (year <= 2012)	{loc = 0.114;}
    else				{loc = 0.1157;}

    var uip1;
    if		(year == 2013)	{uip1 = 0.01;}
    else					{uip1 = 0.014;} // 1,4%

    var uip2;
    if		(year == 2013)	{uip2 = 0.02;}
    else					{uip2 = 0.028;}
    uip1 = ui1_x.checked ? uip1 : 0;
    uip2 = ui2_x.checked ? uip2 : 0;

    var pr1;
    if		(year == 2010)							{pr1 = 0.02;}
    else if (year == 2011 && pen1.checked == true)	{pr1 = 0.01;}
    else if	(year == 2011)							{pr1 = 0.02;}
    else											{pr1 = 0.02;}
    var pr2;
    if		(year == 2010)							{pr2 = 0;}
    else if (year == 2011 && pen3.checked == true)	{pr2 = 0.04;}
    else if	(year == 2011)							{pr2 = 0.02;}
    else											{pr2 = 0.04;}

    if (pay_period == 1)	{hours = hours;}
    else				{hours = 1;}

    var nper;
    if (pay_period == 3)	{nper = 12;}
    else				{nper = 1;}

    var tfm;
    if	(year >= 2011)	{tfm = 144 * nper;}
    else				{tfm = 143.8 * nper;}

    var taxfree;
    taxfree = taxfree_x.checked ? tfm : 0;

    var sum = sum * hours;

    pr1 = pension_x.checked ? pr1 : 0;
    pr2 = pension_x.checked ? pr2 : 0;

    var income_tax_rate;
    if ((sum/(1-(pr1))-taxfree)<=0) income_tax_rate = 0;
    else income_tax_rate = itr;

    if (data_1.checked == true) 		grosswage.value = round((sum) / (1 + str + 1 * uip1), 2);
    else if (data_2.checked == true)	grosswage.value = round(sum, 2);
    else if (data_3.checked == true)   grosswage.value = round(((sum - taxfree) / (1 - income_tax_rate) + taxfree)/(1 - (pr1 + 1 * uip2)), 2);

    socialtax.value = round(grosswage.value * str, 2);
    ui_employer.value = round(grosswage.value * 1 * uip1, 2);
    ui_employee.value = round(grosswage.value * 1 * uip2, 2);
    fpp_1.value = round(grosswage.value*pr1, 2);

    if (grosswage.value < (taxfree + grosswage.value * (1*uip2+pr1))) 	incometax.value = round(0, 2);
    else																incometax.value = round((grosswage.value*(1-(1*uip2))-fpp_1.value-taxfree)*itr, 2);

    netwage.value	= round(grosswage.value - ui_employee.value - fpp_1.value - incometax.value, 2);
    wagefund.value 	= round(1*grosswage.value + 1*ui_employer.value + 1*socialtax.value, 2);

    localtaxes.value	= round(1*grosswage.value*loc, 2);
    pension.value		= round(grosswage.value*(pr1 + pr2), 2);
    taxes.value			= round(1*ui_employer.value + 1*ui_employee.value + 1*socialtax.value + 1*incometax.value - 1*grosswage.value*pr2 - 1*localtaxes.value, 2); // calculate taxes*/

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

function round(n,dec) {
	X = n * Math.pow(10,dec);
	X= Math.round(X);
	return (X / Math.pow(10,dec)).toFixed(dec);
}

function resetValues(form) {
  for(var i = 0; i < form.elements.length; i++) {
      if(form.elements[i].type == "text") {
        form.elements[i].value = "";
      }
  }
}

function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}