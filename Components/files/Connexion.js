import React, { useState } from "react";
import {
  ActivityIndicator, 
  Alert, 
  Button, 
  Text, 
  TextInput, 
  View, 
  Image, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import authHelper from "./AuthUsers";

// Photo
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
  justifyContent: "space-around"
};
const Connexion = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(false);
    try {
      const user = await authHelper.signInOnFirebase(email, password);
      await setUser(user)
      console.log("connected")
      console.log(user)
    } catch (err) {
      Alert.alert("Erreur", err.message);
      console.log("no connected")
      console.log(user)
      console.log(email)
    }
  };
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={rootStyle}>
          <Image style={{height: 300, width: 300, marginBottom: 50, marginTop: 30}} source={logo}/>
          <Text>Email</Text>
          <TextInput
            style={inputStyle}
            value={email}
            onChangeText={(txt) => setEmail(txt)}
          />
          <Text>Mot de passe</Text>
          <TextInput
            style={inputStyle}
            secureTextEntry
            value={password}
            onChangeText={(txt) => setPassword(txt)}
          />
          {loading ? (
            <ActivityIndicator size={32} color="blue" />
          ) : (
            <Button title="S'authentifier" 
            onPress={signIn}/>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
};

export default Connexion;