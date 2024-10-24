const apiKey ='2796931ccb966630a90f79f23aba2edb';
const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weathericon")

async function checkWeather(city){
    const response=await fetch(apiURL+city+`&appid=${apiKey}`);
   
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °c";
document.querySelector(".humidty").innerHTML=data.main.humidity+" %";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";


if(data.weather[0].main=="Clouds"){
    WeatherIcon.src="images/clouds.jpeg"
}else if(data.weather[0].main=="Clear"){
    WeatherIcon.src="images/clear.png"
}else if(data.weather[0].main=="Rain"){
    WeatherIcon.src="images/rain.png"
}else if(data.weather[0].main=="Drizzle"){
    WeatherIcon.src="images/drizle.jpeg"
}else if(data.weather[0].main=="Mist"){
    WeatherIcon.src="images/must.png"
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}


}

searchBtn.addEventListener("click",()=>{
   checkWeather( searchBox.value);
});
checkWeather();