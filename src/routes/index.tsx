import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Greetings } from "../screens/Greetings";
import { SignIn } from "../screens/SingIn";
import { SignUp } from "../screens/SignUp";
import { ForgotPass } from "../screens/ForgotPass";
import { Code } from "../screens/Code";
import { NewPass } from "../screens/NewPass";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPass: undefined;
  Code: undefined;
  NewPass: undefined;
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
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="NewPass" component={NewPass} />
    </Stack.Navigator>
  );
}
