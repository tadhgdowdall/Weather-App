const apiKey = "ae90b7d0651acc02bdb98e4c0a9afe67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=galway";

async function checkWeather(){
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



    
}

checkWeather();


