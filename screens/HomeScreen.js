import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component
{
    render(){
        return(
            <View>
                <ImageBackground source = {require('../ISS-assets/assets/bg_image.png')} style = {{resizeMode: 'cover'}}>
                <Text 
                    style = {{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}
                >
                ISS Tracker App</Text>

                <TouchableOpacity 
                    style = {{flex: 0.25, height: 100, alignSelf: 'center', borderRadius: 20, backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginTop: 50}}
                    onPress = {()=>this.props.navigation.navigate('ISSLocation')}
                >
                    <Text
                        style = {{fontSize: 40, fontWeight: 'bold', height: 20}}
                    >ISS Location</Text>
                    <Image source = {require('../ISS-assets/assets/iss_icon.png')} style = {{width: 150, height: 150, marginRight: 30}}/>
                </TouchableOpacity>

               <TouchableOpacity 
                    style = {{flex: 0.25, height: 100, alignSelf: 'center', borderRadius: 20, backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginTop: 70}}
                    onPress = {()=>this.props.navigation.navigate('Meteor')}
                >
                    <Text
                        style = {{fontSize: 40, fontWeight: 'bold', height: 250}}
                    >Meteor Tracking</Text>
                    <Image source = {require('../ISS-assets/assets/meteor_icon.png')} style = {{width: 150, height: 150}}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}