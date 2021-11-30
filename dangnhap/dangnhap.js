function kiemTraemail(s) {
    let flag = true;
    let a=s.split("");
    for(let i=0;i<a.length;i++){
        if(a[i]==" "){ 
            flag=false;
            return flag;
        }
    }
    a=s.split("@");
    if(a.length!=2){
        flag=false;
        return flag;
    }
    else{
        a=a.join("@");
    }//kiem tra @
    let b=s.split(".")
    for(let j=0 ;j < b.length; j++){
        if (b[j]=="") {
            flag = false
            return flag;
        }
    }
    if(b.length<2){
        flag = false
        return flag;   
    }else{
        c=b.join(".")
    }
    return flag;
}
function KTPass(pass) {
    if (pass.length<6) 
    return 0;
else{
    let flag = false;
    for (let i = 0; i < pass.length; i++) {
        if(pass.charCodeAt(i)>=65&&pass.charCodeAt(i)<=90){
            flag = true;
            break;
        }
    }
    if (flag)
        return 1;
    else 
        return 0;
}
}
function kiemTraPhone(call){
    if(call.length<=9 || call.length>11){
        return false;
    }else{
        for(let i =0;i<call.length;i++)
        if (call[i]!=1&&call[i]!=2&&call[i]!=3&&call[i]!=4&&call[i]!=5&&call[i]!=6&&call[i]!=7&&call[i]!=8&&call[i]!=9&&call[i]!=0) {
            return false;
        }
    }
    return true;
}
function CreateAccount() {
    let email = document.getElementById("signup-email").value;
    let pass =document.getElementById("signup-password").value;
    if(kiemTraemail(email)){
        if(KTPass(pass)){
        }else
            alert("password sai");
    }else
    alert("email sai");
}
function CreateAccountDK() {
    let Phone = document.getElementById("phone").value;
    let email = document.getElementById("signup-email").value;
    let pass =document.getElementById("signup-password").value;
    if(kiemTraPhone(Phone)){
        alert("Số điện thoại hợp lệ");
        if(kiemTraemail(email)){
            alert("Email hợp lệ");
            if(KTPass(pass))
            alert("Pass hợp lệ");
            else
            alert("Pass không hợp lệ");
        }else
            alert("Email không hợp lệ");
    }else
        alert("Số điện thoại không hợp lệ.")
}