import React from 'react';
import { useNavigation } from '@react-navigation/core'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import authHelper  from "./AuthUsers";

const Profil = ({SignOut}) => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        authHelper
        .signOutFirebase()
        .then(() => {
            SignOut()
        })
        .catch(error => alert(error.message))
    }

    return(
        <View>
            <Text style={{marginTop: Constants.statusBarHeight}}>Voulez-vous vraiment vous déconnecter ?</Text>
            <TouchableOpacity 
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({ 
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})
export default Profil;