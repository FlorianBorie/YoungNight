import React from "react";
import { Text, View, Image, Button, Alert, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';

//Photo
import debutMessage from "../../assets/DebutMessage.png"

const titleMessage = {
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
    fontSize: 20,
};

const Message = ({navigation}) => {
    return(
        <View>
            
            <Text style={titleMessage}>Mes Messages</Text>
            <TouchableOpacity 
                    onPress={() => navigation.navigate("MessageIdScreen")}
                    // onPress={handleSignOut}
                >
            <Image style={{height: 450, width: 400, marginTop: 30}} source={debutMessage}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Message;