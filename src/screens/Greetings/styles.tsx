import styled from "styled-components/native";
import GreetingsImage from "../../assets/GreetingsImage";

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const BoyImage = styled(GreetingsImage)`
  transform: scale(0.8);
  margin-bottom: 19.5px;
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
  text-align: center;
  margin-bottom: 56px;
`;

export const ButtonsContainer = styled.View`
  gap: 16px;
  width: 100%;
`;
