import { Colors } from '@constants';
import Icon from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator, BottomTabBarButtonProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreen, MovieDetailsScreen, WatchlistScreen } from '@screens';
import React, { ReactNode } from 'react';

export type HomeNavigationParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: {
    id: number
  }
} 

export type BottomTabParamList = {
  HomeStack: undefined;
  WatchListScreen: undefined;
};

export type HomeNavigationProp =
  NativeStackNavigationProp<HomeNavigationParamList>;

type TabIconProps = {
  color: string;
  size: number; 
}
interface TabOption {
  label?: string;
  icon: (props: TabIconProps) => ReactNode,
  button?: (props: BottomTabBarButtonProps) => ReactNode;
}

const renderTabIcon = (icon: 'home' | 'bookmark') => {
  const TabIcon = (props: TabIconProps) => <Icon size={props.size} name={icon} color={props.color} />;
  TabIcon.displayName = `TabIcon(${icon})`;
  return TabIcon;
};

const setTabOptions = (options: TabOption): BottomTabNavigationOptions => ({
  tabBarLabel: options.label,
  tabBarIcon: options.icon,
  tabBarActiveTintColor: Colors.white,
  tabBarStyle: {
    backgroundColor: Colors.primary,
  },
  tabBarShowLabel: false,
});

const MainTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createNativeStackNavigator<HomeNavigationParamList>();

function HomeNavigator(): React.ReactElement {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
      />
    </HomeStack.Navigator>
  )
}

function MainBottomTabs(): React.ReactElement {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen name="HomeStack" options={setTabOptions({ icon: renderTabIcon('home')})} component={HomeNavigator} />
      <MainTab.Screen name="WatchListScreen" options={setTabOptions({ icon: renderTabIcon('bookmark') })} component={WatchlistScreen} />
    </MainTab.Navigator>
  );
}

export default MainBottomTabs;
