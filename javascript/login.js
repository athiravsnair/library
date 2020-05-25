function login()
	{
		var email= document.getElementById("lg_username").value;
		var pwd= document.getElementById("lg_password").value;			
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		// var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(email=='')
		{
            alert('Please enter your user email id');
            return false;
		}
		else if (!filter.test(email))
		{
            alert('Invalid email');
            return false;
		}
		else if(pwd=='')
		{
            alert('Please enter Password');
            return false;
		}
		else if(!pwd_expression.test(pwd))
		{
            alert ('Invalid Password');
            return false;
		}
		else if(document.getElementById("lg_password").value.length < 8)
		{
            alert ('Password minimum length is 8');
            return false;
		}
		else if(document.getElementById("lg_password").value.length > 12)
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