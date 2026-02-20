import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import CustomHeader from "./components/CustomHeader";

// Necessário para animação no Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Tarefas() {
  const router = useRouter();
  const [statusFiltro, setStatusFiltro] = useState("Hoje"); // Hoje, Pendentes, Concluídas
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Atendimento João Silva",
      tipo: "Agendado",
      responsavel: "Dr. Carlos",
      hora: "10:00",
      status: "Pendente",
      detalhes: "Paciente com suspeita de AVC",
      expandido: false,
    },
    {
      id: 2,
      titulo: "Verificar chamado Rua A",
      tipo: "Passado pelo médico",
      responsavel: "Dr. Ana",
      hora: "12:30",
      status: "Concluída",
      detalhes: "Paciente com dor no peito",
      expandido: false,
    },
    {
      id: 3,
      titulo: "Coletar exames hospital",
      tipo: "Pendência",
      responsavel: "Dr. Luiz",
      hora: "14:00",
      status: "Pendente",
      detalhes: "Levar amostras ao laboratório",
      expandido: false,
    },
  ]);

  // Toggle expandir card
  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, expandido: !t.expandido } : t))
    );
  };

  // Concluir tarefa
  const concluirTarefa = (id) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Concluída" } : t))
    );
  };

  // Filtrar tarefas
  const tarefasFiltradas = tarefas.filter((t) => {
    if (statusFiltro === "Hoje") return true;
    return t.status === statusFiltro;
  });

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <CustomHeader title="Tarefas" showBack={true} />

      {/* Filtros */}
      <View style={styles.filtroContainer}>
        {["Hoje", "Pendente", "Concluída"].map((filtro) => (
          <TouchableOpacity
            key={filtro}
            style={[
              styles.filtroBotao,
              statusFiltro === filtro && styles.filtroAtivo,
            ]}
            onPress={() => setStatusFiltro(filtro)}
          >
            <Text
              style={[
                styles.filtroTexto,
                statusFiltro === filtro && styles.filtroTextoAtivo,
              ]}
            >
              {filtro}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de Tarefas */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {tarefasFiltradas.map((tarefa) => {
          const corCard =
            tarefa.status === "Pendente"
              ? "#F77F00"
              : tarefa.status === "Concluída"
              ? "#2A9D8F"
              : "#0077B6";

          return (
            <View
              key={tarefa.id}
              style={[styles.card, { borderLeftColor: corCard }]}
            >
              <TouchableOpacity onPress={() => toggleExpand(tarefa.id)}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitulo}>{tarefa.titulo}</Text>
                  <Text
                    style={[
                      styles.cardStatus,
                      {
                        backgroundColor:
                          tarefa.status === "Pendente"
                            ? "#F77F00"
                            : tarefa.status === "Concluída"
                            ? "#2A9D8F"
                            : "#0077B6",
                      },
                    ]}
                  >
                    {tarefa.status}
                  </Text>
                </View>
                <Text style={styles.cardSub}>
                  {tarefa.tipo} - {tarefa.hora}
                </Text>
              </TouchableOpacity>

              {tarefa.expandido && (
                <View style={styles.cardDetalhes}>
                  <Text style={styles.cardLabel}>Responsável:</Text>
                  <Text style={styles.cardValue}>{tarefa.responsavel}</Text>

                  <Text style={styles.cardLabel}>Detalhes:</Text>
                  <Text style={styles.cardValue}>{tarefa.detalhes}</Text>

                  {tarefa.status !== "Concluída" && (
                    <TouchableOpacity
                      style={styles.concluirBtn}
                      onPress={() => concluirTarefa(tarefa.id)}
                    >
                      <Text style={styles.concluirTexto}>✅ Concluir</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/ocorrencias")}
        >
          <Ionicons name="clipboard-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Ocorrências</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/perfil")}
        >
          <Ionicons name="person-circle-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/historico")}
        >
          <Ionicons name="time-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/mensagens")}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Mensagens</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },

  filtroContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filtroBotao: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6B7280",
  },
  filtroAtivo: {
    backgroundColor: "#E63946",
    borderColor: "#E63946",
  },
  filtroTexto: { color: "#6B7280", fontWeight: "bold" },
  filtroTextoAtivo: { color: "#FFF" },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    borderLeftWidth: 6,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between" },
  cardTitulo: { fontSize: 16, fontWeight: "bold", color: "#003049" },
  cardStatus: {
    fontWeight: "bold",
    color: "#FFF",
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  cardSub: { marginTop: 4, color: "#6B7280" },
  cardDetalhes: { marginTop: 10 },
  cardLabel: { color: "#6B7280", marginTop: 6 },
  cardValue: { fontWeight: "bold", color: "#003049", marginTop: 2 },
  concluirBtn: {
    marginTop: 10,
    backgroundColor: "#2A9D8F",
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  concluirTexto: { color: "#FFF", fontWeight: "bold" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0E7FF",
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerButton: { alignItems: "center" },
  footerText: { fontSize: 12, color: "#003049", marginTop: 2 },
});