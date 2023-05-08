import { Container, Footer, Subtitle, Title } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { OTPInput } from "../../components/OTPInput";
import { useNavigation } from "@react-navigation/native";

export function Code() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Title>Código enviado com sucesso!</Title>
      <Subtitle>Insira abaixo o código de validação</Subtitle>

      <OTPInput size={4} />

      <Footer>
        <Button
          title="Validar código"
          onPress={() => navigation.navigate("NewPass")}
        />
      </Footer>
    </Container>
  );
}
