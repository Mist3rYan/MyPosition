import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./lib/Screens/HomeScreen/HomeScreen";
import RulesScreen from "./lib/Screens/RulesScreen/RulesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import i18n from "./i18n";

export default function App() {
  const Tabs = createBottomTabNavigator();
  const home = i18n("home");
  const rules = i18n("rulesTitle");

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={home}
        screenOptions={{
          tabBarActiveTintColor: "#ff3300",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            display: "flex"
          }
        }}
      >
        <Tabs.Screen 
          name={home} 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          }}
        />
        <Tabs.Screen 
          name={rules} 
          component={RulesScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? "receipt" : "receipt-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
