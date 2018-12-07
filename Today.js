import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class Today extends Component {
    static navigationOptions={
        headerTitle:<Button title="go to home"  onPress={() => alert('Clicked Success')}
        />,
        headerRight:<Text>hello</Text>
    }
  render() {
    return (
      <View>
        <Text>Today Component</Text>
        <Button
          title="Go to Today"
          onPress={() => this.props.navigation.push("Today")}
        />
         <View>
            <Text>{this.props.navigation.getParam("id")}</Text>
        </View>
          <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
         <View>
            <Text>{this.props.navigation.getParam("detail")}</Text>
        </View>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default Today;
