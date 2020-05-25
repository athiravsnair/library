function registration()
	{

		var name= document.getElementById("name").value;
		var email= document.getElementById("email").value;
		var phone= Number(document.getElementById("phone-no").value);
		var pwd= document.getElementById("password").value;			
		var cpwd= document.getElementById("password_confirmation").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		if(name=='')
		{
            alert('Please enter your name');
            return false;
		}
		else if(!letters.test(name))
		{
            alert('Name field required only alphabet characters');
            return false;
		}
		else if(email=='')
		{
            alert('Please enter your user email id');
            return false;
		}
		else if (!filter.test(email))
		{
            alert('Invalid email');
            return false;
		}
		else if(phone=='')
		{
            alert('Please enter Phone Number.');
            return false;
		}
		else if(!phoneno.test(phone))
		{
            alert('Please Enter 10 digits in Phone Number');
            return false;
		}
		else if(pwd=='')
		{
            alert('Please enter Password');
            return false;
		}
		else if(cpwd=='')
		{
            alert('Please Confirm Password');
            return false;
		}
		else if(!pwd_expression.test(pwd))
		{
            alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
            return false;
		}
		else if(pwd != cpwd)
		{
            alert ('Password not Matched');
            return false;
		}
		else if(document.getElementById("password_confirmation").value.length < 8)
		{
            alert ('Password minimum length is 8');
            return false;
		}
		else if(document.getElementById("password_confirmation").value.length > 12)
		{
            alert ('Password max length is 12');
            return false;
		}
		else
		{				                            
               alert('Welcome to Your Acount');
               window.location = "profile.html"; 
               return true;
		}
    }

    var strength = {
        0: "Poor",
        1: "Weak",
        2: "Medium",
        3: "Good",
        4: "Strong"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);
    
    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>"; 
    }
    else {
        text.innerHTML = "";
    }
});