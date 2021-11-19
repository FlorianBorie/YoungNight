import React from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants';

const Message = () => {
    return(
        <View>
            <Text style={{marginTop: Constants.statusBarHeight}}>Message Screen</Text>
        </View>
    )
}

export default Message;