import { type NativeStackNavigationProp,
  createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabs from './bottom-tabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

  export type MainNavigationParamList = {
    MainBottomTabs: undefined;
  }

  export type MainScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationParamList>;


const Stack = createNativeStackNavigator<MainNavigationParamList>();

function MainNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainBottomTabs" screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="MainBottomTabs"
          component={MainBottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;

