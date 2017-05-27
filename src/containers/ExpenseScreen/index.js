import React, { Component } from "react";
import ExpenseScreen from "./ExpenseScreen.js";
import AddExpenseScreen from "./AddExpenseScreen.js";
import AddIncomeScreen from "./AddIncomeScreen.js";
import ViewExpenseByCategoryScreen from "./ViewExpenseByCategoryScreen.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  ExpenseScreen: { screen: ExpenseScreen },
  AddExpenseScreen: { screen: AddExpenseScreen },
  AddIncomeScreen: { screen: AddIncomeScreen },
  ViewExpenseByCategoryScreen: { screen: ViewExpenseByCategoryScreen }
}));
