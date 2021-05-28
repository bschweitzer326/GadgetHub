import React,{useEffect, useState} from "react";
import axios from 'axios';

const Clock = props => {
    const[cetTime, setCetTime] = useState([]);
    const[result, setResult] = useState([]);
    const [location, setLocation] = useState("");
    const[searchResult, setSearchResult] = useState("");
    const[searchResult2, setSearchResult2] = useState("");
    const[result2, setResult2] = useState("");
    const zones = ["Select a Different TimeZone", "Asia/Tokyo", "America/Puerto_Rico", "Europe/Paris", "Europe/Moscow", "Pacific/Honolulu", "Europe/Istanbul", "Europe/London", "Europe/Athens", "Australia/Sydney", "America/Santiago", "America/Caracas", "Europe/Amsterdam" ]

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.get(`https://timezoneapi.io/api/timezone/?${searchResult}&token=atqaVZnIEzOPYhaJymdb`)
            .then(response=>  setSearchResult2(response.data.data.datetime))
            .catch(err=>console.log(err))
        axios.get(`https://timezoneapi.io/api/timezone/?${searchResult}&token=atqaVZnIEzOPYhaJymdb`)
            .then(response => setResult2(response.data.data.timezone))
            .catch(err=>console.log("error: ",err))
        
    }
    
    useEffect(() => {
        axios.get("https://timezoneapi.io/api/ip/?token=atqaVZnIEzOPYhaJymdb")
            .then(response =>setCetTime(response.data.data.datetime))
            .catch(err=>console.log("error: ",err))
    },[])

    useEffect(() => {
        axios.get("https://timezoneapi.io/api/ip/?token=atqaVZnIEzOPYhaJymdb")
            .then(response =>setResult(response.data.data.timezone))
            .catch(err=>console.log("error: ",err))
    },[])
    useEffect(() => {
        axios.get("https://timezoneapi.io/api/ip/?token=atqaVZnIEzOPYhaJymdb")
            .then(response =>setLocation(response.data.data.ip))
            .catch(err=>console.log("error: ",err))
    },[])

    return (
        <div>
            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px", fontWeight: "bold"}}>Time Zone</h1>

            <div className="container" style={{background: "rgba(255,255,255,.5)", padding: "20px 0px"}}>
                <h1 style={{textAlign:"center", fontWeight: "bold"}}  className="text-primary">{cetTime.date_time_txt}</h1>
                <div className="row">
                    <div className="col">
                    <details className="collapse-panel w-400 mw-full" open> 
                        <summary style={{fontSize: "20px", fontWeight: "bold"}}  className="collapse-header">Location</summary>
                        <div className="collapse-content">
                        <h3 style={{fontWeight: "bold"}}>Country : <span className="text-primary">{result.country_name}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>IP Address : <span className="text-primary">{location}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Capital : <span className="text-primary">{result.capital}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Continent : <span className="text-primary">{result.continent}</span></h3>
                        </div>
                    </details>
                    </div>
                    <div className="col">
                    <details className="collapse-panel w-400 mw-full mt-20" open>
                        <summary style={{fontSize: "20px", fontWeight: "bold"}} className="collapse-header">
                            Currency
                        </summary>
                        <div className="collapse-content">
                        <h3 style={{fontWeight: "bold"}}>Name :<span  className="text-primary"> {result.currency_name}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Alpha Code : <span className="text-primary">{result.currency_alpha_code}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Numberic Code : <span className="text-primary">{result.currency_code}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Minor Unit : <span className="text-primary">{result.currency_minor_unit}</span></h3>
                        </div>
                    </details>
                    </div>
                </div>

                <form className="form-group"  onSubmit={onSubmitHandler}>
                    <select style={{height: "35px", width: "250px", color: "black", fontSize: "15px"}} className="form-select" onChange={(e)=>setSearchResult(e.target.value)}>
                        {
                            zones.map((item, i) => {
                                return <option value={item} key={i}>{item}</option>
                            })
                        }

                    </select>
                    <div className="d-grid gap-2">
                        <input style={{marginTop: "20px", fontSize: "20px"}} className="btn btn-dark" type="submit" value="Search"/>
                    </div>
                </form>

                <h1 style={{textAlign:"center", fontWeight: "bold"}}  className="text-primary">{searchResult2.date_time_txt}</h1>
                <div className="row">
                    <div className="col">
                    <details className="collapse-panel w-400 mw-full"> 
                        <summary style={{fontSize: "20px", fontWeight: "bold"}} className="collapse-header">Location</summary>
                        <div className="collapse-content">
                        <h3 style={{fontWeight: "bold"}}>Country : <span className="text-primary">{result2.country_name}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Coordinates : <span className="text-primary">{result2.location}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Capital : <span className="text-primary">{result2.capital}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Continent : <span className="text-primary">{result2.continent}</span></h3>
                        </div>
                    </details>
                    </div>
                    <div className="col">
                    <details className="collapse-panel w-400 mw-full mt-20">
                        <summary style={{fontSize: "20px", fontWeight: "bold"}} className="collapse-header">Currency</summary>
                        <div className="collapse-content">
                        <h3 style={{fontWeight: "bold"}}>Name :<span  className="text-primary"> {result2.currency_name}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Alpha Code : <span className="text-primary">{result2.currency_alpha_code}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Numberic Code : <span className="text-primary">{result2.currency_code}</span></h3>
                        <h3 style={{fontWeight: "bold"}}>Minor Unit : <span className="text-primary">{result2.currency_minor_unit}</span></h3>
                        </div>
                    </details>
                    </div>
                </div>
            </div>    
        </div>
    )

}
export default Clock;