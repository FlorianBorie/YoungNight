import React, { useRef, useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5} from '@expo/vector-icons'

import plus from './assets/plus.png'

// Pages
import Home from './Components/files/Home';
import Connexion from './Components/files/Connexion';
import Map from './Components/files/Map';

const Tab = createBottomTabNavigator();

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 35,
          marginHorizontal: 20,
          // Largeur max
          height: 60,
          borderRadius: 10,
          // Ombrage
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20
        }
      }}>

        <Tab.Screen name={"Home"} component={Home} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '20%'
            }}>
              <FontAwesome5
              name="home"
              size={30}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              useNativeDriver: true
            }).start()
          }
        })}/>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '20%'
            }}>
              <FontAwesome5
              name="search"
              size={30}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              useNativeDriver: true
            }).start()
          }
        })}/>

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30
              }}>
                <Image source={plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white'
                }}></Image>
              </View>
            </TouchableOpacity> 
          )
        }}/>

        <Tab.Screen name={"Map"} component={Map} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '20%'
            }}>
              <FontAwesome5
              name="map-marked-alt"
              size={30}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              useNativeDriver: true
            }).start()
          }
        })}/>

        <Tab.Screen name={"Settings"} component={Connexion} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '20%'
            }}>
              <FontAwesome5
              name="cog"
              size={30}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              useNativeDriver: true
            }).start()
          }
        })}/>

      </Tab.Navigator>

      <Animated.View style={{
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 79,
        // padding horizontal = 20 ..
        left: 20,
        borderRadius: '50%',
        transform:[
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  )
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}