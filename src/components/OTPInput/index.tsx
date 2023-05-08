import React, { useState } from "react";

import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Field, FieldCursor, FieldText } from "./styles";

type Props = {
  size: number;
};

export function OTPInput({ size }: Props) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: size });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Field
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={size}
      rootStyle={{ marginTop: 20, gap: 22, justifyContent: "center" }}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <FieldText
          key={index}
          $isFocused={isFocused}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <FieldCursor /> : null)}
        </FieldText>
      )}
    />
  );
}
