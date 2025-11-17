const apiKey = "384eb7312e277e30fdc1288cb8427c3d";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Świętochłowice&units=metric";


async function checkWeather(){
    const response = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "*C";
    document.querySelector("#feels_like").innerHTML = Math.round(data.main.feels_like) + "*C";
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#pressure").innerHTML = data.main.pressure + "hPa";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
}



checkWeather();
