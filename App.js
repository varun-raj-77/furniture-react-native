import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
// import Login from './src/view/screens/login';
import SplashScreen from './src/view/screens/splashscreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import OnboardingScreen from './src/view/screens/onboadingscreen';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
