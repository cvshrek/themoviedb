import { Colors, Fonts, FontSizes } from '@constants';
import { type NativeStackNavigationProp,
  createNativeStackNavigator,
  NativeStackNavigationOptions } from '@react-navigation/native-stack';
import MainBottomTabs from './bottom-tabs.navigator';
import { NavigationContainer } from '@react-navigation/native';

  export type MainNavigationParamList = {
    MainBottomTabs: undefined;
  }

  export type MainScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationParamList>;

  type ScreenOptions = {
    title?: string;
    headerBackgroundColor?: string;
    headerShown?: boolean;
  };

  const setScreenOptions = (
    options: ScreenOptions
  ): NativeStackNavigationOptions => ({
    title: options.title,
    headerStyle: {
      backgroundColor: options.headerBackgroundColor ?? Colors.white
    },
    headerTitleStyle: {
      fontFamily: Fonts.PRIMARY_BOLD,
      fontSize: FontSizes.font_16,
    },
    headerShadowVisible: false,
    headerTintColor: Colors.black,
    headerTitleAlign: "center",
    headerBackVisible: false,
    headerShown: options.headerShown ?? false
  });

const Stack = createNativeStackNavigator<MainNavigationParamList>();

function MainNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainBottomTabs">
        <Stack.Screen
          name="MainBottomTabs"
          component={MainBottomTabs}
          options={setScreenOptions({ headerShown: false })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;

