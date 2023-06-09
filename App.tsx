import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" backgroundColor="#D6D5D5" />
    </NavigationContainer>
  );
}
