import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// STYLES
import {
  Animation,
  Container,
  Footer,
  InputContainer,
  Subtitle,
  SuccessContainer,
  SuccessFooter,
  SuccessTitle,
  Title,
} from "./styles";

// COMPONENTS
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function NewPass() {
  const [success, setSuccess] = useState(false);
  const animation = useRef<AnimatedLottieView>(null);
  const navigation = useNavigation();

  function handleConfirmPass() {
    setSuccess(true);
    animation.current?.play();
  }

  function handleGoHome() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Header />

      {success ? (
        <>
          <Title>Crie uma nova senha</Title>
          <Subtitle>A senha deve ter pelo menos 8 caracteres</Subtitle>

          <InputContainer>
            <Input
              label="Insira a sua nova senha"
              placeholder="Digite a nova senha"
              isPassword
            />

            <Input
              label="Repita sua senha"
              placeholder="Repita a sua senha"
              isPassword
            />
          </InputContainer>

          <Footer>
            <Button title="Confirmar" onPress={handleConfirmPass} />
          </Footer>
        </>
      ) : (
        <SuccessContainer>
          <Animation
            autoPlay
            ref={animation}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../assets/animations/success.json")}
          />

          <SuccessTitle>Senha alterada com sucesso!</SuccessTitle>

          <SuccessFooter>
            <Button
              title="Voltar ao início"
              icon={
                <MaterialCommunityIcons name="home" size={24} color={"white"} />
              }
              onPress={handleGoHome}
            />
          </SuccessFooter>
        </SuccessContainer>
      )}
    </Container>
  );
}
