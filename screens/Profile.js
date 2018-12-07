import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile Component</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.push("Profile")}
        />
        <View>
            <Text></Text>
        </View>
          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
export default Profile;
