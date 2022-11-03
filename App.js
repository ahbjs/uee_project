import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import LoadScreen from './components/LoadScree';
import Home from './components/Home';

export default function App() {
  return (
    <NavigationContainer initialRouteName="LoadScreen">
      <Stack.Navigator>
        <Stack.Screen name="LoadScreen" options={{headerShown: false}} component={LoadScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
