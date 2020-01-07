import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  ComponentsContainer,
  LayoutsContainer,
  MenuContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  Article1Container,
  Article2Container,
  Article3Container,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
  ArticleList4Container,
  ArticlesContainer,
} from '@src/containers/layouts/articles';

import {
  AddNewCardContainer,
  BookDetailsContainer,
  EcommerceContainer,
  MovieDetailsContainer,
  PaymentContainer,
  ProductDetailsContainer,
  ProductsListContainer,
  RentApartmentContainer,
  ShoppingCartContainer,
} from '@src/containers/layouts/ecommerce';

import {
  ArticlesNavigationOptions,
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
  MenuNavigationOptions,
  SocialNavigationOptions,
} from './options';

const EcommerceNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Add New Card']: {
    screen: AddNewCardContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Payment']: {
    screen: PaymentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Products List']: {
    screen: ProductsListContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Product Details']: {
    screen: ProductDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Shopping Cart']: {
    screen: ShoppingCartContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Rent Apartment']: {
    screen: RentApartmentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Movie Details']: {
    screen: MovieDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Book Details']: {
    screen: BookDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
};





const ArticlesNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Article List 1']: {
    screen: ArticleList1Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 2']: {
    screen: ArticleList2Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 3']: {
    screen: ArticleList3Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 4']: {
    screen: ArticleList4Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 1']: {
    screen: Article1Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 2']: {
    screen: Article2Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 3']: {
    screen: Article3Container,
    navigationOptions: ArticlesNavigationOptions,
  },
};





const ThemesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);





const MenuNavigator = createBottomTabNavigator({
  ['Layouts']: ArticleList1Container,
  ['Components']: ProductsListContainer,
  ['Tour']: Article1Container
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...ArticlesNavigationMap,
  ...EcommerceNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
