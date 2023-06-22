import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// IMAGES
import FaceBookImage from "../../assets/facebook.png";
import GoogleImage from "../../assets/google.png";

//  STYLES
import {
  Container,
  ContainerBetween,
  Form,
  Label,
  LabelContainer,
  Subtitle,
  Title,
  Line,
  Footer,
  Icon,
} from "./styles";

// COMPONENTS
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

export function SignIn() {
  const navigation = useNavigation();

  function handleAccess() {
    navigation.navigate("Tabs");
  }

  return (
    <Container contentContainerStyle={{ paddingTop: 40, paddingBottom: 60 }}>
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

        <ContainerBetween>
          <IconButton>
            <Text>Lembrar minha senha</Text>
          </IconButton>

          <IconButton onPress={() => navigation.navigate("ForgotPass")}>
            <Text>Esqueci minha senha</Text>
          </IconButton>
        </ContainerBetween>

        <ContainerBetween>
          <Button title="Acessar" onPress={handleAccess} />

          <Button
            title="Cadastrar"
            secondary
            onPress={() => navigation.navigate("SignUp")}
          />
        </ContainerBetween>

        <LabelContainer>
          <Line />
          <Label>Ou continue com</Label>
        </LabelContainer>

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
