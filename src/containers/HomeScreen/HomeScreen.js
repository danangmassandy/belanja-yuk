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
import { connect } from 'react-redux';
import ShoppingList from './components/ShoppingList';

import {setVisibilityFilter} from '../../actions/shoppingListActions';

class HomeScreen extends React.Component {

  static propTypes = {
    setVisibilityFilter: React.PropTypes.func,
    displayType: React.PropTypes.string,
  }


  constructor(props, context) {
    super(props, context);

    this.state = { displayType: 'all' };
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
                onPress={()=>{this.props.setVisibilityFilter('all')}}
              >
                <Text>All</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'completed'}
                onPress={()=>{this.props.setVisibilityFilter('completed')}}
              >
                <Text>Completed</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'active'}
                onPress={()=>{this.props.setVisibilityFilter('active')}}
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
};

function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList,
    displayType: state.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVisibilityFilter: displayType => dispatch(setVisibilityFilter(displayType)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);



          /*<Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={()=>{Actions.shoppingListDetail();}}
            >
            <Text>View Shopping List</Text>
          </Button>*/