import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require("../assets/logo.png")} />
        <View>
          <TextInput
            placeholder="username"
            style={styles.inputField}
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.inputField}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#322659",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#9BDAF3",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 30,
  },
  image: {},

  inputField: {
    borderColor: "#000",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    borderRadius: 5,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
