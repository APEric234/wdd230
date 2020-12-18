function temp(car) {
  let card=document.createElement('tr');
  let name=document.createElement('td');
  name.textContent=car.name
  let reserv_h = document.createElement('td');
  let resererv_f = document.createElement('td');
  let walk_h = document.createElement('td');
  let walk_f = document.createElement('td');
  reserv_h = car.half_r;
  resererv_f = car.full_r;
  walk_f = car.full;
  walk_h = car.half;
  let image_td=document.createElement("td");
  let image = document.createElement('img');
  image.setAttribute('src', "/images/"+car.img);
  image.setAttribute('alt', car.name);
  image_td.appendChild(image);
  card.insertCell(0)=reserv_h;
  card.insertCell(1)=resererv_f;
  card.insertCell(2)=walk_h;
  card.insertCell(3)=walk_f;
  card.insertCell(4)=image_td;

  
  card.appendChild(image_td);

  document.querySelector('table#rentals').appendChild(card);
}

const requestURL = 'json/stuff.json';
fetch(requestURL).then(function (response){
  return response.json();
})
.then(
  function ( jsonObject){
    console.table(jsonObject);
    const vehicles = jsonObject['vehicles'];
    console.table(vehicles);
    for (let vehic in vehicles){
      console.table(vehic);
      temp(vehicles[vehic]);
    }
  }
)