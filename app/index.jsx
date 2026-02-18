import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [cpfCrm, setCpfCrm] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if ((cpfCrm === "123.456.789-00" || cpfCrm === "12345") && senha === "1234") {
      router.replace("/home");
    } else {
      Alert.alert("CPF/CRM ou senha incorretos");
    }
  };

  const handleEsqueceuSenha = () => {
    Alert.alert("Redirecionando para recuperação de senha...");
  };

  const handleCadastro = () => {
    Alert.alert("Redirecionando para cadastro...");
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.appName}>SAMU CAXIAS</Text>
        <Text style={styles.appSubtitle}>Equipe Multidisciplinar</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Entrar</Text>

        <Text style={styles.label}>CPF ou CRM</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF ou CRM"
          placeholderTextColor="#6B7280"
          value={cpfCrm}
          onChangeText={setCpfCrm}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            placeholderTextColor="#6B7280"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />

          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? "eye" : "eye-off"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleEsqueceuSenha}>
            <Text style={styles.linkText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCadastro}>
            <Text style={styles.linkText}>Criar cadastro</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Acesso restrito a profissionais da saúde
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  header: {
  position: "absolute",
  top: 0,
  width: "100%",
  height: 170,

  backgroundColor: "#003049",

  justifyContent: "flex-end",
  alignItems: "center",

  paddingBottom: 20,
  paddingTop: 45,

  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,

  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 6 },
  shadowRadius: 10,
  elevation: 10,
  },

  appName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
  },

  appSubtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    opacity: 0.9,
    marginTop: 4,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginTop: 120,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003049",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#003049",
    marginBottom: 4,
    marginTop: 10,
    fontWeight: "600",
  },

  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#DEE2E6",
    marginBottom: 12,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DEE2E6",
    borderRadius: 10,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  passwordInput: {
    flex: 1,
    height: 52,
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#2A9D8F",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  linksContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  linkText: {
    color: "#FFB703",
    fontWeight: "600",
  },

  footer: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 25,
  },
});
