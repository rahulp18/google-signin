import { ZoomVideoSdkProvider } from "@zoom/react-native-videosdk";
import { Stack } from "expo-router";
import React from "react";
const ZoomLayout = () => {
  return (
    <ZoomVideoSdkProvider
      config={{
        domain: "zoom.us",
        enableLog: true,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />;
    </ZoomVideoSdkProvider>
  );
};

export default ZoomLayout;
