// app/historico.jsx
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import CustomHeader from "./components/CustomHeader";

// Ativar animação no Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Historico() {
  const [filtro, setFiltro] = useState("Hoje"); // Hoje, 7 dias, Mês, Todos
  const [historico, setHistorico] = useState([
    {
      id: 1,
      tipo: "Ocorrência",
      titulo: "Atendimento Rua A",
      data: "19/02/2026",
      hora: "14:32",
      status: "Concluída",
      detalhes: "Paciente com parada cardiorrespiratória, atendido com sucesso.",
      expandido: false,
    },
    {
      id: 2,
      tipo: "Tarefa",
      titulo: "Coletar exames Hospital B",
      data: "18/02/2026",
      hora: "10:00",
      status: "Concluída",
      detalhes: "Levar amostras de sangue ao laboratório central.",
      expandido: false,
    },
    {
      id: 3,
      tipo: "Mensagem",
      titulo: "Instruções do Dr. Carlos",
      data: "17/02/2026",
      hora: "09:15",
      status: "Lida",
      detalhes: "Reforçar protocolo de atendimento a AVC.",
      expandido: false,
    },
    // Adicione mais registros conforme necessário
  ]);

  // Toggle expandir card
  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setHistorico(prev => prev.map(h => h.id === id ? { ...h, expandido: !h.expandido } : h));
  };

  // Filtrar histórico
  const historicoFiltrado = historico.filter(h => {
    if (filtro === "Hoje") return h.data === "19/02/2026"; // exemplo fixo
    if (filtro === "7 Dias") return true; // ajustar conforme backend
    if (filtro === "Mês") return true;
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <CustomHeader title="Histórico" showBack={true} />

      {/* Filtros */}
      <View style={styles.filtroContainer}>
        {["Hoje", "7 Dias", "Mês", "Todos"].map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filtroBotao, filtro === f && styles.filtroAtivo]}
            onPress={() => setFiltro(f)}
          >
            <Text style={[styles.filtroTexto, filtro === f && styles.filtroTextoAtivo]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista do histórico */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {historicoFiltrado.map(h => {
          const corCard = h.tipo === "Ocorrência" ? "#E63946" :
                          h.tipo === "Tarefa" ? "#0077B6" :
                          "#FFB703"; // Mensagem

          return (
            <View key={h.id} style={[styles.card, { borderLeftColor: corCard }]}>
              <TouchableOpacity onPress={() => toggleExpand(h.id)}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitulo}>{h.titulo}</Text>
                  <Text style={styles.cardStatus}>{h.status}</Text>
                </View>
                <Text style={styles.cardSub}>{h.tipo} • {h.data} • {h.hora}</Text>
              </TouchableOpacity>

              {h.expandido && (
                <View style={styles.cardDetalhes}>
                  <Text style={styles.cardLabel}>Detalhes:</Text>
                  <Text style={styles.cardValue}>{h.detalhes}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="clipboard-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Ocorrências</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person-circle-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="time-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
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
  cardStatus: { fontWeight: "bold", color: "#FFF", backgroundColor: "#6B7280", paddingHorizontal: 6, borderRadius: 8 },
  cardSub: { marginTop: 4, color: "#6B7280" },
  cardDetalhes: { marginTop: 10 },
  cardLabel: { color: "#6B7280", marginTop: 6 },
  cardValue: { fontWeight: "bold", color: "#003049", marginTop: 2 },

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

