import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Permissions from "expo-permissions";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Pages
import Connexion from './Components/files/Connexion';
import Home from './Components/files/Home';
import Map from './Components/files/Map';
import Profil from './Components/files/Profil';

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
      let { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
      if(status === "granted") {
        console.log('Permission to access location was denied');
        return;
      }
    } catch(e){
      console.error("error loading ressources", e)
    }
  }
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
  const ProfilNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfilScreen" component={Profil} />
    </Stack.Navigator>
  )
  
  const authenticatedBody = (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
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
        <Tabs.Screen name="Profil" component={ProfilNav}/>
      </Tabs.Navigator> 
      <StatusBar style="auto"/>
    </NavigationContainer>
  );

  const unauthenticatedBody = <Connexion setUser={setUser}/>;
  const body = user ? authenticatedBody : unauthenticatedBody;

  return userLoading ? <ActivityIndicator /> : body;

};