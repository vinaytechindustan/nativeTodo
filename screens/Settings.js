import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Settings Component</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.push("Settings")}
        />
         <View>
            <Text></Text>
        </View>
          <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
         <View>
            <Text></Text>
        </View>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default Settings;
