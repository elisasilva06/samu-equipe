import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CustomHeader from "./components/CustomHeader";

export default function Mensagens() {
  const router = useRouter();
  const [chatSelecionado, setChatSelecionado] = useState(null);
  const [mensagens, setMensagens] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const scrollRef = useRef();

  // Lista de chats
  const chats = [
    { id: 1, nome: "Dr. Carlos", ultimaMsg: "Não se esqueça do plantão!" },
    { id: 2, nome: "Equipe SAMU 02", ultimaMsg: "Chegamos na base." },
    { id: 3, nome: "Enfermeira Maria", ultimaMsg: "Relatório pronto." },
  ];

  // enviar mensagem
  const enviarMensagem = () => {
    if (inputMsg.trim() === "") return;
    setMensagens([...mensagens, { texto: inputMsg, enviado: true }]);
    setInputMsg("");
  };

  // scroll automático
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollToEnd({ animated: true });
  }, [mensagens]);

  // Header dinâmico
  const renderHeader = () => {
    if (!chatSelecionado) {
      // lista de chats -> seta vai para HOME
      return (
        <CustomHeader
          title="Mensagens"
          showBack={true}
          onBack={() => router.push("/ocorrencias")}
        />
      );
    } else {
      // dentro do chat -> seta volta para lista de chats
      return (
        <CustomHeader
          title={chatSelecionado.nome}
          showBack={true}
          onBack={() => setChatSelecionado(null)}
        />
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F1F5F9" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {renderHeader()}

      {!chatSelecionado ? (
        // LISTA DE CHATS
        <ScrollView contentContainerStyle={styles.chatList}>
          {chats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              style={styles.chatItem}
              onPress={() => {
                setChatSelecionado(chat);
                setMensagens([
                  { texto: chat.ultimaMsg, enviado: false },
                ]);
              }}
            >
              <Ionicons name="chatbubble-ellipses-outline" size={28} color="#003049" />
              <View style={styles.chatInfo}>
                <Text style={styles.chatNome}>{chat.nome}</Text>
                <Text style={styles.ultimaMsg}>{chat.ultimaMsg}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        // CONVERSA
        <View style={styles.conversaContainer}>
          <ScrollView ref={scrollRef} contentContainerStyle={styles.mensagensArea}>
            {mensagens.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.bolha,
                  msg.enviado ? styles.bolhaEnviada : styles.bolhaRecebida,
                ]}
              >
                <Text style={msg.enviado ? styles.textEnviado : styles.textRecebido}>
                  {msg.texto}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* INPUT */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua mensagem..."
              value={inputMsg}
              onChangeText={setInputMsg}
            />
            <TouchableOpacity style={styles.sendButton} onPress={enviarMensagem}>
              <Ionicons name="send" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/ocorrencias")}
        >
          <Ionicons name="alarm-outline" size={28} color={chatSelecionado ? "#6B7280" : "#003049"} />
          <Text style={styles.footerText}>Ocorrência</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/mensagens")}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Mensagens</Text>
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
          onPress={() => router.push("/tarefas")}
        >
          <Ionicons name="checkmark-done-outline" size={28} color="#003049" />
          <Text style={styles.footerText}>Tarefas</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  chatList: { padding: 20, paddingBottom: 100 },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
  },
  chatInfo: { flex: 1, marginLeft: 12 },
  chatNome: { fontWeight: "bold", color: "#003049", fontSize: 16 },
  ultimaMsg: { color: "#6B7280", marginTop: 2 },

  conversaContainer: { flex: 1, paddingBottom: 80 },
  mensagensArea: { padding: 20 },
  bolha: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },
  bolhaEnviada: { backgroundColor: "#E63946", alignSelf: "flex-end" },
  bolhaRecebida: { backgroundColor: "#F1F5F9", alignSelf: "flex-start", borderWidth: 1, borderColor: "#E0E7FF" },
  textEnviado: { color: "#FFF" },
  textRecebido: { color: "#003049" },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E7FF",
  },
  input: { flex: 1, backgroundColor: "#F1F5F9", borderRadius: 16, paddingHorizontal: 12, height: 45 },
  sendButton: { marginLeft: 10, backgroundColor: "#E63946", padding: 12, borderRadius: 50 },

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