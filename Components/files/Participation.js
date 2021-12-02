import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image,
} from 'react-native';
import Constants from 'expo-constants';

// Photo
import photo from '../../assets/validate.png'

const Participation = ({navigation}) => {
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

            <TouchableOpacity 
                onPress={() => navigation.navigate('HomeScreen')}
                // onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Retour à la page d'accueil</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({ 
  button: {
      marginTop: Constants.statusBarHeight,
      backgroundColor: 'tomato',
      width: '70%',
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '15%',
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
})

export default Participation;