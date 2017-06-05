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
import ShoppingList from './components/ShoppingList';

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
          <View
            style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-around'}}>
            <Button
                transparent
                bordered={this.props.displayType === 'all'}
              >
                <Text>All</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'completed'}
              >
                <Text>Completed</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'active'}
              >
                <Text>Active</Text>
              </Button>
          </View>

          <ShoppingList />
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


          /*<Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.shoppingListDetail();}}
            >
            <Text>View Shopping List</Text>
          </Button>*/