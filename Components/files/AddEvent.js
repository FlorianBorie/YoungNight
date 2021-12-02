import React from "react";
import { 
    Text, 
    View, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView ,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Constants from 'expo-constants';

const titleEvent = {
    // marginTop: Constants.statusBarHeight,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
}
const inputStyle = {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 32,
  };

const rootStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 64,
    alignItems: "center",
};

const container = {
    flex: 1,
    justifyContent: "space-around",
}

const AddEvent = ({navigation}) => (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={rootStyle}>
                <Text style={titleEvent}>Ajouter que vous organisez !</Text>
                <Text>Nom</Text>
                    <TextInput
                        style={inputStyle}
                        // value={nom}
                        // onChangeText={(txt) => setNom(txt)}
                    />
                    <Text>Localisation</Text>
                    <TextInput
                        style={inputStyle}
                        // value={prenom}
                        // onChangeText={(txt) => setPrenom(txt)}
                    />
                    <Text>Nombre de personne</Text>
                    <TextInput
                        style={inputStyle}
                        // value={email}
                        // onChangeText={(txt) => setEmail(txt)}
                    />
                    <Text>Description</Text>
                    <TextInput
                        style={inputStyle}
                        // value={adresse}
                        // onChangeText={(txt) => seAdresse(txt)}
                    />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('HomeScreen')}
                        // onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Valider</Text>
                    </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
const styles = StyleSheet.create({ 
    button: {
        backgroundColor: 'tomato',
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

export default AddEvent;