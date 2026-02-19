import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const unidade = "Unidade Centro";
  const status = "Ativo";

  const statusColor =
    status === "Ativo"
      ? "#2A9D8F"
      : status === "Folga"
      ? "#9CA3AF"
      : "#F4A261";

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <LinearGradient colors={["#0A2540", "#133C67"]} style={styles.headerBg}>
        <Ionicons
          name="medkit"
          size={160}
          color="rgba(255,255,255,0.05)"
          style={styles.bgIcon}
        />

        <View style={styles.headerContent}>
          <View>
            <Text style={styles.welcome}>Plantão atual</Text>
            <Text style={styles.unit}>{unidade}</Text>
          </View>

          <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* CARD PRINCIPAL */}
      <View style={styles.mainCard}>
        <Ionicons name="pulse" size={42} color="#E63946" />
        <Text style={styles.mainTitle}>Nenhuma ocorrência ativa</Text>
        <Text style={styles.mainSubtitle}>
          Você está disponível para atendimento
        </Text>
      </View>

      {/* AÇÕES */}
      <View style={styles.grid}>

        <TouchableOpacity style={styles.primaryCard} onPress={() => router.push("/ocorrencias")}>
          <Ionicons name="medkit" size={38} color="#FFFFFF" />
          <Text style={styles.primaryText}>Ocorrências</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.secondaryCard} onPress={() => router.push("/historico")}>
            <Ionicons name="time" size={28} color="#003049" />
            <Text style={styles.secondaryText}>Histórico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard} onPress={() => router.push("/tarefas")}>
            <Ionicons name="alert-circle" size={28} color="#003049" />
            <Text style={styles.secondaryText}>Tarefas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.secondaryCard} onPress={() => router.push("/mensagens")}>
            <Ionicons name="chatbubbles" size={28} color="#003049" />
            <Text style={styles.secondaryText}>Mensagens</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard} onPress={() => router.push("/perfil")}>
            <Ionicons name="person-circle" size={28} color="#003049" />
            <Text style={styles.secondaryText}>Perfil</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* PAINEL DO PLANTÃO */}
      <View style={styles.shiftPanel}>
        <Text style={styles.shiftTitle}>Situação do plantão</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Aguardando</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: "#E63946" }]}>1</Text>
            <Text style={styles.statLabel}>Em atendimento</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8m</Text>
            <Text style={styles.statLabel}>Última</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Equipe</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },

  headerBg: {
    paddingTop: 70,
    paddingBottom: 35,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: "hidden",
  },

  headerContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  bgIcon: { position: "absolute", right: -20, top: -20 },

  welcome: { fontSize: 13, color: "rgba(255,255,255,0.7)" },
  unit: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },

  statusBadge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  statusText: { color: "#FFFFFF", fontWeight: "bold" },

  mainCard: {
    marginHorizontal: 20,
    marginTop: -25,
    padding: 28,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    alignItems: "center",
    elevation: 8,
  },

  mainTitle: { marginTop: 12, fontSize: 19, fontWeight: "bold", color: "#003049" },
  mainSubtitle: { marginTop: 4, color: "#6B7280", fontSize: 14 },

  grid: { marginTop: 18, paddingHorizontal: 20 },

  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },

  primaryCard: {
    width: "100%",
    backgroundColor: "#E63946",
    borderRadius: 22,
    padding: 26,
    alignItems: "center",
    elevation: 6,
  },

  primaryText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold", marginTop: 10 },

  secondaryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
    elevation: 4,
  },

  secondaryText: { marginTop: 8, fontWeight: "bold", color: "#003049" },

  shiftPanel: {
    marginTop: 18,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 18,
    elevation: 4,
  },

  shiftTitle: { fontSize: 15, fontWeight: "bold", color: "#003049", marginBottom: 12 },
  statsRow: { flexDirection: "row", justifyContent: "space-between" },

  statBox: { alignItems: "center", flex: 1 },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#003049" },
  statLabel: { fontSize: 12, color: "#6B7280", marginTop: 2 },
});
