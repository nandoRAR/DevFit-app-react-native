import { createStackNavigator } from '@react-navigation/stack';
import MyWorkouts from '../screens/MyWorkouts';
import EditWorkout from '../screens/EditWorkout';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator initialRouteName='MyWorkouts'>
            <Stack.Screen name='MyWorkouts' component={MyWorkouts} />
            <Stack.Screen name='EditWorkout' component={EditWorkout} />
        </Stack.Navigator >
    );

}