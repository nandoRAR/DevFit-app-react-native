import { createStackNavigator } from '@react-navigation/stack';

import StarterInfo from '../screens/StarterInfo';
import StarterName from '../screens/StarterName';
import StarterDias from '../screens/StarterDias';
import StarterNivel from '../screens/StarterNivel';
import StarterRecommendations from '../screens/StarterRecommendations';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName='StarterInfo'>
            <Stack.Screen name='StarterInfo' component={StarterInfo} />
            <Stack.Screen name='StarterName' component={StarterName} />
            <Stack.Screen name='StarterDias' component={StarterDias} />
            <Stack.Screen name='StarterNivel' component={StarterNivel} />
            <Stack.Screen name='StarterRecommendations' component={StarterRecommendations} />
        </Stack.Navigator >
    );

}