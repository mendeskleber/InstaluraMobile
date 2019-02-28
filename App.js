/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image , Dimensions,ScrollView,FlatList} from 'react-native';
import Post from './src/components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const width = Dimensions.get('screen').width;

export default class App extends Component<Props> {

  constructor(){
      super();
      this.state = {
        fotos:[]
      }
  }

  componentDidMount(){
    // fetch('http://dropcode.com.br/apis/react-native/InstaluraMobile/posts.php')
  fetch('https://instalura-api.herokuapp.com/api/public/fotos/alots')
    
    .then(resposta => resposta.json())
    .then(json =>this.setState({
      fotos: json
    }))
  }

  render() {
    return (
      <FlatList           
          style={styles.container}
          keyExtractor = {item => String(item.id)}
          data = {this.state.fotos}
          renderItem={ ({item}) =>
            <Post  foto={item} />

          }
      />
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  }

});



