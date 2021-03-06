
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image , Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';

type Props = {};

const width = Dimensions.get('screen').width;

export default class Post extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      foto : this.props.foto
    }
  }

  carregaIcone(likeada){
    return likeada ? require('../../resources/img/s2-checked.png') :
                        require('../../resources/img/s2.png')
  }

  exibirLikes(likers){
    if (likers.length <=0)
    return ;
    
    return (
      <Text style={styles.likes}> 
        {likers.length} {likers.length > 1 ? 'curtirdas' : 'curtida'}
      </Text>
      );
  }

  exibiLegenda(foto){
    if (foto.comentario ==='') 
      return
    return(
        <View style={styles.comentario}>
            <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
            <Text>{foto.comentario}</Text>
        </View>
      )
  }

  like(){

  const { foto } = this.state;

    let novaLista = []
    if (!this.state.foto.likeada){
      novaLista = [
          ...foto.likers,
          {login: 'Meu Usuario'}    
      ]    
    } else {
      novaLista = foto.likers.filter(liker => {
        return liker.login !='Meu Usuario'
      })
    }

    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada,
      likers : novaLista
    }  

    this.setState({ foto : fotoAtualizada})
  }

  render() {

    const  { foto } = this.state;
    return (
    
          <View>
            <View style={styles.cabecalho}>  
                  <Image source={{ uri: foto.urlPerfil}} style={styles.fotoDePerfil}/>
                  <Text>{foto.loginUsuario}</Text>    
            </View>   
                  <Image source={{uri: foto.urlFoto}} style={styles.fotos}/>
                  
                  <View  style={styles.rodape}>
                      <TouchableOpacity onPress={ this.like.bind(this) }>
                        <Image  style={styles.botaoDeLike} 
                        source={this.carregaIcone(foto.likeada)} />
                      </TouchableOpacity>
                    
                      { this.exibirLikes(foto.likers) }

                      { this.exibiLegenda(foto)}

                      
                    
                    
                  </View>
                  
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
  },
  botaoDeLike:{
    marginBottom: 10,
    width: 40, 
    height:40
  },
  rodape: {
    margin : 10
  },
  likes: {
    fontWeight : 'bold',
  },
  comentario:{
    flexDirection: 'row', 
  },
  tituloComentario:{
    fontWeight : 'bold',
    marginRight: 5
  }
  
});



