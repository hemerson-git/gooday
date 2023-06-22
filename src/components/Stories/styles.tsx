import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const StoryButton = styled.TouchableOpacity`
  width: ${(Dimensions.get("window").width * 0.25).toFixed(2)}px;
  height: 144px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

export const StoryImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StoryAvatar = styled.Image`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  bottom: 10px;
  left: 10px;
  border-color: white;
  border-width: 2px;
  aspect-ratio: 19 / 8;
`;
