import React from 'react';
import {navigate} from '@reach/router';

const onClickCalc = () => {
    navigate("/calculator")
}

const onClickCurrency = () => {
    navigate("/currency")
}

const onClickMap = () => {
    navigate("/map")
}

const onClickCalendar = () => {
    navigate("/calendar")
}

const onClickWeather = () => {
    navigate("/weather")
}

const onClickTimer = () => {
    navigate("/stopwatch")
}

const onClickClock = () => {
    navigate("/clock")
}

const onClickNews = () => {
    navigate("/news")
}

const Main = props => {

    return (
        <div className="tools container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <div className="carousel-inner">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                        <li data-target="#myCarousel" data-slide-to="6"></li>
                        <li data-target="#myCarousel" data-slide-to="7"></li>
                    </ol>

                    <div className="item active">
                            <div onClick={onClickCurrency} className="currency overlay"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Currency Converter</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickCalc} className="calc"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Calculator</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickWeather} className="weather2"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Weather</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickNews} className="news"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">News</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickCalendar} className="calendar"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Calendar</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickClock} className="timezone"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Time Zone</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickTimer} className="timer"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Timer</h3>
                    </div>

                    <div className="item">
                            <div onClick={onClickMap} className="map overlay"></div>
                            <h3 style={{color: "white", marginBottom: "431px"}} className="carousel-caption">Google Maps</h3>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span style={{color: "white", marginBottom: "431px"}} className="sr-only">Previous</span>
                    </a>

                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span style={{color: "white", marginBottom: "431px"}} className="sr-only">Next</span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Main