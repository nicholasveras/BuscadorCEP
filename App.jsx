import React, {useState} from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View} from "react-native"
import api from "./src/services/api";

export default function App(){
  const [cep, setCep] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
        style={styles.input}
        placeholder="Ex: 37002390"
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#1d75cd'}]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}> 
        <Text style={styles.itemText}>CEP: 37002390</Text>
        <Text style={styles.itemText}>Logradouro: Rua Estevam Braga Sobrinho</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: Varginha</Text>
        <Text style={styles.itemText}>Estado: Minas Gerais</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22
  }
})