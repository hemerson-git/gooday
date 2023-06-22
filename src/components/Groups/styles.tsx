import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const GroupItem = styled.TouchableOpacity`
  padding: 10px;
  padding-bottom: 21px;
  background-color: #f3f3f3;
  border-radius: 10px;
`;

export const GroupImage = styled.Image`
  width: ${Dimensions.get("window").width * 0.33}px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 13px;
`;

export const GroupHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GroupTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  color: #2e3e4b;
  margin-bottom: 8px;
`;

export const ShareButton = styled.TouchableOpacity``;

export const GroupMeta = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
`;

export const GroupMetaTitle = styled.Text``;
