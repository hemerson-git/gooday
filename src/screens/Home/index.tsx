import { useState } from "react";
import { OnBoarding } from "../../components/OnBoarding";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, FeaturedContentContainer, FeedContainer } from "./styles";
import { LocationContextProvider } from "../../contexts/LocationContext";
import { Locations } from "../../components/Locations";
import { Stories } from "../../components/Stories";
import { Groups } from "../../components/Groups";
import { Post } from "../../components/Post";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home() {
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(false);
  const insets = useSafeAreaInsets();

  function handleSetIsFirstTime() {
    setIsFirstTimeOnApp(false);
  }

  return (
    <>
      {isFirstTimeOnApp ? (
        <OnBoarding onSkip={handleSetIsFirstTime} />
      ) : (
        <LocationContextProvider>
          <Container
            contentContainerStyle={{
              paddingBottom: insets.bottom + 20,
              paddingTop: insets.top,
            }}
          >
            <HomeHeader />
            <Locations />
            <FeaturedContentContainer>
              <Stories />
              <Groups />
            </FeaturedContentContainer>

            <FeedContainer>
              <Post />
              <Post />
            </FeedContainer>
          </Container>
        </LocationContextProvider>
      )}
    </>
  );
}
