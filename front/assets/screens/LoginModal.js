import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Modal, Picker, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginModal = ({ visible, onClose, onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('aluno'); // Default user type for registration
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.110.12.37:8080/usuarios/login', {
        username,
        password,
      });

      if (response.data === 'Credenciais inválidas') {
        setMessage('Credenciais inválidas');
      } else {
        const token = response.data;
        await AsyncStorage.setItem('authToken', token);
        setMessage('Login bem-sucedido!');
        onLoginSuccess();
        onClose();
      }
    } catch (error) {
      setMessage('Erro ao fazer login');
      console.error(error);
    }
  };

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://10.110.12.37:8080/usuarios/cadastro', {
        username,
        password,
        tipoUsuario,
      });

      setMessage(response.data);
      if (response.data === 'Usuário cadastrado com sucesso') {
        setIsLoginView(true); // Switch to login view after successful registration
      }
    } catch (error) {
      setMessage('Erro ao fazer cadastro');
      console.error(error);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {isLoginView ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Button title="Login" onPress={handleLogin} />
              {message ? <Text>{message}</Text> : null}
              <TouchableOpacity onPress={() => setIsLoginView(false)}>
                <Text style={styles.switchText}>Não tem uma conta? Cadastre-se</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Picker
                selectedValue={tipoUsuario}
                onValueChange={(itemValue) => setTipoUsuario(itemValue)}
              >
                <Picker.Item label="Aluno" value="aluno" />
                <Picker.Item label="Professor" value="professor" />
              </Picker>
              <Button title="Cadastrar" onPress={handleCadastro} />
              {message ? <Text>{message}</Text> : null}
              <TouchableOpacity onPress={() => setIsLoginView(true)}>
                <Text style={styles.switchText}>Já tem uma conta? Faça login</Text>
              </TouchableOpacity>
            </>
          )}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  switchText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginModal;
