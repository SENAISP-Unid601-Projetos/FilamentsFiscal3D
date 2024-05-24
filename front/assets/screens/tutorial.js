import React, { useState } from 'react';
import { 
  Modal,
  View,
  SafeAreaView,
  Text,
 } from "react-native-web";



function tutorial()  {

  const [modalTutorial1, setModalTutorial1Visible] = useState(false);
  const [modalTutorial2, setModalTutorial2Visible] = useState(false);
  const [modalTutorial3, setModalTutorial3Visible] = useState(false);
  const [modalTutorial4, setModalTutorial4Visible] = useState(false);
  const [modalTutorial5, setModalTutorial5Visible] = useState(false);
  const [modalTutorial6, setModalTutorial6Visible] = useState(false);
  const [modalTutorial7, setModalTutorial7Visible] = useState(false);
  const [modalTutorial8, setModalTutorial8Visible] = useState(false);
  const [modalTutorial9, setModalTutorial9Visible] = useState(false);

  const handletutorial1 = () => {
    if (modalTutorial1 == false) {
      setModalTutorial1Visible(true);
    } else {
      setModalTutorial1Visible(false);
    }
  };

  const handletutorial2 = () => {
    if (modalTutorial2 == false) {
      setModalTutorial2Visible(true);
    } else {
      setModalTutorial2Visible(false);
      handletutorial1();
    }
  };

  const handletutorial3 = () => {
    if (modalTutorial3 == false) {
      setModalTutorial3Visible(true);
    } else {
      setModalTutorial3Visible(false);
      handletutorial2();
    }
  };

  const handletutorial4 = () => {
    if (modalTutorial4 == false) {
      setModalTutorial4Visible(true);
    } else {
      setModalTutorial4Visible(false);
      handletutorial3();
    }
  };

  const handletutorial5 = () => {
    if (modalTutorial5 == false) {
      setModalTutorial5Visible(true);
    } else {
      setModalTutorial5Visible(false);
      handletutorial4();
    }
  };

  const handletutorial6 = () => {
    if (modalTutorial6 == false) {
      setModalTutorial6Visible(true);
    } else {
      setModalTutorial6Visible(false);
      handletutorial5();
    }
  };

  const handletutorial7 = () => {
    if (modalTutorial7 == false) {
      setModalTutorial7Visible(true);
    } else {
      setModalTutorial7Visible(false);
      handletutorial6();
    }
  };

  const handletutorial8 = () => {
    if (modalTutorial8 == false) {
      setModalTutorial8Visible(true);
    } else {
      setModalTutorial8Visible(false);
      handletutorial7();
    }
  };

  const handletutorial9 = () => {
    if (modalTutorial9 == false) {
      setModalTutorial9Visible(true);
    } else {
      setModalTutorial9Visible(false);
      handletutorial8();
    }
  };

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTutorial1}
        onRequestClose={() => {
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
          <View style={[styles.tutorial]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala1]}>
                <Text style={styles.tutorialText}>
                  O meu ta afim de um negocio do bom, o Orça3D é uma ferramenta
                  de impressão 3D que simplifica e otimiza todas as etapas,
                  desde a concepção até a materialização, impulsionando a
                  criatividade e a produtividade. Com Orça3D, as limitações são
                  superadas, permitindo uma jornada de inovação mais fluida e
                  eficiente.
                </Text>
              </View>

              <Image
                source={{ uri: "assets/npc.png" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={[styles.npc]}
              />
            </View>

            <Pressable
              style={({ pressed }) => [styles.buttonfrente]}
              onPress={handletutorial2}
            >
              <Text style={styles.buttonText}>➡</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTutorial2}
        onRequestClose={() => {
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial1]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para começar iremos considerar a quantidade de filamento
                  utilizada, multiplicando-a pelo preço do material por grama.
                  Esse cálculo nos fornece o custo do filamento necessário para
                  a produção.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/1-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente1]}
                onPress={handletutorial3}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial2]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para calcular o custo de energia de uma impressão 3D,
                  multiplique o consumo da impressora pela duração da impressão
                  e pelo preço da energia. Isso fornecerá o custo total de
                  energia para a impressão.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/2-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente2]}
                onPress={handletutorial4}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial3]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para calcular os custos de mão de obra na produção de uma
                  peça, multiplique o tempo gasto no fatiador e preparação pelo
                  preço da hora de trabalho. Isso determinará o custo total da
                  mão de obra.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/3-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente3]}
                onPress={handletutorial5}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial4]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para calcular o payback do investimento inicial, divida o
                  investimento inicial pelo lucro diário esperado. Isso
                  determina o número de dias necessários para recuperar o
                  investimento inicial.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/4-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente4]}
                onPress={handletutorial6}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial5]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para calcular a margem do funcionário, some os custos de
                  filamento e energia e aplique a porcentagem destinada ao
                  funcionário. Isso determinará a margem repassada após dedução
                  dos custos.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/5-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente5]}
                onPress={handletutorial7}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial6]}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.fala2]}>
                <Text style={[styles.tutorialText]}>
                  Para calcular a margem de lucro, some os custos de filamento e
                  energia, e aplique a porcentagem pré-definida destinada ao
                  lucro. Isso determinará a margem destinada ao lucro após
                  dedução dos custos.
                </Text>
              </View>
              <Image
                source={{ uri: "assets/img/6-unscreen.gif" }} // Substitua 'https://example.com/image.jpg' pelo caminho da sua imagem
                style={{ width: 280, height: 280 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente6]}
                onPress={handletutorial8}
              >
                <Text style={styles.buttonText}>➡</Text>
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
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial7]}>
            <View style={[styles.fala1]}>
              <Text style={[styles.tutorialText]}>
                O histórico de um software de cálculos é como um registro que
                mostra sua evolução ao longo do tempo. Ele é útil para entender
                as melhorias feitas, adição de funcionalidades e confiabilidade
                em diferentes versões. Permite tomar decisões informadas sobre
                sua utilização e oferece uma visão panorâmica da jornada do
                software.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente7]}
                onPress={handletutorial9}
              >
                <Text style={styles.buttonText}>➡</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTutorial9}
        onRequestClose={() => {
          handleClose();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.tutorial8]}>
            <View style={[styles.fala10]}>
              <Text style={[styles.tutorialText]}>
                Chegamos ao fim deste tutorial sobre o uso eficaz desta
                ferramenta. Esperamos que as informações compartilhadas tenham
                sido claras e úteis para você. Lembre-se de explorar todas as
                funcionalidades disponíveis, pois elas podem facilitar
                significativamente suas tarefas diárias. Se surgirem dúvidas ou
                questões adicionais, não hesite em nos contatar para obter
                suporte adicional. Desejamos a você muito sucesso em suas
                atividades e que esta ferramenta contribua positivamente para
                alcançar seus objetivos. Até logo e boas explorações!
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => [styles.buttonfrente8]}
                onPress={handletutorial9}
              >
                <Text style={styles.buttonText}>✖</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default tutorial;
