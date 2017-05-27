import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, DrawerNavigator, StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import ExpenseScreen from "../ExpenseScreen";
import ExpenseHistoryScreen from "../ExpenseHistoryScreen";
import CategoriesScreen from "../CategoriesScreen";

import AddShoppingListScreen from "./AddShoppingListScreen.js";
import ShoppingListDetailNavigator from "../ShoppingListDetailScreen"

const HomeScreenNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  AddShoppingListScreen: { screen: AddShoppingListScreen },
  ShoppingListDetailScreen: { screen: ShoppingListDetailNavigator }
});

export default HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenNavigator },
    Expense: { screen: ExpenseScreen },
    History: { screen: ExpenseHistoryScreen },
    Categories: { screen: CategoriesScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);