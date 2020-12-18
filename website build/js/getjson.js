function temp(car) {
  let card=document.createElement('tr');
  let name=document.createElement('td');
  name.textContent=car.name
  let reserv_h = document.createElement('td');
  let resererv_f = document.createElement('td');
  let walk_h = document.createElement('td');
  let walk_f = document.createElement('td');
  reserv_h.textContent = car.half_r;
  resererv_f.textContent = car.full_r;
  walk_f.textContent = car.full;
  walk_h.textContent = car.half;
  let image_td=document.createElement("td");
  let image = document.createElement('img');
  image.setAttribute('src', "images/"+car.img);
  image.setAttribute('alt', car.name);
  card.appendChild(reserv_h);
  card.appendChild(resererv_f);
  card.appendChild(walk_h);
  card.appendChild(walk_f);
  image_td.appendChild(image);
  card.appendChild(image_td);
  card.appendChild(name);

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
    for (let vehic in vehicles){
      console.table(vehic);
      temp(vehicles[vehic]);
    }
  }
)