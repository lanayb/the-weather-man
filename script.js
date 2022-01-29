/*jshint esversion: 6 */

var ApiKey = '527023f2aa1729dedb0a2d1a35145d03';


var inputValue = document.querySelector('#inputValue');
var tempEl = document.querySelector('#temp');
var cityEl = document.querySelector('#city');
var humidityEl = document.querySelector('#humidity');
var windEl = document.querySelector('#wind');

var submitBtn = document.getElementById('submit');


// fetch('https://api.openweathermap.org/data/2.5/weather?q=oakland&appid=527023f2aa1729dedb0a2d1a35145d03')
// .then(function(res){
//     return res.json();
// }).then(function(data){
//     console.log(data);
// });


function getData (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=527023f2aa1729dedb0a2d1a35145d03&units=imperial')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                console.log(data);

                var temp = data.main.temp;
                console.log(temp);
                tempEl.innerHTML = temp;

                city = data.name;
                console.log(city);
                cityEl.innerHTML = city;

                humidity = data.main.humidity;
                console.log(humidity);
                humidityEl.innerHTML = humidity;

                wind = data.wind.speed;
                console.log(wind);
                windEl.innerHTML = wind;

            });
           
            submitBtn.addEventListener('click', getData);
            console.log('working');
    }
    getData();

    