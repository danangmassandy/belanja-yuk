import React, { Component } from "react";
import AddShoppingItemScreen from "./AddShoppingItemScreen.js";
import EditShoppingItemScreen from "./EditShoppingItemScreen.js";
import ShoppingListDetailScreen from "./ShoppingListDetailScreen.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  ShoppingListDetailScreen: { screen: ShoppingListDetailScreen },
  AddShoppingItemScreen: { screen: AddShoppingItemScreen },
  EditShoppingItemScreen: { screen: EditShoppingItemScreen }
},{ headerMode: 'none' }));
