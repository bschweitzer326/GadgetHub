import React, {useState, useEffect} from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timing, setTiming] = useState(false);

    useEffect(() => {
        if(timing){
        const marker = window.setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        return () => window.clearInterval(marker);
        }
    }, [timing]);

    return (
        <div className="container col-3" style={{marginTop: "70px", marginBottom: "20px"}}>
            <h1 style={{fontSize: "40px", fontWeight: "bold"}} className="mt-4">Timer</h1>
            <div className="card mt-4" style={{background: "rgba(255,255,255,.5)", padding: "20px 0px", height: "400px", width: "400px", borderRadius: "50%", margin: "auto"}}>
                <h1 style={{fontSize: "70px", paddingTop: "50px"}} className="mt-5">{time}</h1>
                <div class="card-body mt-2">
                    <button style={{fontSize: "30px", borderRadius: "15px", marginBottom: "10px"}} className="btn btn-success mr-3" onClick={() => {setTiming(true);}}>Start</button>
                    <button style={{fontSize: "30px", borderRadius: "15px", marginBottom: "10px"}} className="btn btn-primary mr-3" onClick={() => {setTiming(false);}}>Pause</button>
                    <button style={{fontSize: "30px", borderRadius: "15px", marginBottom: "10px"}} className="btn btn-danger" onClick={() => {setTiming(false); setTime(0);}}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch;