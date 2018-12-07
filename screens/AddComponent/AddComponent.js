import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Container, Header, Content, Textarea, Form } from "native-base";
import { AsyncStorage } from "react-native";
import Goals from "../Goals/Goals";
class AddComponent extends Component {
  state = {
    text: ""
  };

  addClick = () => {
    let key=this.props.navigation.getParam("id");
    let data={id:"",value:this.state.text};
    if(key=="goals"){
        data={id:"",value:this.state.text,done:false}
    }
    AsyncStorage.getItem(key).then(res=>{
        if(res !==null){
            let prevData=JSON.parse(res);
             data.id=prevData.length;
             prevData.push(data);
             AsyncStorage.setItem(key,JSON.stringify(prevData));

        }else{
            data.id=0;
            let moddata=JSON.stringify([data]);
            AsyncStorage.setItem(key,moddata);
        }
    })

  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Textarea"
              onChangeText={text => {
                this.setState({ text });
              }}
            />
          </Form>
          <Button title="Add" onPress={this.addClick} />
        </Content>
      </Container>
    );
  }
}
export default AddComponent;
