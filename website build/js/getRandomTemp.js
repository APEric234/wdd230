let app2 = document.querySelector('#forecast');
let kelvinconvert= function(param1){
  let temp=(param1*9/5)-459.67;
  return Math.round(temp);
}
var place= document.getElementById('location');
var image="url(http://openweathermap.org/img/wn/"
var image_end="@2x.png)"
const apiURLForecasts = 'https://api.openweathermap.org/data/2.5/forecast?q='+place.textContent+',MX&appid=b29ef4934f838648bd16e4f3c5bd7dfc';
fetch(apiURLForecasts)
  .then((response) => response.json())
  .then((json) => {
    var element="";
    for(var i=0;i<24;i++){
      element=json["list"][i];
    console.log(element);
    var time=element["dt_txt"];
    console.log(time);
    if(time.includes("18:00")){
      var temp=element["main"]["temp"];
      var hum=element["main"]["humidity"];
      temp= kelvinconvert(temp);
      var div = document.createElement("div");
      div.id = "temps";
      div.innerHTML =temp +" F , with " +hum+"% humidity";
      var icon=element["weather"][0]["icon"];
      var icon_url=image+icon+image_end;
      div.style.backgroundImage = icon_url;
      div.style.backgroundRepeat =" no-repeat";
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition= "center";

      
      app2.append(div);
      }

  }
    
  });



