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
import photo from '../../assets/validate.png'

export default function Participation() {
    return (
        <View>
            <Text style={{fontSize: 23, textAlign: 'center', marginTop: Constants.statusBarHeight}}>Participation envoyée !</Text>
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
            }}>Votre demande de participation a été envoyée auprès de l'hôte de la soirée !</Text>

            <Text style={{
            }}>On croise les doigts pour que vous soyez pris 🤞</Text>
            
        </View>
    )
}