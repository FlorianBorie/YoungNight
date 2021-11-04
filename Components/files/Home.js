import React, { useRef, useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// Photo
import photo from '../../assets/aperitif.png'

const titleStyle = {
    textAlign: 'center',
    fontSize: '20px',
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
    return (
        <View>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20
            }}>{currentTab}</Text>

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