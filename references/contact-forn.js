
//Start contact Us form 
let Location="";
$(document).ready(function() {

	$.ajax({
		url: 'https://edns.ip-api.com/json',
		type: 'POST',
		dataType: 'jsonp',
		success: function(location) {
		// example where I update content on the page.
		Location = location.dns.geo;
		}
	});

var formType = $(this).attr("id");
	$("#phone").intlTelInput();
	$(".b2b-phone").intlTelInput();
	$(".b2c-phone").intlTelInput();
	$(".reseller-phone").intlTelInput();	
	$(".institute-phone").intlTelInput();
	$("#contact_phone").intlTelInput();
	$('#contact-form').submit(function(e){
		e.preventDefault();
		var name = $(this).find('#contact_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
		var email = $(this).find('#contact_email').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
		var selectCategory = $(this).find("#contact-select-category").val();
		var company = $(this).find('#contact_company').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
		var phone_no = $(this).find('#phone').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
		var query = $(this).find('#contact_query').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");

		if($.trim(query).length<=0) {
			$("#emptyTextArea").show();
		}
		else
		Submit_contact(name, email, company,phone_no, query, selectCategory);

	});

	$("#contact_query").on("keyup", function(){
		$("#emptyTextArea").hide();
	});

//b2b form 

$('#b2b-form').submit(function(e){
		e.preventDefault();

		var name = $(this).find('#contact_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var email = $(this).find('#contact_email').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var selectCategory = $(this).find("#contact-select-category").val();
		var company = $(this).find('#contact_company').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var phone_no = $(this).find('.b2b-phone').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var query = $(this).find('#contact_query').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;

		var b2b_q1 = $('#b2b_lq1').text();
		var b2b_a1 = $('#b2b-a1').val() ? $('#b2b-a1').val() : '';
		var b2b_q2 = $('#b2b_lq2').text();
		var b2b_a2 = $('#b2b-a2').val() ? $('#b2b-a2').val() : '';
		var b2b_q3 = $('#b2b_lq3').text();
		var b2b_a3 = $('#b2b-a3').val() ? $('#b2b-a3').val() : '';
		var b2b_q4 = $('#b2b_lq4').text();
		var b2b_a4 = $('#b2b-a4').val() ? $('#b2b-a4').val() : '';
		var b2b_q5 = $('#b2b_lq5').text();
		var b2b_a5 = $('#b2b-a5').val() ? $('#b2b-a5').val() : '';
		var b2b_q6 = $('#b2b_lq6').text();
		var b2b_a6 = $('#b2b-a6').val() ? $('#b2b-a6').val() : '';
		var b2b_q7 = $('#b2b_lq7').text();
		var b2b_a7 = $('#b2b-a7').val() ? $('#b2b-a7').val() : '';

		query=query + "<br><p><b>Questions for B2B Form-</b><br><i>"+ b2b_q1 +"</i><br>Ans:<b>"+ b2b_a1 +"</b><br><br><i>"+ b2b_q2 +"</i><br>Ans:<b>"+ b2b_a2 +"</b><br><br><i>"+ b2b_q3 +"</i><br>Ans:<b>"+ b2b_a3 +"</b><br><br><i>"+ b2b_q4 +"</i><br>Ans:<b>"+ b2b_a4 +"</b><br><br><i>"+ b2b_q5 +"</i><br>Ans:<b>"+ b2b_a5 +"</b><br><br><i>"+ b2b_q6 +"</i><br>Ans:<b>"+ b2b_a6 +"</b><br><br><i>"+ b2b_q7 +"</i><br>Ans:<b>"+ b2b_a7 +"</b></p><br>";

		Submit_contact(name, email,company,phone_no, query, selectCategory,'pranit.bagmar@xecurify.com');

});


// b2c form

$('#b2c-form').submit(function(e){
		e.preventDefault();

		var name = $(this).find('#contact_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var email = $(this).find('#contact_email').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var selectCategory = $(this).find("#contact-select-category").val();
		var company = $(this).find('#contact_company').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var phone_no = $(this).find('.b2c-phone').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var query = $(this).find('#contact_query').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;

		var b2c_q1 = $('#b2c-lq1').text();
		var b2c_a1 = $('#b2c-a1').val();
		var b2c_q2 = $('#b2c-lq2').text();
		var b2c_a2 = $('#b2c-a2').val();
		var b2c_q3 = $('#b2c-lq3').text();
		var b2c_a3 = $('#b2c-a3').val();
		var b2c_q4 = $('#b2c-lq4').text();
		var b2c_a4 = $('#b2c-a4').val();
		var b2c_q5 = $('#b2c-lq5').text();
		var b2c_a5 = $('#b2c-a5').val();

		query=query +"<br><p><b>Questions for B2C Form -</b><br><i>"+ b2c_q1 +"</i><br>Ans:<b>"+ b2c_a1 +"</b><br><br><i>"+ b2c_q2 +"</i><br>Ans:<b>"+ b2c_a2 +"</b><br><br><br><i>"+ b2c_q3 +"</i><br>Ans:<b>"+ b2c_a3 +"</b><br><br><i>"+ b2c_q4 +"</i><br>Ans:<b>"+ b2c_a4 +"</b><br><br><i>"+ b2c_q5 +"</i><br>Ans:<b>"+ b2c_a5 +"</b></p><br>";

		Submit_contact(name, email, company, phone_no,query, selectCategory,'pranit.bagmar@xecurify.com');


	});

//reseller form

$('#reseller-form').submit(function(e){
		e.preventDefault();

		var name = $(this).find('#contact_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var email = $(this).find('#contact_email').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var company = $(this).find('#contact_company').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var phone_no = $(this).find('.reseller-phone').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;
		var query = $(this).find('#contact_query').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");;

		var res_q1 = $('#res-lq1').text();
		var res_a1 = $('#res-a1').val();
		var res_q2 = $('#res-lq2').text();
		var res_a2 = $('#res-a2').val();
		var res_q3 = $('#res-lq3').text();
		var res_a3 = $('#res-a3').val();
		var res_q4 = $('#res-lq4').text();
		var res_a4 = $('#res-a4').val();
		// var res_q5 = $('#res-lq5').text();
		// var res_a5 = $('#res-a5').val();



		query= query +"<br><p><b>Questions for Reseller Form :</b><br><br><i>"+ res_q1 +"</i><br>Ans:<b>"+ res_a1 +"</b><br><br><i>"+ res_q2 +"</i><br>Ans:<b>"+ res_a2 +"</b><br><br><i>"+ res_q3 +"</i><br>Ans:<b>"+ res_a3 +"</b><br><br><i>"+ res_q4 +"</i><br>Ans:<b>"+ res_a4 +"</b><br></p><br>";
		Submit_contact(name, email,company, phone_no,query,'','pranit.bagmar@xecurify.com');


	});

$('#edu-form').submit(function(e){
	e.preventDefault();
	error = false;
	var name = $(this).find('#contact_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
	var email = $(this).find('#contact_email').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
	var institute = $(this).find('#institute_name').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
	var phone_no = $(this).find('.institute-phone').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");
	var query = $(this).find('#contact_query').val().replace(new RegExp("<[/]*[a-zA-Z]+>", "gm"), "");

	var edu_q1 = $('#edu-lq1').text();
	var edu_a1 = $('#edu-a1').val();
	var edu_q2 = $('#edu-lq2').text();
	var edu_a2 = $('#edu-a2').val();
	var edu_q3 = $('#edu-lq3').text();
	var edu_a3 = $('#edu-a3').val();



	query=query +"<br><p><b>Questions for Educational Institute Form :</b><br><br><i>"+ edu_q1 +"</i><br>Ans:<b>"+ edu_a1 +"</b><br><br><i>"+ edu_q2 +"</i><br>Ans:<b>"+ edu_a2 +"</b><br><br><i>"+ edu_q3 +"</i><br>Ans:<b>"+ edu_a3 + "</b></p><br>";
	if( !error ) Submit_contact(name, email,institute, phone_no,query,'','pranit.bagmar@xecurify.com');


});

function Submit_contact(name, email, company, phone_no ,query, selectCategory, ccEmail){

	const pageURL = window.location.href;
	$('.loading-icon').show();
	let date_obj = new Date();
	let time = date_obj.getHours()+":"+date_obj.getMinutes()+":"+date_obj.getSeconds();
	let date = date_obj.getDate()+"/"+(date_obj.getMonth()+1)+"/"+date_obj.getFullYear();
	var contactQuery= selectCategory.concat(" : ",query);
	name = name.replace("<", "");
	var json = new Object();
	json.firstName = name;
	json.email = email;
	//json.selectCategory = selectCategory;
	json.company = company;
	json.phone = phone_no;
	json.query = contactQuery;
	if(ccEmail !=null){
		json.ccEmail = ccEmail;
	}
	var jsonString = JSON.stringify(json);
	$.ajax({
		url: "https://test.miniorange.in/moas/rest/customer/contact-us",
		type : "POST",
		data : jsonString,
		crossDomain: true,
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		success: function(e){
		},
		error: function(e) {
			if (formType== "contact-form" || "b2b-form" || "b2c-form" || "reseller-form" || "edu-form") {
				if (e.responseText == "Invalid email.") {
				$('.loading-icon').hide();
					moExternalContactFormErrorMsg();
				} else if (e.responseText == "Query submitted.") {
				$('.loading-icon').hide();
				window.location.href="thanks";
				}
    }
		}
	});

	jQuery.ajax({
		url:"https://plugins.miniorange.com/wp-content/plugins/miniorange-contact-us-shortcode/updateSheet/updateSheet.php",
		type: 'post',
		dataType: 'json',
		data:{link: pageURL,email: email,category: selectCategory,query: query,date: date,time: time,location: Location,contactForm: true},
		success: function(result){console.log('done');},
		error: function(xhr){
			console.log(xhr.responseText);
		}
	});


}

 $('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

});





//End of Contact form Script


	


