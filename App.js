import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
        <Text>Olá, Mundo!</Text>
        <Text style={{ color: 'blue', fontSize: 20, margin: 15 }}>Meu primeiro app</Text>

        <Jobs larguta={200} altura={200} />

      </View>
  );
  }
}
export default App;

class Jobs extends Component {
  render() {
    return(
      <Image 
      source={{ uri: 'https://th.bing.com/th/id/R.24218682cb0c22e52b64553723a8efd0?rik=yL%2bFS%2f8swpalgQ&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a74dd1223343fbc2207d00.png&ehk=A3T0PwCWea4%2beOuTONmVktg%2bdor24nRYHtgZ1HP8b58%3d&risl=&pid=ImgRaw&r=0' }}
      style={{ width: this.props.larguta, height: this.props.altura, margin: 15 }}
      />
    );
  }
}

