import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  // GoogleSignin.configure({
  //   webClientId:
  //     "430327061413-8gkj2cdajfj01f14rj6ulpvltlm5g74o.apps.googleusercontent.com",
  //   offlineAccess: false,
  // });
  return <Stack screenOptions={{ headerShown: false }} />;
}
