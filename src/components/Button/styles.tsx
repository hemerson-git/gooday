import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #14c871;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
  border-radius: 5px;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;

export const BtnText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
`;
