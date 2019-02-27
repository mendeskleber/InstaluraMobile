
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image , Dimensions,ScrollView,FlatList} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const width = Dimensions.get('screen').width;

export default class Post extends Component<Props> {
  render() {
    return (
    
          <View>
            <View style={styles.cabecalho}>  
                  <Image source={{ uri: this.props.foto.perfil}} style={styles.fotoDePerfil}/>
                  <Text>{this.props.foto.nome}</Text>    
            </View>   
                  <Image source={{uri: this.props.foto.img}} style={styles.fotos}/>
           </View>       
            )
          }
  }

 
const styles = StyleSheet.create({
  
  cabecalho:{
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoDePerfil:{
      marginRight:10, 
      width: 40, 
      height:40,
      borderRadius:20
  },
  fotos:{
    width: width, 
    height:width
  }
  
});



