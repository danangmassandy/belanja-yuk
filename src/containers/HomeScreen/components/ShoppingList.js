import React from "react";
import {View} from 'react-native';
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
import ShoppingListItem from './ShoppingListItem';

class ShoppingList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <View>
                <ShoppingListItem/>
                <ShoppingListItem/>
                <ShoppingListItem/>
            </View>
        );
    }

};


export default ShoppingList;