import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheetProperties,
  TouchableOpacity,
  Share
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen';

const Stack = createStackNavigator();

export default class BMIScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valx: '',
      valy: '',
      BMI: '',
    };
  }
  evalutate = (valx, valy) => {
    var result = valx / valy**2;
    this.setState(() => ({
      BMI: result,
    }));
    this.setState((state, props) => ({ switchFractionSection: false }));
  };

  render() {
    return (
      <View style={styles.container2}>
      <View style={styles.container}>
     
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.calText}>Go Back Home</Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
          Body Mass Index (BMI) is a person’s weight in kilograms (or pounds)
          divided by the square of height in meters (or feet).
        </Text>

        <Text style={styles.paragraph}>
          A high BMI can indicate high body fatness. BMI screens for weight
          categories that may lead to health problems
        </Text>
        <Text style={styles.paragraph}>
          The formula for calculating BMI is : BMI = kg/m2 that in words is :
          kilograms divided by height in meter square
        </Text>
        <Text style={styles.paragraph}>
          below given calculator will help you find out your BMI
        </Text>

        <TextInput
          style={styles.textInput}
          label="Weight [Kilograms]"
          value={this.state.valx}
          onChangeText={(valx) => this.setState({ valx })}
        />
        <TextInput
          style={styles.textInput}
          label="Height [Meter²]"
          value={this.state.valy}
          onChangeText={(valy) => this.setState({ valy })}
        />
      
        <TouchableOpacity
          onPress={() => this.evalutate(this.state.valx, this.state.valy)}>
          <Text style={styles.calculateButton}>CALCULATE</Text>
        </TouchableOpacity>

        <Text style={styles.answerBox}>ANSWER-  {this.state.BMI} </Text>
        <Image
          source={{
            uri: 'https://www.nestle-caribbean.com/sites/g/files/pydnoa421/files/asset-library/publishingimages/nhw/bmi-about.png',
          }}
          style={{ width: 250, height: 200, alignSelf: 'center', borderRadius:20, color:'blue' }}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#0B748E',
    padding: 5,
  },
  paragraph: {
    padding: 1,
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: 'garamond',
    color: '#7DDDE7',
    fontSize:17
  },
  textInput: {
    color: 'red',
    backgroundColor: '#3BCDDB',
    fontWeight: 'bold',
    fontFamily: 'georgia',
  },
  answerBox: {
    width: 220,
    backgroundColor: '#3BCDDB',
    margin: 10,
    borderRadius:20,
    padding:1
    
  },
  routeCard: {
    backgroundColor: '#3BCDDB',
    margin: 20,
    borderRadius: 20,
    width: 80,
    height: 60,
    padding: 5,
  },
  calculateButton: {
    color: '#0B748E',
    padding: 5,
    margin: 20,
    backgroundColor: '#7DDDE7',
    borderRadius: 25,
  },
  calText:{
    fontWeight:'bold',
    color: '#0B748E'
  },
   backgroundImage: {
    flex: 1,
    resizeMode:'cover',
    height:810,
    width:315,
  },
 
});
