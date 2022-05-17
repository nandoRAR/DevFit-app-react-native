import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import C from './styles';
import DefaultButton from '../../components/DefaultButton';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const name = useSelector(state => state.userReducer.name);
    const workoutDays = useSelector(state => state.userReducer.workoutDays);
    const level = useSelector(state => state.userReducer.level);
    const setName = (name) => dispatch({ type: 'SET_NAME', payload: { name } });
    const setWorkoutDays = (workoutDays) => dispatch({ type: 'SET_WORKOUTDAYS', payload: { workoutDays } });
    const setLevel = (level) => dispatch({ type: 'SET_LEVEL', payload: { level } });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Configurações'
        })
    }, []);

    const toggleWorkout = (d) => {
        let newWorkoutDays = [...workoutDays];
        if (newWorkoutDays.includes(d)) {
            if (newWorkoutDays.length == 1) {
                alert('Você tem que treinar pelo menos um 1 dia');
                return
            }
            newWorkoutDays = newWorkoutDays.filter(i => i != d);
        } else {
            newWorkoutDays.push(d);
        }
        setWorkoutDays(newWorkoutDays);
    }

    const resetAction = () => {
        dispatch({ type: 'RESET' });
        navigation.dispatch(
            StackActions.replace('StarterStrack')
          );
    }

    return (
        <C.Container>
            <C.Label>Seu nome completo:</C.Label>
            <C.Input value={name} onChangeText={e => setName(e)} />

            <C.Label>Dias em que você treina:</C.Label>
            <C.ListArea>
                <C.DayItem onPress={() => toggleWorkout(1)} style={workoutDays.includes(1) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>S</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(2)} style={workoutDays.includes(2) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>T</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(3)} style={workoutDays.includes(3) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>Q</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(4)} style={workoutDays.includes(4) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>Q</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(5)} style={workoutDays.includes(5) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>S</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(6)} style={workoutDays.includes(6) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>S</C.DayItemText>
                </C.DayItem>
                <C.DayItem onPress={() => toggleWorkout(0)} style={workoutDays.includes(0) ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.DayItemText>D</C.DayItemText>
                </C.DayItem>
            </C.ListArea>

            <C.Label>Seu nível:</C.Label>
            <C.ListArea>
                <C.LevelItem onPress={() => setLevel('beginner')} style={level == 'beginner' ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.LevelItemText>Iniciante</C.LevelItemText>
                </C.LevelItem>
                <C.LevelItem onPress={() => setLevel('intermediate')} style={level == 'intermediate' ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.LevelItemText>Intermediário</C.LevelItemText>
                </C.LevelItem>
                <C.LevelItem onPress={() => setLevel('advanced')} style={level == 'advanced' ? { backgroundColor: '#A5E8BC' } : {}}>
                    <C.LevelItemText>Avançado</C.LevelItemText>
                </C.LevelItem>
            </C.ListArea>

            <C.Label>Você quer resetar tudo?</C.Label>
            <DefaultButton onPress={resetAction} bgcolor="#4AC34E">
                <C.TextButton>Resetar Tudo</C.TextButton>
            </DefaultButton>

        </C.Container>
    )
}