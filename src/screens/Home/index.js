import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import HomeMonthScroll from '../../components/HomeMonthScroll';
import HomeDaysScroll from '../../components/HomeDaysScroll';
import HomeDaysStatus from '../../components/HomeDaysStatus';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const addProgress = (date) => dispatch({type:'ADD_PROGRESS', payload:{date}});
    const dellProgress = (date) => dispatch({type:'DEL_PROGRESS', payload:{date}});
    const dailyProgress = useSelector(state => state.userReducer.dailyProgress);
    const workoutDays = useSelector(state => state.userReducer.workoutDays);
    let today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Seu progresso diário',
            headerTitleAlign: "center",
            headerRight: () => (
                <C.ConfigButtonArea onPress={btnAction} underlayColor="transparent">
                    <C.ConfigButtonImage source={require('../../assets/config.png')} />
                </C.ConfigButtonArea>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, []);

    const btnAction = () => {
        navigation.navigate('HomeConfig');
    }

    return (
        <C.Container>

            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll 
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                dailyProgress={dailyProgress} 
                workoutDays={workoutDays}  
            />
            <HomeDaysStatus 
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                dailyProgress={dailyProgress} 
                workoutDays={workoutDays}
                addProgress={addProgress}
                dellProgress={dellProgress}
                goToWorkout={()=>navigation.navigate('WorkoutStack')} 
            />

            <C.Legend>
                <C.LegendText>Legenda:</C.LegendText>
                <C.LegendItem>
                    <C.LegendBox style={{ backgroundColor: '#B5EEFF' }}></C.LegendBox>
                    <C.LegendText>Hoje</C.LegendText>
                </C.LegendItem>
                <C.LegendItem>
                    <C.LegendBox style={{ backgroundColor: '#B5FFB8' }}></C.LegendBox>
                    <C.LegendText>Treino feito</C.LegendText>
                </C.LegendItem>
                <C.LegendItem>
                    <C.LegendBox style={{ backgroundColor: '#FFB5B5' }}></C.LegendBox>
                    <C.LegendText>Treino perdido</C.LegendText>
                </C.LegendItem>
                <C.LegendItem>
                    <C.LegendBox style={{ backgroundColor: '#F4F4F4', opacity: 0.2 }}></C.LegendBox>
                    <C.LegendText>Dia de descanso</C.LegendText>
                </C.LegendItem>
                <C.LegendItem>
                    <C.LegendBox style={{ backgroundColor: '#F4F4F4' }}></C.LegendBox>
                    <C.LegendText>Dia futuro</C.LegendText>
                </C.LegendItem>
            </C.Legend>
        </C.Container>
    )
}