import styled from "styled-components/native";


export default {
    Container: styled.SafeAreaView`
        background-color: #FFF;
        flex: 1;
        align-items: center;
        padding: 0px 30px;
    `,
    HeaderText: styled.Text`
        font-size: 22px;
        color: #333;
        margin: 50px 0;
    `,
    NameInput: styled.TextInput`
        border: 1px solid #CCC;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 16px;
        padding: 10px;
    `,
    NextButton: styled.TouchableOpacity``,
    NextButtonText: styled.Text`
        font-size: 15px;
        color: #7EB1FC;
    `
   
}