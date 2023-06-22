import { FlatList, Share } from "react-native";
import Icons from "@expo/vector-icons/Feather";

import PersonIcon from "../../assets/Person";
import {
  GroupHeader,
  GroupImage,
  GroupItem,
  GroupMeta,
  GroupMetaTitle,
  GroupTitle,
  ShareButton,
} from "./styles";
import SquaresIcon from "../../assets/Squares";

const groups = [
  {
    title: "Ciclismo",
    url: "https://github.com/hemerson-git",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/07/22/14/12/bike-1534902_1280.jpg",
  },
  {
    title: "Corrida",
    url: "https://github.com/hemerson-git",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/14/03/06/woman-1822459_1280.jpg",
  },
  {
    title: "Nutrição",
    url: "https://github.com/hemerson-git",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/25/13/16/pumpkin-1768857_1280.jpg",
  },
  {
    title: "Exercícios",
    url: "https://github.com/hemerson-git",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
  },
];

type GroupProps = {
  title: string;
  url: string;
  imageUrl: string;
};

function Group({ title, url, imageUrl }: GroupProps) {
  function handleShare() {
    Share.share(
      {
        title,
        url,
        message: `Venha fazer parte do nosso grupo de: ${title} ${url}`,
      },
      {
        dialogTitle: "Compartilhar o grupo",
        subject: title,
      }
    );
  }

  return (
    <GroupItem activeOpacity={0.75}>
      <GroupImage source={{ uri: imageUrl }} />
      <GroupHeader>
        <GroupTitle>{title}</GroupTitle>

        <ShareButton onPress={handleShare}>
          <Icons name="share-2" size={16} />
        </ShareButton>
      </GroupHeader>

      <GroupMeta>
        <SquaresIcon />
        <GroupMetaTitle>43 grupos</GroupMetaTitle>
      </GroupMeta>

      <GroupMeta>
        <PersonIcon />
        <GroupMetaTitle>975 membros</GroupMetaTitle>
      </GroupMeta>
    </GroupItem>
  );
}

export function Groups() {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => (
        <Group imageUrl={item.imageUrl} title={item.title} url={item.url} />
      )}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
