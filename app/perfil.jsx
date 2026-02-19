import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomHeader from "./components/CustomHeader";

export default function Perfil() {
  const router = useRouter();

  // Dados do funcionário
  const [nome] = useState("Ana Elisa Oliveira Silva");
  const [cpf] = useState("123.456.789-00");
  const [codigo] = useState("FUNC1234");
  const [numero] = useState("(98) 91234-5678");
  const [email] = useState("ana.elisa@email.com");
  const [funcao] = useState("Profissional de equipe");

  // Estados editáveis
  const [unidadeAtual, setUnidadeAtual] = useState("SAMU Caxias");
  const [statusAtivo, setStatusAtivo] = useState(true);
  const [diasTrabalho, setDiasTrabalho] = useState("Seg a Sex");
  const [horarioTrabalho, setHorarioTrabalho] = useState("08:00 - 17:00");

  const salvarUnidade = () => {
    Alert.alert("Unidade Atualizada", `Nova unidade: ${unidadeAtual}`);
    // Aqui você poderia chamar função para salvar no backend
  };

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <CustomHeader title="Perfil" showBack={true} />

      {/* CONTEÚDO */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Informações do Profissional</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{nome}</Text>

          <Text style={styles.label}>CPF</Text>
          <Text style={styles.value}>{cpf}</Text>

          <Text style={styles.label}>Código</Text>
          <Text style={styles.value}>{codigo}</Text>

          <Text style={styles.label}>Número</Text>
          <Text style={styles.value}>{numero}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{email}</Text>

          <Text style={styles.label}>Função</Text>
          <Text style={styles.value}>{funcao}</Text>

          <Text style={styles.label}>Unidade Atual</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={unidadeAtual}
              onChangeText={setUnidadeAtual}
              placeholder="Digite a unidade"
            />
            <TouchableOpacity style={styles.saveButton} onPress={salvarUnidade}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Status</Text>
          <TouchableOpacity
            style={[styles.statusButton, { backgroundColor: statusAtivo ? "#2A9D8F" : "#E63946" }]}
            onPress={() => setStatusAtivo(!statusAtivo)}
          >
            <Text style={styles.statusText}>{statusAtivo ? "Ativo" : "Inativo"}</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Dias de Trabalho</Text>
          <TextInput
            style={styles.input}
            value={diasTrabalho}
            onChangeText={setDiasTrabalho}
          />

          <Text style={styles.label}>Horário de Trabalho</Text>
          <TextInput
            style={styles.input}
            value={horarioTrabalho}
            onChangeText={setHorarioTrabalho}
          />
        </View>
      </ScrollView>

      {/* RODAPÉ FIXO */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/ocorrencias")}>
          <Ionicons name="alert-circle-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Ocorrências</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/mensagens")}>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/historico")}>
          <Ionicons name="time-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/tarefas")}>
          <Ionicons name="checkmark-done-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },
  content: { padding: 20, paddingBottom: 120 },
  title: { fontSize: 22, fontWeight: "bold", color: "#003049", marginBottom: 20 },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    elevation: 4,
    marginBottom: 20,
  },
  label: { color: "#6B7280", marginTop: 10 },
  value: { fontWeight: "bold", color: "#003049", marginTop: 2 },
  input: {
    backgroundColor: "#F1F5F9",
    padding: 10,
    borderRadius: 12,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#E0E7FF",
  },
  statusButton: {
    padding: 10,
    borderRadius: 12,
    marginTop: 4,
    alignItems: "center",
  },
  statusText: { color: "#FFF", fontWeight: "bold" },
  saveButton: {
    backgroundColor: "#E63946",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 4,
  },
  saveText: { color: "#FFF", fontWeight: "bold" },

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