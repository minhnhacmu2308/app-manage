import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
const { height, width } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nof: "",
    };
  }
  onLogin = () => {
    if (
      this.state.email == "nguyentinh@gmail.com" &&
      this.state.password == "123456"
    ) {
      this.props.navigation.navigate("Main");
    } else {
      this.setState({
        nof: "Email or password is incorret",
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.beeart.vn/Uploads/project/20200701/435a6814-c5a5-42d0-9088-f73280c13de6.jpg",
          }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 5,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#3366FF",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Email"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 5,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#3366FF",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "red" }}>{this.state.nof}</Text>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.onLogin()}
        >
          <Text style={styles.textlogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      // <TouchableOpacity style={{marginTop:100}} onPress={() => this.props.navigation.navigate("Main")}>
      //   <Text>Login</Text>
      // </TouchableOpacity>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#694fad",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textlogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#694fad",
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#ffff",
    justifyContent: "center",
  },
});
