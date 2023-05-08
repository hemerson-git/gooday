import { ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Button, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = ViewProps & {
  isFixed?: boolean;
  secondary?: boolean;
};

export function Header({ isFixed, secondary }: Props) {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Container $isFixed={isFixed}>
      <Button onPress={() => navigation.goBack()}>
        <Feather
          name="chevron-left"
          size={30}
          color={`${secondary ? "#FFF" : "#14C871"}`}
          style={{ fontWeight: "bold" }}
        />
      </Button>
    </Container>
  );
}
