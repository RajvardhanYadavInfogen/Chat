import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({navigation}: {navigation: any}) => {   
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.icon}  source={require('../images/chatGpt.webp')}/>
      <Text style={styles.logo}>OpenAI</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop:20
  },
  logo: {
    fontSize: 40,
    fontWeight: "700",
    color: "black",
  },
  icon: {
    width:200,
    height:200
  }
});
