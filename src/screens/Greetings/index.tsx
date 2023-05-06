import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import {
  BoyImage,
  ButtonsContainer,
  Container,
  Subtitle,
  Title,
} from "./styles";

import GoogleImage from "../../assets/google.png";

export function Greetings() {
  const navigation = useNavigation();

  return (
    <Container>
      <BoyImage />

      <Title>Ótimo dia!</Title>
      <Subtitle>Como deseja acessar?</Subtitle>

      <ButtonsContainer>
        <Button
          title="Entrar com o Google"
          icon={<Image source={GoogleImage} />}
          onPress={() => navigation.navigate("SignIn")}
        />

        <Button title="Entrar com o Google" />
      </ButtonsContainer>
    </Container>
  );
}
