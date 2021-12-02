import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Constants from 'expo-constants';

// Photo
import photo from '../../assets/soiree.png'
import Participation from './Participation';

const handleSignOut = () => {
    authHelper
    .signOutFirebase()
    .then(() => {
        SignOut()
    })
    .catch(error => alert(error.message))
}

export default function Detail() {
    return (
        <View>
            <Text style={{fontSize: 23, textAlign: 'center', marginTop: Constants.statusBarHeight}}>Soirée Chartrons</Text>
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
            }}>Rendez-vous à 21h pour une folle soirée !</Text>

            <Text style={{
            }}>Pour avoir plus d'informations sur cette soirée, veuillez faire une demande de participation à l'hôte</Text>
            
            {/* <TouchableOpacity 
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Participer</Text>
            </TouchableOpacity> */}
        </View>
    )
}