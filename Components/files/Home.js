import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Party from './Party';

// Photo

const Home = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("EventScreen")}
            >
                <Party/>
            </TouchableOpacity>    
        </View>
    )
}

export default Home;