import Icons from "@expo/vector-icons/Feather";
import { useLocation } from "../../hooks/useLocation";
import {
  CityButton,
  CityButtonText,
  Container,
  WeatherButton,
  WeatherButtonText,
} from "./styles";

export function Locations() {
  const { city } = useLocation();

  return (
    <Container>
      <CityButton>
        <CityButtonText>
          Vitória da Conquista{" "}
          <Icons name="chevron-down" color="#14C871" size={25} />
        </CityButtonText>
      </CityButton>

      <WeatherButton>
        <WeatherButtonText>20º</WeatherButtonText>
      </WeatherButton>
    </Container>
  );
}
