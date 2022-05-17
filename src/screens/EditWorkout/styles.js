import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        flex: 1;
        margin: 20px;
    `,
    NameInput: styled.TextInput`
        border: 1px solid #CCC;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 16px;
        padding: 10px;
    `,
    SaveArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `,
    SaveImage: styled.Image`
         width: 25px;
        height: 25px;
    `,
    ExercisesArea: styled.View`
        margin-top: 20px;
        padding-top: 20px;
        border-top-width: 1px;
        border-top-color: #CCC;
    `,
    ButtonText: styled.Text `
        color: #FFF;
    `,
    ExercisesList: styled.FlatList`
        flex: 1;
        padding-top: 20px;
    `,
    ModalLabel: styled.Text`
        font-size: 15px;
        font-weight: bold;
        margin-top: 10px;
    `,
    ModalMuscles: styled.ScrollView`

    `,
    ModalInput: styled.TextInput`
        width: 100%;
        font-size: 14px;
        color: #333;
        height: 40px;
        border-bottom-width: 1px;
        border-bottom-color: #CCC;
    `,
    ModalMuscle: styled.TouchableOpacity`
        width: 50px;
        height: 50px;
    `,
    ModalMuscleImage: styled.Image`
        width: 35px;
        height: 35px;
    `,
    ModalExtra: styled.View`
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 25px;
    `,
    ModalExtraItem: styled.View`
        align-items: center;
    `,
    ModalMuscleView: styled.View`
        background-color: #EEE;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        opacity: ${props=>props.opacity};
    `

}