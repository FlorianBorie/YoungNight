import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
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
import authHelper  from "./AuthUsers";

import logo from '../../assets/yougnight.png'

const rootStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 64,
    alignItems: "center",
};

const inputStyle = {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 32,
  };

const container = {
    flex: 1,
    justifyContent: "space-around",
}
  
const Profil = ({SignOut}) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, SetAdresse] = useState("");
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
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={rootStyle}>
                    <Image style={{height: 200, width: 200, marginBottom: 50}} source={logo}/>
                    <Text>Nom</Text>
                    <Text
                        style={inputStyle}
                        value={nom}
                        onChangeText={(txt) => setNom(txt)}
                    />
                    <Text>Prénom</Text>
                    <Text
                        style={inputStyle}
                        value={prenom}
                        onChangeText={(txt) => setPrenom(txt)}
                    />
                    <Text>Email</Text>
                    <Text
                        style={inputStyle}
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                    />
                    <Text>Adresse</Text>
                    <Text
                        style={inputStyle}
                        value={adresse}
                        onChangeText={(txt) => seAdresse(txt)}
                    />
                    {/* <Text>Mot de passe</Text>
                    <TextInput
                        style={inputStyle}
                        secureTextEntry
                        value={password}
                        onChangeText={(txt) => setPassword(txt)}
                    /> */}
                    <TouchableOpacity 
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Déconnexion</Text>
                    </TouchableOpacity>
                
                </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({ 
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
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
export default Profil;