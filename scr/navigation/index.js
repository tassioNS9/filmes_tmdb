import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import FavoritesScreen from '../screens/Favorites';
import TicketsScreen from '../screens/Tickets';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetailScreen from '../screens/MovieDetail';
import Tabbar from './Tabbar';
enableScreens();

const HomeStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Inicio">
      <HomeStack.Screen
        name="Inicio"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="MovieDetails" component={MovieDetailScreen} />
    </HomeStack.Navigator>
  );
}
function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabStack.Navigator tabBar={Tabbar}>
          <TabStack.Screen
            name="HomeStack"
            options={{ headerShown: false }}
            component={HomeStackNavigation}
          />
          <TabStack.Screen name="Favorites" component={FavoritesScreen} />
          <TabStack.Screen name="Tickets" component={TicketsScreen} />
        </TabStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
