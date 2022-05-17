import { createStackNavigator } from '@react-navigation/stack';
import WorkoutSelect from '../screens/WorkoutSelect';
import WorkoutCheckList from '../screens/WorkoutCheckList';


const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator initialRouteName='WorkoutSelect'>
            <Stack.Screen name='WorkoutSelect' component={WorkoutSelect} />
            <Stack.Screen name='WorkoutCheckList' component={WorkoutCheckList} />
        </Stack.Navigator >
    );

}