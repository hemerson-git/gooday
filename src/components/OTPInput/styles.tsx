import { TextProps } from "react-native";
import styled from "styled-components/native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";

type FieldTextProps = TextProps & {
  $isFocused: boolean;
  $isInvalid?: boolean;
};

export const Field = styled(CodeField)``;

export const FieldText = styled.Text<FieldTextProps>`
  width: 51px;
  height: 51px;
  line-height: 38px;
  font-size: 24px;
  border-width: 2px;
  text-align: center;
  border-color: ${(props) =>
    props.$isInvalid ? "#c81414" : props.$isFocused ? "#14C871" : "#9FA6AC"};
  background-color: #eaeced;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const FieldCursor = styled(Cursor)``;
