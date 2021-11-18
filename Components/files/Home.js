import React from 'react';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

// Photo
import photo from '../../assets/aperitif.png'

export default function Home() {
    return (
        <View>
            <Text style={{fontSize: 23, textAlign: 'center', marginTop: Constants.statusBarHeight}}>Soirée proche de chez vous</Text>
            <Image source={photo} style={{
              width: '100%',
              height: 300,
              borderRadius: 15, 
              marginTop: 20
            }}></Image>

            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 15,
              paddingBottom: 5
            }}>Apéro partie !!</Text>

            <Text style={{
            }}>Soirée dans un appartement sur Bordeaux
            Dans le quartier des chartron !!</Text>
        </View>
    )
}