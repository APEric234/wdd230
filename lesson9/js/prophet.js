function temp(proph) {
  let card=document.createElement('section');
  let title=document.createElement('h2');
  title.textContent=proph.name + ' ' + proph.lastname;

  let subtitle1 = document.createElement('h3');
  subtitle1.textContent='Date of Birth:' +proph.birthdate;
  let subtitle2 = document.createElement('h3');
  subtitle2.textContent='Place of Birth:' +proph.birthplace;

  let image = document.createElement('img');
  image.setAttribute('src', proph.imageurl);
  image.setAttribute('alt', proph.name + ' ' + proph.lastname + ' - '+proph.order);
  card.appendChild(title);
  card.appendChild(subtitle1);
  card.appendChild(subtitle2);
  card.appendChild(image);

  document.querySelector('div.cards').appendChild(card);
}

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL).then(function (response){
  return response.json();
})
.then(
  function ( jsonObject){
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let prophet in prophets){
      console.table(prophet);
      temp(prophets[prophet]);
    }
  }
)