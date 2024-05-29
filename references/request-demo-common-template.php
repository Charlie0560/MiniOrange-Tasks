
<!---recaptcha script-->
<!-- <script src='https://www.google.com/recaptcha/api.js'></script> -->
<script>
$.getScript( "https://www.google.com/recaptcha/api.js");
window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};
</script>
<style>
#g-recaptcha-response {
	
    display: block !important;
    position: absolute;
    margin: -78px 0 0 0 !important;
    width: 302px !important;
    height: 76px !important;
    z-index: -999999;
    opacity: 0;
}
</style>
<!--End of recaptcha script-->


<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.3/moment-timezone-with-data.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.standalone.min.css" integrity="sha512-TQQ3J4WkE/rwojNFo6OJdyu6G8Xe9z8rMrlF9y7xpFbQfW5g8aSWcygCQ4vqRiJqFsDsE1T6MoAOMJkFXlrI9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />



<div class="row background-img-dot">
	<div class="container" id="request-demo-section">
		<div class="request-demo-wrapper">
			<h2 class="request-demo-heading" id="request-demo" style="margin-top:50px;">Want To Schedule A Demo?</h2>
			<div class="request-demo-card">
				<div class="col-md-5">
					<img src="/images/product-page/request-demo-banner.webp" height="380px" width="auto" alt="Request a Demo" >
				</div>
				<div class="col-md-7">
					<div class="request-demo-msg-modal">
						<span class="info-icon"><i class="fas"></i>&nbsp;&nbsp;</span>
						<span class="request-demo-msg"></span>
					</div>
					<form method="POST" action="" class="request_demo_form" id="request_demo_form">
						<div class="form-group contact-column">
							<label>Work Email&nbsp;<span class="text-danger">*</span></label>
							<input label="Work Email" type="email" name="contact_email" id="request_demo_email" required="true" placeholder="Enter valid email" class="form-control bft-textarea">
						</div><br>
						<div class="form-group contact-column" id="phoneFieldContainer">
          		<label for="phone"><p><b>Phone*</b></p></label>
							<div class="phone-container">
								<div class="country-code-container">
									<input id="countryCodes" class="field-label-text country-codes-format form-control bft-textarea">
								</div>
								<div class="phone-no-flex">
									<input type="text" id="request_demo_phone" class="field-label-text phone-container-field form-control bft-textarea" placeholder="Phone Number" name="phone" required pattern="[\+]?[0-9]{1,4}[\s]?([0-9]{8,})?" maxlength="12">
								</div> 
							</div>
        		</div><br>

						<div class="form-group contact-column">
							<label for="checkin" class="field-label">Book your time slot</label><br>
							<div class="book-slot-section">
								<div class="datetime-input">
									<label for="checkin" class="field prepend-icon">
									<input label="Calendar" type="datetime-local" id="checkin" max="2100-12-31T23:59" name="calendar" onclick="this.showPicker()" class="gui-input form-control bft-textarea" placeholder="mm/dd/yyyy">
								</div>
								
								<div class="timezone-input">
									<select class="form-control bft-textarea" id="dropdownTimeZone"></select>
								</div>
							</div>   
							</label>
						</div>	
						<div class="g-recaptcha" id="rcaptcha"  data-sitekey="6LdxQgUhAAAAALdpow7WAwz8AWa9wWmKICf3650N"></div>
						<span id="captcha" style="color:red;"></span> <!-- this will show captcha errors --> 
						<input class="btn prod-banner-btn" type="submit" name="request_demo_btn" value="Request Demo" id="request_demo_submit_button" />
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	

</style>

<script>
	var invalid = false;
	$(document).ready(function(){
		$(".country-codes-format").intlTelInput();
		$(".country-codes-format").prop('readonly', true);
		$(".country-codes-format").addClass("form-control[readonly]");
		$('#request_demo_email').on('keyup',function(){

			var email = $(this).val().toLowerCase();
			if(email.endsWith("@gmail.com") || email.endsWith('@yahoo.com') || email.endsWith('@hotmail.com') || email.endsWith('@protonmail.com') || email.endsWith('@yahoo.co.in') || email.endsWith('@outlook.com')){
				fail();	
				invalid = true;
			}
			else if(invalid){
				$('.request-demo-msg-modal').slideToggle("slow","linear");
				invalid = false;
			}
		});

	});

	function isValidEmail(email){
	if(email.toLowerCase().endsWith("@gmail.com") || email.toLowerCase().endsWith('@yahoo.com') || email.toLowerCase().endsWith('@hotmail.com') || email.toLowerCase().endsWith('@protonmail.com') || email.toLowerCase().endsWith('@yahoo.co.in') || email.toLowerCase().endsWith('@outlook.com')){
			fail();
	}
		return true;
	}

	function success(){
		$('.request-demo-wrapper .request-demo-msg-modal').removeClass('text-danger bg-danger');
		$('.request-demo-wrapper .request-demo-msg-modal').addClass('text-success bg-success');

		$('.request-demo-wrapper .request-demo-msg-modal i').removeClass('fa-info-circle');
		$('.request-demo-wrapper .request-demo-msg-modal i').addClass('fa-check-circle');
		$('.request-demo-wrapper .request-demo-msg-modal .request-demo-msg').text('Thank you for reaching out to us. We will get back to you soon.');
		$('.request-demo-msg-modal').hide();
		$('.request-demo-msg-modal').slideToggle("slow","linear");
		$('#request_demo_email,#request_demo_phone').val('');
		setTimeout(function(){
		$('#checkin').val('');},200);
		setTimeout(function(){
		loadTimeZoneList();},50);
		// setTimeout(function(){$('.request-demo-msg-modal').slideToggle("slow","linear");},3000);
	}


	function fail(){
		$('.request-demo-wrapper .request-demo-msg-modal').removeClass('text-success bg-success');
		$('.request-demo-wrapper .request-demo-msg-modal').addClass('text-danger bg-danger');

		$('.request-demo-wrapper .request-demo-msg-modal i').removeClass('fa-check-circle');
		$('.request-demo-wrapper .request-demo-msg-modal i').addClass('fa-info-circle');

		$('.request-demo-wrapper .request-demo-msg-modal .request-demo-msg').text('Please use Your Business Email.');
		if(!invalid)
			$('.request-demo-msg-modal').slideToggle("slow","linear");
		// setTimeout(function(){$('.request-demo-msg-modal').slideToggle("slow","linear");},3000);
	}
</script>

<script>
	var next_day = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 16);
 	var final= parseInt(next_day);
	document.getElementsByName("calendar")[0].min = next_day;
	function loadTimeZoneList(){   
		let select = document.getElementById("dropdownTimeZone");
		select.innerHTML = ""; 
		let browserTimeZone = moment.tz.guess();
		let timeZones = moment.tz.names();
		timeZones.forEach((timeZone) =>{
		option = document.createElement("option");      
			option.textContent = `${timeZone} (GMT${moment.tz(timeZone).format('Z')})`; 
			option.value = timeZone;
			if (timeZone == browserTimeZone){
				option.selected = true;
			}
			select.appendChild(option);
		});	
	}
	function init(){
		loadTimeZoneList();  
	}
	init();
</script>