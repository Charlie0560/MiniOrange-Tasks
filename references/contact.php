<title>Contact miniOrange</title>
<link rel="canonical" href="https://www.miniorange.com/contact"/>
<?php include("header.php");?>

<script type="text/javascript" src="/js/contact-us-form.js?ver=1.7"></script>

<section class="section contact-us-page">
    <div class="loading-icon"><img class="loading" src="/images/ajax-loader4.gif" alt="Website Loading"></div>
    <h1 class="text-center" >Contact Us</h1><br>
    <div class="wrapper">
        <div class="row" style="margin-right: 0px!important;padding-left: 4%;">
            <div class="col-md-2 contact-left-section" style="padding-left: 0px!important;">
                <div class="contactus-tab" style="padding:unset!important;">
                    <button class="tablinks" onclick="opentab(event,'contact')" id="defaultOpen">General Enquiry</button>
                    <button id="resellerTab" class="tablinks" onclick="opentab(event,'reseller')">I am a Partner/Reseller/MSP</button>
                    <button class="tablinks" onclick="opentab(event,'b2b')" >I have a B2B Usecase</button>
                    <button class="tablinks" onclick="opentab(event,'b2c')">I have a B2C Usecase</button>
                    <button class="tablinks" onclick="opentab(event,'educational')">I am an Educational Institute</button>
                </div>
            </div>
            <div class="menu-contents col-md-6" style="margin-left:-3px!important;">
                <!---Contact Us----->
                <div id="contact" class="tabcontent">
                    <form role="form" action="" id="contact-form" method="post">
                        <h2 class="contact-heading">Get Help</h2>
                        <div class="form-group">
                            <div class="alert alert-danger alert-dismissable" id="login-error" hidden>
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <p id="errorAlert">Please fill all required fields.</p>
                            </div>
                        </div>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-6">

                                <div class="form-group contact-column field">


                                    <input type="text" name="contact_name"  id="contact_name" dir="auto" aria-label="Name" class="form-control contact-us-input-field bft-textarea"  placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" pattern="^\w+( +\w+)*$">
                                    <label for="fullname" class="contact-us-label">Full Name</label>
                                </div>


                                <div class="form-group contact-column field">


                                    <input type="text" name="contact_company"  class="form-control contact-us-input-field bft-textarea" id="contact_company" dir="auto" placeholder="Company Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Company Name'" pattern="^(?!\s*$)[-a-zA-Z0-9_,.\s]{1,100}$">
                                    <label for="companyname" class="contact-us-label">Company Name</label>
                                </div>


                                <div class="form-group contact-column field">

                                    <input type="email" name="contact_email"  id="contact_email" dir="auto" required="true"  placeholder="Enter valid email (Required)" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter a valid email address'" class="form-control contact-us-input-field bft-textarea">
                                    <label class="contact-us-label" for="emailaddress" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"><span class="text-danger">*</span> Enter a valid email</label>
                                </div>

                                 </div>
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                        
                                    <label class="contact-us-label" for="phonenumber">Phone Number</label>
                                </div>
                                <div class="form-group contact-column">
                                    <label for="options" class="contact-us-label"><span class="text-danger">*</span> What's this about</label>
                                    <select id="contact-select-category" class="form-control bft-textarea" required="true">
                                        <option class="Select-placeholder" value="">Select Category</option>
                                        <option value="Product Questions">Product Questions</option>
                                        <option value="Request Quote">Request Quote</option>
                                        <option value="Sales Enquiry">Sales Enquiry</option>
                                        <option value="Schedule a Demo">Schedule a Demo</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Technical Support">Submit New App Request</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div class="form-group contact-column field">

                                    <textarea required="true" class="form-control textarea-resize bft-textarea contact-us-input-field" name="contact_query" rows="5" cols="20" placeholder="* Please enter your query" onfocus="this.placeholder = ''" onblur="this.placeholder='* Please enter your query'"  id="contact_query" dir="auto"  pattern=".*\S.*"></textarea>
                                    <label class="contact-us-label" for="contact_query" ><span class="text-danger">*</span> Please enter your query</label>
                                </div>
                            </div>
							<div class="col-md-6">
								<input class="btn contact-us-submit-btn" type="submit" name="contact_submit_btn" value="Submit" id="contact_submit_btn" />
							</div>
                           
                        </div>
						
                    </form>
                </div>
                <!---Contact Us---End-->

                <!--B2B form----->
                <div id="b2b" class="tabcontent">
                    <form id="b2b-form" role="form" action="" method="post">
                        <h2 class="contact-heading">B2B Usecase</h2>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_name"  id="contact_name" dir="auto" aria-label="Name" class="form-control contact-us-input-field bft-textarea"  placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" pattern="^\w+( +\w+)*$">
                                    <label for="fullname" class="contact-us-label">Full Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_company"  class="form-control contact-us-input-field bft-textarea" id="contact_company" dir="auto" placeholder="Company Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Company Name'" pattern="^(?!\s*$)[-a-zA-Z0-9_,.\s]{1,100}$">
                                    <label for="companyname" class="contact-us-label">Company Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="email" name="contact_email"  id="contact_email" dir="auto" aria-label="Email Enter a valid email address!"  required="true" title="Enter a valid email address." placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder='Email Address'" class="form-control contact-us-input-field bft-textarea">
                                    <label class="contact-us-label" for="emailaddress" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"><span class="text-danger">*</span> Enter a valid email</label>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input  type="text" name="phone" id="phone" class="b2b-phone form-control contact-us-input-field bft-textarea" required="true" title="Enter your phone number without spaces and dashes" pattern="[\+]?[0-9]{1,4}[\s]?([0-9]{8,})?"/>
                                    <label class="contact-us-label" for="phonenumber"><span class="text-danger">*</span>Phone Number</label>
                                </div>
                                <div class="form-group contact-column">
                                    <label for="options" class="contact-us-label"><span class="text-danger">*</span> What's this about</label>
                                    <select id="contact-select-category" class="form-control bft-textarea" required="true">
                                        <option class="Select-placeholder" value="">Select Category</option>
                                        <option value="Product Questions">Product Questions</option>
                                        <option value="Request Quote">Request Quote</option>
                                        <option value="Sales Enquiry">Sales Enquiry</option>
                                        <option value="Schedule a Demo">Schedule a Demo</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Technical Support">Submit New App Request</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div class="form-group contact-column field">

                                    <textarea required="true" class="form-control textarea-resize bft-textarea contact-us-input-field" name="contact_query" rows="5" cols="20" placeholder="* Please enter your query" onfocus="this.placeholder = ''" onblur="this.placeholder='* Please enter your query'"  id="contact_query" dir="auto" dir="auto" pattern=".*\S.*"></textarea>
                                    <label class="contact-us-label" for="contact_query" ><span class="text-danger">*</span> Please enter your query</label>

                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-12 more-details">
                                <b>Let us know more details about your Usecase:</b>
                            </div>
                            <br><br>
                            <div class="col-md-11 tab-padding">
                                <div class="form-group contact-column">
                                    <label id="b2b_lq1" for="" class="contact-us-label">Are you looking for a Cloud solution or On-Premise? We support both.</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a1" name="b2b-q1">
                                </div>

                                <div class="form-group contact-column">
                                    <label id="b2b_lq2" for="" class="contact-us-label">Are you replacing any existing sso solution or trying to enable SSO for the first time?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a2"  name="b2b-q2">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2b_lq3" for="" class="contact-us-label">Are you looking for Single Sign On/2fa for compliance reasons or do you want to simplify logins for users?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a3"  name="b2b-q3">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2b_lq4" for="" class="contact-us-label">Where do these employees exist right now- Active Directory or any app database?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a4" name="b2b-q4">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2b_lq5" for="" class="contact-us-label">What all apps you want to single sign-on into?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a5" name="b2b-q5">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2b_lq6" for="" class="contact-us-label">What type of users will use this solution - employees, contractors or vendors.</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a6"  name="b2b-q6">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2b_lq7" for="" class="contact-us-label">How frequently do they access these applications - daily, weekly or monthly?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2b-a7" name="b2b-q7">
                                </div>
                            </div>
                            <div class="col-md-6 sb-btn">
                                <input class="btn contact-us-submit-btn" type="submit" name="contact_submit_btn" value="Submit" id="contact_submit_btn" />
                            </div>
                        </div>
                    </form>
                </div>
                <!--B2B form---End---->

                <!--B2C form----->
                <div id="b2c" class="tabcontent">
                    <form id="b2c-form" role="form" action="" method="post">
                        <h2 class="contact-heading">B2C Usecase</h2>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_name"  id="contact_name" dir="auto" aria-label="Name" class="form-control contact-us-input-field bft-textarea"  placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" pattern="^\w+( +\w+)*$">
                                    <label for="fullname" class="contact-us-label">Full Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_company"  class="form-control contact-us-input-field bft-textarea" id="contact_company" dir="auto" placeholder="Company Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Company Name'" pattern="^(?!\s*$)[-a-zA-Z0-9_,.\s]{1,100}$">
                                    <label for="companyname" class="contact-us-label">Company Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="email" name="contact_email"  id="contact_email" dir="auto" aria-label="Email Enter a valid email address!"  required="true" title="Enter a valid email address." placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder='Email Address'" class="form-control contact-us-input-field bft-textarea">
                                    <label class="contact-us-label" for="emailaddress" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"><span class="text-danger">*</span> Enter a valid email</label>
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input  type="text" name="phone" id="phone" class="b2c-phone form-control contact-us-input-field bft-textarea" required="true" title="Enter phone number without spaces and dashes" pattern="[\+]?[0-9]{1,4}[\s]?([0-9]{8,})?"/>
                                    <label class="contact-us-label" for="phonenumber"><span class="text-danger">*</span>Phone Number</label>
                                </div>
                                <div class="form-group contact-column">
                                    <label for="options" class="contact-us-label"><span class="text-danger">*</span> What's this about</label>
                                    <select id="contact-select-category" class="form-control bft-textarea" required="true">
                                        <option class="Select-placeholder" value="">Select Category</option>
                                        <option value="Product Questions">Product Questions</option>
                                        <option value="Request Quote">Request Quote</option>
                                        <option value="Sales Enquiry">Sales Enquiry</option>
                                        <option value="Schedule a Demo">Schedule a Demo</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Technical Support">Submit New App Request</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div class="form-group contact-column field">
                                    <textarea required="true" class="form-control textarea-resize bft-textarea contact-us-input-field" name="contact_query" rows="5" cols="20" placeholder="* Please enter your query" onfocus="this.placeholder = ''" onblur="this.placeholder='* Please enter your query'"  id="contact_query" dir="auto" pattern=".*\S.*"></textarea>
                                    <label class="contact-us-label" for="contact_query" ><span class="text-danger">*</span> Please enter your query</label>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-12 more-details">
                                <b>Let us know more details about your Usecase:</b>
                            </div>
                            <br><br>
                            <div class="col-md-11 tab-padding">
                                <div class="form-group contact-column">
                                    <label id="b2c-lq1" for="" class="contact-us-label">What type of services do you provide to your consumers?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2c-a1" name="b2c-q1">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2c-lq2" for="" class="contact-us-label">Do you already have a system where you provide services to the users or are you planning to launch a new service?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2c-a2" name="b2c-q2">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2c-lq4" for="" class="contact-us-label">Please list the names of the apps where your customers login today?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2c-a4" name="b2c-q4">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="b2c-lq3" for="" class="contact-us-label">What is the current rate of traffic on your website if you already have a service in place?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2c-a3" name="b2c-q3">
                                </div>
                                
								<div class="form-group contact-column">
                                    <label id="b2c-lq5" for="" class="contact-us-label">How frequently do your customers access these applications. For Example - weekly, monthly or twice in an year?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="b2c-a5" name="b2c-q5">
                                </div>
                            </div>
                            <div class="col-md-6 sb-btn contact-column">
                                <input class="btn contact-us-submit-btn" type="submit" name="contact_submit_btn" value="Submit" id="contact_submit_btn" />
                            </div>
                        </div>
                    </form>
                </div>
                <!--B2B form---End-->

                <!--Reseller--form----->
                <div id="reseller" class="tabcontent">
                    <form id="reseller-form" role="form" action="" method="post">
                        <h2 class="contact-heading">Partner/Reseller/Distributor</h2>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_name"  id="contact_name" dir="auto" aria-label="Name" class="form-control contact-us-input-field bft-textarea"  placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" pattern="^\w+( +\w+)*$">
                                    <label for="fullname" class="contact-us-label">Full Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_company"  class="form-control contact-us-input-field bft-textarea" id="contact_company" dir="auto" placeholder="Company Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Company Name'" pattern="^(?!\s*$)[-a-zA-Z0-9_,.\s]{1,100}$">
                                    <label for="companyname" class="contact-us-label">Company Name</label>
                                </div>
                                <div class="form-group contact-column field">
                                    <input type="email" name="contact_email"  id="contact_email" dir="auto" aria-label="Email Enter a valid email address!"  required="true" title="Enter a valid email address." placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder='Email Address'" class="form-control contact-us-input-field bft-textarea">
                                    <label class="contact-us-label" for="emailaddress" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"><span class="text-danger">*</span> Enter a valid email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input  type="text" name="phone" id="phone" class="reseller-phone form-control contact-us-input-field bft-textarea" required="true" title="Enter phone number without spaces and dashes" pattern="[\+]?[0-9]{1,4}[\s]?([0-9]{8,})?"/>
                                    <label class="contact-us-label" for="phonenumber"><span class="text-danger">*</span>Phone Number</label>
                                </div>
                                <div class="form-group contact-column field">
                                    <textarea required="true" class="form-control textarea-resize bft-textarea contact-us-input-field" name="contact_query" rows="5" cols="20" placeholder="* Please enter your query" onfocus="this.placeholder = ''" onblur="this.placeholder='* Please enter your query'"  id="contact_query" dir="auto" pattern=".*\S.*"></textarea>
                                    <label class="contact-us-label" for="contact_query" ><span class="text-danger">*</span> Please enter your query</label>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-12 more-details">
                                <b>Let us know more details about your Usecase:</b>
                            </div>
                            <br><br>
                            <div class="col-md-11 tab-padding">
                                <div class="form-group contact-column">
                                    <label id="res-lq1" for="" class="contact-us-label">Are you a Value Added Reseller, Distributor, MSP or a Solution Integrator?</label><br>
                                    <!--<input type="text" class="form-control contact-us-input-field bft-textarea" id="" name="">-->
                                         <select class="form-control bft-textarea" name="res-q1" id="res-a1">
                                            <option value="reseller">Reseller</option>
                                            <option value="msp">MSP</option>
                                            <option value="distributor">Distributor</option>
                                            <option value="sol-integrator">Solution Integrator</option>
                                         </select>
                                 </div>
                                <div class="form-group contact-column">
                                    <label id="res-lq2" for="" class="contact-us-label">Which region do you work in?</label><br>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="res-a2" name="res-q2">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="res-lq3" for="" class="contact-us-label">Do you resell any other security products? If yes which one?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="res-a3" name="res-q3">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="res-lq4" for="" class="contact-us-label">Do you have any current sales in pipeline whose usecase we can discuss further?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="res-a4" name="res-q4">
                                </div>
                                <!--<div class="form-group contact-column">
                                    <label id="res-lq5" for="" class="contact-us-label">For partnership, are you interested in being a distributor or something more? <br>Eg. we can train you on our SSO product and you can take care of initial customer support as well.</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="res-a5" name="res-q5">
                                </div>-->
                            </div>
                            <div class="col-md-5 sb-btn">
                                <input class="btn contact-us-submit-btn" type="submit" name="contact_submit_btn" value="Submit" id="contact_submit_btn" />
                            </div>
                        </div>
                    </form>
                </div>
                <!---Reseller--form-End-->

                <!--Educational--Institute--Form----->                
                <div id="educational" class="tabcontent">
                    <form id="edu-form" role="form" action="" method="post">
                        <h2 class="contact-heading">Educational Institute Usecase</h2>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_name"  id="contact_name" dir="auto" aria-label="Name" class="form-control contact-us-input-field bft-textarea"  placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" pattern="^\w+( +\w+)*$">
                                    <label for="fullname" class="contact-us-label">Full Name</label>
                                </div>

                                <div class="form-group contact-column field">
                                    <input type="text" name="contact_institute"  class="form-control contact-us-input-field bft-textarea" id="institute_name" dir="auto" placeholder="Institute Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Institute Name'" pattern="^(?!\s*$)[-a-zA-Z0-9_,.\s]{1,100}$">
                                    <label for="institutename" class="contact-us-label">Institute Name</label>
                                </div>
                                <div class="form-group contact-column field">
                                    <input type="email" name="contact_email"  id="contact_email" dir="auto" aria-label="Email Enter a valid email address!"  required="true" title="Enter a valid email address." placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder='Email Address'" class="form-control contact-us-input-field bft-textarea">
                                    <label class="contact-us-label" for="emailaddress" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"><span class="text-danger">*</span> Enter a valid email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group contact-column field">
                                    <input  type="text" name="phone" id="phone" class="institute-phone form-control contact-us-input-field bft-textarea" required="true" title="Enter phone number without spaces and dashes" pattern="[\+]?[0-9]{1,4}[\s]?([0-9]{8,})?"/>
                                    <label class="contact-us-label" for="phonenumber"><span class="text-danger">*</span> Phone Number</label>
                                </div>
                                <div class="form-group contact-column field">
                                    <textarea required="true" class="form-control textarea-resize bft-textarea contact-us-input-field" name="contact_query" rows="5" cols="20" placeholder="* Please enter your query" onfocus="this.placeholder = ''" onblur="this.placeholder='* Please enter your query'"  id="contact_query" dir="auto" pattern=".*\S.*"></textarea>
                                    <label class="contact-us-label" for="contact_query" ><span class="text-danger">*</span> Please enter your query</label>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-right: 0px!important;">
                            <div class="col-md-12 more-details">
                                <b>Let us know more details about your Usecase:</b>
                            </div>
                            <br><br>
                            <div class="col-md-11 tab-padding">
                                <div class="form-group contact-column">
                                    <label id="edu-lq1" for="" class="contact-us-label">What software or applications do you use for teaching as well as attendance purposes? Also, mention additional resources if any. (Eg :Coursera, Khan Academy etc).</label><br>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="edu-a1" name="edu-q1">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="edu-lq2" for="" class="contact-us-label">Where is the student data stored for your institution?</label><br>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="edu-a2" name="edu-q2">
                                </div>
                                <div class="form-group contact-column">
                                    <label id="edu-lq3" for="" class="contact-us-label">What are the issues faced in remote learning process during pandemic?</label>
                                    <input type="text" class="form-control contact-us-input-field bft-textarea" id="edu-a3" name="edu-q3">
                                </div>
                            </div>
                            <div class="col-md-5 sb-btn">
                                <input class="btn contact-us-submit-btn" type="submit" name="contact_submit_btn" value="Submit" id="contact_submit_btn" />
                            </div>
                        </div>
                    </form>
                </div>
                <!--Educational--Institute--Form--End----->
            </div>
						<p class="mo-idp-submit-error-msg" id="moExternalContactFormErrorMsg">Please enter valid email-id</p>
            <div class="col-md-3 contact-us-outer-wrapper" style="margin-left:1em;">
                <div class="contact-us-inner-wrapper">
                    <div class="contact-us-heading-main">Other ways to contact us</div>
                    <h6 class="other-info">Call or email us whichever suits you. We'll revert back soon.</h6>

                    <ul class="contact-links-list">
                        <div class="get-info-on-mail">For any general or product related information, mail us on:</div>
                        <li>
                            <img src="/images/contact-us-imgs/email.webp" style="float:left;margin-right:1em;height:3em;" alt="Contact Us through email"/>
                            <span class="contact-us-mail-add" style="line-height:2;">
									 <a href="mailto:info@xecurify.com" style="color:#fff;">info@xecurify.com</a>
								  </span>
                        </li><br>

                        <div class="get-info-on-mail" style="padding-top:0.5em;">Call Us On:</div>
                        <li>
                            <img src="/images/contact-us-imgs/phone.webp" style="float:left;margin-right:1em;height:3em;" alt="Contact Us through Phone">
                            <span style="line-height: 3;color:#fff;">US (+1) 978 658 9387</span>
                        </li>


                    </ul><br/>

                    <h6 style="padding-top: 1.1em;margin-left: 1em;font-weight: 600;color: #fff;font-size: 1.3em;letter-spacing: .1em;word-spacing: .15em;font-family:"Gotham SSm 4r",museo-sans,sans-serif;">STAY CONNECTED</h6>
                    <div class="contact-us-social-links">
                        <a href="https://twitter.com/miniOrange_Inc" title="Twitter" target="_blank"><i class="fab fa-twitter contact-us-social-icons"></i></a>
                        <a href="https://www.facebook.com/miniorangeinc/" title="Facebook" target="_blank"><i class="fab fa-facebook-f contact-us-social-icons"></i></a>
                        <a href="https://www.linkedin.com/company/miniorange" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in contact-us-social-icons"></i></a>
                    </div>

                </div>
            </div>
        </div>
        <div class="row location-wrapper">
            <main class="text text-center contact-us-location-heading">Our Locations</main>
            <div class="address-container">
            <div class="col-md-4 address contact-us-location-section location-first" style="width: clamp(250px, 5vw, 10vw);">
                <p><b>New York Office:</b></p>
                <p>228 Park Ave S #87831<br>
                 New York, NY 10003-1502<br></p>
            </div>
            <div class="col-md-4 address contact-us-location-section location-first" style="width: clamp(250px, 5vw, 10vw);">
                <p><b>Wyoming Office:</b></p>
                <p>1621 Central Ave,<br>
                Cheyenne, WY 82001<br></p>
            </div>
            <div class="col-md-4 address contact-us-location-section location-first" style="width: clamp(250px, 5vw, 10vw);">
                <p><b>India Office:</b></p>
                <p>Business Enclave, Baner<br>
                Pune, Maharashtra 411045<br></p>
            </div>
            </div>
        </div>

          
       <style>
        .address-container{
            display: flex;
            flex-wrap: wrap;
             justify-content: center; 
             gap: 4vw; 
             margin: 4vw auto;
        }   
       .padding-top-5{
        padding-top:5em;
    }
    .active {
        background: #fff!important;
        border: 1px solid #263746!important;
        border-right: none !important;
        z-index:2;
        color: #263746!important;
    }
    input:placeholder-shown + label {
        cursor: text;
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(1rem, 3.000rem) scale(0.9);
    }
    .contact-heading{
        border-left: solid 3px #ff9c22 !important;
        padding-left: 9px !important;
    }

    textarea:placeholder-shown + label {
        cursor: text;
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(1rem, 3.000rem) scale(0.9);
    }
	
	@media screen and (max-width:800px){
		 textarea:placeholder-shown + label, input:placeholder-shown + label {
			 transform: translate(1rem, 4.5rem) scale(0.9);
		 }
	}
			 
    @media only screen and (max-width: 1550px){
        .contactus-tab {
            padding-left: 61px!important;
        }
        .col-md-2{
            padding-left: 61px!important;
        }
    }
    /**
    * By default, the placeholder should be transparent. Also, it should
    * inherit the transition.
    */
    ::-webkit-input-placeholder {
        /*opacity: 0;*/
        transition: inherit;
    }

    .contact-us-input-field::placeholder {
        opacity: 0;
    }

    /**
    * Show the placeholder when the input is focused.
    */
    input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
        opacity: 1;
    }
    /**
    * When the element is focused, remove the label transform.
    * Also, do this when the placeholder is _not_ shown, i.e. when
    * there's something in the input at all.
    */
    input:not(:placeholder-shown) + label,
    input:focus + label {
        transform: translate(0, 0) scale(1);
        cursor: pointer;
        color:#4cbf9d;
    }

    textarea:not(:placeholder-shown) + label,
    textarea:focus + label {
        transform: translate(0, 0) scale(1);
        cursor: pointer;
        color:#4cbf9d;
    }

    .text-danger {
        color: #fc0c08 !important;
    }

    .loading-icon{
        display: none;
        width: 100%;
        height: 100%;
        z-index: 5;
        position: fixed;
    }

    .loading{
        margin-top: 15em;
    }

</style>
<script>

    $(document).ready(function(){
        var url = window.location.href;
        var id = url.split("=")[1];
        if(id != null)
            $('#resellerTab').click();
        else
            $('#defaultOpen').click();
    });

		function moExternalContactFormErrorMsg() {	
		$("#moExternalContactFormErrorMsg").show(),
			setTimeout(function () {
				$("#moExternalContactFormErrorMsg").hide();
			}, 5e3),
			$("#moExternalContactFormSuccessMsg").hide();
			resetValues();
	}

	 function resetValues() {

    document.getElementById('contact_email').value = '';
  }

    function opentab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    $('.contact-us-label').click(function(){
        $(this).siblings('input').focus();
    });


</script>
<?php include("footer.php");?>