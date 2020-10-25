function temp() {
  var base = Math.floor(Math.random() * 120);
  var high = base / 3;

  return high;   // The function returns the product of p1 and p2
}

var x=temp();

var windspeed=x/2;
var windchill=35.74+0.6215*x-(35.75*Math.pow(windspeed,0.16))+(0.4275*x*Math.pow(windspeed,0.16));
var temper =document.getElementById("temp");
temper.innerHTML="Temperature: " +x.toFixed(2) + "%F";
temper=document.getElementById("windchill");
if (x<=50 && windspeed>3){ 
  temper.innerHTML="Wind chill: " + windchill.toFixed(2) + ' %F';
}else{
  temper.innerHTML ="Wind chill: NA";
}
temper=document.getElementById("windspeed");
temper.innerHTML="Wind speed: " + windspeed.toFixed(2) + " mph";

