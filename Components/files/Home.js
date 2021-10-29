import React from "react"
import { Text } from "react-native"

const titleStyle = {
    textAlign: 'center',
    fontSize: '20px',
};

const Home = props => {
    return (
        // <Burger navigation={props.navigation}>
            <Text style={titleStyle}>Page Home !!</Text>
        /* </Burger> */
    )
}

export default Home;