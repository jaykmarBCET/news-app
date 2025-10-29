import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/home_background.png")}
      resizeMode="cover" // ✅ You can try: "cover", "contain", "stretch", etc.
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          color: '#fff',
          textAlign: "center",
          marginBottom: 40,
          textShadowColor: 'rgba(0, 0, 0, 0.5)',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 5,
        }}
      >
        Welcome to Current News
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        style={{
          backgroundColor: "#24e54390",
          padding: 16,
          borderRadius: 50,
        }}
      >
        <AntDesign name="arrowright" size={40} color="#000" />
      </TouchableOpacity>
    </ImageBackground>
  );
}
