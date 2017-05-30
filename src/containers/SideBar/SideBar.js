import React from "react";
import {PropTypes} from "react";
import {ViewPropTypes} from "react-native";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import {Actions} from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

export default class SideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.drawer = context.drawer;
  }
  render() {
    const drawer = this.drawer;
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              button onPress={()=>{drawer.close();Actions.home();}}>
              <Text>Home</Text>
            </ListItem>
            <ListItem
              button onPress={()=>{drawer.close();Actions.expense();}}>
              <Text>Expense</Text>
            </ListItem>
            <ListItem
              button onPress={()=>{drawer.close();Actions.expenseHistory();}}>
              <Text>Expense History</Text>
            </ListItem>
            <ListItem
              button onPress={()=>{drawer.close();Actions.categories();}}>
              <Text>Categories</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
};

SideBar.contextTypes = contextTypes;