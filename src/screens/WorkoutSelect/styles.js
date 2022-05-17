import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        flex: 1;
        margin: 20px;
    `,
    WorkoutList: styled.FlatList`
        flex: 1;
    `,
    Title: styled.Text`
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
    `,
}