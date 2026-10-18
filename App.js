import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Erica'
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    this.setState({nome: 'Bem-vinda, Erica!'});
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, textAlign: 'center'}} >{this.state.nome}</Text>
        <Button title="Entrar" onPress={this.entrar} />
      </View>
  );
  }
}
export default App;
