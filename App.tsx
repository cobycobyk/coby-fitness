import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';
import PaywallScreen from './screens/PaywallScreen';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Demo"
          component={DemoScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
          name="Paywall"
          component={PaywallScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
