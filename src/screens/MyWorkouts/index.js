import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import Workout from '../../components/Workout';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const name = useSelector(state => state.userReducer.name);
    const myWorkouts = useSelector(state => state.userReducer.myWorkouts);
    const delWorkout = (workout) => dispatch({ type: 'DEL_WORKOUTS', payload: { workout } });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meus Treinos',
            headerTitleAlign: "center",
            headerRight: () => (
                <C.ButtonArea onPress={btnAction} underlayColor="transparent">
                    <C.ButtonImage source={require('../../assets/add.png')} />
                </C.ButtonArea>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, []);

    const btnAction = () => {
        navigation.navigate('EditWorkout');
    }

    const editWorkout = (workout) => {
        navigation.navigate('EditWorkout', { workout });
    }


    return (
        <C.Container>
            <C.WorkoutList
                data={myWorkouts}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        editAction={() => editWorkout(item)}
                        delAction={() => delWorkout(item)}
                    />
                }
            />
        </C.Container>
    )
}