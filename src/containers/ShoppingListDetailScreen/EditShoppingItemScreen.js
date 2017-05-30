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
export default class EditShoppingItemScreen extends React.Component {
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
              <Title>Edit Shopping Item</Title>
          </Body>
        <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Edit Shopping Item</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}