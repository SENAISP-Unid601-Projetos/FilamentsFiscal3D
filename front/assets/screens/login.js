import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
          }
        } catch (error) {
          setMessage('Erro ao fazer login');
          console.error(error);
        }
      };
      const getToken = async () => {
        try {
          const token = await AsyncStorage.getItem('authToken');
          if (token !== null) {
            // Token encontrado, você pode usá-lo
          }
        } catch (error) {
          console.error('Erro ao obter o token', error);
        }
      };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default Login;
