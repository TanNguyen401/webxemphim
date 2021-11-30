function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("nd");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";
}
function openCityQC(cityName) {
  var i;
  var x = document.getElementsByClassName("phim");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";
}