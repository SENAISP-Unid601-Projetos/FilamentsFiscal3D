import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const TelaLogin = ({ sucessoLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    // Checando para evitar solicitações duplicadas
    if (isLoggingIn) {
      return;
    }

    setIsLoggingIn(true);

      // nescessitando a solitação do backend para autenticar o usuário

      // só uma simulação do que é para acontecer
      if (email === "senai@sp.senai.br" && password === "senhasenai") {
        setIsLoggingIn(false); 
        sucessoLogin();
      } else {
        setIsLoggingIn(false); 
        alert("Credenciais inválidas. Tente novamente.");
      }

  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} disabled={isLoggingIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "white", 
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default TelaLogin;
