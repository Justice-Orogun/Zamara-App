import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require("./assets/logo.png")} />
        <View>
          <TextInput placeholder="username" style={styles.inputField} />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
