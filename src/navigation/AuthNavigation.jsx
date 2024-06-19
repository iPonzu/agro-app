import { createStackNavigator } from '@react-navigation/stack'
import login from '../screens/login'
import register from '../screens/register'

const Stack = createStackNavigator()

export default function AuthNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={login} />
            <Stack.Screen name="Register" component={register} />
        </Stack.Navigator>
    )
}