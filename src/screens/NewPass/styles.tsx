import styled from "styled-components/native";
import LottieView, { AnimationObject } from "lottie-react-native";

export const Container = styled.View`
  display: flex;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 46.8px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24.96px;
  margin-bottom: 56px;
`;

export const Footer = styled.View`
  width: 50%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputContainer = styled.View`
  gap: 12px;
`;

export const Animation = styled(LottieView)`
  width: 120px;
  height: 120px;
`;

export const SuccessContainer = styled.View`
  align-items: center;
`;

export const SuccessTitle = styled.Text`
  font-weight: 700;
  font-size: 26px;
  line-height: 43.68px;
  margin-bottom: 50px;
`;

export const SuccessFooter = styled.View`
  width: 50%;
`;
