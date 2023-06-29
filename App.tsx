import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings } from './app/pages/Settings';
import { TransportList } from './app/pages/TransportList';
import { appUrls } from './app/routes/appUrls';
import { Map } from './app/pages/Map/Map';
import { Menu } from './app/components/Menu';
import { TransportDetails } from './app/pages/TransportDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appUrls.tranportList}>
        <Stack.Screen name={appUrls.tranportList} component={TransportList} />
        <Stack.Screen name={appUrls.tranportDetails} component={TransportDetails} />
        <Stack.Screen name={appUrls.map} component={Map} />
        <Stack.Screen name={appUrls.settings} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};