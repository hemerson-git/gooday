import { useState } from "react";
import { OnBoarding } from "../../components/OnBoarding";
import { HomeHeader } from "../../components/HomeHeader";
import { Container } from "./styles";
import {
  LocationContext,
  LocationContextProvider,
} from "../../contexts/LocationContext";
import { Locations } from "../../components/Locations";

export function Home() {
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(false);

  return (
    <>
      {isFirstTimeOnApp ? (
        <OnBoarding />
      ) : (
        <LocationContextProvider>
          <Container>
            <HomeHeader />
            <Locations />
          </Container>
        </LocationContextProvider>
      )}
    </>
  );
}
