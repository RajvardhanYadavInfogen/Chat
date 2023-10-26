import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { users } from "../Data/Users";


const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = () => {
    const user = users.find(
      (user) => user.name == username && user.password == password
    );
  

    if (user) {
      navigation.navigate("ChatAI");
    } else {
      alert("wrong username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/chatGpt.webp")}
        style={{ width: 100, height: 100,marginBottom:20 }}
        
      />
      <Text style={styles.header}>Login.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={{left:2,width:'80%',marginBottom:20}}>
        <Text style={{fontWeight:'bold'}}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  header: {
    fontSize: 38,
    marginBottom: 20,
    fontWeight:'bold'
    
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor:'#E4E6EA'
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    width:'80%',
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

});

export default LoginScreen;
