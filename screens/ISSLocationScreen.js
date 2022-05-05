import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default class ISSLocationScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            location: {}
        }
    }

    componentDidMount(){
        this.getISSLocation()
    }

    getISSLocation = () => {
        axios.get('https://api.wheretheiss.at/v1/satellites/25544'). then (response=>{
            this.setState({
                location: response.data
            })
        })
        .catch(error=>{alert(error.message)})
    }

    render(){
        return(
            <View>
                <ImageBackground source = {require('../ISS-assets/assets/iss_bg.jpg')} style = {{resizeMode: 'cover'}}>
                    <Text
                        style = {{color: 'white', alignSelf: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 30}}
                    >ISS LOCATION</Text>
                    <MapView
                        region = {{
                            latitude: this.state.location.latitude,
                            longitude: this.state.location.longitude,
                            latitudeDelta: 100,
                            longitudeDelta: 100
                        }}>
                        <Marker
                            coordinate = {{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude
                            }}>
                                
                            <Image source = {require('../ISS-assets/assets/iss_icon.png')} style = {{width: 100, height: 100}}/>
                        </Marker>
                    </MapView>
                </ImageBackground>
            </View>
        );
    }
}