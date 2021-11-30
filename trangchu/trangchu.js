 var k =0;
 hienThiSlide(0);
 setInterval(hienThiSlideKeTiep,2000);
 function hienThiSlide(k) {
     let e = document.getElementsByClassName("imgSlider")
     e[k].style.display = "block";
 }
 function anSlide(k) {
     let e = document.getElementsByClassName("imgSlider")
     e[k].style.display = "none";
 }
 function hienThiSlideKeTiep(){
     anSlide(k);
     k++;
     if(k==5)   
     k=0;
     hienThiSlide(k)
 }
 function hienThiSlideTruocDo(){
     anSlide(k);
     k--;
     if(k<0)
         k=4;  
     hienThiSlide(k)
 }
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
    let Phone = document.getElementById("phone").value;
    let email = document.getElementById("signup-email").value;
    if(kiemTraPhone(Phone)){
        alert("Số điện thoại hợp lệ");
        if(kiemTraemail(email)){
            alert("Email hợp lệ");
        }else
            alert("Email không hợp lệ");
    }else
        alert("Số điện thoại không hợp lệ.")
}
function share(){
    let share = document.getElementById("gopy").value;
    if (share.length>0){
        alert("Cảm ơn vì đã góp ý");
    }else
        alert("Vui lòng nhập nội dung")
}
//48