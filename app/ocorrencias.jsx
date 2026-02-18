import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const handleOcorrenciasPress = () => {
    router.push("/ocorrencias"); // direciona para a página de detalhes das ocorrências
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel da Equipe</Text>
      <Text style={styles.subtitle}>Bem-vindo ao sistema</Text>

      <View style={styles.cardsArea}>

        {/* CARD OCORRÊNCIAS */}
        <TouchableOpacity style={styles.card} onPress={handleOcorrenciasPress}>
          <View style={styles.cardHeader}>
            <Ionicons name="alert-circle-outline" size={28} color="#2A9D8F" />
            <Text style={styles.cardTitle}>Ocorrências</Text>
          </View>
          <Text style={styles.cardDesc}>
            5 chamados designados para você. Clique para ver detalhes e status.
          </Text>
        </TouchableOpacity>

        {/* OUTROS CARDS (Exemplo) */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="chatbubble-ellipses-outline" size={28} color="#2A9D8F" />
            <Text style={styles.cardTitle}>Mensagens</Text>
          </View>
          <Text style={styles.cardDesc}>
            Converse com o médico responsável e outros membros da equipe.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="checkmark-done-outline" size={28} color="#2A9D8F" />
            <Text style={styles.cardTitle}>Tarefas</Text>
          </View>
          <Text style={styles.cardDesc}>
            Visualize suas pendências do plantão e organize suas atividades.
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003049",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 25,
  },
  cardsArea: {
    flexDirection: "column",
    gap: 20, // espaçamento vertical entre os cards
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
  cardDesc: {
    fontSize: 16,
    color: "#6B7280",
  },
});

