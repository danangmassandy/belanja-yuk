import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from "./src/reducers";
import HomeScreenRouter from "./src/containers/HomeScreen/index.js";

class App extends React.Component {
  store = createStore(AppReducer);
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={this.store}>
        <HomeScreenRouter />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
