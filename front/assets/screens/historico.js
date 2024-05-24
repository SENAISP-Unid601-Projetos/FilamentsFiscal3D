import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from "front/assets/screens/style.js";

class HistoricoHelper {


  
  static adicionarAoHistorico = async (
    novoHistorico,
    atualizarLista,
    setAtualizarLista
  ) => {
    try {
      const response = await fetch("http://10.110.12.37:8080/historico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoHistorico),
      });

      if (response.ok) {
        Alert.alert("Sucesso");
        setAtualizarLista(!atualizarLista);
      } else {
        throw new Error("Erro ao salvar histórico");
      }
    } catch (error) {
      console.error("Erro ao salvar histórico: ", error);
      Alert.alert(
        "Erro",
        "Erro ao salvar. Por favor, tente novamente mais tarde."
      );
    }
  };

  static removerDoHistorico = async (id, historico, setHistorico) => {
    try {
      const novoHistorico = historico.filter((item) => item.id !== id);
      setHistorico(novoHistorico);
      const response = await fetch(`http://10.110.12.37:8080/historico/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao remover");
      }
      Alert.alert("Removido com sucesso");
    } catch (error) {
      console.error("Erro ao excluir", error);
      Alert.alert("Erro ao excluir. Verifique sua conexão de internet.");
    }
  };
  

  static renderizarHistoricos = (historicos) => {
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
}

export default HistoricoHelper;
