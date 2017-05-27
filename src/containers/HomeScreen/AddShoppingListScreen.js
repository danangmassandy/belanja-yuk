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
export default class AddShoppingListScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
        <Left>
          <Button transparent>
          <Icon name="arrow-back" />
          </Button>
      </Left>
      <Body>
          <Title>Add Shopping List</Title>
      </Body>
      <Right />
      </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Add Shopping List</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
