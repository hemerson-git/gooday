import { ReactNode, createContext, useEffect, useState } from "react";
import * as ExpoLocation from "expo-location";
import { HG_KEY } from "react-native-dotenv";
import { hgAPI } from "../services/hg_api";

type LocationProviderProps = {
  children: ReactNode;
};

type Props = {
  city: string;
  temp: number;
};

export const LocationContext = createContext({} as Props);

export function LocationContextProvider({ children }: LocationProviderProps) {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await ExpoLocation.requestForegroundPermissionsAsync();

      if (status !== "granted") return;

      let location = await ExpoLocation.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const { data } = await hgAPI.get(
        `weather?key=${HG_KEY}&lat=${latitude}&lon=${longitude}&user_ip=remote`
      );

      setCity(data.results.city);
      setTemp(data.results.temp);
    })();
  }, []);

  return (
    <LocationContext.Provider value={{ city, temp }}>
      {children}
    </LocationContext.Provider>
  );
}
