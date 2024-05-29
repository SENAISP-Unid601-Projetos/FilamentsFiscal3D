import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./assets/screens/style";
import tutorial from "./assets/screens/tutorial";
import LoginModal from "./assets/screens/LoginModal";


const ItemHistorico = ({ item, removerItem }) => (
  <View style={styles.listItem}>
    <Text style={[styles.colorText]}>{item.título}</Text>
    <Text style={[styles.colorText]}>{item.data}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloTotalFilamento}: ${item.totalFilamento}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloConsumoEnergia}: ${item.consumoEnergia}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloValorTrabalho}: ${item.valorTrabalho}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloFluxoCaixa}: ${item.fluxoCaixa}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloMargemCola}: ${item.margemCola}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloMargemLucro}: ${item.margemLucro}`}</Text>
    <Text
      style={[styles.colorText]}
    >{`${item.títuloValorTotal}: ${item.valorTotal}`}</Text>
    <Pressable style={styles.button} onPress={() => removerItem(item.id)}>
      <Text style={styles.buttonText}>Remover</Text>
    </Pressable>
  </View>
);

const Histórico = ({ histórico, removerItem }) => (
  <FlatList
    data={histórico}
    renderItem={({ item }) => (
      <ItemHistorico item={item} removerItem={removerItem} />
    )}
    keyExtractor={(item) => item.id.toString()}
    style={{ width: "100%" }}
  />
);

export { Histórico };

const Orca3d = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTutorial1, setModalTutorial1Visible] = useState(false)
  const [modalTutorial2, setModalTutorial2Visible] = useState(false)
  const [modalTutorial3, setModalTutorial3Visible] = useState(false)
  const [modalTutorial4, setModalTutorial4Visible] = useState(false)
  const [modalTutorial5, setModalTutorial5Visible] = useState(false)
  const [modalTutorial6, setModalTutorial6Visible] = useState(false)
  const [modalTutorial7, setModalTutorial7Visible] = useState(false)
  const [modalTutorial8, setModalTutorial8Visible] = useState(false)
  const [modalTutorial9, setModalTutorial9Visible] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [historico, setHistorico] = useState([]);
  const [historicos, setHistoricos] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);

  useEffect(() => {
    const verificarAutenticação = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        setIsAuthenticated(true);
      }
    };

    verificarAutenticação();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setModalTutorial1Visible(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    fetch("http://10.110.12.37:8080/historico", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setHistoricos(data))
      .catch((error) => console.error("Erro ao obter histórico:", error));
  }, [atualizarLista]);

  const handleLogoPress = () => {
    // Verificar se o ambiente é web
    if (
      typeof window !== "undefined" &&
      window.location &&
      window.location.href
    ) {
      // Se estiver no ambiente web, redirecionar para o site em uma nova aba
      window.open(
        "https://ssancash-projetos.github.io/FilamentsFiscal3D/landingPages/",
        "_blank"
      );
    } else {
      // Se estiver no ambiente React Native, usar Linking para abrir o site
      Linking.openURL(
        "https://ssancash-projetos.github.io/FilamentsFiscal3D/landingPages/"
      );
    }
  };

  const [modalVisible, setModalVisible] = useState(true); // Inicia o modal como visível
  const [errorMessage, setErrorMessage] = useState("");
  const [modalCadastroVisible, setModalCadastroVisible] = useState(false);

  const [calculado, setCalculado] = useState(false);

  const handleLogin = () => {
    if (usuario === "admin" && senha1 === "admin") {
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

  const handleCadastro = () => {
    if (modalCadastroVisible == false) {
      setModalCadastroVisible(true);
    } else {
      setModalCadastroVisible(false);
      handleTesteLogin();
    }
  };

  const handletutorial1 = () => {
    if (modalTutorial1 == false) {
      setModalTutorial1Visible(true)
    } else {
      setModalTutorial1Visible(false)
    }
  }

  const handletutorial2 = () => {
    if (modalTutorial2 == false) {
      setModalTutorial2Visible(true)
    } else {
      setModalTutorial2Visible(false)
      handletutorial1()
    }
  }

  const handletutorial3 = () => {
    if (modalTutorial3 == false) {
      setModalTutorial3Visible(true)
    } else {
      setModalTutorial3Visible(false)
      handletutorial2()
    }
  }

  const handletutorial4 = () => {
    if (modalTutorial4 == false) {
      setModalTutorial4Visible(true)
    } else {
      setModalTutorial4Visible(false)
      handletutorial3()
    }
  }

  const handletutorial5 = () => {
    if (modalTutorial5 == false) {
      setModalTutorial5Visible(true)
    } else {
      setModalTutorial5Visible(false)
      handletutorial4()
    }
  }

  const handletutorial6 = () => {
    if (modalTutorial6 == false) {
      setModalTutorial6Visible(true)
    } else {
      setModalTutorial6Visible(false)
      handletutorial5()
    }
  }

  const handletutorial7 = () => {
    if (modalTutorial7 == false) {
      setModalTutorial7Visible(true)
    } else {
      setModalTutorial7Visible(false)
      handletutorial6()
    }
  }

  const handletutorial8 = () => {
    if (modalTutorial8 == false) {
      setModalTutorial8Visible(true)
    } else {
      setModalTutorial8Visible(false)
      handletutorial7()
    }
  }

  const handletutorial9 = () => {
    if (modalTutorial9 == false) {
      setModalTutorial9Visible(true)
    } else {
      setModalTutorial9Visible(false)
      handletutorial8()
    }
  }

  // Estado para a Calculadora de Filamento
  const [pesoPeca, setPesoPeca] = useState(0);
  const [pesoFilamento, setPesoFilamento] = useState(0);
  const [valorTotalFilamento, setValorTotalFilamento] = useState(0);

  const calcularCustoFilamento = async () => {
    const custoTotalFilamento = parseFloat(pesoPeca) * parseFloat(pesoFilamento);
    setValorTotalFilamento(custoTotalFilamento.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de Energia
  const [potenciaEquipamento, setPotenciaEquipamento] = useState(0);
  const [horasImpressao, setHorasImpressao] = useState(0);
  const [consumoEnergia, setConsumoEnergia] = useState(0);
  const [valorKwh, setValorKwh] = useState(0);

  const calcularConsumoEnergia = async () => {
    const consumoCalculado = (parseFloat(potenciaEquipamento) * parseFloat(horasImpressao)) / 1000;
    const consumoFinal = consumoCalculado * parseFloat(valorKwh);
    setConsumoEnergia(consumoFinal.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Função para calcular a taxa de lucro
  const calcularTaxaLucro = async () => {
    const taxaLucro = (parseFloat(valorTotalFilamento) + parseFloat(valorKwh) / parseFloat(consumoEnergia)) * 100;
    return taxaLucro.toFixed(2);
  };

  // Estado e função para a Calculadora de Margem de Lucro
  const [porcentagemLucro, setPorcentagemLucro] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);

  const calcularMargemLucro = async () => {
    const margemLucroCalculada = ((parseFloat(valorTotalFilamento) + parseFloat(valorKwh)) * parseFloat(porcentagemLucro)) / 100;
    setMargemLucro(margemLucroCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado e função para a Calculadora do preço dos colaboradores
  const [porcentagemCola, setPorcentagemCola] = useState(0);
  const [margemCola, setMargemCola] = useState(0);

  const calcularMargemCola = async () => {
    const margemColaCalculada = ((parseFloat(valorTotalFilamento) + parseFloat(valorKwh)) * parseFloat(porcentagemCola)) / 100;
    setMargemCola(margemColaCalculada.toFixed(2)); // Ajusta para duas casas decimais
  };
  // Estado para a Calculadora de prossessos de preparação
  const [horaPreparacao, setHoraPreparacao] = useState(0);
  const [horaFatiador, setHoraFatiador] = useState(0);
  const [valorHora, setValorHora] = useState(0);
  const [valorTrabalho, setValorTrabalho] = useState(0);

  const calcularCustoPreparacao = async () => {
    const custoPreparacao = parseFloat(valorHora) * (parseFloat(horaFatiador) + parseFloat(horaPreparacao));
    setValorTrabalho(custoPreparacao.toFixed(2)); // Ajusta para duas casas decimais
  };

  // Estado para a Calculadora de payback
  const [fluxoCaixa, setFluxoCaixa] = useState(0);
  const [investimento, setInvestimento] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const fazerpay = async () => {
    const payback = parseFloat(investimento) / parseFloat(periodo);
    setFluxoCaixa(payback.toFixed(2));
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Estado e função para a Calculadora de Total com Lucro
  const [totalComLucro, setTotalComLucro] = useState("");

  const calcularTotalComLucro = async () => {
    const totalCalculado = parseFloat(valorTotalFilamento) +
      parseFloat(consumoEnergia) +
      parseFloat(margemLucro) +
      parseFloat(margemCola) +
      parseFloat(valorTrabalho) +
      parseFloat(fluxoCaixa);
    setTotalComLucro(totalCalculado.toFixed(2)); // Ajusta para duas casas decimais
  };

  const handleAllCalculations = async () => {
    setErrorMessage("");
    try {
      await calcularCustoFilamento();
      await calcularConsumoEnergia();
      await calcularTaxaLucro();
      await calcularMargemLucro();
      await calcularMargemCola();
      await calcularCustoPreparacao();
      await fazerpay();
      await calcularTotalComLucro();
      setCalculado(true);
    } catch (error) {
      setErrorMessage("Erro ao realizar os cálculos: " + error.message);
    }
  };

  //historico
  const adicionarAoHistorico = () => {
    fetch("http://10.110.12.37:8080/historico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoHistorico),
    })
      .then((response) => {
        if (response.ok) {
          // Turma adicionada com sucesso, fazer algo, se necessário
          Alert.alert("Sucesso");
          setAtualizarLista(!atualizarLista);
        } else {
          throw new Error("Erro ao salvar histórico");
        }
      })
      .catch((error) => {
        console.error("Erro ao salvar histórico: ", error);
        Alert.alert(
          "Erro",
          "Erro ao salvar. Por favor, tente novamente mais tarde."
        );
      });
  };

  const novoHistorico = {
    data_historico: Date.now(),
    total: valorTotalFilamento,
    consumo_energia: consumoEnergia,
    valor_trabalho: valorTrabalho,
    fluxo_caixa: fluxoCaixa,
    margem_cola: margemCola,
    valor_total: totalComLucro,
  };

  const removerDoHistorico = (id) => {
    const novoHistorico = historico.filter((item) => item.id !== id);
    setHistorico(novoHistorico);
  };

  const [usuario, setUsuario] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  const enviarDados = () => {
    // Valide os campos, se necessário
    if (usuario.trim() === "" || senha1.trim() === "" || senha2.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    } else if (senha1 === senha2) {
      // Criar objeto de administrador com os dados
      const novoUsuario = {
        username: usuario,
        password: senha1,
      };

      // Enviar os dados para o backend
      fetch("http://10.110.12.37:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      })
        .then((response) => {
          if (response.ok) {
            // Turma adicionada com sucesso, fazer algo, se necessário
            Alert.alert("Sucesso", "Cadastro bem sucedido.");
            handleCadastro();
          } else {
            throw new Error("Erro ao efetuar cadastro");
          }
        })
        .catch((error) => {
          console.error("Erro ao efetuar cadastro:", error);
          Alert.alert(
            "Erro",
            "Erro ao efetuar cadastro. Por favor, tente novamente mais tarde."
          );
        });
    } else {
      Alert.alert("Erro", "As senhas não coincidem");
    }
  };

  const deletarHistorico = async (idDoHistorico) => {
    try {
      const response = await fetch(
        `http://10.110.12.37:8080/historico/${idDoHistorico}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setAtualizarLista(!atualizarLista);
        Alert.alert("Removido com sucesso");
      } else {
        Alert.alert("Erro ao remover");
      }
    } catch (error) {
      console.error("Erro ao excluir", error);
      Alert.alert("Erro ao excluir. Verifique sua conexão de internet.");
    }
  };

  const renderizarHistoricos = () => {
    return historicos.map((historico) => (
      <View key={historico.id} style={styles.viewHistorico}>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Data:</Text>{" "}
          {historico.data_historico}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Valor total:</Text> R$
          {historico.valor_total}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Consumo de energia:</Text> R$
          {historico.consumo_energia}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Valor trabalho:</Text> R$
          {historico.valor_trabalho}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Fluxo caixa:</Text> R$
          {historico.fluxo_caixa}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Margem cola:</Text> R$
          {historico.margem_cola}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Total:</Text> R${historico.total}
        </Text>
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Pressable
            style={{ backgroundColor: "white", borderRadius: 10 }}
            onPress={() => deletarHistorico(historico.id_historico)}
          >
            <Text style={{ fontSize: 18, padding: 5 }}>Remover</Text>
          </Pressable>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Image
          source={require("../front/assets/fundo.png")}
          style={{
            width: "1280px",
            height: "1180px",
            position: "absolute",
          }}
        />
      </View>
      <View style={styles.inputContainercabeçalho}>
        <View>
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={require("../front/assets/logo.png")}
              style={{
                width: "100px",
                height: "100px",
                marginLeft: "590px",
                marginBottom: "-80px",
              }} // ajuste o tamanho conforme necessário
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonconectar}>
          {isAuthenticated ? (
            <View>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? 'darkred' : 'red' }, styles.button]} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? 'darkblue' : 'blue' }, styles.button,]} onPress={() => setIsModalVisible(true)}>
              <Text style={styles.buttonText}>Login / Cadastro</Text>
            </Pressable>
          )}
          <LoginModal
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial1}
          onRequestClose={() => {
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
            <View style={[styles.tutorial]}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.fala1]}>
                  <Text style={styles.tutorialText}>
                    Orça3D é uma ferramenta de impressão 3D que torna fácil
                    e rápida a criação de objetos 3D, desde a ideia até a sua
                    concretização, e ajuda você a ser mais criativo e produtivo.
                    Com o Orça3D não há mais limitações, então você pode inovar
                    com mais facilidade e rapidez.
                  </Text>
                </View>

                <Image
                  source={{ uri: 'assets/img/npc.png' }}
                  style={[styles.npc]}
                />
              </View>

              <View style={{ flexDirection: 'row-reverse', marginBottom: 0 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente]}
                  onPress={handletutorial2}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial1}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial2}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial1]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 150, height: 170, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Primeiro, vamos falar sobre quanto filamento temos.
                      Este cálculo nos diz quanto filamento precisamos para
                      fabricar o produto e quanto custará.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/1-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 55 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial3}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial2}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial3}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial2]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 190, height: 190, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Para calcular o custo de energia de uma impressão 3D,
                      multiplique o consumo da impressora pela duração da
                      impressão e pelo preço da energia. Isso fornecerá o custo
                      total de energia para a impressão.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/2-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 15 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30}}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial4}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial3}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial4}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial3]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 170, height: 190, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Para calcular os custos de mão de obra na produção de uma
                      peça, multiplique o tempo gasto no fatiador e preparação
                      pelo preço da hora de trabalho. Isso determinará o custo
                      total da mão de obra.
                    </Text>
                  </View>
                  <Image
                    source={{ uri: 'assets/img/3-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 35 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30}}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial5}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial4}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial5}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial4]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 150, height: 170, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Para calcular o payback do investimento inicial, divida o
                      investimento inicial pelo lucro diário esperado. Isso
                      determina o número de dias necessários para recuperar o
                      investimento inicial.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/4-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 35 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30}}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial6}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial5}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial6}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial5]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 170, height: 190, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Para calcular a margem do funcionário, some os custos de
                      filamento e energia e aplique a porcentagem destinada ao
                      funcionário. Isso determinará a margem repassada após
                      dedução dos custos.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/5-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 35 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial7}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial6}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial7}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial6]}>
              <View style={[styles.fala2]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 170, height: 190, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      Para calcular a margem de lucro, some os custos de filamento
                      e energia, e aplique a porcentagem pré-definida destinada ao
                      lucro. Isso determinará a margem destinada ao lucro após
                      dedução dos custos.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/6-unscreen.gif' }}
                    style={{ width: 185, height: 265, borderRadius: 10, marginLeft: 35 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row-reverse', marginVertical: 55, marginRight: 30 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial8}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.buttonfecha]}
                  onPress={handletutorial7}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial8}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial7]}>
              <View style={[styles.fala9]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 220, height: 190, marginRight: 10 }}>
                    <Text style={[styles.tutorialText]}>
                      O histórico de um software de cálculos é como um registro que
                      mostra sua evolução ao longo do tempo. Ele é útil para
                      entender as melhorias feitas, adição de funcionalidades e
                      confiabilidade em diferentes versões. Permite tomar decisões
                      informadas sobre sua utilização e oferece uma visão panorâmica
                      da jornada do software.
                    </Text>
                  </View>

                  <Image
                    source={{ uri: 'assets/img/Calculo.png' }}
                    style={{ width: 100, height: 180, borderRadius: 10, }}
                  />

                  <Image
                    source={{ uri: 'assets/img/Historico.png' }}
                    style={{ width: 100, height: 180, borderRadius: 10, marginLeft: 5 }}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View style={{marginVertical: 10, marginLeft: 330 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial9}
                >
                  <Text style={styles.buttonText}>➡</Text>
                </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTutorial9}
          onRequestClose={() => {
            handleClose()
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.tutorial8]}>
              <View style={[styles.fala10]}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.tutorialText]}>
                    Chegamos ao fim deste tutorial sobre o uso eficaz desta
                    ferramenta. Esperamos que as informações compartilhadas tenham
                    sido claras e úteis para você. Lembre-se de explorar todas as
                    funcionalidades disponíveis, pois elas podem facilitar
                    significativamente suas tarefas diárias. Se surgirem dúvidas
                    ou questões adicionais, não hesite em nos contatar para obter
                    suporte adicional. Desejamos a você muito sucesso em suas
                    atividades e que esta ferramenta contribua positivamente para
                    alcançar seus objetivos. Até logo e boas explorações!
                  </Text>
                </View>
              </View>
              <View style={{marginVertical: 80, marginLeft: 330 }}>
                <Pressable
                  style={({ pressed }) => [styles.buttonfrente1]}
                  onPress={handletutorial9}
                >
                  <Text style={styles.buttonText}>✖</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={[styles.rightPane, { flex: 2 }]}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.inputContainerFilamento}>
              <View>
                {/* Seção para a Calculadora de Filamento */}
                <Text style={[styles.colorText]}>
                  Peso da peça impressa (g):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o peso da peça"
                  keyboardType="numeric"
                  onChangeText={(text) => setPesoPeca(text)}
                />

                <View style={styles.separator} />
                <Text style={[styles.colorText]}>Preço do filamento (g):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o preço do filamento"
                  keyboardType="numeric"
                  onChangeText={(text) => setPesoFilamento(text)}
                />
              </View>
            </View>

            <View style={styles.inputContainerEnergia}>
              <View>
                {/* Seção para a Calculadora de Energia */}
                <Text style={[styles.colorText]}>
                  Potência do equipamento (W):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a potência"
                  keyboardType="numeric"
                  onChangeText={(text) => setPotenciaEquipamento(text)}
                />
                <Text style={[styles.colorText]}>
                  Duração da impressão (H):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o número de horas"
                  keyboardType="numeric"
                  onChangeText={(text) => setHorasImpressao(text)}
                />

                <Text style={[styles.colorText]}>
                  Taxa de energia (R$/kwh):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o valor do kWh"
                  keyboardType="numeric"
                  onChangeText={(text) => setValorKwh(text)}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.inputContainerTrabalho}>
              <View>
                {/* Seção para a Calculadora de Preço de preparações da peça */}
                <Text style={[styles.colorText]}>
                  Horas gastas no fatiador (h):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite as horas gastas no fatiador"
                  keyboardType="numeric"
                  onChangeText={(text) => setHoraFatiador(text)}
                />

                <View style={styles.separator} />

                <Text style={[styles.colorText]}>
                  Horas gastas na preparação (h):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite as horas gastas na preparação da peça"
                  keyboardType="numeric"
                  onChangeText={(text) => setHoraPreparacao(text)}
                />

                <View style={styles.separator} />

                <Text style={[styles.colorText]}>
                  Preço da hora de trabalho (R$):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o valor da hora de trabalho"
                  keyboardType="numeric"
                  onChangeText={(text) => setValorHora(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainerpayback}>
              <View>
                {/* Seção para a Calculadora de Payback */}
                <Text style={[styles.colorText]}>
                  Investimento inicial (R$):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o investimento"
                  keyboardType="numeric"
                  onChangeText={(text) => setInvestimento(text)}
                />

                <View style={styles.separator} />

                <Text style={[styles.colorText]}>
                  Tempo de recuperação (Dias):
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o tempo de recuperação"
                  keyboardType="numeric"
                  onChangeText={(text) => setPeriodo(text)}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.inputContainerMargemFuncionario}>
              <View>
                {/* Seção para a Calculadora do preço da hora dos funcionários */}
                <Text style={[styles.colorText]}>Valor da hora (R$):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a porcentagem"
                  keyboardType="numeric"
                  onChangeText={(text) => setPorcentagemCola(text)}
                />
              </View>
            </View>

            <View style={styles.inputContainerLucro}>
              <View>
                {/* Seção para a Calculadora de Margem de Lucro */}
                <Text style={[styles.colorText]}>
                  Porcentagem do lucro (R$):
                </Text>
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
          <View style={{ flexDirection: "row" }}>
            <View style={styles.inputContainerresultados}>
              {/* Seção para a Calculadora de Total com Lucro */}
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>
                  Valor Total Filamento:
                </Text>{" "}
                R$ {valorTotalFilamento}
              </Text>
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>Consumo Energia:</Text> R${" "}
                {consumoEnergia}
              </Text>
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>Valor da preparação:</Text>{" "}
                R$ {valorTrabalho}
              </Text>
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>Valor do Payback:</Text> R${" "}
                {fluxoCaixa}
              </Text>
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>
                  Margem do funcionário:
                </Text>{" "}
                R$ {margemCola}
              </Text>
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>Margem de Lucro:</Text> R${" "}
                {margemLucro}
              </Text>{" "}
              <Text style={[styles.colorText]}>
                <Text style={{ fontWeight: "bold" }}>Total do Orçamento:</Text>{" "}
                R$ {totalComLucro}
              </Text>
              {/* Seção para a Calculadora de Total com Lucro */}
            </View>
            <View style={styles.inputHistorico}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 10,
                }}
              >
                Histórico:
              </Text>
              <ScrollView>{renderizarHistoricos()}</ScrollView>
            </View>
          </View>
          <View style={styles.inputContainerCaixaDBotoes}>
            <View style={{ flexDirection: "row" }}>
              <Pressable style={styles.button} onPress={handleAllCalculations}>
                <Text style={styles.buttonText}>Calcular</Text>
              </Pressable>
              {calculado && (
                <Pressable style={styles.button} onPress={adicionarAoHistorico}>
                  <Text style={styles.buttonText}>Gravar Historico</Text>
                </Pressable>
              )}
            </View>
          </View>
          <Pressable style={styles.buttonhe} onPress={handletutorial1}>
            <Image
              source={require("../front/assets/ajuda.png")}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Orca3d;
