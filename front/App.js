import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal, // Importe o Modal
} from "react-native";


const Orca3d = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(true); // Inicia o modal como visível
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = () => {
    if (username === 'admim' && password === 'admim') {
    // Se o login for bem-sucedido, você pode fechar o modal
    setModalVisible(false);
    setErrorMessage('');
  } else {
    // Caso contrário, exiba uma mensagem de erro
    setErrorMessage('Usuário ou senha incorretos. Por favor, tente novamente.');
  }
  };
  
  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState(0);
  const [pesoFilamento, setPesoFilamento] = useState(0);
  const [valorTotalFilamento, setValorTotalFilamento] = useState(0);

  const calcularCustoFilamento = () => {
    if (!pesoPeca || !pesoFilamento || isNaN(parseFloat(pesoPeca)) || isNaN(parseFloat(pesoFilamento))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
  
    const custoTotalFilamento =
      parseFloat(pesoPeca) * parseFloat(pesoFilamento);
    setValorTotalFilamento(custoTotalFilamento.toFixed(2)); // Ajusta para duas casas decimais
  };
  

  // Estado para a Calculadora de Energia
  const [potenciaEquipamento, setPotenciaEquipamento] = useState(0);
  const [horasImpressao, setHorasImpressao] = useState(0);
  const [consumoEnergia, setConsumoEnergia] = useState(0);
  const [valorKwh, setValorKwh] = useState(0);

  const calcularConsumoEnergia = () => {
    if (!potenciaEquipamento || !horasImpressao || isNaN(parseFloat(potenciaEquipamento)) || isNaN(parseFloat(horasImpressao))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const consumoCalculado =
      (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000;
    const consumoFinal = consumoCalculado * parseFloat(valorKwh);
    setConsumoEnergia(consumoFinal.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = () => {
    if (!valorTotalFilamento || !consumoEnergia || isNaN(parseFloat(valorTotalFilamento)) || isNaN(parseFloat(consumoEnergia))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const taxaLucro =
      (parseFloat(valorTotalFilamento) + parseFloat(valorKwh) / parseFloat(consumoEnergia)) * 100;
    return taxaLucro.toFixed(2);
  };

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);

  const calcularMargemLucro = () => {
    if (!valorTotalFilamento || !porcentagemLucro || isNaN(parseFloat(valorTotalFilamento)) || isNaN(parseFloat(porcentagemLucro))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const margemLucroCalculada =
      (parseFloat(valorTotalFilamento) + parseFloat(valorKwh) * parseFloat(porcentagemLucro)) / 100;
    setMargemLucro(margemLucroCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado e função para a Calculadora do preço dos colaboradores
  const [porcentagemCola, setPorcentagemCola] = useState(0);
  const [margemCola, setMargemCola] = useState(0);

  const calcularMargemCola = () => {
    if (!valorTotalFilamento || !porcentagemCola || isNaN(parseFloat(valorTotalFilamento)) || isNaN(parseFloat(porcentagemCola))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const margemColaCalculada =
      (parseFloat(valorTotalFilamento) * parseFloat(porcentagemCola)) / 100;
    setMargemCola(margemColaCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de prossessos de preparação
  const [horaPreparacao, setHoraPreparacao] = useState(0);
  const [horaFatiador, setHoraFatiador] = useState(0);
  const [valorHora, setValorHora] = useState(0);
  const [valorTrabalho, setValorTrabalho] = useState(0);

  const calcularCustoPreparacao = () => {
    if (!horaPreparacao || !horaFatiador || isNaN(parseFloat(horaPreparacao)) || isNaN(parseFloat(horaFatiador))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const custoPreparacao =
      parseFloat(valorHora) *
      (parseFloat(horaFatiador) + parseFloat(horaPreparacao));
    setValorTrabalho(custoPreparacao.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de payback
  const [fluxoCaixa, setFluxoCaixa] = useState(0);
  const [investimento, setInvestimento] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const fazerpay = () => {
    if (!investimento || !periodo || isNaN(parseFloat(investimento)) || isNaN(parseFloat(periodo))) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    const payback = parseFloat(investimento) / parseFloat(periodo);
    setFluxoCaixa(payback.toFixed(2));
  };

  // Estado e função para a Calculadora de Total com Lucro
  const [totalComLucro, setTotalComLucro] = useState("");

  const calcularTotalComLucro = () => {
    const totalCalculado =
      parseFloat(valorTotalFilamento) +
      parseFloat(consumoEnergia) +
      parseFloat(margemLucro) +
      parseFloat(margemCola) +
      parseFloat(valorTrabalho) +
      parseFloat(fluxoCaixa);
    setTotalComLucro(totalCalculado.toFixed(2)); // Ajusta para duas casas decimais
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputContainercabeçalho}>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputContainerFilamento}>
            {/* Seção para a Calculadora de Filamento */}
            <Text>Peso da peça impressa (g):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o peso da peça"
              keyboardType="numeric"
              value={pesoPeca}
              onChangeText={(text) => setPesoPeca(text)}
            />
            <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Se o usuário pressionar o botão de voltar, impeça o fechamento do modal
        handleClose();
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <TextInput
            placeholder="Usuario"
            value={username}
            onChangeText={text => setUsername(text)}
            style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'black' }}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'black' }}
          />
          {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
          <Button title="Login" onPress={handleLogin} />
          
        </View>
      </View>
    </Modal>

            <View style={styles.separator} />

            <Text>Preço do filamento (g):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o preço do filamento"
              keyboardType="numeric"
              value={pesoFilamento}
              onChangeText={(text) => setPesoFilamento(text)}
            />
            <Button title="Calcular" onPress={calcularCustoFilamento} />
          </View>

          <View style={styles.inputContainerEnergia}>
            {/* Seção para a Calculadora de Energia */}
            <Text style={{ marginTop: 20 }}>Calculadora de Energia:</Text>
            <Text>Potência do equipamento (W):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a potência"
              keyboardType="numeric"
              value={potenciaEquipamento}
              onChangeText={(text) => setPotenciaEquipamento(text)}
            />

            <Text>Duração da impreção (H):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o número de horas"
              keyboardType="numeric"
              value={horasImpressao}
              onChangeText={(text) => setHorasImpressao(text)}
            />

            <Text>Taxa de Energia (R$/kwh):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o valor do kWh"
              keyboardType="numeric"
              value={valorKwh}
              onChangeText={(text) => setValorKwh(text)}
            />
            <Button title="Calcular" onPress={calcularConsumoEnergia} />
          </View>
          <View style={styles.inputContainerTrabalho}>
            {/* Seção para a Calculadora de Preço de preparações da peça */}
            <Text>Horas gastas no fatiador (h):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite as horas gastas no fatiador"
              keyboardType="numeric"
              value={horaFatiador}
              onChangeText={(text) => setHoraFatiador(text)}
            />

            <View style={styles.separator} />

            <Text>Horas gastas na preparação (h):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite as horas gastas na preparação da peça"
              keyboardType="numeric"
              value={horaPreparacao}
              onChangeText={(text) => setHoraPreparacao(text)}
            />

            <View style={styles.separator} />

            <Text>Preço da hora de trabalho (R$):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o valor da hora de trabalho"
              keyboardType="numeric"
              value={valorHora}
              onChangeText={(text) => setValorHora(text)}
            />
            <Button title="Calcular" onPress={calcularCustoPreparacao} />
          </View>
          <View style={styles.inputContainerresultados}>
            {/* Seção para a Calculadora de Total com Lucro */}
            <Text style={{ marginTop: 10 }}>
              Valor Total Filamento: R$ {valorTotalFilamento}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Consumo Energia: R$ {consumoEnergia}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Valor da preparação: R$ {valorTrabalho}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Valor do Payback: R$ {fluxoCaixa}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Margem do funcionário: R$ {margemCola}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Margem de Lucro: R$ {margemLucro}
            </Text>{" "}
            <Text style={{ marginTop: 10 }}>
              Total do Orçamento: R$ {totalComLucro}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputContainerpayback}>
            {/* Seção para a Calculadora de Payback */}
            <Text>Investimento inicial (R$):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o investimento"
              keyboardType="numeric"
              value={investimento}
              onChangeText={(text) => setInvestimento(text)}
            />

            <View style={styles.separator} />

            <Text>Tempo de recuperação (Dias):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o tempo de recuperação"
              keyboardType="numeric"
              value={periodo}
              onChangeText={(text) => setPeriodo(text)}
            />
            <Button title="Calcular" onPress={fazerpay} />
          </View>
          <View style={styles.inputContainerCola}>
            {/* Seção para a Calculadora do preço da hora dos funcionários */}
            <Text style={{ marginTop: 20 }}>
              Calcule porcentagens para funcionários:
            </Text>
            <Text>Valor da hora (R$):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a porcentagem"
              keyboardType="numeric"
              value={porcentagemCola}
              onChangeText={(text) => setPorcentagemCola(text)}
            />
            <Button title="Calcular" onPress={calcularMargemCola} />
          </View>

          <View style={styles.inputContainerLucro}>
            {/* Seção para a Calculadora de Margem de Lucro */}
            <Text style={{ marginTop: 20 }}>
              Calculadora de Margem de Lucro:
            </Text>
            <Text>porcentagem do Lucro (R$):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a porcentagem de lucro"
              keyboardType="numeric"
              value={porcentagemLucro}
              onChangeText={(text) => setPorcentagemLucro(text)}
            />
            <Button title="Calcular" onPress={calcularMargemLucro} />
          </View>
          <View style={styles.inputContainerLucroFinal}>
            {/* Seção para a Calculadora de Total com Lucro */}
            <Text style={{ marginTop: 20 }}>
              Calculadora de Total com Lucro:
            </Text>
            <Button title="Calcular" onPress={calcularTotalComLucro} />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  inputContainerFilamento: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 5,
  },

  inputContainerEnergia: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerLucro: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerLucroFinal: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 120,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 5,
  },

  inputContainerCola: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerTrabalho: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerpayback: {
    alignItems: "center",
    justifyContent: "center",
    width: 255,
    height: 310,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 5,
  },

  inputContainerresultados: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginVertical: 50,
    marginBottom: 1,
    marginLeft: 100,
    marginRight: 5,
  },

  inputContainercabeçalho: {
    alignItems: "center",
    justifyContent: "center",
    width: 1264,
    height: 90,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginVertical: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 5,
  },

  input: {
    width: "80%",
    height: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "white",
  },
  separator: {
    width: "100%",
    height: 10,
    backgroundColor: "transparent",
  },
});

export default Orca3d;