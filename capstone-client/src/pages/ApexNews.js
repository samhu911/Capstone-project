import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ApexNews() {
    const [data, setData] = useState([]);
    
//https://api.mozambiquehe.re/news?lang=en-us&auth=YOURAPIKEY

    useEffect(() => {
        const fetchData = async () => {
            try{
                const results = await axios("https://api.mozambiquehe.re/news?lang=en-us&auth=5ySkcOxzvmAfIL1CXdfY")
                console.log(results);
                if (results.status !== 200) {
                    throw new Error("Error!");
                }
                setData(results.data)
                console.log(data)
            } catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const renderNews = () => {
        return data.map(news => {
            return (
                <div style={{textAlign: "center"}}>
                    <div key={news.id}>
                        <h3 style={{margin: 20}}>{news.title}</h3>
                        <Link>{news.link}</Link>
                        <Image src={news.img} size='medium' centered />
                    </div> 
                </div>
            )
        })
    }
    return (
        <div>
            {renderNews()}
        </div>
    )
}
