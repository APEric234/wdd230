let eve = document.getElementById('events');
var place= document.getElementById('location');
var div = document.createElement("div");  
div.innerHTML="Events: \n"
eve.appendChild(div);
const story = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(story)
  .then((response) => response.json())
  .then((json) => {
    json["towns"].forEach(element => {
      console.log(element);
      
      if(element["name"].normalize() 
      == place.textContent.normalize()){
        
        element["events"].forEach(event => {
          
          var title = document.createElement("h2");
        title.innerHTML=event.split(":")[0];
        var text = document.createElement("p");
        text.innerHTML=event.split(":")[1];
        eve.appendChild(title);
        eve.appendChild(text);
        
      
    });
    
   }
   } )
  });




