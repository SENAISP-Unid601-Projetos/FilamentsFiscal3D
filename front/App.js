import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  FlatList,
  Switch,
} from "react-native";







const HistoricoItem = ({ item, removerItem }) => (
  <View style={styles.listItem}>
    <Text style={styles.listText}>{item.title}</Text>
    <Text style={styles.listText}>{item.date}</Text>
    <Text style={styles.listText}>{item.titleTotalValorFilamento}{item.totalValorFilamento}</Text>
    <Text style={styles.listText}>{item.titleConsumoEnergia}{item.consumoEnergia}</Text>
    <Text style={styles.listText}>{item.titleValorTrabalho}{item.valorTrabalho}</Text>
    <Text style={styles.listText}>{item.titleFluxoCaixa}{item.fluxoCaixa}</Text>
    <Text style={styles.listText}>{item.titleMargemCola}{item.margemCola}</Text>
    <Text style={styles.listText}>{item.titleMargemLucro}{item.margemLucro}</Text>
   
    <Text style={styles.listText}>{item.titlevalorTotal}{item.valorTotal}</Text>
    <Button title="Remover" onPress={() => removerItem(item.id)} />
  </View>

  //data em outro local \/
  //<Text style={styles.listText}>{item.date}</Text>
);

const Historico = ({ historico, removerItem }) => (
  <FlatList
    data={historico}
    renderItem={({ item }) => <HistoricoItem item={item} removerItem={removerItem} />}
    keyExtractor={(item) => item.id.toString()}
    style={{ width: '100%' }}
  />
);







const Orca3d = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(true); // Inicia o modal como visível
  const [errorMessage, setErrorMessage] = useState("");
  const [historico, setHistorico] = useState([]);


  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // Se o login for bem-sucedido, você pode fechar o modal
      setModalVisible(false);
      setErrorMessage("");
    } else {
      // Caso contrário, exiba uma mensagem de erro
      setErrorMessage(
        "Usuário ou senha incorretos. Por favor, tente novamente."
      );
    }
  };

  const [isEnabledFilamento, setIsEnabledFilamento] = useState(false);
  const toggleSwitchFilamento = () =>
    setIsEnabledFilamento((previousState) => !previousState);

  const [isEnabledEnergia, setIsEnabledEnergia] = useState(false);
  const toggleSwitchEnergia = () =>
    setIsEnabledEnergia((previousState) => !previousState);

  const [isEnabledAcabamento, setIsEnabledAcabamento] = useState(false);
  const toggleSwitchAcabamento = () =>
    setIsEnabledAcabamento((previousState) => !previousState);

  const [isEnabledPayback, setIsEnabledPayback] = useState(false);
  const toggleSwitchPayback = () =>
    setIsEnabledPayback((previousState) => !previousState);

  const [isEnabledMargemFuncionario, setIsEnabledMargemFuncionario] =
    useState(false);
  const toggleSwitchMargemFuncionario = () =>
    setIsEnabledMargemFuncionario((previousState) => !previousState);

  const [isEnabledMargemLucro, setIsEnabledMargemLucro] = useState(false);
  const toggleSwitchMargemLucro = () =>
    setIsEnabledMargemLucro((previousState) => !previousState);

  const [isEnabledTotalLucro, setIsEnabledTotalLucro] = useState(false);
  const toggleSwitchTotalLucro = () =>
    setIsEnabledTotalLucro((previousState) => !previousState);

  const [isEnabledPreparacao, setIsEnabledPreparacao] = useState(false);
  const toggleSwitchPreparacao = () =>
    setIsEnabledPreparacao((previousState) => !previousState);

  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState(0);
  const [pesoFilamento, setPesoFilamento] = useState(0);
  const [valorTotalFilamento, setValorTotalFilamento] = useState(0);

  const calcularCustoFilamento = () => {
    if (
      !pesoPeca ||
      !pesoFilamento ||
      isNaN(parseFloat(pesoPeca)) ||
      isNaN(parseFloat(pesoFilamento))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
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
    if (
      !potenciaEquipamento ||
      !horasImpressao ||
      isNaN(parseFloat(potenciaEquipamento)) ||
      isNaN(parseFloat(horasImpressao))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }
    const consumoCalculado =
      (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000;
    const consumoFinal = consumoCalculado * parseFloat(valorKwh);
    setConsumoEnergia(consumoFinal.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = () => {
    if (
      !valorTotalFilamento ||
      !consumoEnergia ||
      isNaN(parseFloat(valorTotalFilamento)) ||
      isNaN(parseFloat(consumoEnergia))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }
    const taxaLucro =
      (parseFloat(valorTotalFilamento) +
        parseFloat(valorKwh) / parseFloat(consumoEnergia)) *
      100;
    return taxaLucro.toFixed(2);
  };

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);

  const calcularMargemLucro = () => {
    if (
      !valorTotalFilamento ||
      !porcentagemLucro ||
      isNaN(parseFloat(valorTotalFilamento)) ||
      isNaN(parseFloat(porcentagemLucro))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }
    const margemLucroCalculada =
      (parseFloat(valorTotalFilamento) +
        parseFloat(valorKwh) * parseFloat(porcentagemLucro)) /
      100;
    setMargemLucro(margemLucroCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado e função para a Calculadora do preço dos colaboradores
  const [porcentagemCola, setPorcentagemCola] = useState(0);
  const [margemCola, setMargemCola] = useState(0);

  const calcularMargemCola = () => {
    if (
      !valorTotalFilamento ||
      !porcentagemCola ||
      isNaN(parseFloat(valorTotalFilamento)) ||
      isNaN(parseFloat(porcentagemCola))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
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
    if (
      !horaPreparacao ||
      !horaFatiador ||
      isNaN(parseFloat(horaPreparacao)) ||
      isNaN(parseFloat(horaFatiador))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
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
    if (
      !investimento ||
      !periodo ||
      isNaN(parseFloat(investimento)) ||
      isNaN(parseFloat(periodo))
    ) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }
    const payback = parseFloat(investimento) / parseFloat(periodo);
    setFluxoCaixa(payback.toFixed(2));
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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






  const adicionarAoHistorico = () => {
    if (
      valorTotalFilamento !== 0 ||
      consumoEnergia !== 0 ||
      valorTrabalho !== 0 ||
      fluxoCaixa !== 0 ||
      margemCola !== 0 ||
      margemLucro !== 0
    ) {
      const novoItem = {
        id: Date.now(),
        title: 'Historico ',
        titleTotalValorFilamento:'Valor Total Filamento: ',
        titleConsumoEnergia:'Consumo Energia: ',
        titleValorTrabalho:'Valor Trabalho: ',
        titleFluxoCaixa:'Fluxo Caixa: ',
        titleMargemCola:'Margem Cola: ',
        titleMargemLucro:'Margem Lucro: ',
        titlevalorTotal:'Total: ',
        date: new Date().toLocaleString(),
        totalValorFilamento: valorTotalFilamento,
        consumoEnergia: consumoEnergia,
        valorTrabalho: valorTrabalho,
        fluxoCaixa: fluxoCaixa,
        margemCola: margemCola,
        margemLucro: margemLucro,
        valorTotal: totalComLucro,
      };
      setHistorico([...historico, novoItem]);
    }
  };
 
    const removerDoHistorico = (id) => {
      const novoHistorico = historico.filter((item) => item.id !== id);
      setHistorico(novoHistorico);
    };






  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainercabeçalho}></View>
        <View style={{ flexDirection: "row" }}>
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
            {/* Seção para a Calculadora de Total com Lucro */}
            <Text style={{ marginTop: 20 }}>
              Calculadora de Total com Lucro:
            </Text>
            <Button title="Calcular" onPress={() => {calcularTotalComLucro();adicionarAoHistorico();}} />
          </View>
          <View style={styles.inputContainerFilamento}>
            <View
              style={
                isEnabledFilamento
                  ? styles.inputContainerFilamentoHighlighted
                  : styles.inputContainerFilamento
              }
            >
              {/* Seção para a Calculadora de Filamento */}
              <Text>Peso da peça impressa (g):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o peso da peça"
                keyboardType="numeric"
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      padding: 30,
                      width: 400,
                      right: 0,
                      borderRadius: 10,
                    }}
                  >
                    <TextInput
                      placeholder="Usuario"
                      value={username}
                      onChangeText={(text) => setUsername(text)}
                      style={{
                        marginBottom: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "black",
                        width: 340,
                      }}
                    />
                    <TextInput
                      placeholder="Senha"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      secureTextEntry={true}
                      style={{
                        marginBottom: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "black",
                      }}
                    />
                    {errorMessage ? (
                      <Text style={{ color: "red", marginBottom: 10 }}>
                        {errorMessage}
                      </Text>
                    ) : null}
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
                onChangeText={(text) => setPesoFilamento(text)}
              />
              <Button title="Calcular" onPress={calcularCustoFilamento} />
            </View>
          </View>

          <View style={styles.inputContainerEnergia}>
            <View
              style={
                isEnabledEnergia
                  ? styles.inputContainerEnergiaHighlighted
                  : styles.inputContainerEnergia
              }
            >
              {/* Seção para a Calculadora de Energia */}
              <Text>Potência do equipamento (W):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a potência"
                keyboardType="numeric"
                onChangeText={(text) => setPotenciaEquipamento(text)}
              />

              <Text>Duração da impreção (H):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o número de horas"
                keyboardType="numeric"
                onChangeText={(text) => setHorasImpressao(text)}
              />

              <Text>Taxa de Energia (R$/kwh):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o valor do kWh"
                keyboardType="numeric"
                onChangeText={(text) => setValorKwh(text)}
              />
              <Button title="Calcular" onPress={calcularConsumoEnergia} />
            </View>
          </View>
          <View style={styles.inputContainerTrabalho}>
            <View
              style={
                isEnabledAcabamento
                  ? styles.inputContainerPreparacaoHighlighted
                  : styles.inputContainerTrabalho
              }
            >
              {/* Seção para a Calculadora de Preço de preparações da peça */}
              <Text>Horas gastas no fatiador (h):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite as horas gastas no fatiador"
                keyboardType="numeric"
                onChangeText={(text) => setHoraFatiador(text)}
              />

              <View style={styles.separator} />

              <Text>Horas gastas na preparação (h):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite as horas gastas na preparação da peça"
                keyboardType="numeric"
                onChangeText={(text) => setHoraPreparacao(text)}
              />

              <View style={styles.separator} />

              <Text>Preço da hora de trabalho (R$):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o valor da hora de trabalho"
                keyboardType="numeric"
                onChangeText={(text) => setValorHora(text)}
              />
              <Button title="Calcular" onPress={calcularCustoPreparacao} />
            </View>
          </View>
          <View style={styles.inputContainerlateral}>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledFilamento ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchFilamento}
                value={isEnabledFilamento}
              />
              <Text>Calcular gasto de filamento</Text>
            </View>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledEnergia ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchEnergia}
                value={isEnabledEnergia}
              />
              <Text>Calcular gasto de energia</Text>
            </View>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledAcabamento ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchAcabamento}
                value={isEnabledAcabamento}
              />
              <Text>Calcular gasto no acabamento</Text>
            </View>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledPayback ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchPayback}
                value={isEnabledPayback}
              />
              <Text>Calcular payback</Text>
            </View>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledMargemFuncionario ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchMargemFuncionario}
                value={isEnabledMargemFuncionario}
              />
              <Text>Calcular margem do funcionário</Text>
            </View>
            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledMargemLucro ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchMargemLucro}
                value={isEnabledMargemLucro}
              />
              <Text>Calcular margem de lucro</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
        <View style={styles.inputHistorico}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Histórico</Text>
      <Historico historico={historico} removerItem={removerDoHistorico} />
    </View>
          <View style={styles.inputContainerpayback}>
            <View
              style={
                isEnabledPayback
                  ? styles.inputContainerPaybackHighlighted
                  : styles.inputContainerpayback
              }
            >
              {/* Seção para a Calculadora de Payback */}
              <Text>Investimento inicial (R$):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o investimento"
                keyboardType="numeric"
                onChangeText={(text) => setInvestimento(text)}
              />

              <View style={styles.separator} />

              <Text>Tempo de recuperação (Dias):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o tempo de recuperação"
                keyboardType="numeric"
                onChangeText={(text) => setPeriodo(text)}
              />
              <Button title="Calcular" onPress={fazerpay} />
            </View>
          </View>

          <View style={styles.inputContainerMargemFuncionario}>
            <View
              style={
                isEnabledMargemFuncionario
                  ? styles.inputContainerMargemFuncionarioHighlighted
                  : styles.inputContainerMargemFuncionario
              }
            >
              {/* Seção para a Calculadora do preço da hora dos funcionários */}
              <Text style={{ marginTop: 20 }}>
                Calcule margem do funcionários:
              </Text>
              <Text>Valor da hora (R$):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a porcentagem"
                keyboardType="numeric"
                onChangeText={(text) => setPorcentagemCola(text)}
              />
              <Button title="Calcular" onPress={calcularMargemCola} />
            </View>
          </View>

          <View style={styles.inputContainerLucro}>
            <View
              style={
                isEnabledMargemLucro
                  ? styles.inputContainerMargemLucroHighlighted
                  : styles.inputContainerLucro
              }
            >
              {/* Seção para a Calculadora de Margem de Lucro */}
              <Text style={{ marginTop: 20 }}>
                Calculadora de Margem de Lucro:
              </Text>
              <Text>porcentagem do Lucro (R$):</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a porcentagem de lucro"
                keyboardType="numeric"
                onChangeText={(text) => setPorcentagemLucro(text)}
              />
              <Button title="Calcular" onPress={calcularMargemLucro} />
            </View>
          </View>
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
    width: 245,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerEnergia: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
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
    width: 245,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerMargemFuncionario: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
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
    width: 245,
    height: 300,
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
    width: 245,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 5,
  },

  // Estilos destacados para as áreas de cálculo quando o switch estiver ativado
  inputContainerFilamentoHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerEnergiaHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerAcabamentoHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerPaybackHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  inputContainerMargemFuncionarioHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerPreparacaoHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerMargemLucroHighlighted: {
    alignItems: "center",
    justifyContent: "center",
    width: 245,
    height: 300,
    backgroundColor: "lightgreen", // cor de fundo destacada
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerLucroFinal: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 120,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 250,
    marginRight: 5,
  },

  inputContainerresultados: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginVertical: 10,
    marginBottom: 1,
    marginLeft: 10,
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

  inputContainerlateral: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 230,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginVertical: 10,
    marginBottom: 10,
    marginLeft: 5,
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
  inputHistorico: {
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
 
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listText: {
    fontSize: 16,
  },
});

export default Orca3d;