import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ocorrencias() {

  // estados: standby | chamado | atendimento | finalizado
  const [estado, setEstado] = useState("standby");

  // simulação temporária (depois virá do backend)
  const chamado = {
    prioridade: "ALTA",
    endereco: "Av. Santos Dumont - Centro",
    horario: "14:32",
    paciente: "Homem adulto",
    situacao: "Inconsciente",
    resumo: "Possível parada cardiorrespiratória",
  };

  // cores
  const corPrioridade = "#E63946";

  return (
    <View style={styles.container}>

      {/* ===================== STANDBY ===================== */}
      {estado === "standby" && (
        <LinearGradient colors={["#0A2540", "#133C67"]} style={styles.standbyBox}>
          <Ionicons name="radio" size={70} color="rgba(255,255,255,0.15)" />

          <Text style={styles.title}>Equipe disponível</Text>
          <Text style={styles.subtitle}>Aguardando designação médica</Text>

          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={18} color="#E0E7FF" />
            <Text style={styles.infoText}>Última ocorrência: 35 min</Text>
          </View>

          <TouchableOpacity
            style={styles.testButton}
            onPress={() => setEstado("chamado")}
          >
            <Text style={styles.testText}>SIMULAR CHAMADO</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}

      {/* ===================== NOVO CHAMADO ===================== */}
      {estado === "chamado" && (
        <View style={styles.alertContainer}>

          <View style={[styles.priorityBadge, { backgroundColor: corPrioridade }]}>
            <Text style={styles.priorityText}>{chamado.prioridade}</Text>
          </View>

          <Text style={styles.address}>{chamado.endereco}</Text>
          <Text style={styles.time}>{chamado.horario}</Text>

          <View style={styles.card}>
            <Text style={styles.label}>Paciente</Text>
            <Text style={styles.value}>{chamado.paciente}</Text>

            <Text style={styles.label}>Situação</Text>
            <Text style={styles.value}>{chamado.situacao}</Text>

            <Text style={styles.label}>Resumo médico</Text>
            <Text style={styles.value}>{chamado.resumo}</Text>
          </View>

          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => setEstado("atendimento")}
          >
            <Text style={styles.acceptText}>ACEITAR ATENDIMENTO</Text>
          </TouchableOpacity>

        </View>
      )}

      {/* ===================== EM ATENDIMENTO ===================== */}
      {estado === "atendimento" && (
        <View style={styles.attContainer}>

          <Text style={styles.attTitle}>Em deslocamento</Text>
          <Text style={styles.timer}>Tempo resposta: 04:12</Text>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>IR PARA GPS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>CHEGUEI NO LOCAL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => setEstado("finalizado")}
          >
            <Text style={styles.finishText}>FINALIZAR OCORRÊNCIA</Text>
          </TouchableOpacity>

        </View>
      )}

      {/* ===================== FINALIZADO ===================== */}
      {estado === "finalizado" && (
        <View style={styles.finalContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#2A9D8F" />
          <Text style={styles.finalTitle}>Ocorrência finalizada</Text>
          <Text style={styles.finalSubtitle}>Bom trabalho equipe 👏</Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setEstado("standby")}
          >
            <Text style={styles.backText}>VOLTAR PARA PRONTIDÃO</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9", justifyContent: "center" },

  /* STANDBY */
  standbyBox: {
    margin: 20,
    padding: 30,
    borderRadius: 26,
    alignItems: "center",
  },
  title: { color: "#FFF", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  subtitle: { color: "#E0E7FF", marginTop: 4 },
  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 20, gap: 6 },
  infoText: { color: "#E0E7FF" },
  testButton: {
    marginTop: 25,
    backgroundColor: "#E63946",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  testText: { color: "#FFF", fontWeight: "bold" },

  /* CHAMADO */
  alertContainer: { padding: 20 },
  priorityBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 10,
  },
  priorityText: { color: "#FFF", fontWeight: "bold" },
  address: { fontSize: 18, fontWeight: "bold", color: "#003049" },
  time: { color: "#6B7280", marginBottom: 10 },
  card: { backgroundColor: "#FFF", padding: 16, borderRadius: 18, elevation: 4 },
  label: { marginTop: 8, color: "#6B7280" },
  value: { fontWeight: "bold", color: "#003049" },
  acceptButton: {
    marginTop: 20,
    backgroundColor: "#E63946",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  acceptText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },

  /* ATENDIMENTO */
  attContainer: { padding: 20, alignItems: "center" },
  attTitle: { fontSize: 22, fontWeight: "bold", color: "#003049" },
  timer: { marginVertical: 10, color: "#6B7280" },
  actionButton: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    alignItems: "center",
    elevation: 3,
  },
  actionText: { fontWeight: "bold", color: "#003049" },
  finishButton: {
    width: "100%",
    backgroundColor: "#E63946",
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
    alignItems: "center",
  },
  finishText: { color: "#FFF", fontWeight: "bold" },

  /* FINALIZADO */
  finalContainer: { alignItems: "center", padding: 20 },
  finalTitle: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  finalSubtitle: { color: "#6B7280", marginBottom: 20 },
  backButton: { backgroundColor: "#003049", padding: 14, borderRadius: 14 },
  backText: { color: "#FFF", fontWeight: "bold" },
});
