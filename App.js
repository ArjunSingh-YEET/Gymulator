import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen';
import BMIScreen from './screens/BMIscreen';
import Caloriecalculator from './screens/caloriecalculator';
import Bodyfatscreen from './screens/Bodyfatscreen'
import { Audio } from 'expo-av';

const Stack = createStackNavigator();


function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,       
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BMICalculator" component={BMIScreen} />
        <Stack.Screen name="CalorieCalculator" component={Caloriecalculator} />
        <Stack.Screen name="BodyFatCalculator" component={Bodyfatscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
