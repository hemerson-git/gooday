import { FlatList } from "react-native";
import { Container, StoryAvatar, StoryButton, StoryImage } from "./styles";

const stories = [
  {
    id: "id-1",
    author: {
      name: "Hemerson Oliveira",
      url: "https://instagram.com/hemerson_dev",
      avatar:
        "https://instagram.fssa20-1.fna.fbcdn.net/v/t51.2885-19/241546988_283965179848524_2233463639235457961_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa20-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=o16DKpVNe08AX_8LXEy&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfDDJipkkgFQM9IEY5uVLF24uCrDCjc8oRGmTlLiThcyQw&oe=649843EF&_nc_sid=fb4ee2",
    },
    images: [{ url: "https://github.com/hemerson-git.png" }],
  },
  {
    id: "id-2",
    author: {
      name: "Hemerson Oliveira",
      url: "https://instagram.com/hemerson_dev",
      avatar:
        "https://instagram.fssa20-1.fna.fbcdn.net/v/t51.2885-19/241546988_283965179848524_2233463639235457961_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa20-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=o16DKpVNe08AX_8LXEy&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfDDJipkkgFQM9IEY5uVLF24uCrDCjc8oRGmTlLiThcyQw&oe=649843EF&_nc_sid=fb4ee2",
    },
    images: [{ url: "https://github.com/hemerson-git.png" }],
  },
  {
    id: "id-3",
    author: {
      name: "Hemerson Oliveira",
      url: "https://instagram.com/hemerson_dev",
      avatar:
        "https://instagram.fssa20-1.fna.fbcdn.net/v/t51.2885-19/241546988_283965179848524_2233463639235457961_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa20-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=o16DKpVNe08AX_8LXEy&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfDDJipkkgFQM9IEY5uVLF24uCrDCjc8oRGmTlLiThcyQw&oe=649843EF&_nc_sid=fb4ee2",
    },
    images: [{ url: "https://github.com/hemerson-git.png" }],
  },
  {
    id: "id-4",
    author: {
      name: "Hemerson Oliveira",
      url: "https://instagram.com/hemerson_dev",
      avatar:
        "https://instagram.fssa20-1.fna.fbcdn.net/v/t51.2885-19/241546988_283965179848524_2233463639235457961_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa20-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=o16DKpVNe08AX_8LXEy&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfDDJipkkgFQM9IEY5uVLF24uCrDCjc8oRGmTlLiThcyQw&oe=649843EF&_nc_sid=fb4ee2",
    },
    images: [{ url: "https://github.com/hemerson-git.png" }],
  },
  {
    id: "id-5",
    author: {
      name: "Hemerson Oliveira",
      url: "https://instagram.com/hemerson_dev",
      avatar:
        "https://instagram.fssa20-1.fna.fbcdn.net/v/t51.2885-19/241546988_283965179848524_2233463639235457961_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa20-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=o16DKpVNe08AX_8LXEy&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfDDJipkkgFQM9IEY5uVLF24uCrDCjc8oRGmTlLiThcyQw&oe=649843EF&_nc_sid=fb4ee2",
    },
    images: [{ url: "https://github.com/hemerson-git.png" }],
  },
];

type StoryProps = {
  id: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
  images: {
    url: string;
  }[];
};

function Story({ images, author }: StoryProps) {
  return (
    <StoryButton>
      <StoryImage source={{ uri: images[0].url }} />
      <StoryAvatar source={{ uri: author.avatar }} />
    </StoryButton>
  );
}

export function Stories() {
  return (
    <Container>
      <FlatList
        data={stories}
        contentContainerStyle={{ gap: 6, paddingLeft: 16, paddingRight: 16 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Story author={item.author} images={item.images} id={item.id} />
        )}
      />
    </Container>
  );
}
