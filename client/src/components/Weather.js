import React, { useState } from 'react';
import '../Weather.css'
const api = {
    key: "bb0323b6b7acd1904ecb76c5afb3324f",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)

            .then(res => res.json())
            .then(result => {
                
                setWeather(result);
                setQuery('');
            });
        }

    }

    const dataBuilder = (d) => {
        let months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear()

        return `${day} ${date} ${month} ${year}`
    }
    return (
        <div className="app">
            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px", fontWeight: "bold"}}>Weather</h1>
            <main>
            
                <div className="search-box">
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search...."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    />
                </div>
                { weather ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.city.name}, {weather.city.country}</div>
                        <div className="date">{dataBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.list[0].main.temp)}°C - {Math.round(weather.list[0].main.temp * 9 / 5 + 32)}°F 
                        </div>
                        <div className="weather">{weather.list[0].weather[0].main}
                        <br/>
                        <img src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png`} alt="weather"></img> 
                        </div>
                    </div>
                    
                </div>
                ) : ('')}
            </main>
        </div>
    );
}
export default Weather;
