import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            meteors: {}
        }
    }

    getMeteors=()=>{
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY').then(response=>{
            this.setState({meteors: response.data_near_earth_objects})
        })
        .catch(error=>{alert(error.message)})
    }

    componentDidMount(){
        this.getMeteors()
    }

    render(){
        if(Object.keys(this.state.meteors).length === 0){
            return(<Text>Loading...</Text>)
        }
        else{
            let MeteorArray = Object.keys(this.state.meteors).map(meteor_date =>{
                return(this.state.meteors[meteor_date])
            })
            let meteors = [].concat.apply([],meteorArray)
            meteors.forEach(function(element){
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score = threatScore
            })
        }
        return(
            <View>
                <Text>Welcome to MeteorScreen</Text>
            </View>
        );
    }
}