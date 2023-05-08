import { ViewProps } from "react-native";
import styled from "styled-components/native";

type ContainerProps = ViewProps & {
  $isFixed?: boolean;
};

export const Container = styled.View<ContainerProps>`
  padding-top: 36px;
  padding-bottom: 36px;
  position: ${(props) => (props.$isFixed ? "absolute" : "relative")};
  top: ${(props) => (props.$isFixed ? "20px" : "0px")};
  width: 100%;
  z-index: 5;
  left: 0;
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
`;
