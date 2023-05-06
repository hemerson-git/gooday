import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  line-height: 46.8px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24.96px;
  margin-bottom: 56px;
`;

export const Form = styled.View`
  gap: 28px;
`;

export const ContainerBetween = styled.View`
  gap: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const LabelContainer = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #2e3e4b;
  font-size: 12px;
  line-height: 18.72px;
  font-weight: 700;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Line = styled.View`
  background-color: #2e3e4b;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 50%;
  opacity: 0.5;
`;

export const Footer = styled.View`
  align-items: center;
  gap: 36px;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;
