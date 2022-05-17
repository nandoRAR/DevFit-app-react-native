import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';

import DefaultButton from '../../components/DefaultButton';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const level = useSelector(state => state.userReducer.level);
    const workoutDays = useSelector(state => state.userReducer.workoutDays);
    let funnyPhrase = '';
    switch (workoutDays.length) {
        case 1:
            funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
            break;
        case 2:
            funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?';
            break;
        case 3:
            funnyPhrase = 'Legal, 3 dias dá pro gasto...';
            break;
        case 4:
            funnyPhrase = 'Legal, 4 dias vai ser TOP!';
            break;
        case 5:
            funnyPhrase = 'É isso aí, 5 dias é o mínimo lets GO!';
            break;
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...';
            break;
        case 7:
            funnyPhrase = 'WoooW! Todo dia? WTF?';
            break;
    }

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
    }, [level]);

    const setMyLevel = (l) => {
        dispatch({ type: 'SET_LEVEL', payload: { level: l } });
    }

    const nextAction = () => {
        if (!level) {
            alert("Você precisa escolher uma opação");
            return
        }
        navigation.navigate('StarterRecommendations');
    }
    return (
        <C.Container>
            <C.HeaderText>{funnyPhrase}</C.HeaderText>
            <C.HeaderText><C.BoldText>Qual seu nível hoje?</C.BoldText></C.HeaderText>

            <C.levelArea>
                <DefaultButton bgcolor={level == 'beginner' ? '#A5E8BC' : false} onPress={() => setMyLevel('beginner')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <C.Texto>Iniciante / Um frango</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={level == 'intermediate' ? '#A5E8BC' : false} onPress={() => setMyLevel('intermediate')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <C.Texto>Intermediário / Me viro bem</C.Texto>
                </DefaultButton>
                <DefaultButton bgcolor={level == 'advance' ? '#A5E8BC' : false} onPress={() => setMyLevel('advance')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <C.Texto>Avançado / Primo do The Rock</C.Texto>
                </DefaultButton>
            </C.levelArea>
        </C.Container>
    )
}