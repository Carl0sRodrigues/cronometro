import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function App(){
  return (
  <View style={styles.conteiner}>
    <Image
    source={require('./assets/src/crono.png')}
    />
    <Text> 00:00:00 </Text>
    <View>
      <TouchableOpacity>
        <Text> INICIAR </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text> ZERAR </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  }
})