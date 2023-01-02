

document.querySelector("#loginnow").addEventListener("click",()=>{

   

    var emailnew = document.querySelector("#inputemail").value;
    var enterpassword=document.querySelector("#inputPassword").value;

//local storage getting data
var getemail=localStorage.getItem('useremail1');

var getpwd=localStorage.getItem('userpassword');

console.log(` this is get email : ${getemail}`);

console.log(` this innput email vaalue : ${emailnew}`);
if(emailnew == getemail)
{
    console.log("email varified")
    if(enterpassword == getpwd)
    {
        alert(" Succesfully loged in");
        window.location="./front.html";
       
        
    }
    else{
        alert("Wrong password");
    }

}
else{
    alert("Invalid details")
}



});