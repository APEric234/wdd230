let app2 = document.querySelector('#forecast');
let kelvinconvert= function(param1){
  let temp=(param1*9/5)-459.67;
  return temp;
}
const apiURLForecasts = 'https://api.openweathermap.org/data/2.5/forecast?q=Preston,US&appid=b29ef4934f838648bd16e4f3c5bd7dfc';
fetch(apiURLForecasts)
  .then((response) => response.json())
  .then((json) => {
    json["list"].forEach(element => {
      console.log(element);
      var time=element["dt_txt"];
      console.log(time);
      if(time.includes("18:00")){
        var temp=element["main"]["temp"];
        temp= kelvinconvert(temp).toFixed(2);
        var div = document.createElement("div");
        div.id = "temps";
        div.innerHTML =temp +" F";
        if (temp > 80) {
            div.style.backgroundImage = "url('images/sun.png')";
            div.style.color = "red"
        } else {
            div.style.backgroundImage = "url('images/rain.png')";
            div.style.color = "green";
        }
        app2.append(div);
      }
    });
    
  });



