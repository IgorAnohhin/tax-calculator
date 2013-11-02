<?php
    require('auth.php');
?>
<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
   

    <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="js/bootstrap-tooltip.js"></script>
    <script type="text/javascript" src="js/bootstrap-popover.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="js/helper.js"></script>
    
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->

</head>
<body>

<div id="conteiner" class="well well-white">

<form name="salary" method="post" >

<script type="text/javascript">
document.write('');
</script>
<noscript>
<div class="alert alert-error"><h4>VIGA</h4> Veebisirvijas peab olema lubatud JavaScript!</div>
</noscript>


  <div>
   <div id="set-1" class="pull-left">
      <fieldset>
        <legend>Aasta</legend>  
        <label class="radio"><input type="radio" name="year" value="2010" id="year_2010">2010</label>
        <label class="radio"><input type="radio" name="year" value="2011" id="year_2011">2011</label>
        <label class="radio"><input type="radio" name="year" value="2012" id="year_2012">2012</label>
        <label class="radio"><input type="radio" name="year" value="2013" id="year_2013" checked="checked">2013</label>
        <label class="radio"><input type="radio" name="year" value="2014" id="year_2014">2014</label>
      </fieldset>
	</div>

    <div id="set-2" class="pull-left">
  	<fieldset>
        <legend>Lähteandmed</legend>
        <div style="padding-bottom:20px">
          <label class="radio inline">
          <input type="radio" id="data_1" name="data" value="1" >
          Kulu tööandjale</label>
           <a href="#" id="tip-1" data-toggle="popover"> <i class="icon-question-sign"></i></a>

		  <label class="radio inline">
          <input type="radio" id="data_2" name="data" value="2" checked="checked">Brutopalk</label>
            <a href="#" id="tip-2" data-toggle="popover"> <i class="icon-question-sign"></i></a>

		  <label class="radio inline">
          <input type="radio" id="data_3" name="data" value="3" >Netopalk</label>
           <a href="#" id="tip-3" data-toggle="popover"> <i class="icon-question-sign"></i></a>
        </div>
        <div>
          <input class="span2" id="sum" name="sum" value="0.0" type="text" onClick="this.value = '';">&nbsp;&euro;
          
          <select class="span2" id="pay_period" name="pay_period" >
            <option value="1">tunnis</option>
            <option value="2" selected="selected">kuus</option>
            <option value="3" id="annual">aastas</option>
          </select>
        </div>

        <div id="taxfree_c">
            <label class="inline" for="taxfree">
            <input class="span2" id="taxfree" name="taxfree" value="144.0" type="text" onClick="this.value = '';">&nbsp;&euro;
            Maksuvaba tulu
            </label>
        </div>
          
	<div id="hours_row" style="display:none">
		<hr/>
		<label  class="inline" for="hours">Töötundide arv kuus
        <input class="span2" type="text" id="hours" name="hours" onClick="this.value = '';" value="0" maxlength="4">
        </label>
    </div>              

     </fieldset>
	</div>

    <div id="set-3" class="pull-left">
    <fieldset>
        <legend>Maha arvata</legend>
    <div>
	 <input type="checkbox" id="taxfree_x" name="taxfree_x" value="true" checked="checked"><label class="checkbox inline" id="taxfreeLabel" for="taxfree_x">Arvesta maksuvaba tulu</label><a  href="#" id="tip-4" data-toggle="popover"> <i class="icon-question-sign"></i></a>
    </div>
  <div>
    <input type="checkbox" class="pull-left" id="label1_x" name="label1_x" value="true" checked="checked"><label class="checkbox inline" id="UIEmployerLabel" for="label1_x">Tööandja töötuskindlustusmakse (1%)</label><a href="#" id="tip-5" data-toggle="popover"> <i class="icon-question-sign"></i></a>
  </div>
  <div>
	<input type="checkbox" class="pull-left" id="label2_x" name="label2_x" value="true" checked="checked"><label class="checkbox inline"  id="UIEmployeeLabel" for="label2_x">Töötaja töötuskindlustusmakse (2%)</label>
  </div>
  <div>
	<fieldset>
      <input type="checkbox" class="pull-left" id="pension_x" name="pension_x" value="true" checked="checked"><label class="checkbox inline" id="fundedPensionLabel" for="pension_x">Kohustusliku kogumispensioni makse</label><a href="#" id="tip-6" data-toggle="popover">  <i class="icon-question-sign"></i></a>
      <div id="pen_pr_c" style="display:none;">
        <label class="radio" for="pen_pr2"><input type="radio" id="pen_pr2" name="pen_pr" value="0.02" checked="checked"> 2%</label>
        <label class="radio" for="pen_pr3"><input type="radio" id="pen_pr3" name="pen_pr" value="0.03" > 3%</label>
      </div>
    </fieldset>
   </div>
    <div id="penYear2011" style="display:none;">
	  <div style="padding-left:40px">
      <label class="radio" for="pen1"><input type="radio" id="pen1" name="penYear2011" value="1" checked="checked">Ei esitanud 2009. a maksete jÃ¤tkamise avaldust</label>
      <label class="radio" for="pen2"><input type="radio" id="pen2" name="penYear2011" value="2" >Esitas 2009. a maksete jÃ¤tkamise avalduse</label>
      <label class="radio" for="pen3"><input type="radio" id="pen3" name="penYear2011" value="3" >Esitas maksete jÃ¤tkamise avalduse (s. 1942-1954)</label>
      </div>
    </div>
  </fieldset>
    </div>
  </div>

<div class="clearfix"></div>

<!--<div>
    <table class="table">
        <tr>
            <td width="100%" class="bordered">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td width="100%" class="bordered">
                Maksuvaba tulu (144euro kuus) (rakendamiseks peab olema väljamakse saaja avaldus)
            </td>
        </tr>
        <tr>
            <td width="100%" class="bordered">
                Tööandja töötuskindlustusmakse (1%)
            </td>
        </tr>
        <tr>
            <td width="100%" class="bordered">
                Töötaja töötuskindlustusmakse (2%)
            </td>
        </tr>
        <tr>
            <td width="100%" class="bordered">
                Kohustusliku kogumispensioni makse 2-3%
            </td>
        </tr>
    </table>
</div>-->

<div>
<table id="result" class="table">
<tr>
	<td width="100%"><a target="_blank" href="http://www.pensionikeskus.ee/?id=652">Kontrolli kogumispensioniga liitumist siin</a></td>
</tr>
<tr style="font-size:21px">
	<td width="40%" class="bordered">Kokkuvõtte</td>
	<td width="30%" class="bordered align-right">&euro;</td>
	<td width="30%" class="bordered align-right" colspan="2">%</td>
</tr>
<tr>
	<td class="bordered">Tööandja tööjõukulud kokku: </td>
	<td class="bordered align-right"><input name="" id="sallary_fund" value="0.00" type="text" class="noinput bolded bigsize" /></td>
	<td class="bordered align-right"><input name="" id="sallary_fund_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="bordered align-right"><input type="radio" id="percent1" name="percent" value="1" checked="checked"/></td>
</tr>

<tr>
	<td>Sotsiaalmaks: </td>
	<td class="align-right"><input name="" id="social_tax" value="0.00" type="text" class="noinput bolded" /></td>
	<td class="align-right"><input name="" id="social_tax_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="align-right"></td>
</tr>
<tr>
	<td class="bordered">Tööandja töötuskindlustusmakse </td>
	<td class="bordered align-right"><input name="" id="employer" value="0.00" type="text" class="noinput bolded" /></td>
	<td class="bordered align-right"><input name="" id="employer_pr" value="0.00" type="text" class="noinput" /></td>
	<td  class="bordered align-right"></td>
</tr>

<tr>
	<td  class="bordered">Brutotöötasu: </td>
	<td  class="bordered align-right"><input name="" id="gross_sallary" value="0.00" type="text" class="noinput bolded bigsize" /></td>
	<td  class="bordered align-right"><input name="" id="gross_sallary_pr" value="0.00" type="text" class="noinput" /></td>
	<td  class="bordered align-right"><input type="radio" id="percent2" name="percent" value="2" /></td>
</tr>

<tr>
	<td>Töötajal kinnipeetav kohustusliku kogumispensioni makse: </td>
	<td class="align-right"><input name="" id="fpp_1" value="0.00" type="text" class="noinput bolded" /></td>
	<td class="align-right"><input name="" id="fpp_1_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="align-right"></td>
</tr>
<tr>
	<td>Töötajal kinnipeetav töötuskindlustusmakse: </td>
	<td class="align-right"><input name="" id="employee" value="0.00" type="text" class="noinput bolded" /></td>
	<td class="align-right"><input name="" id="employee_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="align-right"></td>
</tr>
<tr>
	<td class="bordered">Töötajal kinnipeetav tulumaks: </td>
	<td class="bordered align-right"><input name="" id="incometax" value="0.00" type="text" class="noinput bolded" /></td>
	<td class="bordered align-right"><input name="" id="incometax_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="bordered align-right"></td>
</tr>

<tr>
	<td class="bordered">Netotöötasu: </td>
	<td class="bordered align-right"><input name="" id="net_sallary" value="0.00" type="text" class="noinput bolded bigsize" /></td>
	<td class="bordered align-right"><input name="" id="net_sallary_pr" value="0.00" type="text" class="noinput" /></td>
	<td class="bordered align-right"><input type="radio" id="percent3" name="percent" value="3" /></td>
</tr>

</table>
<input type="hidden" id="taxes" />
<input type="hidden" id="localtaxes" />
<input type="hidden" id="pension" />

<div id="chart_div"></div>
</div>

</form>

</div>


<script type="text/javascript">

    function SetTaxFreeLabel(year) {
        var label = "";
        if(Number(year) > 2010) {
            label = "Arvesta maksuvaba tulu";
        }
        else {
            label = "Arvesta maksuvaba tulu";
        }
        $("#taxfreeLabel").text(label);
    }

    function SetFundedPensionLabel(year) {
        var label = "";
        if(Number(year) == 2010) {
            label = "Töötaja on esitanud pensioni II samba maksete jätkamise avalduse";
        }
        else if (Number(year) == 2014) {
            label = "Kohustusliku kogumispensioni makse 2-3%";
        }
        else {
            label = "Kohustusliku kogumispensioni makse";
        }

        $("#fundedPensionLabel").text(label);
    }

    function SetUILabels(year) {
        var employerLabel = "";
        var employeeLabel = "";

        if (Number(year) == 2013) {
            employerLabel = "Tööandja töötuskindlustusmakse (1%)";
            employeeLabel = "Töötaja töötuskindlustusmakse (2%)";
        }
        else {
            employerLabel = "Tööandja töötuskindlustusmakse (1,4%)";
            employeeLabel = "Töötaja töötuskindlustusmakse (2,8%)";
        }

        $("#UIEmployerLabel").text(employerLabel);
        $("#UIEmployeeLabel").text(employeeLabel);
    }

    function GetRadiobuttonValue(fieldName) {
        var value = '';
        var radios = $('form[name="salary"] :radio').filter(':checked');

        radios.each(function(index){
            if($(this).attr('name') == fieldName){
                value = $(this).val();
            }
        });
        return value;
    }

    function toggleRowVisibility(show) {
        $("#hours_row").css("display", show ? "table-row" : "none");
    }

    function toggleRadioVisibility(year, show) {
        var penYear2011 = $("#penYear2011");
        var pension_x = $("#pension_x");

        if(Number(year) == 2011 && pension_x.is(':checked')) {
            penYear2011.css("display", "table-row");
        }
        else {
            penYear2011.css("display", "none");
        }

        if(Number(year) == 2014 && pension_x.is(':checked')) {
            $('#pen_pr_c').css("display", "table-row");
        }
        else {
            $('#pen_pr_c').css("display", "none");
        }

    }

    // draw google chart
    google.load('visualization', '1', {'packages':['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {

        var A = getFloatValue(document.getElementById("taxes").value);
        var B = getFloatValue(document.getElementById("localtaxes").value);
        var C = getFloatValue(document.getElementById("net_sallary").value);
        var D = getFloatValue(document.getElementById("pension").value);

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Riigile laekub maksudena', A],
            ['KOV-le laekub maksudena', B],
            ['Töötaja saab palgana kätte', C],
            ['Kogumispensioni fondi laekub', D]
        ]);

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        var options = {
			width: 850,
			height: 300,
			colors: ['#007cc3', '#cd006c', '#95D600', '#ff6600'],
			backgroundColor: 'none',
			is3D: true,
			legend: 'right',
			legendTextStyle: {color: '#333333'},
			chartArea:{width:"100%",height:"100%"}
        };

        chart.draw(data, options);
    }

$(function (){

    $("[id*='year_']").each(function(index){
        $(this).click(function(){
            toggleRadioVisibility(GetRadiobuttonValue('year'), index == 0);
            SetTaxFreeLabel($(this).val());
            SetUILabels($(this).val());
            SetFundedPensionLabel($(this).val());
            calculate(getData());
            drawChart();
        });

        $(this).keyup(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });
    });

    $("[id*='pen_pr']").each(function(index){
        $(this).click(function(){
            calculate(getData());
            drawChart();
        });

        $(this).keyup(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });
    });

    $("[id*='data_']").each(function(index){
        $(this).click(function(){
            calculate(getData());
            drawChart();
        });

        $(this).keyup(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });
    });

    var pay_period = $("#pay_period")
    pay_period.click(function(){
        toggleRowVisibility(this.selectedIndex == 0);
        calculate(getData());
        drawChart();
    });

    pay_period.keyup(function(){
        toggleRowVisibility(this.selectedIndex == 0);
        calculate(getData());
        drawChart();
    });

    pay_period.change(function(){
        toggleRowVisibility(this.selectedIndex == 0);
        calculate(getData());
        drawChart();
    });

    $("#sum").each(function(){
        $(this).keyup(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });
    });

    $("#hours").keyup(function(){
        calculate(getData());
        drawChart();
    });

    $("[name='penYear2011']").each(function(index){
        $(this).click(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });
    });

    $("[name*='ui']").each(function(){
        $(this).click(function(){
            calculate(getData());
            drawChart();
        });

        $(this).change(function(){
            calculate(getData());
            drawChart();
        });

        $(this).keyup(function(){
            calculate(getData());
            drawChart();
        });
    });

    $("#taxfree_x").click(function(){
        calculate(getData());
        drawChart();
    });

    $("#taxfree_x").keyup(function(){
        calculate(getData());
        drawChart();
    });

    $("#taxfree_x").change(function(){
        if($(this).is(':checked'))
            $('#taxfree_c').css("display", "table-row");
        else
            $('#taxfree_c').css("display", "none");

        calculate(getData());
        drawChart();
    });

    $("#taxfree").keyup(function(){
        calculate(getData());
        drawChart();
    });

    $("#taxfree").change(function(){
        calculate(getData());
        drawChart();
    });

    $("#pension_x").click(function(){
        toggleRadioVisibility(GetRadiobuttonValue('year'), false);
        calculate(getData());
        drawChart();
    });

    $("#pension_x").change(function(){
        toggleRadioVisibility(GetRadiobuttonValue('year'), false);
        calculate(getData());
        drawChart();
    });

    $("[id*='percent']").each(function(index){
        $(this).click(function(){
            calculate(getData());
        });

        $(this).change(function(){
            calculate(getData());
        });

        $(this).keyup(function(){
            calculate(getData());
        });
    });

    $("#tip-1").popover({
        placement : 'right',
        trigger: 'hover',
        html: 'true',
        title: 'Tööandja kulu',
        content :'Tööandja kogukulu, sealhulgas töötajale töö eest makstav töötasu, muud tasud ning hüvitised koos kõigi maksude ja maksetega.'
    });

    $("#tip-2").popover({
        placement : 'right',
        trigger: 'hover',
        html: 'true',
        title: 'Brutopalk',
        content :'Töölepingus või õigusaktis kindlaks määratud töötasu, sealhulgas majandustulemustelt ja tehingutelt makstav tasu, mille hulka on arvutatud seaduse alusel kinnipidamisele kuuluvad maksud ja maksed (s.h. tulumaks, töötaja (kindlustatu) töötuskindlustusmakse ning kogumispensioni teise sambaga liitumise korral kogumispensioni makse), muud tasud ning hüvitised. 2013. aastal on töötasu alammääraks täistööajaga töötamise korral tunnis 1,90 eurot ja kuus 320 eurot.'
    });

    $("#tip-3").popover({
        placement : 'right',
        trigger: 'hover',
        html: 'true',
        title: 'Netopalk',
        content :'Töötasu ning muude tasude ning hüvitiste summa, mille töötaja saab kätte pärast maksude ning maksete  maha arvamist.'
    });

    $("#tip-4").popover({
        placement : 'left',
        trigger: 'hover',
        html: 'true',
        title: 'Maksuvaba tulu',
        content :'Eesti residendist füüsilise isiku maksustamisperioodi tulust maha arvatav maksuvaba tulu.Maksuvaba tulu on alates 2011. aastast 1728 &euro; aastas. Rakendamiseks peab olema väljamakse saaja avaldus.'
    });

    $("#tip-5").popover({
        placement : 'left',
        trigger: 'hover',
        html: 'true',
        title: 'Töötuskindlustusmakse',
        content :'Tööandja töötuskindlustusmakse määr 2013. aastal on 1%. Töötaja (kindlustatu) töötuskindlustusmakse määr 2013. aastal on 2%.'
    });

    $("#tip-6").popover({
        placement : 'left',
        trigger: 'hover',
        html: 'true',
        title: 'Kogumispensioni makse',
        content :'Makset on kohustatud tasuma kogumispensioni II sambaga vabatahtlikult liitunud või seadusega kohustatud residendist füüsiline isik (kes on esitanud maksete jätkamise avalduse), kui tema elukoht on Eestis või kui ta viibib Eestis 12 järjestikuse kalendrikuu jooksul vähemalt 183 päeva. Makse määraks on 2% kogumispensionide seaduse § 7 lõikes 1 nimetatud summadelt.'
    });

    function getData(){
        var data = {
            sum: $("#sum").val(),
            hours: $("#hours").val(),
            pay_period: $("#pay_period").val(),
            year_2010: $("#year_2010"),
            year_2011: $("#year_2011"),
            year_2012: $("#year_2012"),
            year_2013: $("#year_2013"),
            year_2014: $("#year_2014"),
            data_1: $("#data_1"),
            data_2: $("#data_2"),
            data_3: $("#data_3"),
            pen1: $("#pen1"),
            pen2: $("#pen2"),
            pen3: $("#pen3"),
            percent1: $("#percent1"),
            percent2: $("#percent2"),
            percent3: $("#percent3"),
            social_tax: $("#social_tax"),
            social_tax_pr: $("#social_tax_pr"),
            gross_sallary: $("#gross_sallary"),
            gross_sallary_pr: $("#gross_sallary_pr"),
            employer: $("#employer"),
            employer_pr: $("#employer_pr"),
            employee: $("#employee"),
            employee_pr: $("#employee_pr"),
            fpp_1: $("#fpp_1"),
            fpp_1_pr: $("#fpp_1_pr"),
            incometax: $("#incometax"),
            incometax_pr: $("#incometax_pr"),
            net_sallary: $("#net_sallary"),
            net_sallary_pr: $("#net_sallary_pr"),
            sallary_fund: $("#sallary_fund"),
            sallary_fund_pr: $("#sallary_fund_pr"),
            taxes: $("#taxes"),
            localtaxes: $("#localtaxes"),
            pension: $("#pension"),
            taxfree_x: $("#taxfree_x"),
            taxfree: $("#taxfree").val(),
            pen_pr2: $("#pen_pr2"),
            pen_pr3: $("#pen_pr3"),
            label1_x: $("#label1_x"),
            label2_x: $("#label2_x"),
            pension_x: $("#pension_x")
        }
        return data;
    }
});
</script>

</body>
</html>