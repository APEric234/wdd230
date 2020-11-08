let app2 = document.querySelector('#forecast');
var i;
var text;
for (i = 0; i < 5; i++) {
    var base = Math.floor(Math.random() * 120);
    var sign = Math.floor(Math.random() * 1);
    var high = base;
    if (sign > 0) {
        high = base / 3 * -1;

    }
    var base = Math.floor(Math.random() * 120);
    var low = base / 1 * -1;
    var div = document.createElement("div");
    div.id = "temps";
    div.innerHTML = "high of " + high + " \n low of " + low;
    if (high > 80) {
        div.style.backgroundImage = "url('images/sun.png')";
        div.style.color = "red"
    } else {
        div.style.backgroundImage = "url('images/rain.png')";
        div.style.color = "green";
    }
    app2.append(div);
  }

    
