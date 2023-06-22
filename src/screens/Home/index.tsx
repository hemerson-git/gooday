import { useState } from "react";
import { OnBoarding } from "../../components/OnBoarding";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, FeaturedContentContainer } from "./styles";
import { LocationContextProvider } from "../../contexts/LocationContext";
import { Locations } from "../../components/Locations";
import { Stories } from "../../components/Stories";
import { Groups } from "../../components/Groups";

export function Home() {
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(false);

  function handleSetIsFirstTime() {
    setIsFirstTimeOnApp(false);
  }

  return (
    <>
      {isFirstTimeOnApp ? (
        <OnBoarding onSkip={handleSetIsFirstTime} />
      ) : (
        <LocationContextProvider>
          <Container>
            <HomeHeader />
            <Locations />
            <FeaturedContentContainer>
              <Stories />
              <Groups />
            </FeaturedContentContainer>
          </Container>
        </LocationContextProvider>
      )}
    </>
  );
}
