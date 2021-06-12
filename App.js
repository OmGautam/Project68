import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FaceBookScreen from './screens/FaceBookScreen'
import InstagramScreen from './screens/InstagramScreen'

export default class App extends React.Component{

  render(){
    return (
        <AppContainer/>
      );
    }
  }

  const TabNavigator=createBottomTabNavigator({
    Instagram:{screen:InstagramScreen},
    Facebook:{screen:FaceBookScreen}
  })
  
  const AppContainer = createAppContainer(TabNavigator);

