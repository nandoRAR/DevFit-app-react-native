import { useLayoutEffect } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import Workout from '../../components/Workout';
import { HeaderBackButton } from '@react-navigation/elements';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const myWorkouts = useSelector(state => state.userReducer.myWorkouts);
    const lastWorkouts = useSelector(state => state.userReducer.lastWorkouts);
    let last = false;
    if (lastWorkouts) {
        last = myWorkouts.find(i => i.id == lastWorkouts);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Escolha seu treino',
            headerTitleAlign: "center",
            headerLeft: () => (
                <HeaderBackButton onPress={handleBackAction} />
            )
        })
    }, []);

    const handleBackAction = () => {
        navigation.dispatch(
            StackActions.replace('AppTab')
        );
    }
    const goWorkout = (workout) => {
        navigation.navigate('WorkoutCheckList', { workout });
    }

    return (
        <C.Container>
            {last &&
                <>
                    <C.Title>Seu último treino foi:</C.Title>
                    <Workout data={last} />
                </>
            }
            <C.Title>Escolha seu treino de hoje:</C.Title>
            <C.WorkoutList
                data={myWorkouts}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        goAction={() => goWorkout(item)}
                    />
                }
            />
        </C.Container>
    )
}