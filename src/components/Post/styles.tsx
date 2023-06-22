import styled from "styled-components/native";

export const PostContainer = styled.View`
  background-color: white;
  padding: 16px;
  padding-top: 26px;
  border-radius: 20px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PostAuthorAvatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17px;
  margin-right: 11px;
`;

export const PostAuthor = styled.Text`
  font-size: 16px;
  line-height: 25px;
  font-weight: 700;
`;

export const PostAuthorButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const PostAuthorInfos = styled.View``;

export const PostText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #737e86;
`;

export const PostTagsContainer = styled.View`
  gap: 12px;
  flex-direction: row;
  margin-top: 16px;
`;

export const PostTags = styled.Text`
  border-width: 1px;
  border-color: #d7d7d7;
  color: #14c871;
  font-weight: 700;
  font-size: 12px;
  border-radius: 100px;
  padding: 4px 8px;
`;

export const PostImage = styled.Image`
  height: 245px;
  width: 100%;
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 10px;
`;

export const PostFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PostLikedImagesContainer = styled.View`
  position: relative;
  flex-direction: row;
  padding-left: 10px;
  align-items: center;
`;

export const PostLikedButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const PostLikedImage = styled.Image`
  border-width: 1px;
  border-color: white;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-left: -8px;
`;

export const FooterButtonsContainer = styled.View`
  flex-direction: row;
  gap: 17px;
`;

export const Button = styled.TouchableOpacity``;
