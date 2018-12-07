import React, { Component } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import {
  Fab,
  Icon,
  Content,
  Container,
  Card,
  CardItem,
  Body
} from "native-base";
class Goals extends Component {
  state = {
    goals: []
  };

  componentDidMount() {
    AsyncStorage.getItem("goals").then(res => {
        if (res !== null) {
          let data = JSON.parse(res);
          this.setState({ goals: data });
        }
      });

  }

  render() {
    let {goals} = this.state
    return (
      <Container>
        <Content>
          {goals && goals.map((data, key) => (
            <Card key={key}>
              <CardItem>
                <Body>
                  <Text>{data.value}</Text>
                </Body>
              </CardItem>
            </Card>
          ))}
        </Content>
        <View>
          <Fab
            position="bottomRight"
            style={{ backgroundColor: "#4873A6" }}
            onPress={() => {
              this.props.navigation.navigate("AddComponent", { id: "goals" });
            }}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
export default Goals;
