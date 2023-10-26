import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/Login';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
