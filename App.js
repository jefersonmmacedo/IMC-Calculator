import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App () {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [result, setResult] = useState('Resultado')

  function handleSubmit () {
    const alt = altura / 100
    const imc = peso /( alt * alt )
    if ( imc < 18.6) {
      alert ("Você está abaixo do peso! " + imc.toFixed(2))
    } else {
      alert ("Seu peso está bom " + imc.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Calcule seu IMC</Text>

     <Text style={styles.span}>Digite seu peso</Text>
    <TextInput
    style={styles.input}
    value={peso}
    onChangeText={(peso) => setPeso(peso)}
    placeholder="Peso (Kg)"
    keyboardType="numeric"
    />

    <Text style={styles.span}>Digite sua idade</Text>
    <TextInput
    style={styles.input}
    value={altura}
    onChangeText={(altura) => setAltura(altura)}
    placeholder="Altura (Cm)"
    keyboardType="numeric"
    />

    <TouchableOpacity
    style={styles.button}
    onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

    <Text style={styles.textResult}>
      {result}
    </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A4F6FE"
  },
  title: {
    textAlign:'center',
    marginTop: 50,
    fontSize: 30,
    color:'#011E21'
  },
  input: {
    backgroundColor: '#036670',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: "#fff",
    fontSize: 15
  },
  span: {
    color: "#011E21",
    marginTop: 20,
    textAlign: "center",
    fontSize: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    margin: 25,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "#01353A",
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  textResult: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 30,
    color: '#011E21'
  }
});