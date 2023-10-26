import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/Splash";
import LoginScreen from "./src/screens/Login";
import Home from "./src/screens/Home";



const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen  
          name="ChatAI"
          component={Home}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default AppNavigator;
