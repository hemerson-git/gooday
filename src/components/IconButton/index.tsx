import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type IconButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

export function IconButton({ children, ...rest }: IconButtonProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}
