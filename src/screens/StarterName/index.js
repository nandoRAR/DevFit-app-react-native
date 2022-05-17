import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const name = useSelector(state => state.userReducer.name);
    

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
    }, [name]);

    const handleChangeName = (t) => {
        dispatch({ type: 'SET_NAME', payload: { name: t } });
    }

    const nextAction = () => {
        if (!name) {
            alert("Você precisa de um nome");
            return
        }
        navigation.navigate('StarterDias');
    }
    return (
        <C.Container>
            <C.HeaderText>Qual é o seu Nome?</C.HeaderText>
            <C.NameInput
                value={name}
                onChangeText={t => handleChangeName(t)}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            />

        </C.Container>
    )
}