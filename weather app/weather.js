const apiKey="f7a7c763032d61e589dd834eae86febf";
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchbox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weathericon=document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
        
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data= await response.json();

console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

if(data.weather[0].main=="Clouds"){
   weathericon.src="/images/foggy-day.png";
}
else if(data.weather[0].main=="Clear"){
   weathericon.src="/images/sun.png";
}
else if(data.weather[0].main=="Drizzle"){
   weathericon.src="/images/rainy.png";
}
else if(data.weather[0].main=="Mist"){
   weathericon.src="/images/cloudy.png";
}
else if(data.weather[0].main=="Snow"){
   weathericon.src="/images/snow.png";
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
        }
        
       
        }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchbox.value) ;
    })