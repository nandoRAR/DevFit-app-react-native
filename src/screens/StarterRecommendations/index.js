import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import workoutJson from '../../presetWorkouts.json';
import Workout from '../../components/Workout';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const myWorkouts = useSelector(state => state.userReducer.myWorkouts);

    useLayoutEffect(() => {
        let btnNext = 'Ignorar';
        if (myWorkouts.length > 0) {
            btnNext = 'Concluir';
        }
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <C.NextButton onPress={nextAction}>
                    <C.NextButtonText>{btnNext}</C.NextButtonText>
                </C.NextButton>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, [myWorkouts]);

    const addWorkout = (item) => {
        if (myWorkouts.findIndex(i => i.id === item.id) < 0) {         
            dispatch({ type: 'ADD_WORKOUTS', payload: { workout: item } });
        } else {
            dispatch({ type: 'DEL_WORKOUTS', payload: { workout: item } });
        }
    }

    const nextAction = () => {
        navigation.reset({
            index: 1,
            routes: [{ name: 'AppTab' }]
        });
    }
    return (
        <C.Container>
            <C.HeaderText>Opções de treino pré-criado com base no seu nível</C.HeaderText>
            <C.HeaderText>Você selecionou {myWorkouts.length} treino{myWorkouts.length == 1 ? '': 's'}</C.HeaderText>

            <C.WorkoutList
                data={workoutJson}
                renderItem={({ item }) => <Workout data={item} addAction={() => addWorkout(item)} />}
                keyExtractor={item => item.id}
            />
        </C.Container>
    )
}