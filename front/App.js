import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Orca3d = () => {
  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState("");
  const [pesoFilamento, setPesoFilamento] = useState("");
  const [valorTotalFilamento, setValorTotalFilamento] = useState("");

  const calcularCustoFilamento = () => {
    const custoTotalFilamento =
      parseFloat(pesoPeca) * parseFloat(pesoFilamento);
    setValorTotalFilamento(custoTotalFilamento.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de Energia
  const [potenciaEquipamento, setPotenciaEquipamento] = useState("");
  const [horasImpressao, setHorasImpressao] = useState("");
  const [consumoEnergia, setConsumoEnergia] = useState("");
  const [valorKwh, setValorKwh] = useState("");

  const calcularConsumoEnergia = () => {
    const consumoCalculado =
      (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000;
    const consumoFinal = consumoCalculado * parseFloat(valorKwh);
    setConsumoEnergia(consumoFinal.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = () => {
    const taxaLucro =
      (parseFloat(valorTotalFilamento) / parseFloat(consumoEnergia)) * 100;
    return taxaLucro.toFixed(2);
  };

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState("");
  const [margemLucro, setMargemLucro] = useState("");

  const calcularMargemLucro = () => {
    const margemLucroCalculada =
      (parseFloat(valorTotalFilamento) * parseFloat(porcentagemLucro)) / 100;
    setMargemLucro(margemLucroCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado e função para a Calculadora do preço dos colaboradores
  const [porcentagemCola, setPorcentagemCola] = useState("");
  const [margemCola, setMargemCola] = useState("");

  const calcularMargemCola = () => {
    const margemColaCalculada =
      (parseFloat(valorTotalFilamento) * parseFloat(porcentagemCola)) / 100;
    setMargemCola(margemColaCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de prossessos de preparação
  const [horaPreparacao, setHoraPreparacao] = useState("");
  const [horaFatiador, setHoraFatiador] = useState("");
  const [valorHora, setValorHora] = useState("");
  const [valorTrabalho, setValorTrabalho] = useState("");

  const calcularCustoPreparacao = () => {
    const custoPreparacao =
      parseFloat(valorHora) *
      (parseFloat(horaFatiador) + parseFloat(horaPreparacao));
    setValorTrabalho(custoPreparacao.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de payback
  const [fluxoCaixa, setFluxoCaixa] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [periodo, setPeriodo] = useState("");

  const fazerpay = () => {
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
            <Text style={{ marginTop: 10 }}>
              Valor Total Filamento: R$ {valorTotalFilamento}
            </Text>
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
            <Text style={{ marginTop: 10 }}>
              Consumo Energia: R$ {consumoEnergia}
            </Text>
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
            <Text style={{ marginTop: 10 }}>
              Valor da preparação: R$ {valorTrabalho}
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
            <Text style={{ marginTop: 10 }}>Valor do Payback: R$ {fluxoCaixa}</Text>
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
            <Text style={{ marginTop: 10 }}>
              Margem do funcionário: R$ {margemCola}
            </Text>
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
            <Text style={{ marginTop: 10 }}>
              Margem de Lucro: R$ {margemLucro}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputContainerLucroFinal}>
            {/* Seção para a Calculadora de Total com Lucro */}
            <Text style={{ marginTop: 20 }}>
              Calculadora de Total com Lucro:
            </Text>
            <Button title="Calcular" onPress={calcularTotalComLucro} />
            <Text style={{ marginTop: 10 }}>
              Total do Orçamento: R$ {totalComLucro}
            </Text>
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
    alignItems: "center",
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
    marginBottom: 10, 
    marginRight: 5,
  },

  inputContainerEnergia: {
    alignItems: "center",
    justifyContent: "flex-end", 
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
    marginLeft: 5,
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
    justifyContent: "flex-end",
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
});

export default Orca3d;
