import { LinearGradient } from 'expo-linear-gradient'; // Certifique-se de instalar expo-linear-gradient
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [cpfCrm, setCpfCrm] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if ((cpfCrm === "123.456.789-00" || cpfCrm === "12345") && senha === "1234") {
      Alert.alert("Login realizado com sucesso!");
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
    <LinearGradient
      colors={['#6DD5FA', '#2980B9']}
      style={styles.container}
    >
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="CPF ou CRM"
        placeholderTextColor="#555"
        value={cpfCrm}
        onChangeText={setCpfCrm}
        keyboardType="default"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#555"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={handleEsqueceuSenha}>
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.linkText}>Ainda não possui cadastro?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Acesso restrito a profissionais da saúde</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#FF6B6B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 7,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  linksContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  footer: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});
