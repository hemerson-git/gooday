import { TouchableOpacityProps, View } from "react-native";
import { BtnText, Container, IconContainer } from "./styles";
import { ReactNode } from "react";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
};

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container
      {...rest}
      style={{ justifyContent: icon ? "space-between" : "center" }}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      <BtnText>{title}</BtnText>
      {icon && <IconContainer />}
    </Container>
  );
}
