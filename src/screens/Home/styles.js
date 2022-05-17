import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        align-items: center;
    `,
    Legend: styled.View`
        width: 90%;
        align-items: flex-start;
        margin-top: 30px;
    `,
    LegendText: styled.Text`
        color: #555;
    `,
    LegendItem: styled.View`
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
    `,
    LegendBox: styled.View`
        width: 15px;
        height: 15px;
        background-color: #CCC;
        margin-right: 5px;
    `,
    ConfigButtonArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `,
    ConfigButtonImage: styled.Image`
        width: 25px;
        height: 25px;
    `,
    Text: styled.Text``,
}