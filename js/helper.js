function calculate(data) {
    var str = 0.33;
    var itr = 0.21;
    var sum			= getFloatValue(data.sum)
    var hours	    = getFloatValue(data.hours);
    var pay_period	= getFloatValue(data.pay_period);

    var year;
    if (data.year_2013.is(':checked'))
        {year = 2013;}
    else if (data.year_2012.is(':checked'))
        {year = 2012;}
    else if (data.year_2011.is(':checked'))
        {year = 2011;}
    else if (data.year_2010.is(':checked'))
        {year = 2010;}

    var loc;
    if (year <= 2012)
        {loc = 0.114;}
    else
        {loc = 0.1157;}

    var uip1;
    if (year == 2013)
        {uip1 = 0.01;}
    else
        {uip1 = 0.014;}

    var uip2;
    if (year == 2013)
        {uip2 = 0.02;}
    else
        {uip2 = 0.028;}

    uip1 = data.label1_x.is(":checked") ? uip1 : 0;
    uip2 = data.label2_x.is(":checked") ? uip2 : 0;

    var pr1;
    if (year == 2010)
        {pr1 = 0.02;}
    else if (year == 2011 && data.pen1.is(":checked"))
        {pr1 = 0.01;}
    else if	(year == 2011)
        {pr1 = 0.02;}
    else
        {pr1 = 0.02;}

    var pr2;
    if (year == 2010)
        {pr2 = 0;}
    else if (year == 2011 && data.pen3.is(":checked"))
        {pr2 = 0.04;}
    else if	(year == 2011)
        {pr2 = 0.02;}
    else
        {pr2 = 0.04;}

    if (pay_period == 1)
        {hours = hours;}
    else
        {hours = 1;}

    var nper;
    if (pay_period == 3)
        {nper = 12;}
    else
        {nper = 1;}

    var tfm;
    if (year >= 2011)
        {tfm = 144 * nper;}
    else
        {tfm = 143.8 * nper;}

    var taxfree;
    taxfree = data.taxfree_x.is(":checked") ? tfm : 0;

    var sum = sum * hours;

    pr1 = data.pension_x.is(":checked") ? pr1 : 0;
    pr2 = data.pension_x.is(":checked") ? pr2 : 0;

    var income_tax_rate;
    if ((sum/(1-(pr1))-taxfree)<=0)
        income_tax_rate = 0;
    else
        income_tax_rate = itr;

    if(data.data_1.is(":checked"))
        data.gross_sallary.val(round((sum) / (1 + str + 1 * uip1), 2));
    else if (data.data_2.is(":checked"))
        data.gross_sallary.val(round(sum, 2));
    else if (data.data_3.is(":checked"))
        data.gross_sallary.val(round(((sum - taxfree) / (1 - income_tax_rate) + taxfree)/(1 - (pr1 + 1 * uip2)), 2));

    data.social_tax.val(round(data.gross_sallary.val() * str, 2));
    data.employer.val(round(data.gross_sallary.val() * 1 * uip1, 2));
    data.employee.val(round(data.gross_sallary.val() * 1 * uip2, 2));
    data.fpp_1.val(round(data.gross_sallary.val() * pr1, 2));

    if (data.gross_sallary.val() < (taxfree + data.gross_sallary.val() * (1 * uip2 + pr1)))
        data.incometax.val(round(0, 2));
    else
        data.incometax.val(round((data.gross_sallary.val() * (1 - (1 * uip2)) - data.fpp_1.val() - taxfree) * itr, 2));

    data.net_sallary.val(round(data.gross_sallary.val() - data.employee.val() - data.fpp_1.val() - data.incometax.val(), 2));
    data.sallary_fund.val(round(1 * data.gross_sallary.val() + 1 * data.employer.val() + 1 * data.social_tax.val(), 2));

    data.localtaxes.val(round(1 * data.gross_sallary.val() * loc, 2));
    data.pension.val(round(data.gross_sallary.val() * (pr1 + pr2), 2));
    data.taxes.val(round(1 * data.employer.val() + 1 * data.employee.val() + 1 * data.social_tax.val() + 1 * data.incometax.val() - 1 * data.gross_sallary.val() * pr2 - 1 * data.localtaxes.val(), 2));

    if (data.percent1.is(":checked")) {
        data.social_tax_pr.val(round(100 * data.social_tax.val() / data.sallary_fund.val(), 2));
        data.gross_sallary_pr.val(round(100 * data.gross_sallary.val() / data.sallary_fund.val(), 2));
        data.employer_pr.val(round(100 * data.employer.val() / data.sallary_fund.val(), 2));
        data.employee_pr.val(round(100 * data.employee.val() / data.sallary_fund.val(), 2));
        data.fpp_1_pr.val(round(100 * data.fpp_1.val() / data.sallary_fund.val(), 2));
        data.incometax_pr.val(round(100 * data.incometax.val() / data.sallary_fund.val(), 2));
        data.net_sallary_pr.val(round(100 * data.net_sallary.val() / data.sallary_fund.val(), 2));
        data.sallary_fund_pr.val(round(100 * data.sallary_fund.val() / data.sallary_fund.val(), 2));
    }
    if (data.percent2.is(":checked")) {
        data.social_tax_pr.val(round(100 * data.social_tax.val() / data.gross_sallary.val(), 2));
        data.gross_sallary_pr.val(round(100 * data.gross_sallary.val() / data.gross_sallary.val(), 2));
        data.employer_pr.val(round(100 * data.employer.val() / data.gross_sallary.val(), 2));
        data.employee_pr.val(round(100 * data.employee.val() / data.gross_sallary.val(), 2));
        data.fpp_1_pr.val(round(100 * data.fpp_1.val() / data.gross_sallary.val(), 2));
        data.incometax_pr.val(round(100 * data.incometax.val() / data.gross_sallary.val(), 2));
        data.net_sallary_pr.val(round(100 * data.net_sallary.val() / data.gross_sallary.val(), 2));
        data.sallary_fund_pr.val(round(100 * data.sallary_fund.val() / data.gross_sallary.val(), 2));
    }
    if (data.percent3.is(":checked")) {
        data.social_tax_pr.val(round(100 * data.social_tax.val() / data.net_sallary.val(), 2));
        data.gross_sallary_pr.val(round(100 * data.gross_sallary.val() / data.net_sallary.val(), 2));
        data.employer_pr.val(round(100 * data.employer.val() / data.net_sallary.val(), 2));
        data.employee_pr.val(round(100 * data.employee.val() / data.net_sallary.val(), 2));
        data.fpp_1_pr.val(round(100 * data.fpp_1.val() / data.net_sallary.val(), 2));
        data.incometax_pr.val(round(100 * data.incometax.val() / data.net_sallary.val(), 2));
        data.net_sallary_pr.val(round(100 * data.net_sallary.val() / data.net_sallary.val(), 2));
        data.sallary_fund_pr.val(round(100 * data.sallary_fund.val() / data.net_sallary.val(), 2));
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

function getFloatValue(value) {
    return parseFloat(value.replace("\,","."));
}