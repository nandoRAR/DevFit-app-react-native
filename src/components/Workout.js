import { useState } from 'react';
import styled from "styled-components/native";
import useMuscleImage from './useMuscleImage';

const Workout = styled.View`
    background-color: #F1F1F1;
    flex-direction: row;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 2px solid #DDD;
`;
const WorkoutInfo = styled.View`
    flex: 1;
`;
const WorkoutTile = styled.Text`
    font-size: 17px;
    margin: 10px;
`;
const MuscleScroll = styled.ScrollView`
    margin: 10px;
`;
const MuscleGroup = styled.View`
    width: 40px;
    height: 40px;
    background-color: #FFCC98;
    border-radius: 5px;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
`;
const MuscleImage = styled.Image`
    width: 30px;
    height: 30px;
`;

const WorkouAction = styled.View`
    justify-content: center;
`;
const WorkoutButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    margin: 20px;
    justify-content: center;
    align-items: center;
`;
const WorkoutButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`;



export default ({ data, addAction, editAction, delAction, goAction }) => {

    const [included, setIncluded] = useState(false);

    let muscleGroups = [];
    for (let i in data.exercises) {
        if (!muscleGroups.includes(data.exercises[i].muscle)) {
            muscleGroups.push(data.exercises[i].muscle);
        }
    };

    const addWorkout = () => {
        setIncluded(!included);
        addAction();
    }
    const editWorkout = () => {
        editAction();
    }
    const delWorkout = () => {
        delAction();
    }
    const goWorkout = () => {
        goAction();
    }


    return (
        <Workout>
            <WorkoutInfo>
                <WorkoutTile>{data.name}</WorkoutTile>
                <MuscleScroll horizontal={true}>
                    {muscleGroups.map((m, index) => (
                        <MuscleGroup key={index}>
                            <MuscleImage source={useMuscleImage(m)} />
                        </MuscleGroup>
                    ))}
                </MuscleScroll>
            </WorkoutInfo>
            <WorkouAction>
                {addAction &&
                    <WorkoutButton onPress={() => addWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={included ? require('../assets/check-black.png') : require('../assets/add.png')} />
                    </WorkoutButton>
                }
                {editAction &&
                    <WorkoutButton onPress={() => editWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={require('../assets/edit-black.png')} />
                    </WorkoutButton>
                }
                {delAction &&
                    <WorkoutButton onPress={() => delWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={require('../assets/trash-black.png')} />
                    </WorkoutButton>
                }

                {goAction &&
                    <WorkoutButton onPress={() => goWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={require('../assets/play-black.png')} />
                    </WorkoutButton>
                }
            </WorkouAction>
        </Workout>
    );
}