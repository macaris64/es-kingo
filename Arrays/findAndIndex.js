const cityWeatherData = require('./weatherData');

const cityNames = cityWeatherData.list.map((city) => {
    return city.name;
});
console.log(cityNames);

//Array.prototype.find()
const firstFoundCity = cityWeatherData.list.find((city)=>{
	if(city.main.temp > 80){
		return true;
	}else{
		return false;
	}
})
//console.log(firstFoundCity);

//Array.prototype.findIndex()
const firstFoundCityIndex = cityWeatherData.list.findIndex((city)=>{
	if(city.main.temp > 80){
		return true;
	}else{
		return false;
	}
})

//console.log(firstFoundCityIndex)