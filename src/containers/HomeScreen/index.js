import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';
// import { addNavigationHelpers, DrawerNavigator, StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import {ExpenseScreen, AddExpenseScreen, AddIncomeScreen, ViewExpenseByCategoryScreen} from "../ExpenseScreen";
import {ExpenseHistoryScreen, EditExpenseScreen, EditIncomeScreen} from "../ExpenseHistoryScreen";
import CategoriesScreen from "../CategoriesScreen";

import AddShoppingListScreen from "./AddShoppingListScreen.js";
import {ShoppingListDetailScreen, AddShoppingItemScreen, EditShoppingItemScreen} from "../ShoppingListDetailScreen";

import ItemCatalogScreen from "../ItemCatalogScreen";
import SettingScreen from "../SettingScreen";

import NavigationDrawer from "../SideBar/NavigationDrawer";
import { MenuContext } from 'react-native-menu';

export default class HomeScreenRouter extends Component {
  render() {
    return (
      // You need to place a MenuContext somewhere in your application, usually at the root. 
      // Menus will open within the context, and only one menu can open at a time per context. 
      <MenuContext style={{ flex: 1 }}>
        <Router>
          <Scene key="drawer" component={NavigationDrawer} open={false} >
            <Scene key="root">
                <Scene key="home" component={HomeScreen} initial="true" hideNavBar="true" />
                <Scene key="expense" component={ExpenseScreen} hideNavBar="true" />
                <Scene key="expenseHistory" component={ExpenseHistoryScreen} hideNavBar="true" />
                <Scene key="categories" component={CategoriesScreen} hideNavBar="true" />  

                <Scene key="addShoppingList" component={AddShoppingListScreen} hideNavBar="true" />
                <Scene key="shoppingListDetail" component={ShoppingListDetailScreen} hideNavBar="true" />
                <Scene key="addShoppingItem" component={AddShoppingItemScreen} hideNavBar="true" />
                <Scene key="editShoppingItem" component={EditShoppingItemScreen} hideNavBar="true" />
                <Scene key="addExpense" component={AddExpenseScreen} hideNavBar="true" />
                <Scene key="addIncome" component={AddIncomeScreen} hideNavBar="true" />
                <Scene key="viewExpenseByCategory" component={ViewExpenseByCategoryScreen} hideNavBar="true" />
                <Scene key="editExpense" component={EditExpenseScreen} hideNavBar="true" />
                <Scene key="editIncome" component={EditIncomeScreen} hideNavBar="true" />
                <Scene key="itemCatalog" component={ItemCatalogScreen} hideNavBar="true" />
                <Scene key="setting" component={SettingScreen} hideNavBar="true" />
            </Scene>
          </Scene>
        </Router>
      </MenuContext>
    );
  }

}