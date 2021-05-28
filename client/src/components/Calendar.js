import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

const TheCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    
    return (
        
        <div className="container">

            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px", fontWeight: "bold"}}>Calendar</h1> 
            <div className="m-5">
            <Calendar onChange={onChange} value={date}/>
            </div>
        </div>
    );
};


export default TheCalendar;