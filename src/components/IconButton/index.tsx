import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type IconButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

export function IconButton({ children }: IconButtonProps) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}
