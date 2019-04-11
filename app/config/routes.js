import React from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import MoviesScreen from "../screens/MoviesScreen";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import MovieListScreen from "../screens/MovieListScreen";
import ReduxScreen from "../screens/ReduxScreen";

const MovieStack = createStackNavigator(
  {
    Movies: {
      //route
      screen: MoviesScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Movies",
        headerLeft: (
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Icon
              name="md-menu"
              size={24}
              color="white"
              style={{
                paddingHorizontal: 16
              }}
            />
          </TouchableOpacity>
        )
      })
    },
    MovieDetail: {
      //route
      screen: MovieDetailScreen,
      navigationOptions: {
        title: "Detail"
      }
    },
    MovieList: {
      screen: MovieListScreen
    }
  },
  {
    initialRouteName: "Movies",

    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "white"
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        drawerIcon: <Icon size={24} color="white" name="md-search" />
      }
    },
    Movies: {
      screen: MovieStack,
      navigationOptions: {
        drawerIcon: <Icon size={24} color="white" name="md-film" />
      }
    },
    Redux: {
      screen: ReduxScreen
    }
  },
  {
    initialRouteName: "Movies",
    drawerBackgroundColor: "black",
    contentOptions: {
      labelStyle: {
        color: "white",
        fontSize: 24
      },
      activeBackgroundColor: "red"
    },

    style: {
      flex: 1,
      justifyContent: "center"
    }
  }
);

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
