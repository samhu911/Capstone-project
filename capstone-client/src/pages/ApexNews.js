import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

export default function ApexNews() {
    const [data, setData] = useState([]);

    //https://api.mozambiquehe.re/news?lang=en-us&auth=YOURAPIKEY

    useEffect(() => {
        const fetchData = async (event) => {

            try {

                const results = await axios("https://api.mozambiquehe.re/news?lang=en-us&auth=5ySkcOxzvmAfIL1CXdfY")

                if (results.status !== 200) {
                    throw new Error("Error!");
                }

                setData(results.data)
                console.log(results.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const renderNews = (
        <div>
            {
                data.map((news, index) => {
                    return (
                        <div key={index} style={{ textAlign: "center" }}>
                            
                            <h2 style={{ margin: 20 }}>{news.title}</h2>

                            <Image
                                src={news.img}
                                as='a'
                                size='medium'
                                href={news.link}
                                target='_blank'
                                centered
                            />


                        </div>
                    )
                })}
        </div>
    )

    return (
        <div>
            {renderNews}
        </div>
    )
}
