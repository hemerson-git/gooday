import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Footer, InputContainer, Subtitle, Title } from "./styles";

export function NewPass() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

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
        <Button title="Confirmar" onPress={() => navigation.navigate("Code")} />
      </Footer>
    </Container>
  );
}
