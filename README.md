# hospitalAPI
# Notepad

It is an API for Hospital which helps to perform various functionality which are mentioned below.<br>

# Index
<ul>
<li><a href="#1">How to Setup the Code into your System</a>
<li><a href="#2">Cloning the repository using VS Code</a>
<li><a href="#3">Tech Used in it</a>
<li><a href="#4">Detailed API's Functionality</a>
<li><a href="#5">Support</a>
</ul>

# How to Setup the Code into your System
<p id="1">
<ul>
<li> Fork this repository into your github account (create one if you don't have it yet)
<li> Clone it to your system (<code>git clone</code>)
<li> In the terminal run git remote add upstream <code>https://github.com/pratik-dutta/hospitalAPI.git</code> (this is for taking a fresh update of the code anytime in the future)
</ul>

# Cloning the repository using VS Code
<p id="2">
<ul >
<li> Open VS Code.
<li> Go to <i>View > Terminal</i>.
<li> To clone the repo to your desktop, change the directory to desktop by running the command <code>cd desktop</code>.
<li> In the terminal, run <code>git clone https://github.com/pratik-dutta/hospitalAPI.git</code>.
<li> A folder/directory should be created on your desktop.
<li> Open that folder in VS Code, go to <i>File > Open</i>.
<li> Run <code>npm install</code> to download dependencies of the project or you can download it by seeing dependencies in <code>package.json</code>.
<li> Now you're good to go!
</ul>

# Tech Used in it
<p id="3">
<strong>Stack</strong>: NodeJs, ExpressJs, MongoDB
<br>
<strong>Authentication Packages</strong>: Passport, Passport JWT, jsonwebtoken
<br>

# API's Functionality
<p id="4">
<br>
This API helps to performs the following function
<ul>
<li><a href="#register">Register-Doctor</a>
<li><a href="#login">Login_Doctor</a>
 <li><a href="#p">Create Patient</a>
<li><a href="#q">Create Report</a>
<li><a href="#r">Fetch Report</a>
<li><a href="#s">Fetch Report by Status</a>
</ul>
<br>
Following is the description of all the function mentioned above.<br>
<ul>
<li>
 <p id="register">
Register - Doctor
<br>
This API helps to register the doctor in the app.
<li>
 <p id="login">
Login - Doctor
<br>
This function helps to login the Doctor in the app.
If the user successfull login it generates a token and it'll be valid for almost 3 minutes and it gets expired after that.
<li>
 <p  id="p">
Create Patient
<br>
This function helps to create a patient in database.<br>
This function is allowed only  if the token is not expired.
<li>
 <p  id="q">
Create Report
<br>
This function helps to create report of a patient in database.<br>
This function is allowed only  if the token is not expired.
<li>
<p id="r">Fetch Report
<br>
This function helps to fetch all reports of patient whose id is mentioned in params from the database.<br>
<li>
<p id="s"> Fetch Report By Status
<br>
This function helps to fetch all reports of all patients as per the status mentioned in the params from the database.<br>
</ul>

# Support
<p id="5">
Feel free to contact at <i>pratikdutta.786(at)gmail(dot)com</i> for any query.

 



