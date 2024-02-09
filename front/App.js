import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const Orca3d = () => {
  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState('');
  const [pesoFilamento, setPesoFilamento] = useState('');
  const [valorTotalFilamento, setValorTotalFilamento] = useState('');

  const calcularCustoFilamento = () => {
    const custoTotalFilamento = parseFloat(pesoPeca) * parseFloat(pesoFilamento);
    setValorTotalFilamento(custoTotalFilamento.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de Energia
  const [potenciaEquipamento, setPotenciaEquipamento] = useState('');
  const [horasImpressao, setHorasImpressao] = useState('');
  const [consumoEnergia, setConsumoEnergia] = useState('');
  const [valorKwh, setValorKwh] = useState('');

  const calcularConsumoEnergia = () => {
    const consumoCalculado = (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000;
    const consumoFinal = consumoCalculado * parseFloat(valorKwh);
    setConsumoEnergia(consumoFinal.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = () => {
    const taxaLucro = (parseFloat(valorTotalFilamento) / parseFloat(consumoEnergia)) * 100;
    return taxaLucro.toFixed(2);
  };

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState('');
  const [margemLucro, setMargemLucro] = useState('');

  const calcularMargemLucro = () => {
    const margemLucroCalculada = (parseFloat(valorTotalFilamento) * parseFloat(porcentagemLucro)) / 100;
    setMargemLucro(margemLucroCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado e função para a Calculadora de Total com Lucro
  const [valorLucro, setValorLucro] = useState('');
  const [totalComLucro, setTotalComLucro] = useState('');

  const calcularTotalComLucro = () => {
    const totalCalculado =
      parseFloat(valorTotalFilamento) + parseFloat(consumoEnergia) + parseFloat(valorLucro);
    setTotalComLucro(totalCalculado.toFixed(2)); // Ajusta para duas casas decimais
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
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

            <Text>Peso do filamento (g):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o peso do filamento"
              keyboardType="numeric"
              value={pesoFilamento}
              onChangeText={(text) => setPesoFilamento(text)}
            />
            <Button title="Calcular Custo Filamento" onPress={calcularCustoFilamento} />
            <Text style={{ marginTop: 10 }}>Valor Total Filamento: R$ {valorTotalFilamento}</Text>
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

            <View style={styles.separator} />

            <TextInput
              style={styles.input}
              placeholder="Digite o número de horas"
              keyboardType="numeric"
              value={horasImpressao}
              onChangeText={(text) => setHorasImpressao(text)}
            />
            <View style={styles.separator} />

            <TextInput
              style={styles.input}
              placeholder="Digite o valor do kWh"
              keyboardType="numeric"
              value={valorKwh}
              onChangeText={(text) => setValorKwh(text)}
            />
            <Button title="Calcular Consumo Energia" onPress={calcularConsumoEnergia} />
            <Text style={{ marginTop: 10 }}>Consumo Energia: R$ {consumoEnergia}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.inputContainerLucro}>
            {/* Seção para a Calculadora de Margem de Lucro */}
            <Text style={{ marginTop: 20 }}>Calculadora de Margem de Lucro:</Text>
            <Text>Valor do Lucro (R$):</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a porcentagem de lucro"
              keyboardType="numeric"
              value={porcentagemLucro}
              onChangeText={(text) => setPorcentagemLucro(text)}
            />
            <Button title="Calcular Margem de Lucro" onPress={calcularMargemLucro} />
            <Text style={{ marginTop: 10 }}>Margem de Lucro: R$ {margemLucro}</Text>
          </View>
          
          <View style={styles.inputContainerLucro}>
            {/* Seção para a Calculadora de Total com Lucro */}
            <Text style={{ marginTop: 20 }}>Calculadora de Total com Lucro:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o valor do lucro"
              keyboardType="numeric"
              value={valorLucro}
              onChangeText={(text) => setValorLucro(text)}
            />
            <Button title="Calcular Total com Lucro" onPress={calcularTotalComLucro} />
            <Text style={{ marginTop: 10 }}>Total com Lucro: R$ {totalComLucro}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerFilamento: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha os elementos para a direita
    width: 250, // Largura do quadrado
    height: 220, // Altura do quadrado
    backgroundColor: 'lightgray',
    borderRadius: 10, // Borda arredondada para criar um visual de quadrado
    marginVertical: 10, // Margem vertical entre os containers
  },

  inputContainerEnergia: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha os elementos para a direita
    width: 250, // Largura do quadrado
    height: 300, // Altura do quadrado
    backgroundColor: 'lightgray',
    borderRadius: 10, // Borda arredondada para criar um visual de quadrado
    marginVertical: 10, // Margem vertical entre os containers
  },

  inputContainerLucro: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha os elementos para a direita
    width: 250, // Largura do quadrado
    height: 190, // Altura do quadrado
    backgroundColor: 'lightgray',
    borderRadius: 10, // Borda arredondada para criar um visual de quadrado
    marginVertical: 10, // Margem vertical entre os containers
  },

  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white', // Cor de fundo do TextInput
  },
  separator: {
    width: '80%',
    height: 0,
    backgroundColor: 'black',
  },
});


export default Orca3d;
