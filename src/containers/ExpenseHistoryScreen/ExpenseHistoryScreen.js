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
export default class ExpenseHistoryScreen extends React.Component {
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
            <Title>History</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Expense - Income History By Month and Edit</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.editExpense();}}
            >
            <Text>Edit Expense</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.addIncome();}}
            >
            <Text>Edit Income</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
