const weather = {
    apiKey: "308fecec26f39a31de44bdf9f1d6d99d",
    getWeather:function(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
            .then(res => res.json())
            .then(data => weather.displayWeather(data) )
        },
    displayWeather: function(data){
        const cityName= data.name;
        const temp= Math.floor(data.main.temp);
        const {icon, description}= data.weather[0];
        const humidity= data.main.humidity;
        const windSpeed= data.wind.speed;

        document.querySelector(".heading").innerText = `Weather in ${cityName}`;
        document.querySelector(".weather-app").style.backgroundImage =` url("https://source.unsplash.com/1600x1000/?${cityName}"`;
        document.querySelector(".temperature").innerText=`${temp}°C`;
        document.querySelector(".weather-icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerText= description;
        document.querySelector(".humidity").innerText=`Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText=`Wind Speed: ${windSpeed}km/h`;
        document.querySelector(".weather-details").classList.remove("loading");
    },
    search:function(){
        weather.getWeather(document.querySelector(".search-input").value);
    }
 }  
    document.querySelector(".search-icon").addEventListener("click",()=>{
        weather.search()
    });
    document.querySelector(".search-input").addEventListener("keypress",(event)=>{
        if (event.key === "Enter"){
            weather.search()
        } 
    });

    weather.getWeather("Cork");

