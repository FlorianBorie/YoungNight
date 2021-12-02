import React, { useRef, useState, useEffect, Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { getFirestore, doc, getDoc } from "firebase/firestore";


const partystyle = {
  padding: 20,
  alignItems: "center",
  backgroundColor: "red",
  marginTop: 60,
};

const inputStyle1 = {
  borderWidth: 1,
  borderRadius: 15,
  padding: 8,
  backgroundColor: "#fff",
  width: "70%",
  marginTop: 100,
  marginBottom: -90,
};

class Party extends Component {
  state = {
    name: "",
  }
  constructor(props){
    super(props);
    this.getParty();
  }
  getParty = async () => {
    // const UserParty = await getFirestore().collection("party").doc('0IDxMtQxuk7zAmBBRnAQ').get()
    // const user = doc(getFirestore(), "party", 'xedDXR3fljBnGX7LaBfy');
    const user = await firestore().collection('party').doc('xedDXR3fljBnGX7LaBfy').get();
    // this.setState({
    //   name: party.data.name
    // })
    const party = await getDoc(user)
    console.log(party.data())
  } 
  render() {
  return(
  <View style={partystyle}>
      <Text style={inputStyle1} >Nom : {}</Text>
      <Text style={inputStyle1} >Localisation : {}</Text>
      <Text style={inputStyle1} >Type de soirée : {this.getParty.party}</Text>
      <Text style={inputStyle1} >Nombre personnes : {this.getParty.party}</Text>
  </View>
  )
  }
}

export default Party;