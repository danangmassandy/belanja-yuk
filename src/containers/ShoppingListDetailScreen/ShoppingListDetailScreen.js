import React from "react";
import { StatusBar } from "react-native";
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
  Right
} from "native-base";
import {Actions} from 'react-native-router-flux';
export default class ShoppingListDetailScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{Actions.pop();}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex:3}}>
              <Title>Shopping List Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Shopping List Detail</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.addShoppingItem();}}
            >
            <Text>Add Shopping Item</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.editShoppingItem();}}
            >
            <Text>Edit Shopping Item</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}