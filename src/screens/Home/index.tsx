import { useState } from "react";
import { OnBoarding } from "../../components/OnBoarding";
import { HomeHeader } from "../../components/HomeHeader";
import { Container } from "./styles";

export function Home() {
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(false);

  return (
    <>
      {isFirstTimeOnApp ? (
        <OnBoarding />
      ) : (
        <Container>
          <HomeHeader></HomeHeader>
        </Container>
      )}
    </>
  );
}
