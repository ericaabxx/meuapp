
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const frases = [
  'Uma surpresa boa está mais perto do que tu imaginas.',
  'Teu próximo capítulo será melhor que o anterior.',
  'Uma oportunidade inesperada vai mudar teu caminho.',
  'A sorte favorece quem tem coragem de tentar.',
  'Algo que tu desejas está começando a se aproximar.',
  'Hoje pode ser o começo de algo incrível.',
  'Boas notícias encontrarão o caminho até ti.',
  'O universo também trabalha em silêncio.',
  'Alguém sorri só de lembrar de ti.',
  'O amor chega quando encontra espaço para florescer.',
  'Uma conversa pode aproximar dois corações.',
  'Tu és o motivo de um sorriso que nem imaginas.',
  'Os melhores encontros acontecem sem planejamento.',
];

function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);

  function quebrarBiscoito() {
    const numeroAleatorio = Math.floor(
      Math.random() * frases.length
    );

    setTextoFrase(`"${frases[numeroAleatorio]}"`);
    setBiscoitoAberto(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          biscoitoAberto
            ? require('./src/biscoitoAberto.png')
            : require('./src/biscoito.png')
        }
        style={styles.img}
      />

      <Text style={styles.frase}>
        {textoFrase}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={quebrarBiscoito}
        activeOpacity={0.7}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar biscoito
          </Text>
        </View>
      </TouchableOpacity>
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

  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 10,
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bb7b22',
  },
});

export default App;



/*
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button, 
  Image, 
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebrarBiscoito =  this.quebrarBiscoito.bind(this);

    this.frases = [
  "Uma surpresa boa está mais perto do que tu imaginas.",
  "Teu próximo capítulo será melhor que o anterior.",
  "Uma oportunidade inesperada vai mudar teu caminho.",
  "A sorte favorece quem tem coragem de tentar.",
  "Algo que tu desejas está começando a se aproximar.",
  "Hoje pode ser o começo de algo incrível.",
  "Boas notícias encontrarão o caminho até ti.",
  "O universo também trabalha em silêncio.",
  "Alguém sorri só de lembrar de ti.",
  "O amor chega quando encontra espaço para florescer.",
  "Uma conversa pode aproximar dois corações.",
  "Tu és o motivo de um sorriso que nem imaginas.",
  "Os melhores encontros acontecem sem planejamento."
    ];
  }

  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState ({
      textoFrase: ' " ' +this.frases[numeroAleatorio] + ' " ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
       <Image 
       source={this.state.img}
       style={styles.img}
       />
       <Text style={styles.frase} >{this.state.textoFrase}</Text>
       <TouchableOpacity style={styles.button} onPress={this.quebrarBiscoito} >
        <View style={styles.btnArea} >
          <Text style={styles.btnTexto} >Quebrar biscoito</Text>
        </View>
       </TouchableOpacity>
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
  img: {
    width: 250, 
    height: 250
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 10
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bb7b22'
  }

});

export default App;
*/