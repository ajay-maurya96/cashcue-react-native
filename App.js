import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ImageBackground,Dimensions
} from "react-native";
const { width, height } = Dimensions.get('window');
import { FontAwesome } from "@expo/vector-icons";
import { Image } from 'react-native';



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/save.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Let Your Money Grow</Text>
        <View style={styles.inputContainer}>
          {/* <FontAwesome name="google" size={24} color="white" /> */}
          <Image source={require('./assets/google icon.png')} style={styles.googleLogo} />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} color="#32CD32"/>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© cashcue limited</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26313c",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  resizeMode: 'cover', 
  },
  title: {
    fontSize: width < 768 ? 24 : 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -50,
  },
  subtitle: {
    fontSize: width < 768 ? 16 : 20,
    color: "#fff",
    textAlign: 'center',
    // marginTop: -20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: 'center',
    marginTop: 10,
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
  googleText: {
    marginLeft: 10,
    color: '#fff',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    width: '70%',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 30,
  },
   buttonContainer: {
    width: '30%',
    marginTop: 10,
    alignSelf: 'center',
    
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  footerText: {
    color: '#fff',
  },
});
