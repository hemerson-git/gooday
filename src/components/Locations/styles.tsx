import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CityButton = styled.TouchableOpacity`
  gap: 16px;
  justify-content: center;
`;

export const CityButtonText = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

export const WeatherButton = styled.TouchableOpacity`
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const WeatherButtonText = styled.Text`
  font-weight: 700;
`;
