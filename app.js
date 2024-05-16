const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const cityRef = document.getElementById("city");

let getWhether = () =>{
    let cityValue = cityRef.value;
    if(cityValue.lenght == 0){
        result.innerHTML `<h3 class"msg">Enter a city name</h3>`
    }else{
       let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
       cityRef.value = "";

       fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                result.innerHTML = `
                <h2>${data.name}</h2>
                <h4 class"weather">${data.weather[0].main}</h4>
                <h4 class"desc">${data.weather[0].description}</h4>
                
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                <h1>${data.main.temp} &#176;</h1>
                <div class"temp-container">
                    <div>
                    <h4 class"title">min</h4>
                    <h4 class"ten">${data.main.temp_min}</h4>
                    </div>
                    <div>
                        <h4 class"title">max</h4>
                        <h4 class"temp">${data.main.temp_max}</h4>
                    </div>
                </div>`;
            })
            .catch(() => {
                result.innerHTML = `<h3 class"msg">city not found</h3>`;
            });
    }
    
};
searchBtn.addEventListener('click',getWhether);
window.addEventListener('load',getWhether);