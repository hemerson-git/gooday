import {
  ButtonIcon,
  Container,
  Logo,
  ProfileButton,
  ProfileContainer,
  ProfileImage,
} from "./styles";
import Icons from "@expo/vector-icons/Feather";

export function HomeHeader() {
  return (
    <Container>
      <Logo />

      <ProfileContainer>
        <ButtonIcon>
          <Icons name="plus-square" size={25} />
        </ButtonIcon>

        <ButtonIcon>
          <Icons name="bell" size={25} />
        </ButtonIcon>

        <ProfileButton>
          <ProfileImage
            source={{ uri: "https://github.com/hemerson-git.png" }}
          />
        </ProfileButton>
      </ProfileContainer>
    </Container>
  );
}
