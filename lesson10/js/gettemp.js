var json;
let method= function(param1){
  let temp=(param1*9/5)-459.67;
  return temp;
}
let chill= function(temp,wind){
  let temp2=temp-wind*.7
  return temp2;
}
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,US&appid=b29ef4934f838648bd16e4f3c5bd7dfc';
fetch(apiURL)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    var description=json["weather"]["description"];
    
    var temp=json["main"]["temp"];
    var windspeed=json["wind"]["speed"];
    var afterWindCHill=method(chill(temp,windspeed)).toFixed(2);
    temp=method(temp).toFixed(2);
    var high=json["main"]["temp_max"];
    high=method(high).toFixed(2);
    var low=json["main"]["temp_min"];
    low=method(low).toFixed(2);
    let app2 = document.querySelector('#temp');
    app2.innerHTML = "Temperatre of "+ temp+" %F"
    app2 = document.querySelector('#minmax');
    app2.innerHTML ="High of " + high + "%F \nLow of " + low + " %F"; 
    
    app2 = document.querySelector('#speed');
    app2.innerHTML =windspeed +" mph"; 
    app2 = document.querySelector('#windchill');

    if (afterWindCHill>0){
        app2.innerHTML = "Wind chill: " + afterWindCHill+ " %F";
    }else{
      app2.style.display="none";
    }    
  });

