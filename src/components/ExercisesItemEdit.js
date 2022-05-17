import { SwipeRow } from 'react-native-swipe-list-view'
import styled from "styled-components/native";
import useMuscleImage from './useMuscleImage';

const ExerciseItemArea = styled.TouchableOpacity`
    height: 50px;
    flex-direction: row;
    background-color: #FFF;
    margin-bottom: 10px;
`;
const ExerciseMuscleArea = styled.View`
    width: 50px;
    height: 50px;
    background-color: #FFCC98;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const ExerciseMuscleImage = styled.Image`
    width: 35px;
    height: 35px;
`;
const ExerciseInfo = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
`;
const ExerciseName = styled.Text`
    font-size: 15px;
    color: #000;
`;
const ExerciseDetails = styled.Text`
    font-size: 12px;
    color: #999;
`;
const ExerciseSwipe = styled.TouchableOpacity`
    height: 50px;
    background-color: #FF0000;
    justify-content: center;
`;
const ExerciseSwipeIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-left: 15px;
`;


export default (props) => {
    return (
        <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
            <ExerciseSwipe onPress={props.delAction}>
                <ExerciseSwipeIcon source={require('../assets/trash-white.png')} />
            </ExerciseSwipe>
            <ExerciseItemArea onPress={props.editAction} activeOpacity={1}>
                <>
                    <ExerciseMuscleArea>
                        <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                    </ExerciseMuscleArea>
                    <ExerciseInfo>
                        <ExerciseName>{props.data.name}</ExerciseName>
                        <ExerciseDetails>
                            {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load ? `- ${props.data.load} Kg` : ''}`}
                        </ExerciseDetails>
                    </ExerciseInfo>
                </>
            </ExerciseItemArea>
        </SwipeRow>
    );


}