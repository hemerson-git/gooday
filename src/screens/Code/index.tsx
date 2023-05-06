import { Container, Footer, Subtitle, Title } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Code() {
  return (
    <Container>
      <Header />

      <Title>Código enviado com sucesso!</Title>
      <Subtitle>Insira abaixo o código de validação</Subtitle>

      <Input
        label="Insira o e-mail ou telefone cadastrado"
        placeholder="E-mail ou telefone"
      />

      <Footer>
        <Button title="Validar código" />
      </Footer>
    </Container>
  );
}
