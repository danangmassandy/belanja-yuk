import React from "react";
import { View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Fab
} from "native-base";
import {Actions} from 'react-native-router-flux';
export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value });}}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex:3}}>
            <Title>My Shopping List</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.shoppingListDetail();}}
            >
            <Text>View Shopping List</Text>
          </Button>
        </Content>
        <Fab
            position="bottomRight"
            direction="up"
            onPress={() => {Actions.addShoppingList();}}>
              <Icon name="add" />
          </Fab>
      </Container>
    );
  }
}