import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, Subtitle, Title } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Header />
      <Title>Acesse</Title>
      <Subtitle>Com e-mail e senha para entrar</Subtitle>

      <Form>
        <Input
          placeholder="Digite o seu e-mail"
          label="E-mail"
          keyboardType="email-address"
        />

        <Input placeholder="Digite a sua senha" label="Senha" isPassword />
      </Form>
    </Container>
  );
}
