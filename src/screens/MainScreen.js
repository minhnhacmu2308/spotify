import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import Home from "./Home.js";
import Search from "./Search.js";
import Setting from "./Setting.js";
import ThuVien from "./ThuVien.js";
import DetailSong from "./DetailSong.js";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons, Feather } from "@expo/vector-icons";

class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: "black" }}
        initialRouteName="Trang Chủ"
        activeColor="#f0edf6"
        inactiveColor="#aaaaaa"
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
          name="Trang Chủ"
          component={Main}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
          name="Tìm kiếm"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="text-document" size={24} color={color} />
            ),
          }}
          name="Thư Viện"
          component={ThuVien}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={24} color={color} />
            ),
          }}
          name="Cài đặt"
          component={Setting}
        />
      </Tab.Navigator>
    );
  }
}
const Main = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
        },

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
export default MainScreen;
