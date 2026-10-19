import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput  } from 'react-native';


function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.texto}>
        Bem vindo, {nome}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: { 
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  },
  texto: {
    fontSize: 25,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45, 
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20
  }

});

export default App;

/* MODO ANTIGOOO
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){

    if(texto.length > 0){
      this.setState({nome: 'Bem vindo, ' + texto});
    } else {
      this.setState({nome: ''})
    }
    
    
  }

  render() {
    return(
      <View style={styles.container} >
        <TextInput 
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={this.pegaNome}
        underlineColorAndroid={'transparent'}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
  );
  }
}

const styles = StyleSheet.create({

  container: { 
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  },
  texto: {
    fontSize: 25,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45, 
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20
  }

});

export default App;

*/
