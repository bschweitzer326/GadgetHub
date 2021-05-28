import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NewsAPI = props =>{
    const[news, setNews] = useState({});
    const header = React.createRef();

    useEffect(() =>{
        axios.get('http://api.mediastack.com/v1/news?access_key=02712fca12457220f3557c6c7146664a&countries=us')
        .then(response => setNews(response.data.data))
    }, [])

    return(
        <div style={{fontSize: "20px"}} className="container">
            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px", fontWeight: "bold"}} ref={header}>News</h1>
            <div style={{maxHeight: "700px", overflowY: "scroll", background: "rgba(255,255,255,.5)", paddingBottom: "10px", paddingTop: "10px"}}>
                {news.length > 0 && news.map((news, index)=>{
                    return (
                        <>
                    {news.author && news.url && news.title && news.description ?
                    
                        <details className="collapse-panel w-400 mw-full mt-20" closed>
                            <summary style={{fontWeight: "bold"}} className="collapse-header">
                                {news.title}
                            </summary>
                            <div className="collapse-content">
                            <h3 style={{color: "white" , fontWeight: "bold"}}> {news.author}</h3>
                            <h3 style={{color: "purple", fontWeight: "bold"}}>{news.description}</h3>
                            <h3 style={{color: "blue", fontWeight: "bold"}}><a href={news.url}>{news.url}</a></h3>
                            </div>
                        </details>
                
                : ""}
                </>
                )
                })}
                </div>
        </div>
    )
}
export default NewsAPI;