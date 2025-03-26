import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator();

function MainBottomTabs() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={null} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
}

export default MainBottomTabs;
