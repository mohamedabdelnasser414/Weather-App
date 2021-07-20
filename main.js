// const weather = {
//     apiKey: "308fecec26f39a31de44bdf9f1d6d99d",
//     getWeather:()=> {fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.apiKey}`)
//     .then(res =>{res.json()})
//     .then(data => {console.log(data) })}
// }
// weather.getWeather();

const apiKey= "308fecec26f39a31de44bdf9f1d6d99d";
document.querySelector(".search-icon").addEventListener("click",() =>{ 
    const city = document.querySelector(".search-input").value ;
    const api= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(api)
            .then(res => res.json())
            .then(data => {
                const temp = Math.floor(data.main.temp) ;
                const cityName = data.name;
                document.querySelector(".heading").innerText= `Weather in ${cityName}`;
                document.querySelector(".temperature").innerText = temp;
            })
})

