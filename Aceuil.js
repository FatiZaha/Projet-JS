var user=document.getElementById("username")
var email=document.getElementById("email")
var pswd=document.getElementById("password")
var cfPswd=document.getElementById("Cpasswd")


function UserName(){
    var userformat = /^[A-Za-z]+$/
    var usermatch = userformat.test(user.value)

    if(user.value=="") {return -1}
    else if(!usermatch) {return 0}
    else{document.getElementById("usr").innerHTML=("");return 1}

}

function Email(){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mailmatch = mailformat.test(email.value)

 if(email.value=="") {return -1}
    else if(!mailmatch) {return 0}
    else{document.getElementById("eml").innerHTML=("");return 1}


}

function Passwd(){
    var pswdformat= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var pswdmatch = pswdformat.test(pswd.value)

    if(pswd.value=="") {return -1}
    else if(!pswdmatch) {return 0}
    else{document.getElementById("code").innerHTML=("");return 1}
}

function ConfirmPasswd(){
    if(cfPswd.value=="") {return -1}
    else if(pswd.value!=cfPswd.value) {return 0}
    else{document.getElementById("confirm").innerHTML=("");return 1}
}


 //document.getElementById("log").location.href="home.html"
    
//href = "www.yoursite.com";





document.getElementById("link").addEventListener("click",function(){
   
    if(UserName()==-1) document.getElementById("usr").innerHTML=("enter your username!!!");
    else if(UserName()==0) document.getElementById("usr").innerHTML=("username must contain only alphabet!!");
    
    if(Email()==-1) document.getElementById("eml").innerHTML=("enter your email!!!!");
    else if(Email()==0) document.getElementById("eml").innerHTML=("email invalide!! (####@##.##)");

    if(Passwd()==-1) document.getElementById("code").innerHTML=("enter your password!!!!");
    else if(Passwd()==0) document.getElementById("code").innerHTML=("password invalide!!<br>[A-Z, a-z, 0-9,(@:;/#?=+&)]<br>taille{8,}");

    if(ConfirmPasswd()==-1) document.getElementById("confirm").innerHTML=("confirm your password!!!!");
    else if(ConfirmPasswd()==0) document.getElementById("confirm").innerHTML=("enter the same password!!!!");

    if(UserName()==1 && Email()==1 && Passwd()==1 && ConfirmPasswd()==1) document.getElementById("log").style.visibility = "visible" ;
})

