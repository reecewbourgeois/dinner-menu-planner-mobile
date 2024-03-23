import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Settings" component={View} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
