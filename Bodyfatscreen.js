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

} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Audio } from 'expo-av';


export default class BMIScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valx: '',
      valy: '',
      BodyFat: '',
    };
  }
 

  evalutate = (valx, valy) => {
    var result = 1.2 * valx + 0.23 * valy - 16.2;
    this.setState(() => ({
      BodyFat: result,
    }));
    this.setState((state, props) => ({ switchFractionSection: false }));
  };

  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
          source={{
            uri:"https://cdn.vectorstock.com/i/preview-1x/41/65/sports-background-with-fitness-icons-in-flat-style-vector-3354165.webp"
          }}
          style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.calText}>Go Back Home</Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
          {' '}
          Body Fat%, is the amount of body fat in your body in a fix percentage,
          a set goal of body fat reduction will lead to the aesthetic physique
          you want
        </Text>

        <Text style={styles.paragraph}>
          the nesscary data required to calculate the approx. body fat is by
          using the formula 1.51 × BMI - 0.70 × Age - 2.2 which is applied for
          teens/students.
        </Text>

        <TextInput style={styles.textInput}
         label="Your BMI"
          
          value={this.state.valx}
          onChangeText={(valx) => this.setState({ valx })}
            
        />
        <TextInput
         label="Your Age"
          style={styles.textInput}
          value={this.state.valy}
          onChangeText={(valy) => this.setState({ valy })}
        />

        <TouchableOpacity
          onPress={() => this.evalutate(this.state.valx, this.state.valy)}>
          <Text style={styles.calculateButton}>CALCULATE</Text>
        
        </TouchableOpacity>

        <Text style={styles.answerBox}>ANSWER-  {this.state.BodyFat} </Text>
          <Image
          source={{
            uri: 'https://www.builtlean.com/wp-content/uploads/2010/08/Ideal-Body-Fat-Percentage-Chart1.jpg',
          }}
          style={{ width: 300, height: 120, alignSelf: 'center', borderRadius:20, color:'blue' }}
        />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#0B748E',
    padding: 5,
  },
  paragraph: {
    padding: 10,
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: 'garamond',
    color: '#7DDDE7',
    fontSize:17,
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
    margin: 20,
    borderRadius:20
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
  }
});
