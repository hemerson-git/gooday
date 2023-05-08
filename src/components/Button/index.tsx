import { TouchableOpacityProps } from "react-native";
import { BtnText, Container, IconContainer, Spinner } from "./styles";
import { ReactNode } from "react";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
  secondary?: boolean;
  isLoading?: boolean;
};

export function Button({
  title,
  icon,
  secondary,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <Container
      {...rest}
      $centered={!icon}
      $secondary={secondary}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner color={secondary ? "#14c871" : "#FFF"} />
      ) : (
        <>
          {icon && <IconContainer>{icon}</IconContainer>}
          <BtnText $secondary={secondary}>{title}</BtnText>
          {icon && <IconContainer />}
        </>
      )}
    </Container>
  );
}
