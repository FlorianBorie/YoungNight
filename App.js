import React, { useRef, useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5} from '@expo/vector-icons'

import plus from './assets/plus.png'

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

        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '50%'
            }}>
              <FontAwesome5
              name="home"
              size={20}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue: 0,
              useNativeDriver: true
            }).start()
          }
        })}/>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '50%'
            }}>
              <FontAwesome5
              name="search"
              size={20}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue:getWight(),
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

        <Tab.Screen name={"Notification"} component={NotificationScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '50%'
            }}>
              <FontAwesome5
              name="bell"
              size={20}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue:getWight() * 4,
              useNativeDriver: true
            }).start()
          }
        })}/>

        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: "absolute",
              top: '50%'
            }}>
              <FontAwesome5
              name="home"
              size={20}
              color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>  
          )
        }} listeners={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue:getWight() * 5,
              useNativeDriver: true
            }).start()
          }
        })}/>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWight() - 20,
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

function getWight() {
  let wight = Dimensions.get("window").width

  // Padding horizontal = 20
  wight = wight - 80

  // total 5 tab
  return wight / 5
}
function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
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
function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification!</Text>
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










// import profil from './assets/profil.png'
// // Pages
// import Home from './Components/files/Home';
// // Icone menu
// import home from './assets/home.png'
// import search from './assets/magnifying-glass.png'
// import notifications from './assets/notification.png'
// import settings from './assets/setting.png'
// import logout from './assets/logout.png'
// // Menu
// import menu from './assets/menu.png'
// import close from './assets/close.png'

// export default function App() {
//   const [currentTab, setCurrentTab] = useState("Home");
//   // Statut du menu
//   const [showMenu, setShowMenu] = useState(false)
//   // Animation
//   const offsetValue = useRef(new Animated.Value(0)).current;
//   //Initialise 1 fois
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const closeButtonOffset = useRef(new Animated.Value(0)).current;
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{ justifyContent: 'flex-start', padding: 15}}>
//         <Image source={profil} style={{
//           width: 90,
//           height: 90,
//           borderRadius: 10,
//           marginTop: 8
//         }}></Image>
//         <Text style={{
//           fontSize: 20,
//           fontWeight: 'bold',
//           color: 'white',
//           marginTop: 20
//         }}>YoungNight</Text>

//         <TouchableOpacity>
//           <Text style={{
//             marginTop: 6,
//             color: 'white'
//           }}>Profile</Text>
//         </TouchableOpacity>

//         <View style={{ flexGrow: 1, marginTop: 50}}>
//           {
//             // tab bar button ..
//           }
//           {TabButton(currentTab, setCurrentTab, "Home", home)}
//           {TabButton(currentTab, setCurrentTab, "Search", search)}
//           {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
//           {TabButton(currentTab, setCurrentTab, "Settings", settings)}

//         </View>

//         <View>
//           {TabButton(currentTab, setCurrentTab, "Logout", logout)}
//         </View>  
//       </View>

//       {
//         // Over lay view
//       }

//       <Animated.View style={{
//         flexGrow: 1,
//         backgroundColor: 'white',
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//         borderRadius: showMenu ? 15 : 0,
//         // Tranformation de la vue
//         transform:[
//           { scale: scaleValue },
//           {translateX: offsetValue}
//         ]
//       }}>
//         {
//           // Boutton menu
//         }

//         <Animated.View style={{
//           transform:[{
//             translateY: closeButtonOffset
//           }]
//         }}>
//           <TouchableOpacity onPress={() =>{
//             Animated.timing(scaleValue, {
//               toValue: showMenu ? 1 : 0.88,
//               duration: 300,
//               useNativeDriver: true
//             })
//             .start()

//             Animated.timing(offsetValue, {
//               toValue: showMenu ? 0 : 230,
//               duration: 300,
//               useNativeDriver: true
//             })
//             .start()

//             Animated.timing(closeButtonOffset, {
//               toValue: !showMenu ? -30 : 0,
//               duration: 300,
//               useNativeDriver: true
//             })
//             .start()

//             setShowMenu(!showMenu);
//           }}>

//             <Image source={showMenu ? close : menu} style={{
//               width: 40,
//               height: 40,
//               tintColor: 'black',
//               marginTop: 40
//             }}></Image>

//           </TouchableOpacity>
//             <Home/>
//         </Animated.View>  
//       </Animated.View>
//     </SafeAreaView>
//   )
// }

// const TabButton = (currentTab, setCurrentTab, title, image) => { 
//   return(

//     <TouchableOpacity onPress={() =>{
//       if (title == "Logout") {

//       }else{
//         setCurrentTab(title)
//       }
//     }}>
//             <View style={{
//               flexDirection: "row",
//               alignItems: 'center',
//               paddingVertical: 8,
//               backgroundColor: currentTab == title ? 'white' : 'transparent',
//               paddingLeft: 13,
//               paddingRight: 35,
//               borderRadius: 8,
//               marginTop: 10
//             }}>
//               <Image source={image} style={{
//                 width: 25, height: 25,
//                 tintColor: currentTab == title ? "#5359D1" : "white"
//               }}></Image>

//               <Text style={{
//                 fontSize: 15,
//                 fontWeight: 'bold',
//                 paddingLeft: 15,
//                 color: currentTab == title ? "#5359D1" : "white"
//               }}>
//                 {title}
//               </Text>
//             </View>
//           </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5359D1',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
// });