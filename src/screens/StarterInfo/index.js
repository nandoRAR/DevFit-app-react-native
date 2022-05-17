import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './styles';
import DefaultButton from '../../components/DefaultButton';

export default () => {
    const navigation = useNavigation();
    const start = () => {
        navigation.navigate('StarterName');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <C.Container>
            <C.WelcomeText>Bem vindo(a) ao DevFit</C.WelcomeText>
            <C.WelcomeImage>
                <C.WelcomeLog source={require('../../assets/boneco.png')} />
            </C.WelcomeImage>
            <C.BeginConfigArea>
                <DefaultButton width="100%" bgcolor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
                    <C.ButtonText>Iniciar Configuração</C.ButtonText>
                </DefaultButton>
            </C.BeginConfigArea>
        </C.Container>
    )
}