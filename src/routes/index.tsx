import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "@expo/vector-icons/Feather";

// SCREENS
import { Greetings } from "../screens/Greetings";
import { SignIn } from "../screens/SingIn";
import { SignUp } from "../screens/SignUp";
import { ForgotPass } from "../screens/ForgotPass";
import { Code } from "../screens/Code";
import { NewPass } from "../screens/NewPass";
import { Home } from "../screens/Home";

export type RootStackParamList = {
  Tabs: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPass: undefined;
  Code: undefined;
  NewPass: undefined;
  Greetings: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Pin: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopRightRadius: 20 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name="home" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name="search" />,
        }}
      />
      <Tab.Screen
        name="Pin"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name="home" />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name="heart" />,
        }}
      />
    </Tab.Navigator>
  );
}

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
      <Stack.Screen name="Greetings" component={Greetings} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="NewPass" component={NewPass} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
