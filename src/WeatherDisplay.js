import React, { Component } from 'react';

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
        }
    }

    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p>Поточна температура: {Math.round((weatherData.main.temp - 32) * (5/9))}°</p>
                {/*<p>High: {Math.round((weatherData.main.temp_max - 32) * (5/9))}°</p>*/}
                {/*<p>Low: {Math.round((weatherData.main.temp_min - 32) * (5/9))}°</p>*/}
                <p>Швидкість вітру: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
}

export default WeatherDisplay;