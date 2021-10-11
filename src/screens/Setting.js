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
import {
  Header,
  ListItem,
  Avatar,
  SearchBar,
  Icon,
} from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { recently, data1, nghesi, list1, list } from "../../db/db.js";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: list,
      data1: list1,
    };
  }
  right = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Login")}
        style={{
          height: 30,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="logout-variant"
          size={24}
          color="#aaaaaa"
        />
      </TouchableOpacity>
    );
  };
  left = () => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 10,
          flexDirection: "row",
          width: 200,
          alignItems: "center",
        }}
        onPress={() => this.props.navigation.goBack()}
      >
        <Ionicons
          style={{ marginTop: 1 }}
          name="ios-arrow-back"
          size={24}
          color="#aaaaaa"
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#aaaaaa",
            marginLeft: 10,
            fontSize: 20,
          }}
        >
          Setting
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Header
          backgroundColor="black"
          leftComponent={() => this.left()}
          rightComponent={() => this.right()}
        />
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                padding: 10,
              }}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{
                  uri: "https://kenh14cdn.com/203336854389633024/2021/10/10/photo-1-1633871923969148988425.jpg",
                }}
              />
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 20,
                  }}
                >
                  Nguyễn Thanh Tùng
                </Text>
                <Text style={{ color: "#aaaaaa", fontSize: 16 }}>
                  Thành Viên
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
              Cá Nhân
            </Text>
            {this.state.data.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
              Dịch Vụ
            </Text>
            {this.state.data1.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
            <View style={{ width: "100%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.btnLogin}
              >
                <Text style={styles.textlogin}>LOGOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Setting;
const styles = StyleSheet.create({
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "black",
    marginTop: 25,
    justifyContent: "center",
  },
  textlogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
  },
});
