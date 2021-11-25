import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Location from 'expo-location';
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Pages
import Connexion from './Components/files/Connexion';
import Home from './Components/files/Home';
import Map from './Components/files/Map';
import Profil from './Components/files/Profil';
import AddEvent from './Components/files/AddEvent';
import Message from './Components/files/Message';
import MessageId from './Components/files/MessageId'

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator(); 

const USER_STORAGE_KEY = "USER_STORAGE_KEY";
 
export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [userLoading, setUserLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  const loadRessources = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status === "granted") {
        setLoading(false);
      }
    } catch(e){
      console.error("error loading ressources", e)
    }
  }
  useEffect(() => {
    loadRessources();
  })

  React.useEffect(() => {
    const initialProcess = async () => {
      try{
        const storageUser = await AsyncStorage.getItem(USER_STORAGE_KEY)
        if (storageUser) {
          setUser(storageUser);
          const serverData = await loadRessources(); 
          setData(serverData.slice(0, 20));
          setLoading(false)
        } else {

        }
        setUserLoading(false);
      } catch(err){
        console.error(err)
      }
    };
    initialProcess();
  }, []);

  const SignOut = () => {
    setUser(null);
    AsyncStorage.removeItem(USER_STORAGE_KEY)
  };

  const StackNav = () =>  (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home}/>
    </Stack.Navigator>
  )
  const MapNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapScreen" component={Map} />
    </Stack.Navigator>
  )
  const AddEventNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddEventScreen" component={AddEvent} />
    </Stack.Navigator>
  )
  const MessageNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageScreen" component={Message} />
      <Stack.Screen name="MessageIdScreen" component={MessageId} />
    </Stack.Navigator>
  )
  const ProfilNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfilScreen">
        {(props) => <Profil {...props} SignOut={SignOut}/>}
      </Stack.Screen>
    </Stack.Navigator>
  )
  
  const authenticatedBody = (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'mail' : 'mail-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tabs.Screen name="Home" component={StackNav}/>
        <Tabs.Screen name="Map" component={MapNav}/>
        <Tabs.Screen name="Add" component={AddEventNav}/>
        <Tabs.Screen name="Message" component={MessageNav}/>
        <Tabs.Screen name="Profil" component={ProfilNav}/>
      </Tabs.Navigator> 
      <StatusBar style="auto"/>
    </NavigationContainer>
  );

  const unauthenticatedBody = <Connexion setUser={setUser}/>;
  const body = user ? authenticatedBody : unauthenticatedBody;

  return userLoading ? <ActivityIndicator /> : body;

};