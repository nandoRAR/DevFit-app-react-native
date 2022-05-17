import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        flex: 1;
        margin: 0 30px;
    `,
    Label: styled.Text`
        font-size: 15px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    `,
    Input: styled.TextInput`
        border: 1px solid #CCC;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 16px;
        padding: 10px;
    `,
    ListArea: styled.View`
        flex-direction: row;
        justify-content: space-between;
    `,
    DayItem: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: #EEE;
        justify-content: center;
        align-items: center;
    `,
    DayItemText: styled.Text``,
    LevelItem: styled.TouchableOpacity`
        padding: 0 15px;
        height: 30px;
        border-radius: 5px;
        background-color: #EEE;
        justify-content: center;
        align-items: center;
    `,
    LevelItemText: styled.Text``,
    TextButton: styled.Text`
        color: #FFF;
    `,
}