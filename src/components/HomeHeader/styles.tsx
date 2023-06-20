import styled from "styled-components/native";
import LogoImage from "../../assets/Logo";

export const Container = styled.View`
  height: 70px;
  background-color: #fbf9fc;
  border: 1px solid #d6c3dd;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoImage)`
  width: 53px;
  height: 24px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const ButtonIcon = styled.TouchableOpacity``;

export const ProfileImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 24px;
`;
