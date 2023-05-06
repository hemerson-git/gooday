import { TouchableOpacityProps, TextProps } from "react-native";
import styled from "styled-components/native";

type ContainerProps = TouchableOpacityProps & {
  $centered: boolean;
  $secondary?: boolean;
};

type ButtonTextProps = TextProps & {
  $secondary?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${(props) => (props.$secondary ? "#FFF" : "#14c871")};
  align-items: center;
  justify-content: ${(props) => (props.$centered ? "center" : "space-between")};
  height: 54px;
  width: auto;
  flex-grow: 100;
  border-radius: 5px;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid ${(props) => (props.$secondary ? "#D7D7D7" : "#14c871")};
`;

export const BtnText = styled.Text<ButtonTextProps>`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.$secondary ? "#2E3E4B" : "#FFF")};
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
`;
