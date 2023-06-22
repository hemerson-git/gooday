import { useState } from "react";
import Icons from "@expo/vector-icons/Feather";

import {
  PostContainer,
  Button,
  PostAuthor,
  PostAuthorButton,
  PostFooter,
  PostHeader,
  PostImage,
  PostLikedImage,
  PostLikedImagesContainer,
  PostText,
  PostAuthorAvatar,
  PostAuthorInfos,
  PostLikedButton,
  FooterButtonsContainer,
  PostTags,
  PostTagsContainer,
} from "./styles";
import InfinityIcon from "../../assets/Infinity";

export function Post() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <PostContainer>
      <PostHeader>
        <PostAuthorButton>
          <PostAuthorAvatar
            source={{ uri: "https://github.com/hemerson-git.png" }}
          />
          <PostAuthorInfos>
            <PostAuthor>@hemerson_dev</PostAuthor>

            <PostText>
              <InfinityIcon /> 5min
            </PostText>
          </PostAuthorInfos>
        </PostAuthorButton>

        <Button>
          <Icons name="more-vertical" size={24} />
        </Button>
      </PostHeader>

      <PostText>Hoje foi o de codar bastante 😎</PostText>

      <PostTagsContainer>
        {["#coding", "#react-native"].map((tag, index) => (
          <Button>
            <PostTags key={`tag-${index}`}>{tag}</PostTags>
          </Button>
        ))}
      </PostTagsContainer>

      <PostImage
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
        }}
      />

      <PostFooter>
        <PostLikedButton activeOpacity={0.75}>
          <PostLikedImagesContainer>
            <PostLikedImage
              source={{ uri: "https://github.com/hemerson-git.png" }}
            />

            <PostLikedImage
              source={{ uri: "https://github.com/hemerson-git.png" }}
            />

            <PostLikedImage
              source={{ uri: "https://github.com/hemerson-git.png" }}
            />
          </PostLikedImagesContainer>

          <PostText>25 comentários</PostText>
        </PostLikedButton>

        <FooterButtonsContainer>
          <Button onPress={() => setIsLiked(true)}>
            <Icons
              name="thumbs-up"
              size={16}
              color={isLiked ? "#14C871" : "#2E3E4B"}
            />
          </Button>

          <Button>
            <Icons name="message-circle" size={16} color="#2E3E4B" />
          </Button>

          <Button>
            <Icons name="share-2" size={16} color="#2E3E4B" />
          </Button>
        </FooterButtonsContainer>
      </PostFooter>
    </PostContainer>
  );
}
