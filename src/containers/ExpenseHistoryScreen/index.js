import React, { Component } from "react";
import ExpenseHistoryScreen from "./ExpenseHistoryScreen.js";
import EditExpenseScreen from "./EditExpenseScreen.js";
import EditIncomeScreen from "./EditIncomeScreen.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  ExpenseHistoryScreen: { screen: ExpenseHistoryScreen },
  EditExpenseScreen: { screen: EditExpenseScreen },
  EditIncomeScreen: { screen: EditIncomeScreen }
}));
