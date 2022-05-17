import styled from "styled-components/native";

export default {
    Container: styled.ImageBackground`
        flex: 1;
        align-items: center;
        background-color: #000;
    `,
    SafeArea: styled.SafeAreaView`
        flex: 1;
        width: 100%;
        align-items: center;
        background-color: rgba(1, 59, 14, 0.9);
    `,
    WorkoutHeader: styled.View`
        flex-direction: row;
        width: 90%;
        align-items: center;
        margin-bottom: 20px;
    `,
    WorkoutTitle: styled.Text`
        flex: 1;
        color: #FFF;
        font-size: 20px;
    `,
    WorkoutClose: styled.TouchableOpacity`
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
    `,
    WorkoutCloseText: styled.Text`
        font-size: 22px;
        color: #FFF;
        font-weight: bold;
    `,
    WorkoutList: styled.FlatList`
        width: 90%;
        flex: 1;
    `,
}