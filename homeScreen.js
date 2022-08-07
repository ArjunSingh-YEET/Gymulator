import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ComponentProvider,
  ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
          source={{
            uri:"https://i.im.ge/2022/07/28/Fj46Zq.png"
          }}
            style={styles.backgroundImage}
          >

        <Image
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0b6e593c880debd5c0ebf749e0f87cdc',
          }}
          style={{ width: 90, height: 90, alignSelf: 'center' }}
        />
        <Text style={styles.paragraph}>Gymulator</Text>


        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('BMICalculator')}>
          {' '}
          <Text style={styles.bmiText}>BMI calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('CalorieCalculator')}>
          <Text style={styles.calText}>Calorie Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('BodyFatCalculator')}>
          <Text style={styles.bodText}> Body Fat calculator </Text>
        </TouchableOpacity>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#FBB13C',
    padding: 8,
  },
  paragraph: {
    padding: 5,
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7DDDE7',
   
  },

  routeCard: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 25,
    backgroundColor: '#3BCDDB',
    borderRadius: 20,
    height: 5,
     width:250,
    margin: 20,
  },
  bmiText: {
    fontWeight: 'bold',
    color: '#09647A',
  },

  calText: {
    color: '#09647A',
    fontWeight: 'bold',
  },

  bodText: {
    fontWeight: 'bold',
    color: '#09647A',
  },
 
   backgroundImage: {
    flex: 1,
    resizeMode:'cover',
   
  },
});
