import { Feather } from "@expo/vector-icons";

import { Button, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Feather
          name="chevron-left"
          size={30}
          color="#14C871"
          style={{ fontWeight: "bold" }}
        />
      </Button>
    </Container>
  );
}
