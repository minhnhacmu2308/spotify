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
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { recently, data1, nghesi, trending } from "../../db/db.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecent: [],
      data1: data1,
      nghesi: nghesi,
      trending: trending,
    };
  }
  componentDidMount = () => {
    this.setState({
      dataRecent: recently,
    });
  };
  right = () => {
    return (
      <View
        style={{
          height: 30,
          width: 50,
          backgroundColor: "#aaaaaa",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <MaterialIcons name="notifications" size={24} color="#ffff" />
      </View>
    );
  };
  left = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#1cd65f" }}>
          Spotify
        </Text>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png",
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
        <Header
          backgroundColor="black"
          leftComponent={() => this.left()}
          rightComponent={() => this.right()}
        />
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
              Mới phát gần đây
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.dataRecent.map((l, i) => (
                <View key={i}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <Text
                    style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                  >
                    {l.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
              Hãy thử cách khác
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.data1.map((l, i) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Detail", { id: l.id })
                  }
                  key={i}
                >
                  <Image
                    style={styles.image1}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View style={{ width: 160 }}>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                    >
                      {l.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
              Nhưng bản nhạc thịnh hành nhất
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.trending.map((l, i) => (
                <View key={i}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View style={{ width: 160 }}>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                    >
                      {l.title}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
              Nghệ sĩ được đề xuất
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.nghesi.map((l, i) => (
                <View
                  key={i}
                  style={{
                    width: 160,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={styles.image2}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View style={{ marginLeft: -10 }}>
                    <Text
                      style={{
                        color: "#aaaaaa",
                        fontSize: 16,
                        marginTop: 5,
                      }}
                    >
                      {l.title}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 110,
    marginTop: 10,
    borderRadius: 3,
    marginRight: 10,
  },
  image1: {
    width: 160,
    height: 140,
    marginTop: 10,
    borderRadius: 3,
    marginRight: 10,
  },
  image2: {
    width: 130,
    height: 130,
    marginTop: 10,
    borderRadius: 70,
    marginRight: 10,
  },
});
