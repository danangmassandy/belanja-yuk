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
export default class CategoriesScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value });}}
              >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex:3}}>
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