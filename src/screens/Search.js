import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { category } from "../../db/db.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: category,
    };
  }
  right = () => {
    return (
      <View
        style={{
          height: 30,
          width: 50,

          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Feather name="camera" size={24} color="#aaaaaa" />
      </View>
    );
  };
  left = () => {
    return (
      <View style={{ width: 200 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#ffff" }}>
          Tìm kiếm
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
            <View style={{ alignItems: "center" }}>
              <TextInput
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 5,
                  fontSize: 16,
                  paddingLeft: 15,
                  paddingTop: -10,
                  backgroundColor: "#ffff",
                  color: "#aaaaaa",
                  marginHorizontal: 25,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#bbb",
                }}
                placeholder={"Nghệ sĩ ,bài hát or podcasts"}
                placeholderTextColor={"#aaaaaa"}
                underlineColorAndroid="transparent"
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}
              >
                Mới phát gần đây
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              {this.state.category.map((l, i) => (
                <View
                  key={i}
                  style={{
                    width: "48%",
                    borderWidth: 1,
                    height: 100,
                    marginBottom: 20,
                    borderRadius: 5,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    elevation: 3,
                    backgroundColor: l.color,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 21, fontWeight: "bold", color: "#ffff" }}
                  >
                    {l.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Search;
