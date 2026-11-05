import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  //? hook usestate
  const [link, setLink] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Encurtador de URL</Text>
      </View>
      <View>
        <TextInput value={link} onChangeText={setLink} placeholder='Digite a url com o http://' style={styles.inputForm}/>
      </View>

      <TouchableOpacity style={styles.btnForm}>
          <Text style={styles.txtForm}>Encurtar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnForm} onPress={() => navigation.navigate('Historico')}>
          <Text style={styles.txtForm}>Historico de links</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontWeight:'bold',
    fontSize:30,
    padding:20,
  },
  inputForm:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'black',
    padding:10,
    margin:10,
    width:300,
    height:60,
  },
  btnForm:{
    borderRadius:10,
    backgroundColor:'#00bfff',
    borderWidth:1,
    borderColor:'black',
    padding:10,
    margin:10,
    width:300,
    height:60,
  },
  txtForm:{
    color:'#0000',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  },
});
