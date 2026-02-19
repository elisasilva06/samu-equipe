import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Chat() {
  const { nome } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conversando com:</Text>
      <Text style={styles.name}>{nome}</Text>

      <Text style={styles.info}>
        (Aqui ficará o chat em tempo real depois)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F1F5F9" },
  header: { fontSize: 18, color: "#6B7280" },
  name: { fontSize: 24, fontWeight: "bold", color: "#003049", marginVertical: 10 },
  info: { marginTop: 20, color: "#9CA3AF" },
});
