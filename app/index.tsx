import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();
const Home = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "430327061413-gavm8rqcbepe44aq017513gga334fm51.apps.googleusercontent.com",
    webClientId:
      "430327061413-8gkj2cdajfj01f14rj6ulpvltlm5g74o.apps.googleusercontent.com",
  });

  const signIn = async () => {
    try {
      promptAsync();

      console.log("User Info:", response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);
  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log({ response });
      Alert.alert("Success", JSON.stringify(response, null, 2));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={signIn}>
        <Text>Google Sign In With Web</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Google Sign In With Normal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
