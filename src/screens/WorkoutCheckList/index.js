import { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute, StackActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import ExerciseItem from '../../components/ExerciseItem';



export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    let workout = route.params.workout;
    const [exercises, setExercises] = useState([...workout.exercises]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const checkAction = (item, index) => {
        let newExercises = [...exercises];
        if (!item.done) {
            newExercises[index].done = true;
        } else {
            newExercises[index].done = false;
        }
        setExercises(newExercises);
        checkWorkout();
    }
    const checkWorkout = () => {
        if (exercises.every(i => i.done)) {
            alert('PARABÉNS! Você finalizou!');
            let today = new Date();
            let thisYear = today.getFullYear();
            let thisMonth = today.getMonth() + 1;
            let thisDay = today.getDate();
            thisMonth = (thisMonth < 10) ? `0${thisMonth}` : thisMonth;
            thisDay = (thisDay < 10) ? `0${thisDay}` : thisDay;
            let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            dispatch({ type: 'ADD_PROGRESS', payload: { date: dFormated } });
            dispatch({ type: 'SET_LASTWORKOUT', payload: { id: workout.id } });
            navigation.dispatch(
                StackActions.replace('AppTab')
            );
        }
    }


    return (
        <C.Container source={require('../../assets/fitness.jpg')}>
            <C.SafeArea>
                <C.WorkoutHeader>
                    <C.WorkoutTitle>{workout.name}</C.WorkoutTitle>
                    <C.WorkoutClose onPress={() => navigation.goBack()}>
                        <C.WorkoutCloseText>X</C.WorkoutCloseText>
                    </C.WorkoutClose>
                </C.WorkoutHeader>

                <C.WorkoutList
                    data={exercises}
                    renderItem={({ item, index }) =>
                        <ExerciseItem
                            data={item}
                            index={index}
                            checkAction={() => checkAction(item, index)}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </C.SafeArea>
        </C.Container>
    )
}