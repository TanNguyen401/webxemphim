
function demo() {
    let buttons = document.getElementsByClassName("accordion");
    let button = buttons[0];
    button.addEventListener("click", show);
    console.log("a");
    console.log(buttons);
}
function show() {
   let panel = document.getElementsByClassName("panel")[0];
   if(panel.style.display === "none")
   {
    panel.style.display = "block" ;
   }
   else{
    panel.style.display = "none";
   }
  
}
demo();
//--------------

function demo1() {
    let buttons = document.getElementsByClassName("accordion");
    let button = buttons[1];
    button.addEventListener("click", show1);
    console.log("a");
}
function show1() {
   let panel = document.getElementsByClassName("panel")[1];
   if(panel.style.display === "none")
   {
    panel.style.display = "block" ;
   }
   else{
    panel.style.display = "none";
   }
}
demo1();
//------------------------------------
function demo2() {
    let buttons = document.getElementsByClassName("accordion");
    let button = buttons[2];
    button.addEventListener("click", show2);
    console.log("a");
}
function show2() {
   let panel = document.getElementsByClassName("panel")[2];
   if(panel.style.display === "none")
   {
    panel.style.display = "block" ;
   }
   else{
    panel.style.display = "none";
   }
}
demo2();