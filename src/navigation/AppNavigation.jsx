import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 
import homepage from '../screens/homepage'; 
import theme from '../screens/theme'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen
                    name="Home"
                    component={homepage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Theme"
                    component={theme}
                    options={{
                        tabBarLabel: 'Theme',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="theme-light-dark" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}