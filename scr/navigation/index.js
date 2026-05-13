import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
enableScreens();

const TabStack = createBottomTabNavigator();

function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabStack.Navigator>
          <TabStack.Screen
            name="HomeStack"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <TabStack.Screen name="Details" component={DetailsScreen} />
        </TabStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
