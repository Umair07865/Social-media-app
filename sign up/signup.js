
document.querySelector(".password").style.color="white";
// variable declarations

var targetsignupbutton=document.querySelector("#signupbtn");


       

// validation functions

 



function validation(){
    //   event.preventDefault();
    var user=document.getElementById("username").value;
    var email=document.getElementById("inputemail").value;
    var password=document.getElementById("inputPassword").value;
    var confirmpass=document.getElementById("confirmpassword").value;
   

     if(user=="")
    {
        document.getElementById("username1").innerHTML="*please fill the field";
        return false;
       
      
    }
  
    if(user.length<3 || user.length>10)
    {
        document.getElementById("username1").innerHTML="*Characters must be 3-9";
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById("username1").innerHTML="*Numbers in user name is ristricted";
        return false;

    }
    else{
        localStorage.setItem("username",user);
    }
 
    if(email == "")
    {
        console.log(" this is email section");
        document.getElementById("useremail1").innerHTML="*please fill email field";
        return false;
       
      
    }
    else{
        localStorage.setItem("useremail1",email);
    }

  
    if(email.charAt(email.length-4)!="." && (email.charAt(email.length-3)!="."))
    {
        document.getElementById("useremail1").innerHTML="*** . sign is not in right position";
        return false;
        
    }
    //password validations

    if(password == "")
    {
        console.log(" password accesed opened");
        document.getElementById("userpass1").innerHTML="*please fill the password field";
        return false;
       
      
    }
   
   
    if(password.length<3 || password.length>20)
    {
        document.getElementById("username1").innerHTML="*Characters must be 5-19";
        return false;
    
    } 
 
 
    if(confirmpass=="")
    {
        document.getElementById("userCpass1").innerHTML="*please fill the confirm password field";
        return false;
       
      
    }
    if(password.length<3 || password.length>20)
    {
        document.getElementById("username1").innerHTML="*Characters must be 5-19";
        return false;
    }
 
//password compairison
if(confirmpass!=password)
{
    document.getElementById("userCpass1").innerHTML="*Confirm password must be same password! ";
    return false;
   

}
else{
    localStorage.setItem("userpassword",password);
}

 
}




