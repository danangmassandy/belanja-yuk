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
export default class CategoriesScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Categories</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Category List - Add and Update</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}