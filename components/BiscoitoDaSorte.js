import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BiscoitoDaSorte = () => {
  const [mensagem, setMensagem] = useState('');
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);

  const gerarMensagemDaSorte = () => {
    const mensagens = [
      "A sorte está ao seu lado!",
      "Grandes oportunidades estão chegando.",
      "Acredite em si mesmo e siga em frente.",
      "A vida é feita de momentos especiais."
    ];

    const randomIndex = Math.floor(Math.random() * mensagens.length);
    return mensagens[randomIndex];
  };

  const quebrarBiscoito = () => {
    const novaMensagem = gerarMensagemDaSorte();
    setMensagem(novaMensagem);
    setBotaoDesabilitado(true);
  };

  const reiniciarBiscoito = () => {
    setMensagem('');
    setBotaoDesabilitado(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mensagemText}>{mensagem}</Text>
      <TouchableOpacity
        style={[styles.botao, botaoDesabilitado ? styles.botaoDesabilitado : null]}
        onPress={botaoDesabilitado ? reiniciarBiscoito : quebrarBiscoito}
      >
        <Text style={styles.botaoTexto}>{botaoDesabilitado ? "Reiniciar Biscoito" : "Quebrar Biscoito"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mensagemText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  botaoDesabilitado: {
    backgroundColor: '#ccc',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BiscoitoDaSorte;
