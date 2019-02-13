//Our Code Here:
function loadSpecies() {
	const url =  "https://swapi.co/api/species/";
	const url2 = "https://swapi.co/api/species/?page=2";
	const url3 = "https://swapi.co/api/species/?page=3";
	const url4 = "https://swapi.co/api/species/?page=4";

	//
	fetch(url)
		.then(function(response){
			return response.json();
		}).then(loadArray);

	fetch(url2)
	.then(function(response){
		return response.json();
	}).then(loadArray);

	fetch(url3)
	.then(function(response){
		return response.json();
	}).then(loadArray);

	fetch(url4)
	.then(function(response){
		return response.json();
	}).then(loadArray);
}



function loadArray(json){
	let resultsArray = json.results;
	for(let i = 0; i<resultsArray.length; i++){
		let curSpeciesName = resultsArray[i].name;

		//Pushing Current Species name onto the nameList array
		nameList.push(curSpeciesName);

		//stores individual species as properties of an object
		species[curSpeciesName] = resultsArray[i];
	}
	createList();
}

function createList(){
	if(++numReturnedFetches < 4){
		return;
	}
	//Alphabetize nameList
	nameList.sort();

	let resultsHTML = "";
	for(let i = 0; i<nameList.length; i++){
		resultsHTML += "<option>" + nameList[i] + "</option>\n";
	}

	let mySelector = document.getElementById("selector");
	mySelector.innerHTML = resultsHTML;
}

let numReturnedFetches = 0;
let nameList = [];
let species = {};
loadSpecies();

//Dummy Code Here:
/*
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById("weatherInput").value;
	if (value === "")
		return;
	console.log(value);
	const url = "https://api.co/api/species/" + ;
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			console.log(json);
			let results = "";
			results += '<h2 class=\"centered\">Weather in ' + json.name + "</h2>";
			results += "<div class=\"weather-display\">";

			results += "<div class=\"single-description\">";
			results += "<h2>Now</h2>";
			results += '<h2>' + json.main.temp + " &deg;F</h2>";
			results += '<h3>' + json.main.humidity + "% Humidity</h3>";
			results += "<h3>Wind: " + cardinalDirectionFinder(json.wind.deg) + " " + json.wind.speed + " mph</h3>";
			//close div for current numbers
			results += "</div>";

			for (let i=0; i < json.weather.length; i++) {
				results += "<div class=\"single-description\">";
				results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';

				results += "<p class=\"centered\">" + json.weather[i].description + "</p>";
				results += "</div>";
			}
			//close div for current weather
			results += "</div>";
			document.getElementById("weatherResults").innerHTML = results;
		});
	const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=8e90dfab60fda96756bb3f9fe9da337c";
	  fetch(url2)
	    .then(function(response) {
		          return response.json();
		        }).then(function(json) {
				      let forecast = "<div class=\"weather-display\">";
					forecast += "<table class=\"weather-chart\">";
					forecast += "<th>Time</th>" + "<th></th>" + "<th>Description</th>" + "<th>Temp</th>" + "<th>Humidity</th>" + "<th>Wind</th>";
				      for (let i=0; i < json.list.length; i++) {
					      forecast += "<tr>";
					      forecast += "<td><p>" + moment(json.list[i].dt_txt).format("h:mm a") + "</p>";
					      forecast += "<p class=\"grayed\">" + moment(json.list[i].dt_txt).format("dddd") + "</p></td>";
					      	//forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
					      forecast += '<td><img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></td>'
					      forecast += "<td>" + json.list[i].weather[0].description + "</td>";
					      	forecast += "<td>" + json.list[i].main.temp + "&deg</td>";
					      forecast += "<td>" + json.list[i].main.humidity + "%</td>";
					      forecast += "<td>" + cardinalDirectionFinder(json.list[i].wind.deg) + " " + json.list[i].wind.speed + " mph</td>";

					      forecast += "</tr>";
					            }
					forecast += "</table>";
					forecast += "</div>";
				      document.getElementById("forecastResults").innerHTML = forecast;
				    });
});

function cardinalDirectionFinder(degrees){
	let newDegrees = Math.floor((degrees + 11.25)/22.5);
	let directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
	if(newDegrees > 15){
		newDegrees = 0;
	}
	return directions[newDegrees];
}
*/
