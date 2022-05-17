import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import HomeConfig from '../screens/HomeConfig';


const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='HomeConfig' component={HomeConfig} />
        </Stack.Navigator >
    );

}