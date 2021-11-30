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
    if(k==3)   
    k=0;
    hienThiSlide(k)
}
function hienThiSlideTruocDo(){
    anSlide(k);
    k--;
    if(k<0)
        k=2;  
    hienThiSlide(k)
}