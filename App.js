import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Card,
  CardItem,
  Body
} from "react-native";
import { Content } from "native-base";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Today from "./Today";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Motivation from "./screens/Motivation/Motivation";
import Goals from "./screens/Goals/Goals";
import AddComponent from "./screens/AddComponent/AddComponent";
class App extends React.Component {
  loadPage = id => () => {
    console.log(id,'the id');
    this.props.navigation.navigate(id);
  };

  render() {
    return (
      <Content>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.container_coloumn, styles.colorA, styles.card]} onPress={this.loadPage("Motivation")}>
              <Text style={[styles.textHeader]}>MOTIVATION </Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={[styles.container_coloumn, styles.colorB, styles.card]}
            onPress={this.loadPage("Goals")}
          >
              <Text style={[styles.textHeader]}>GOALS</Text>
          </TouchableOpacity>
          <View
            style={[styles.container_coloumn, styles.colorC, styles.card]}
            onPress={this.loadPage("b")}
          >
            <View onPress={this.loadPage("c")}>
              <Text style={[styles.textHeader]}>C</Text>
            </View>
          </View>
          <View style={[styles.container_coloumn, styles.colorD, styles.card]}>
            <View onPress={this.loadPage("d")}>
              <Text style={[styles.textHeader]}>D</Text>
            </View>
          </View>
          <View style={[styles.container_coloumn, styles.colorE, styles.card]}>
            <View onPress={this.loadPage("todo")}>
              <Text style={[styles.textHeader]}>To Do</Text>
            </View>
          </View>
          <View style={[styles.container_coloumn, styles.colorF, styles.card]}>
            <View style={this.loadPage("E")}>
              <Text style={[styles.textHeader]}>E</Text>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}
const HomeStack = createStackNavigator(
  {
    Home: App,
    Today: Today,
    Motivation,
    Goals,
    AddComponent
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4873A6"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const SettingsStack = createStackNavigator({
  Settings: Settings,
  Profile: Profile
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
});
export default createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  container_coloumn: {
    flexBasis: "50%"
  },
  colorA: {
    backgroundColor: "#54BDF4"
  },
  colorB: {
    backgroundColor: "#4873A6"
  },
  colorC: {
    backgroundColor: "#404996"
  },
  colorD: {
    backgroundColor: "#5B538B"
  },
  colorE: {
    backgroundColor: "#524364"
  },
  colorF: {
    backgroundColor: "#4873A6"
  },
  colorG: {
    backgroundColor: "#FE748D"
  },
  textHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  card: {
    height: 180,
    paddingHorizontal: "2%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  }
});
