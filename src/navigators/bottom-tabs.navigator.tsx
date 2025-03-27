import { Colors } from '@constants';
import Icon from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator, BottomTabBarButtonProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { HomeScreen, WatchlistScreen } from '@screens';
import { ReactNode } from 'react';

export type BottomTabParamList = {
  HomeScreen: undefined;
  WatchListScreen: undefined;
};

type TabIconProps = {
  color: string;
  size: number; 
}
interface TabOption {
  label?: string;
  icon: (props: TabIconProps) => ReactNode,
  button?: (props: BottomTabBarButtonProps) => ReactNode;
}

const renderTabIcon = (icon: 'home' | 'bookmark') => (props: TabIconProps) => <Icon size={props.size} name={icon} color={props.color} />;

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

function MainBottomTabs() {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen name="HomeScreen" options={setTabOptions({ icon: renderTabIcon('home')})} component={HomeScreen} />
      <MainTab.Screen name="WatchListScreen" options={setTabOptions({ icon: renderTabIcon('bookmark') })} component={WatchlistScreen} />
    </MainTab.Navigator>
  );
}

export default MainBottomTabs;
