import React, {useState} from 'react';
//import axios from 'axios';
import { Button, Form, Segment, Image } from 'semantic-ui-react';


export default function ApexTracker() {
    const [userSearch, setUserSearch] = useState("");
    
    const handleUserSearch = (event) => {
        setUserSearch(event.target.value);
    }

    // const handleSubmit = async (event) => {
    //     try {
    //         let response = await axios(
    //             `https://public-api.tracker.gg/v2/apex/standard/${userSearch}`,
    //             {
    //               headers: {
    //                 TRN_Api_Key: "b6f65d67-be91-412f-86e0-d4bed7296f8e"
    //               }
    //             } //5ySkcOxzvmAfIL1CXdfY
    //           )
    //           setData(response.data.data)
    //           console.log(data)
    //     } catch(error) {
            
    //     }
    // }
    return (
        <div>
            <Segment inverted>
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Gamertag' placeholder='CoolGuy123' />
                    </Form.Group>
                    
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
            
        </div>
    )
}