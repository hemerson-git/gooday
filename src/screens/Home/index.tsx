import { useState } from "react";
import { OnBoarding } from "../../components/OnBoarding";
import { HomeHeader } from "../../components/HomeHeader";
import { Container } from "./styles";
import {
  LocationContext,
  LocationContextProvider,
} from "../../contexts/LocationContext";
import { Locations } from "../../components/Locations";
import { Stories } from "../../components/Stories";

export function Home() {
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(true);

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
            <Stories />
          </Container>
        </LocationContextProvider>
      )}
    </>
  );
}
