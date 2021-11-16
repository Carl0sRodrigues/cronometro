import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
    const [numero, setNumero] = useState(0);
    const [botao, setBotao] = useState('INICIAR');
    const [ultimo, setUltimo] = useState(null);

    function iniciar(){                    // Aqui para o timer
      if(timer !== null){
        clearInterval(timer);     
        timer = null;
        setBotao('INICIAR');

      }else{                               // Aqui inicia o timer
        timer = setInterval(()=>{
          ss++;

          if(ss == 60){
            ss = 0;
            mm++;
          }

          if(mm == 60){
            mm =0;
            hh++;
          }

          let format =                  // Formatando o timer
          (hh < 10 ? '0' + hh : hh) + ':' + 
          (mm < 10 ? '0' + mm : mm) + ':' + 
          (ss < 10 ? '0' + ss : ss);

          setNumero(format);


        }, 100);
        setBotao('PAUSAR');
      }
    }

    function zerar(){
      if(timer !== null){
        clearInterval(timer);
        timer = null;
      }
      setUltimo(numero);
      setNumero(0);
      ss = 0;
      mm = 0;
      hh = 0;
      setBotao('INICIAR');
    }

  return (
    <View style={styles.conteiner}>
      <Image
      style={{marginBottom: 20}}
      source={require('./assets/crono.png')}
      />
      <Text style={styles.timer}> {numero} </Text>      
      <View style={[styles.bntarea, {padding: 10}]}>
        <TouchableOpacity style={styles.botao} onPress={iniciar}>  
          <Text style={styles.bnttexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={zerar}>    
          <Text style={styles.bnttexto}> ZERAR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areatempo}>
        <Text style={styles.tempo}>                      
          {ultimo ? 'Ultimo tempo: ' + ultimo : ''}   
        </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({        // Folha de estilo
  conteiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -190,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
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
  bntarea:{
    marginTop: 130,
    flexDirection: 'row'
  },
  bnttexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areatempo:{
  
  },
  tempo:{
    color: '#fff',
    fontSize: 25,
    fontStyle: 'italic'
  }
})