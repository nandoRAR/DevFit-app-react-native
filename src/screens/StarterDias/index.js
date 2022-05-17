import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';

import DefaultButton from '../../components/DefaultButton';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const name = useSelector(state => state.userReducer.name);
    const workoutDays = useSelector(state => state.userReducer.workoutDays);
    let FirstName = name.split(' ')[0];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <C.NextButton onPress={nextAction}>
                    <C.NextButtonText>Próximo</C.NextButtonText>
                </C.NextButton>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, [workoutDays]);

    const toggleDay = (d) => {
        let newWorkoutDays = [...workoutDays];
        if(!workoutDays.includes(d)) {
            newWorkoutDays.push(d);
        }else {
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }
        dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays: newWorkoutDays}});
    }

    const nextAction = () => {
        if (!workoutDays.length) {
            alert("Você precisa treinar pelo menos 1 dia!");
            return
        }
        navigation.navigate('StarterNivel');
    }
    return (
        <C.Container>
            <C.HeaderText>Opa <C.BoldText>{FirstName}</C.BoldText>, tudo bem?</C.HeaderText>
            <C.HeaderText>Quais <C.BoldText>dias da semana</C.BoldText>você pretende treinar?</C.HeaderText>

            <C.DaysArea>
                <DefaultButton bgcolor={workoutDays.includes(1)?'#A5E8BC':false} onPress={()=>toggleDay(1)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Segunda</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(2)?'#A5E8BC':false}  onPress={()=>toggleDay(2)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Terça</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(3)?'#A5E8BC':false}  onPress={()=>toggleDay(3)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Quarta</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(4)?'#A5E8BC':false}  onPress={()=>toggleDay(4)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Quinta</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(5)?'#A5E8BC':false}  onPress={()=>toggleDay(5)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Sexta</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(6)?'#A5E8BC':false}  onPress={()=>toggleDay(6)} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Sábado</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={workoutDays.includes(0)?'#A5E8BC':false}  onPress={()=>toggleDay(0)}width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <C.Texto>Domingo</C.Texto>
                </DefaultButton>
            </C.DaysArea>
        </C.Container>
    )
}