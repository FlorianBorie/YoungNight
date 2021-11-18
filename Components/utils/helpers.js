import { Platform, AsyncStorage } from "react-native";
// import {AsyncStorage} from "@react-native-async-storage/async-storage"

export const prefix = Platform.OS === "ios" ? "ios" : "md";

export const renderInitialScreen = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        JSON.parse(user);
        return user ? "home" : "Connexion";
    }catch(e){
        console.error('error render initial sreen', e)
    }
}