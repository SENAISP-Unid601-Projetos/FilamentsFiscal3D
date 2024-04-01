import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  Switch,
  Pressable,
  Picker,
} from 'react-native'

const Orca3d = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionSelection = (option) => {
    setSelectedOption(option)
    // Chame a função apropriada com base na opção selecionada
    switch (option) {
      case 'filamento':
        toggleSwitchFilamento()
        break
      case 'energia':
        toggleSwitchEnergia()
        break
      case 'acabamento':
        toggleSwitchAcabamento()
        break
      case 'payback':
        toggleSwitchPayback()
        break
      case 'margemFuncionario':
        toggleSwitchMargemFuncionario()
        break
      case 'margemLucro':
        toggleSwitchMargemLucro()
        break
      default:
        break
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(true) // Inicia o modal como visível
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Se o login for bem-sucedido, você pode fechar o modal
      setModalVisible(false)
      setErrorMessage('')
    } else {
      // Caso contrário, exiba uma mensagem de erro
      setErrorMessage(
        'Usuário ou senha incorretos. Por favor, tente novamente.'
      )
    }
  }

  const [isEnabledFilamento, setIsEnabledFilamento] = useState(false)
  const toggleSwitchFilamento = () => {
    setIsEnabledFilamento((previousState) => !previousState)
  }

  const [isEnabledEnergia, setIsEnabledEnergia] = useState(false)
  const toggleSwitchEnergia = () => {
    setIsEnabledEnergia((previousState) => !previousState)
  }

  const [isEnabledAcabamento, setIsEnabledAcabamento] = useState(false)
  const toggleSwitchAcabamento = () => {
    setIsEnabledAcabamento((previousState) => !previousState)
  }

  const [isEnabledPayback, setIsEnabledPayback] = useState(false)
  const toggleSwitchPayback = () => {
    setIsEnabledPayback((previousState) => !previousState)
  }

  const [isEnabledMargemFuncionario, setIsEnabledMargemFuncionario] =
    useState(false)
  const toggleSwitchMargemFuncionario = () => {
    setIsEnabledMargemFuncionario((previousState) => !previousState)
  }

  const [isEnabledMargemLucro, setIsEnabledMargemLucro] = useState(false)
  const toggleSwitchMargemLucro = () => {
    setIsEnabledMargemLucro((previousState) => !previousState)
  }

  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState(0)
  const [pesoFilamento, setPesoFilamento] = useState(0)
  const [valorTotalFilamento, setValorTotalFilamento] = useState(0)

  const calcularCustoFilamento = () => {
    const custoTotalFilamento = parseFloat(pesoPeca) * parseFloat(pesoFilamento)
    setValorTotalFilamento(custoTotalFilamento.toFixed(2)) // Ajusta para duas casas decimais
  }

  // Estado para a Calculadora de Energia
  const [potenciaEquipamento, setPotenciaEquipamento] = useState(0)
  const [horasImpressao, setHorasImpressao] = useState(0)
  const [consumoEnergia, setConsumoEnergia] = useState(0)
  const [valorKwh, setValorKwh] = useState(0)

  const calcularConsumoEnergia = () => {
    const consumoCalculado =
      (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000
    const consumoFinal = consumoCalculado * parseFloat(valorKwh)
    setConsumoEnergia(consumoFinal.toFixed(2)) // Ajusta para duas casas decimais
  }

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = () => {
    const taxaLucro =
      (parseFloat(valorTotalFilamento) +
        parseFloat(valorKwh) / parseFloat(consumoEnergia)) *
      100
    return taxaLucro.toFixed(2)
  }

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState(0)
  const [margemLucro, setMargemLucro] = useState(0)

  const calcularMargemLucro = () => {
    const margemLucroCalculada =
      ((parseFloat(valorTotalFilamento) + parseFloat(valorKwh)) *
        parseFloat(porcentagemLucro)) /
      100
    setMargemLucro(margemLucroCalculada.toFixed(2)) // Ajusta para duas casas decimais
  }

  // Estado e função para a Calculadora do preço dos colaboradores
  const [porcentagemCola, setPorcentagemCola] = useState(0)
  const [margemCola, setMargemCola] = useState(0)

  const calcularMargemCola = () => {
    const margemColaCalculada =
      ((parseFloat(valorTotalFilamento) + parseFloat(valorKwh)) *
        parseFloat(porcentagemCola)) /
      100
    setMargemCola(margemColaCalculada.toFixed(2)) // Ajusta para duas casas decimais
  }

  // Estado para a Calculadora de prossessos de preparação
  const [horaPreparacao, setHoraPreparacao] = useState(0)
  const [horaFatiador, setHoraFatiador] = useState(0)
  const [valorHora, setValorHora] = useState(0)
  const [valorTrabalho, setValorTrabalho] = useState(0)

  const calcularCustoPreparacao = () => {
    const custoPreparacao =
      parseFloat(valorHora) *
      (parseFloat(horaFatiador) + parseFloat(horaPreparacao))
    setValorTrabalho(custoPreparacao.toFixed(2)) // Ajusta para duas casas decimais
  }

  // Estado para a Calculadora de payback
  const [fluxoCaixa, setFluxoCaixa] = useState(0)
  const [investimento, setInvestimento] = useState(0)
  const [periodo, setPeriodo] = useState(0)

  const fazerpay = () => {
    const payback = parseFloat(investimento) / parseFloat(periodo)
    setFluxoCaixa(payback.toFixed(2))
  }

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  // Estado e função para a Calculadora de Total com Lucro
  const [totalComLucro, setTotalComLucro] = useState('')

  const calcularTotalComLucro = () => {
    const totalCalculado =
      parseFloat(valorTotalFilamento) +
      parseFloat(consumoEnergia) +
      parseFloat(margemLucro) +
      parseFloat(margemCola) +
      parseFloat(valorTrabalho) +
      parseFloat(fluxoCaixa)
    setTotalComLucro(totalCalculado.toFixed(2)) // Ajusta para duas casas decimais
  }

  const handleAllCalculations = () => {
    setErrorMessage('')

    calcularCustoFilamento()
    calcularConsumoEnergia()
    calcularTaxaLucro()
    calcularMargemLucro()
    calcularMargemCola() // Corrigido o nome da função
    calcularCustoPreparacao()
    fazerpay()
    calcularTotalComLucro()
  }

  return (
    // <ImageBackground
    //   source={require('FilamentsFiscal3D\front\assets')}
    //   style={{ flex: 1 }}
    // >
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.inputContainercabeçalho}>
        <View style={styles.container}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => handleOptionSelection(itemValue)}
          style={styles.picker}
        >
            <Picker.Item label="Selecione uma opção" value={null} />
            <Picker.Item
              label="Calcular gasto de filamento"
              value="filamento"
            />
            <Picker.Item label="Calcular gasto de energia" value="energia" />
            <Picker.Item
              label="Calcular gasto no acabamento"
              value="acabamento"
            />
            <Picker.Item label="Calcular payback" value="payback" />
            <Picker.Item
              label="Calcular margem do funcionário"
              value="margemFuncionario"
            />
            <Picker.Item label="Calcular margem de lucro" value="margemLucro" />
          </Picker>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Se o usuário pressionar o botão de voltar, impeça o fechamento do modal
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: 'lightgray',
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
                  borderBottomColor: 'black',
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
                  borderBottomColor: 'black',
                }}
              />
              {errorMessage ? (
                <Text style={{ color: 'red', marginBottom: 10 }}>
                  {errorMessage}
                </Text>
              ) : null}
              <Pressable
                style={({ pressed }) => [styles.button]}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={[styles.leftPane, { flex: 1 }]}>
        </View>
        <View style={[styles.rightPane, { flex: 2 }]}>
          <View style={{ flexDirection: 'row' }}>
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

                <View style={styles.separator} />
                <Text>Preço do filamento (g):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o preço do filamento"
                  keyboardType="numeric"
                  onChangeText={(text) => setPesoFilamento(text)}
                />
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
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
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
              </View>
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
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
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
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.rightPane, { flex: 2 }]}>
          <View style={{ flexDirection: 'row' }}>
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
              </Text>{' '}
              <Text style={{ marginTop: 10 }}>
                Total do Orçamento: R$ {totalComLucro}
              </Text>
              {/* Seção para a Calculadora de Total com Lucro */}
            </View>
            <View style={styles.inputContainerresultados}></View>
          </View>

          <View style={styles.inputContainerCaixaDBotoes}>
            <View style={{ flexDirection: 'row' }}>
              <Pressable style={styles.button} onPress={handleAllCalculations}>
                <Text style={styles.buttonText}>Calcular</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={calcularTotalComLucro}>
                <Text style={styles.buttonText}>Calcular Orçamento</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
    // </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  picker: {
    width: 250,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 40,
    marginLeft: 15,
    marginRight: 0,
    borderColor: "white",
  },
  itemStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  leftPane: {
    height: 1000,
  },
  centerPane: {
    height: 1000,
  },
  rightPane: {
    height: 1000,
  },

  button: {
    width: 160,
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },

  buttonContainer: {
    width: 100,
    height: 90,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lime',
    padding: 10,
    borderRadius: 10,
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  buttonText: {
    alignItems: 'center',
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainerFilamento: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerEnergia: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerLucro: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerMargemFuncionario: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerTrabalho: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerpayback: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  // Estilos destacados para as áreas de cálculo quando o switch estiver ativado
  inputContainerFilamentoHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerEnergiaHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerAcabamentoHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerPaybackHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerMargemFuncionarioHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerPreparacaoHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainerMargemLucroHighlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 300,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerCaixaDBotoes: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 470,
    height: 90,
    backgroundColor: 'lime',
    borderRadius: 10,
    marginVertical: 1,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainerresultados: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 400,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginVertical: 20,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },

  inputContainercabeçalho: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 1264,
    height: 90,
    backgroundColor: 'lightgray',
    borderRadius: 0,
    marginVertical: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  inputContainerlateral: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 120,
    height: 1000,
    backgroundColor: 'lightgray',
    borderRadius: 0,
    marginVertical: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  separator: {
    width: '100%',
    height: 10,
    backgroundColor: 'transparent',
  },
})

export default Orca3d
