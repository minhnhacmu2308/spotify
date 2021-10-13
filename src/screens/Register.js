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
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdnimg.vietnamplus.vn/uploaded/bojoka/2020_07_15/spotify.jpg",
          }}
        />
        <TextInput
          style={{
            width: "80%",
            height: 50,
            borderRadius: 25,
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
            width: "80%",
            height: 50,
            borderRadius: 25,
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
          placeholder={"Số điện thoại"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
            width: "80%",
            height: 50,
            borderRadius: 25,
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
          placeholder={"Password"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
            width: "80%",
            height: 50,
            borderRadius: 25,
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
          placeholder={"RePassword"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "#1cd65f",
            width: "80%",
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Đăng kí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#aaaaaa",
              marginTop: 10,
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 180,
    marginBottom: 20,
  },
  btn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#aaaaaa",
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
});
