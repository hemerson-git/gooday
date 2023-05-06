import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Greetings } from "../screens/Greetings";
import { SignIn } from "../screens/SingIn";
import { SignUp } from "../screens/SignUp";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Stack.Screen name="Home" component={Greetings} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
