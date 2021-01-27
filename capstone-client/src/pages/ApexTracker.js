import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Segment, Icon, Card, Image } from 'semantic-ui-react';


export default function ApexTracker() {
    const [data, setData] = useState("");
    const [userSearch, setUserSearch] = useState("");
    const [platformSearch, setPlatformSearch] = useState("");
    const [loadStats, setLoadStats] = useState(false);

    const handleUserSearch = (event) => {
        setUserSearch(event.target.value);
    }

    const handlePlatformSearch = (event) => {
        setPlatformSearch(event.target.value);
    }

    const handleSubmit = async (event) => {
        console.log("This is data:", data)
        event.preventDefault();
        try {
            event.preventDefault();
            const results = await axios(
                `https://api.mozambiquehe.re/bridge?version=4&platform=${platformSearch}&player=${userSearch}&auth=5ySkcOxzvmAfIL1CXdfY`,
                //5ySkcOxzvmAfIL1CXdfY
            )
            console.log(results)
            // const totalKills = results.data.total.kills;
            // All pieces  of collected data from the API are stored in the data state
            const numericalRank = results.data.global.rank.rankScore;
            const rankName = results.data.global.rank.rankName;
            const rankImg = results.data.global.rank.rankImg;
            const selectedCharacter = results.data.legends.selected.ImgAssets.icon;
            const selectedLegendName = results.data.legends.selected.LegendName;
            const totalKills = results.data.total.kills.value;
            const playerLevel = results.data.global.level;
            // const totalDmg = results.data.total.damage.value;
            // const top3 = results.data.total.top_3.value;
            setData([numericalRank, rankName, rankImg, selectedCharacter, selectedLegendName, totalKills, playerLevel]);
            setLoadStats(true);
            
        } catch (error) {
            console.log(error);
        }

    }
    const card = (<Card className="centered" >

        <Image src={data[3]} wrapped ui={false} /> 
        <Card.Content>
            <Card.Header>{userSearch}</Card.Header>
            <Card.Meta>Platform: {platformSearch}</Card.Meta>
            <Card.Description>
                <h3>Rank:<img src={data[2]}  alt="Competitve Rank"/> {data[0]}</h3>
                <h4>Player Level: {data[6]}</h4>
                <h4>Selected Legend: {data[4]}</h4>
                <h4>Lifetime Kills: {data[5]}</h4>
                
            </Card.Description>
        </Card.Content>

    </Card>)
    // let url;
    // if(data[1] === "Silver"){
    //     url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.d3hell.com%2Fapex-legends-smurf-accounts%2Frank-2%2F&psig=AOvVaw3kX-l3vRLnVGKEGxDFH_cr&ust=1611775983291000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjB6M2ruu4CFQAAAAAdAAAAABAI";
    // }
    return (
        <div>

            <Segment style={{margin: 40}} inverted>

                <Form  inverted>
                    <Form.Group widths='equal'>
                        <Form.Input onChange={handlePlatformSearch} fluid label='Platform (PC, X1, PS4)' placeholder='PC, X1, PS4' />
                        
                        <Form.Input onChange={handleUserSearch} fluid label='Gamertag' placeholder='CoolGuy123' />
                    </Form.Group>

                    <Button type="submit" animated onClick={handleSubmit}>
                        <Button.Content visible>Search</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Form>
            </Segment>
            {loadStats ? card : ""}  

        </div>
    )
}