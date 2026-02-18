import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  // Dados de exemplo
  const unidade = "Unidade Centro";
  const status = "Ativo"; // Pode ser "Folga" ou "Em Atendimento"

  // Cor do status
  const statusColor = status === "Ativo" ? "#2A9D8F" : status === "Folga" ? "#F8F9FA" : "#FFB703";

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SAMU CAXIAS</Text>
        <Text style={styles.headerSubtitle}>Painel da Equipe</Text>
      </View>

      {/* INFORMAÇÕES DO PROFISSIONAL */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Ionicons name="location" size={20} color="#003049" />
          <Text style={styles.infoText}>{unidade}</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: statusColor }]}>
          <Ionicons name="person" size={20} color={status === "Folga" ? "#6B7280" : "#FFFFFF"} />
          <Text style={[styles.infoText, status === "Folga" && { color: "#6B7280" }]}>{status}</Text>
        </View>
      </View>

      {/* CARDS */}
      <View style={styles.cardsArea}>
        <TouchableOpacity style={styles.card} onPress={() => router.push("/ocorrencias")}>
          <Ionicons name="medkit" size={34} color="#2A9D8F" />
          <Text style={styles.cardTitle}>Ocorrências</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/perfil")}>
          <Ionicons name="person-circle" size={34} color="#2A9D8F" />
          <Text style={styles.cardTitle}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/historico")}>
          <Ionicons name="time" size={34} color="#2A9D8F" />
          <Text style={styles.cardTitle}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.alertCard]} onPress={() => router.push("/tarefas")}>
          <Ionicons name="alert-circle" size={34} color="#FFB703" />
          <Text style={[styles.cardTitle, { color: "#FFB703" }]}>Tarefas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  header: {
    backgroundColor: "#003049",
    paddingTop: 70,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#E0E7FF",
    fontSize: 16,
    marginTop: 4,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    elevation: 3,
  },

  infoText: {
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 14,
    color: "#003049",
  },

  cardsArea: {
    padding: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 18,
    marginBottom: 18,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },

  alertCard: {
    borderWidth: 2,
    borderColor: "#FFB703",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2A9D8F",
    marginTop: 14,
  },
});
