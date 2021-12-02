import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image
} from 'react-native';
import Constants from 'expo-constants';

// Photo
import photo from '../../assets/soiree.png'

const EventDetail = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity 
                    onPress={() => navigation.navigate("HomeScreen")}
                    // onPress={handleSignOut}
                    style={styles.buttonRetour}
                >
                    <Text style={styles.buttonRetourText}>Retour</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 23, textAlign: 'center'}}>Soirée Chartrons</Text>
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
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('ParticipationScreen')}
                // onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Participer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    button: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'tomato',
        width: '40%',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonRetour: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'gray',
        width: '20%',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRetourText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})

export default EventDetail;