import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'O importante não é vencer todos os dias, mas lutar sempre.',
      'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
      'É melhor conquistar a si mesmo do que vencer mil batalhas.', 
      'Quem ousou conquistar e saiu pra lutar, chega mais longe!',
    ];
  }
 
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })
  }


  render() {
    return (
      <View style={styles.container}>
        
        <Image 
         source={this.state.img}
         style={styles.img} 
        />
        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>
        <TouchableOpacity style={styles.botao}  onPress={this.quebraBiscoito} >
          <View style={styles.btnArea} >
            <Text style={styles.btnTexto} >Abrir biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    textAlign: 'center',
    fontSize: 20,
    color:'#dd7222',
    margin: 30,
    fontStyle: 'italic',

  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7222',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  btnTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'#dd7222',
  },
});
export default App;