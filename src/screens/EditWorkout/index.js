import { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid-random';
import C from './styles';
import DefaultButton from '../../components/DefaultButton';
import ExercisesItemEdit from '../../components/ExercisesItemEdit';
import CustomModal from '../../components/CustomModal';


export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    let workout = (route.params && route.params.workout) ? route.params.workout : false

    const [id, setId] = useState(workout ? workout.id : '');
    const [name, setName] = useState(workout ? workout.name : '');
    const [exercises, setExercises] = useState(workout ? workout.exercises : []);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState('');
    const [modalName, setModalName] = useState('');
    const [modalMuscle, setModalMuscle] = useState('');
    const [modalSets, setModalSets] = useState('');
    const [modaReps, setModalReps] = useState('');
    const [modalLoad, setModalLoad] = useState('');



    useLayoutEffect(() => {
        let isEdit = (route.params && route.params.workout) ? true : false
        navigation.setOptions({
            title: isEdit ? 'Editar Treino' : 'Adicionar Treino',
            headerRight: () => (
                <C.SaveArea onPress={handleSave} underlayColor="transparent">
                    <C.SaveImage source={require('../../assets/check-black.png')} />
                </C.SaveArea>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, [name, exercises]);

    const handleSave = () => {
        if (exercises.length > 0) {
            if (name != '') {
                if (id != '') {
                    let w = { id, name, exercises };
                    dispatch({ type: 'EDIT_WORKOUTS', payload: { workout: w } })
                } else {
                    let w = { name, exercises };
                    w.id = uuid();
                    dispatch({ type: 'ADD_WORKOUTS', payload: { workout: w } })
                }
                navigation.goBack();
            } else {
                alert('Treino precisa ter um nome');
            }

        } else {
            alert('Você precisa ter pelo menos 1 exercício');
        }

    }

    const editExercise = (exercise) => {
        setModalId(exercise.id);
        setModalName(exercise.name);
        setModalMuscle(exercise.muscle);
        setModalSets(exercise.sets);
        setModalReps(exercise.reps);
        setModalLoad(exercise.load);
        setModalVisible(true);
    }


    const delExercise = (exercise) => {
        let newExercises = [...exercises];
        newExercises = newExercises.filter(i => i.id != exercise.id);
        setExercises(newExercises);
    }

    const modalSave = () => {
        let newExercises = [...exercises];

        if (modalName == '' || modalMuscle == '' || modalSets == '' || modaReps == '') {
            alert('Preencha todas as informações');
            return;
        }
        if (modalId) {
            let index = newExercises.findIndex(i => i.id == modalId);
            if (index > -1) {
                newExercises[index].name = modalName;
                newExercises[index].muscle = modalMuscle;
                newExercises[index].sets = modalSets;
                newExercises[index].reps = modaReps;
                newExercises[index].load = modalLoad;
            }
        } else {
            let ex = {
                id: uuid(),
                name: modalName,
                muscle: modalMuscle,
                sets: modalSets,
                reps: modaReps,
                load: modalLoad
            };
            newExercises.push(ex);
        }

        setExercises(newExercises);
        setModalVisible(false);
    }

    const resetModal = () => {
        setModalId('');
        setModalName('');
        setModalMuscle('');
        setModalSets('');
        setModalReps('');
        setModalLoad('');
    }

    const addExercise = () => {
        resetModal();
        setModalVisible(true);
    }

    return (
        <C.Container>
            <CustomModal visible={modalVisible} closeAction={() => setModalVisible(false)}>
                <C.ModalLabel>Músculo de foco</C.ModalLabel>
                <C.ModalMuscles horizontal={true} showsHorizontalScrollIndicator={false}>

                    <C.ModalMuscle onPress={() => setModalMuscle('abs')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'abs' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/abs.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('back')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'back' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/back.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('biceps')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'biceps' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/biceps.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>

                    <C.ModalMuscle opacity={modalMuscle == 'chest' ? 1 : 0.2} onPress={() => setModalMuscle('chest')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'chest' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/chest.png')} />
                        </C.ModalMuscleView>

                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('gluteos')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'gluteos' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/gluteos.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('legs')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'legs' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/legs.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('shoulders')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'shoulders' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/shoulders.png')} />
                        </C.ModalMuscleView>

                    </C.ModalMuscle>

                    <C.ModalMuscle onPress={() => setModalMuscle('triceps')}>
                        <C.ModalMuscleView opacity={modalMuscle == 'triceps' ? 1 : 0.2}>
                            <C.ModalMuscleImage source={require('../../assets/muscles/triceps.png')} />
                        </C.ModalMuscleView>
                    </C.ModalMuscle>


                </C.ModalMuscles>

                <C.ModalLabel>Nome do exercício</C.ModalLabel>
                <C.ModalInput value={modalName} onChangeText={e => setModalName(e)} />
                <C.ModalExtra>
                    <C.ModalExtraItem>
                        <C.ModalLabel>Séries</C.ModalLabel>
                        <C.ModalInput keyboardType='numeric' value={modalSets} onChangeText={e => setModalSets(e)} />
                    </C.ModalExtraItem>
                    <C.ModalExtraItem>
                        <C.ModalLabel>Repetições</C.ModalLabel>
                        <C.ModalInput keyboardType='numeric' value={modaReps} onChangeText={e => setModalReps(e)} />
                    </C.ModalExtraItem>
                    <C.ModalExtraItem>
                        <C.ModalLabel>Carga</C.ModalLabel>
                        <C.ModalInput keyboardType='numeric' value={modalLoad} onChangeText={e => setModalLoad(e)} />
                    </C.ModalExtraItem>
                </C.ModalExtra>

                <DefaultButton bgcolor="#4AC34E" onPress={modalSave}>
                    <C.ButtonText>Salvar</C.ButtonText>
                </DefaultButton>
            </CustomModal>

            <C.NameInput
                value={name}
                onChangeText={e => setName(e)}
                placeholder='Digite o nome do treino'
            />
            <C.ExercisesArea>
                <DefaultButton bgcolor="#4AC34E" onPress={addExercise}>
                    <C.ButtonText>Adicionar Exercício</C.ButtonText>
                </DefaultButton>
            </C.ExercisesArea>

            <C.ExercisesList
                data={exercises}
                renderItem={({ item }) =>
                    <ExercisesItemEdit
                        data={item}
                        editAction={() => editExercise(item)}
                        delAction={() => delExercise(item)}
                    />
                }
                keyExtractor={item => item.name}
            />
        </C.Container>
    )
}