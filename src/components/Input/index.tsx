import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  ButtonToggleVisibility,
  Container,
  InputContainer,
  InputText,
  Label,
} from "./styles";
import { useState } from "react";

type Props = TextInputProps & {
  label: string;
  isPassword?: boolean;
};

export function Input({ label, isPassword, ...rest }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer>
        <InputText {...rest} secureTextEntry={isPassword && !isVisible} />
        {isPassword && (
          <ButtonToggleVisibility onPress={handleToggleVisibility}>
            <Feather name={!isVisible ? "eye" : "eye-off"} size={24} />
          </ButtonToggleVisibility>
        )}
      </InputContainer>
    </Container>
  );
}
