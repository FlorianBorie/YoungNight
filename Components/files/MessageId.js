import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Constants from 'expo-constants';

//Photo
import confMessage from "../../assets/confMessage.png";

const titleMessage = {
    textAlign: "center",
    fontSize: 20,
};

const MessageId = ({navigation}) => {
    return(
        <View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("MessageScreen")}
                    // onPress={handleSignOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>
                <Text style={titleMessage}>Messsage Id Screen</Text>
            </View>
            <View>
                <Image style={{marginLeft: 1, height: 210, width: 400, marginTop: 20}} source={confMessage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    button: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'gray',
        width: '20%',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})

export default MessageId;