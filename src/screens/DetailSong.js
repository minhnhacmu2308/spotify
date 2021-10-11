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
  Animated,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { recently, data1, nghesi, trending } from "../../db/db.js";
class DetailSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
    };
  }
  componentDidMount = async () => {
    let obj = await data1.filter((a) => a.id == this.props.route.params.id);
    await this.setState({
      item: obj,
    });
  };
  left = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Ionicons
          style={{ marginTop: 1 }}
          name="ios-arrow-back"
          size={24}
          color="#aaaaaa"
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#794d3f",
          padding: 10,
        }}
      >
        <Header
          backgroundColor="#794d3f"
          leftComponent={() => this.left()}
          centerComponent={{
            text: "Daily Mix 1",
            style: { color: "#ffff", fontSize: 20 },
          }}
          rightComponent={() => (
            <Entypo name="dots-three-horizontal" size={24} color="#aaaaaa" />
          )}
        />
        <ScrollView>
          {this.state.item.map((l, i) => (
            <View
              key={i}
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <Image
                style={{ height: 300, width: "90%" }}
                source={{
                  uri: l.image,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "#ffff",
                  marginTop: 10,
                }}
              >
                {l.title}
              </Text>
              <Text style={{ fontSize: 18, color: "#aaaaaa" }}>{l.author}</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#aaaaaa"
                thumbTintColor="#ffff"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={28}
                  color="#aaaaaa"
                />

                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderWidth: 1,
                    borderColor: "#aaaaaa",
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    style={{
                      color: "#aaaaaa",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                    name="ios-arrow-back"
                    size={18}
                    color="#aaaaaa"
                  />
                </View>
                <AntDesign
                  style={{ marginTop: -10 }}
                  name="playcircleo"
                  size={48}
                  color="#aaaaaa"
                />
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderWidth: 1,
                    borderColor: "#aaaaaa",
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons
                    style={{
                      color: "#aaaaaa",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                    name="navigate-next"
                    size={24}
                    color="black"
                  />
                </View>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={28}
                  color="#aaaaaa"
                />
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#FF9966",
                  borderRadius: 5,
                  marginTop: 20,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, color: "black" }}
                >
                  Lời bài hát:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "black",
                    marginLeft: 10,
                  }}
                >
                  {l.lyric}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default DetailSong;
