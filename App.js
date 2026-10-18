import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Eu sou texto 1</Text>
        <Text>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
      </View>
  );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  }

});

export default App;
