import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={{backgroundColor: "#ddd", flex: 1}} >
        <View style={styles.container}>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({

  container: { 
  width: 50,
  height: 50,
  backgroundColor: 'red',
  }

});

export default App;
