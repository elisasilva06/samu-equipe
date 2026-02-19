import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const conversas = [
  { id: "1", nome: "Médico Regulador", ultima: "Paciente consciente?", tempo: "2 min" },
  { id: "2", nome: "Central SAMU", ultima: "Nova ocorrência recebida", tempo: "5 min" },
  { id: "3", nome: "Enfermeira Ana", ultima: "Já estou a caminho", tempo: "12 min" },
];

export default function Mensagens() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comunicação da Equipe</Text>

      <FlatList
        data={conversas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chat}
            onPress={() => router.push(`/mensagens/chat?id=${item.id}&nome=${item.nome}`)}
          >
            <Ionicons name="person-circle" size={48} color="#0A2540" />

            <View style={styles.chatText}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.msg}>{item.ultima}</Text>
            </View>

            <Text style={styles.time}>{item.tempo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9", paddingTop: 60 },
  title: { fontSize: 20, fontWeight: "bold", margin: 20, color: "#003049" },

  chat: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 18,
    elevation: 3,
  },

  chatText: { flex: 1, marginLeft: 12 },
  nome: { fontWeight: "bold", fontSize: 15, color: "#003049" },
  msg: { color: "#6B7280", marginTop: 2 },
  time: { color: "#6B7280", fontSize: 12 },
});
