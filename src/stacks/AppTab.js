import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';

import HomeStack from './HomeStack';
import MyWorkoutStack from './MyWorkoutStack';
import WorkoutStack from './WorkoutStack';

const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator
        tabBar={props => <CustomTabBar
            {...props}
            items={[
                { type: 'regular', text: 'Início', icon: require('../assets/home.png'), route: 'HomeStack' },
                { type: 'big', icon: require('../assets/dumbbell.png'), route: 'WorkoutStack' },
                { type: 'regular', text: 'Meus Treinos', icon: require('../assets/myworkouts.png'), route: 'MyWorkoutStack' }
            ]}
        />}
        initialRouteName='HomeStack'
        screenOptions={{
            headerShown: false
        }}
    >
        <Tab.Screen name='HomeStack' component={HomeStack} />
        <Tab.Screen name='WorkoutStack' component={WorkoutStack} options={{ tabBarStyle: { display: 'none' } }}/>
        <Tab.Screen name='MyWorkoutStack' component={MyWorkoutStack} />
    </Tab.Navigator>
);