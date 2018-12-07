import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from "react-native";
import { Fab, Icon, Content, Container,Card,CardItem,Body } from "native-base";
class Motivation extends Component {
  state = {
    motivation: []
  };
  componentDidMount() {
    AsyncStorage.getItem("motivation").then(res => {
      if (res !== null) {
        let data = JSON.parse(res);
        this.setState({ motivation: data });
      }
    });
  }

  render() {
    let { motivation } = this.state;
    return (
      <Container>
        <Content style={{ flex: 1 }}>
          {motivation.length > 1 && (
            <Fragment>
              {motivation.map((data, key) => (
                <Card key={key}>
                  <CardItem>
                    <Body>
                      <Text>{data.value}</Text>
                    </Body>
                  </CardItem>
                </Card>
              ))}
            </Fragment>
          )}
        </Content>
        <View>
          <Fab
            position="bottomRight"
            style={{ backgroundColor: "#4873A6" }}
            onPress={() => {
              this.props.navigation.navigate("AddComponent",{id:'motivation'});
            }}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
export default Motivation;
const styles = StyleSheet.create({
  touchable: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "orange",
    width: 50,
    height: 50,
    borderRadius: 25
  },
  buttonCircle: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "#4873A6",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    alignSelf: "flex-end",
    zIndex: 50
  },
  textClick: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center"
  }
});
