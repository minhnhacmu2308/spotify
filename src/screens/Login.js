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

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdnimg.vietnamplus.vn/uploaded/bojoka/2020_07_15/spotify.jpg",
          }}
        />
        <View
          style={{
            height: 80,
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <Text style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 30 }}>
            Hàng triệu bài hát
          </Text>
          <Text style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 30 }}>
            Miễn phí trên Spotify
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Main")}
          style={{
            backgroundColor: "#1cd65f",
            width: "80%",
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Đăng kí miễn phí
          </Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
            <Feather name="smartphone" size={24} color="#aaaaaa" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục với số điện thoại
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
            <AntDesign name="google" size={24} color="red" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục bằng Google
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
            <Entypo name="facebook-with-circle" size={24} color="blue" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục bằng facebook
            </Text>
          </View>
        </View>
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
      </View>
    );
  }
}

export default Login;
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
