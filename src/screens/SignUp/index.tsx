import { Container, Footer, Form, Icon, Subtitle, Title } from "./styles";

// IMAGES
import FaceBookImage from "../../assets/facebook.png";
import GoogleImage from "../../assets/google.png";

// COMPONENTS
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

export function SignUp() {
  return (
    <Container contentContainerStyle={{ paddingTop: 40, paddingBottom: 60 }}>
      <Header />
      <Title>Cadastre-se</Title>
      <Subtitle>Informe seu e-mail e crie uma senha</Subtitle>

      <Form>
        <Input
          placeholder="Digite o seu e-mail"
          label="E-mail"
          keyboardType="email-address"
        />

        <Input
          placeholder="Repita o seu e-mail"
          label="Repita  o seu e-mail"
          keyboardType="email-address"
        />

        <Input
          placeholder="Digite a sua senha"
          label="Crie uma senha"
          isPassword
        />

        <Input
          placeholder="Repita a sua senha"
          label="Repita sua senha"
          isPassword
        />

        <Button title="Cadastrar" />

        <Footer>
          <IconButton>
            <Icon source={GoogleImage} />
          </IconButton>

          <IconButton>
            <Icon source={FaceBookImage} />
          </IconButton>
        </Footer>
      </Form>
    </Container>
  );
}
