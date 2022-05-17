import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import C from './styles';


export default () => {
    const navigation = useNavigation();
    const name = useSelector(state => state.userReducer.name);

    useEffect(() => {
        if (!name) {
            navigation.reset({
                index: 1,
                routes: [{ name: 'StarterStrack' }]
            });
        } else {
            navigation.reset({
                index: 1,
                routes: [{ name: 'AppTab' }]
            });
        }
    }, []);

    return (
        <C.Container>
            <C.LoadingIcon color="#000" size="large" />
        </C.Container>
    );
}