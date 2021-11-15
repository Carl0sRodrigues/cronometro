import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function App(){
  return (
  <View style={styles.conteiner}>
    <Image
    source={require('./assets/src/crono.png')}
    style={{marginBottom: 20}}
    />
    <Text style={styles.timer}> 00:00:00 </Text>
    <View style={[styles.area, {padding: 10}]}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.btntexto}> INICIAR </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.btntexto}> ZERAR </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.areatempo}>
      <Text style={styles.tempo}>Ultimo Tempo</Text>
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
  },
  timer:{
    marginTop: -190,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  area:{
    marginTop: 130,
    flexDirection: 'row'
  },
  btntexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areatempo:{
    
  },
  tempo:{

  }
})