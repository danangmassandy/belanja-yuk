import React from "react";
import {View} from "react-native";
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
                            <Icon name="more" style={{marginLeft:10}} />
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