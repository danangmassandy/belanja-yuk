import React from "react";
import {TouchableOpacity, View} from "react-native";
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

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const renderTouchable = () => <TouchableOpacity/>;

class ShoppingListItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            List 1
                        </Text>
                    </Body>
                    <Right>
                        <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
                            <Text>
                                2/4
                            </Text>
                            <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
                                <MenuTrigger renderTouchable={renderTouchable}>
                                    <Icon name="more" style={{marginLeft:10}} />
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption value={1}>
                                    <Text>One</Text>
                                    </MenuOption>
                                    <MenuOption value={2}>
                                    <Text>Two</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    </Right>
                </CardItem>
                <CardItem>
                        <View
                            style={{
                                flex: 0.75,
                                borderBottomColor: 'blue',
                                borderBottomWidth: 1
                            }}
                            />
                        <View
                            style={{
                                flex: 0.25,
                                borderBottomColor: 'lightblue',
                                borderBottomWidth: 1
                            }}
                            />
                </CardItem>
            </Card>
        );
    }

};


export default ShoppingListItem;