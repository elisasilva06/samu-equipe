import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />      {/* login */}
      <Stack.Screen name="home" />       {/* home limpa */}
      <Stack.Screen name="(tabs)" />     {/* sistema interno com tabs */}
    </Stack>
  );
}



