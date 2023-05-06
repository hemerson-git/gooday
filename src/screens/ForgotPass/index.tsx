import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Footer, Subtitle, Title } from "./styles";

export function ForgotPass() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Title>Esqueceu a sua senha?</Title>
      <Subtitle>Recupere a sua senha em três etapas rápidas</Subtitle>

      <Input
        label="Insira o e-mail ou telefone cadastrado"
        placeholder="E-mail ou telefone"
      />

      <Footer>
        <Button
          title="Enviar código"
          onPress={() => navigation.navigate("Code")}
        />
      </Footer>
    </Container>
  );
}
