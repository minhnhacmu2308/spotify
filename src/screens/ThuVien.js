import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { nghesi } from "../../db/db.js";

class ThuVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nghesi: nghesi,
    };
  }
  right = () => {
    return (
      <View
        style={{
          height: 30,
          width: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <FontAwesome
          style={{ marginRight: 15 }}
          name="search"
          size={24}
          color="#aaaaaa"
        />
        <Entypo name="plus" size={30} color="#aaaaaa" />
      </View>
    );
  };
  left = () => {
    return (
      <View style={{ width: 200, flexDirection: "row" }}>
        <Image
          style={{ width: 35, height: 35, borderRadius: 50 }}
          source={{
            uri: "https://i.pinimg.com/originals/c2/9a/7d/c29a7d29348b1a3f502803ab9d8355cc.png",
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#ffff",
            marginLeft: 10,
          }}
        >
          Thư viện
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          padding: 10,
        }}
      >
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
                marginTop: 20,
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Feather name="trending-up" size={24} color="#aaaaaa" />
              <Text style={{ color: "#aaaaaa", fontSize: 18 }}>
                Mới phát gần đây
              </Text>
              <AntDesign name="qrcode" size={24} color="#aaaaaa" />
            </View>
            {this.state.nghesi.map((l, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <Image
                  style={{ width: 60, height: 60, borderRadius: 50 }}
                  source={{
                    uri: l.image,
                  }}
                />
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#aaaaaa",
                      fontSize: 20,
                    }}
                  >
                    {l.title}
                  </Text>
                  <Text style={{ color: "#aaaaaa", fontSize: 16 }}>
                    Nghệ sĩ
                  </Text>
                </View>
              </View>
            ))}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: "#666666",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="plus" size={30} color="#aaaaaa" />
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#aaaaaa",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Thêm nghệ sĩ
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 5,
                  backgroundColor: "#666666",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="plus" size={30} color="#aaaaaa" />
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#aaaaaa",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Thêm podcast và chương trình
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ThuVien;
