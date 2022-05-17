import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        flex: 1;
    `,
    WorkoutList: styled.FlatList`
        flex: 1;
        padding: 20px;
    `,
    ButtonArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `,
    ButtonImage: styled.Image`
        width: 25px;
        height: 25px;
    `,
}