// const url = 'https://open-weather13.p.rapidapi.com/city/landon';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cf50b81464msh46260d60e251d0ap1574abjsn73d32365596d',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
let srch=document.querySelector(".inp");
        let srchbutton=document.querySelector(".search button");
        let weathericon=document.querySelector(".weathericon");

        const apikey="636e4a59890a2efd9de0209a6b6b274c";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        async function checkweather(city){
            
            const response =await fetch(apiurl + city + `&appid=${apikey}`);
            var data = await response.json();
            if(response.status=="404"){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                document.querySelector(".error").style.display="none";
            
            document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"M/sec";
        if(data.weather[0].main=="Haze"){
            weathericon.src="mist.png";
        }
        else if(data.weather[0].main=="Clouds"){
            weathericon.src="clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.png";
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="snow.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.png";
        }
        document.querySelector(".weather").style.display="block";
        }
    }
        srchbutton=document.addEventListener("click",(e)=>{
            e.preventDefault();
            checkweather(srch.value);
            
        });
        