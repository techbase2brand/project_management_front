import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  AppRegistry,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather library for icons

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo2.png")}
        style={{
          width: "50%",
          height: "20%",
          resizeMode: "contain",
          marginBottom: 60,
          paddingBottom: 60,
        }}
      />
      <View style={{width:"90%"}}>
      <View style={{paddingBottom:30}}>
      <Text style={{fontWeight:'bold', fontSize:30,color :"#094781"}}> Login</Text>
     </View>

      <View
       style={{paddingBottom: 80}}>
        <View style={styles.inputContainer}>
          {/* <Feather name="mail" size={24} color="#aaaaaa" style={{paddingRight:10}} /> */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Feather name="mail" size={24} color="#094781" style={{paddingRight:10}} />

        </View>
        <View style={styles.inputContainer}>
          {/* <Feather name="lock" size={24} color="#aaaaaa" style={{paddingRight:10}} /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#094781"
              style={styles.passwordButton}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    // paddingBottom: 50,
    // marginBottom: 200
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor:"#F5F5F5"

  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    // borderWidth: 1,
    borderColor: "#aaaaaa",
    borderRadius: 5,
  },
  passwordButton: {
    padding: 10,
  },
  button: {
    flex:1,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor: "#094781",
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom:80,
    width:"70%",
    marginLeft:40
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
  },
});
