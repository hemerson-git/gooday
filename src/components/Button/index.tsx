import { TouchableOpacityProps, View } from "react-native";
import { BtnText, Container, IconContainer } from "./styles";
import { ReactNode } from "react";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
  secondary?: boolean;
};

export function Button({ title, icon, secondary, ...rest }: ButtonProps) {
  return (
    <Container {...rest} $centered={!icon} $secondary={secondary}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <BtnText $secondary={secondary}>{title}</BtnText>
      {icon && <IconContainer />}
    </Container>
  );
}
