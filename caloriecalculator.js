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

export default class Caloriecalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valx: '',
      valy: '',
      valz:'',
      Calorie: '',
    };
  }
  evalutate = (valx, valy, valz) => {
    var result =  10*valx + 6.25*valy - 5*valz + 5 ;
    this.setState(() => ({
      Calorie: result,
    }));
    this.setState((state, props) => ({ switchFractionSection: false }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.calText}>Go Back Home</Text>
        </TouchableOpacity>
        <Text style={styles.textParagraph}>
          A calorie deficit occurs when you consistently provide your body with
          fewer calories than it needs to support calorie expenditure
        </Text>

        <Text style={styles.textParagraph}>
          The most simple and approx. formula for this is to take your age,
          multiply it by 13-14(if you are highly active/a teenager or student)
          or 9-10 (for adults and elder)
        </Text>

        <Text style={styles.textParagraph}>
          Calorie deficit calculator calculates the precise amount of calories
          YOU have to burn to get the fit body YOU want.The results show a
          number of daily calorie estimates that can be used as a guideline for
          how many calories to consume each day to lose, or gain weight.
        </Text>

        <Text style={styles.textParagraph}>
         10W + 6.25H - 5A + 5, is the Mifflin-St Jeor equation to calculate the BMR
          or the Calorie intake of a human.
        </Text>

        <Text style={styles.textParagraph}>
          {' '}
          Where F body fat in % and W is the weight in Pounds/LBS
        </Text>

        <TextInput
          style={styles.textInput}
          label="Weight [in KGS]"
          value={this.state.valx}
          onChangeText={(valx) => this.setState({ valx })}
        />
        <TextInput
          style={styles.textInput}
          label="Height [in CM]"
          value={this.state.valy}
          onChangeText={(valy) => this.setState({ valy })}
        />
        <TextInput
          style={styles.textInput}
          label="Age"
          value={this.state.valz}
          onChangeText={(valz) => this.setState({ valz })}
        />

        <TouchableOpacity
          onPress={() => this.evalutate(this.state.valx, this.state.valy, this.state.valz)}>
          <Text style={styles.calculateButton}>CALCULATE</Text>
        </TouchableOpacity>

        <Text style={styles.answerBox}> ANSWER-  {this.state.Calorie} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textParagraph: {
    padding: 10,
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: 'garamond',
    fontSize: 17,
    color: '#7DDDE7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#0B748E',
    padding: 5,
  },
  routeCard: {
    backgroundColor: '#7DDDE7',
    margin: 10,
    borderRadius: 20,
    width: 80,
    height: 60,
    padding: 5,
  },
  textInput: {
    backgroundColor: '#3BCDDB',
    fontFamily: 'georgia',
    fontWeight: 'bold',
  },
  answerBox: {
    width: 220,
    backgroundColor: '#3BCDDB',
    margin: 25,
    borderRadius:20
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
