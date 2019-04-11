import React, { Component } from 'react'; //imrc
import { View, Text } from 'react-native'; //imrn

import RedButton from "../components/Buttons/RedButton"

class MovieDetailScreen extends Component {

    goBack = () => {
        this.props.navigation.goBack()
    }

    render(){
        return <View>
            <Text>Movie Detail</Text>

            <RedButton 
               title="Go Back"
               onPress={this.goBack}
               >
            </RedButton>


        </View>
    }
} 

export default MovieDetailScreen;