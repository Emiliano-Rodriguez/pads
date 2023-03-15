const apiKey = "b535be27f238aae71c23d703361bd682";
const inputVal = "Austin";

const weather = async()=>{

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*PUT YOUR OWN KEY HERE - THIS MIGHT NOT WORK
SUBSCRIBE HERE: https://home.openweathermap.org/users/sign_up*/
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

const listItems = list.querySelectorAll(".ajax-section .city");
const inputVal = "Austin";

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather, wind, rain } = data;
      console.log(data)
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
	<h2 class="city-name" data-name="${name},${sys.country}">
	  <span>${name}</span>
	  <sup>${sys.country}</sup>
	</h2>
	<div class="city-temp">${Math.round(main.temp)}<sup>°F</sup></div> </br><p font size="3">windspeed:${wind.speed}</br>wind dir:${wind.deg}</p>

	<figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
}
weather();
