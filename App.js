// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React,{Component} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FirstComponent from './FirstComponent';

 //Birinci yol
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      name:'Batu$şşhan ARIQ',
      year:2001
    };
  }

  changeState =  ()=> this.setState({
    name:'Smy AAAA$aN',
    year:2003
  },() => {
    alert('Değişiklik yapıldı')
  });

  render(){
    const {name,year} = this.state;
    return (
      <View style={{flex:1,paddingTop:100}}>
       <FirstComponent changeState={this.changeState}  name={name} year={year}></FirstComponent>

        

        <View style={{flex:5,flexDirection: 'row',justifyContent: 'space-around',marginTop:50}}>
          <View style={[{backgroundColor:'blue',width:50,height:50}]}></View>
          <View style={[{backgroundColor:'yellow',width:50,height:50}]}></View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  welcome_area: {backgroundColor:'red',flex:1},
  welcome_text:{color:'white',fontSize:20}
});

//Flex-direction : [column],row,row-reverse,column-reverse
//Justify-Content : flex-start , flex-end , center , space-between , space-around
//Flex-wrap : nowrap,wrap = sığmayan kısımları 'wrap' ile sığdırabiliriz (alta-yana vb atar)
//Align-items : flex-start , flex-end , center , stretch



 //İkinci yol
// const App = () =>{
//   return(
//     <View style={{paddingTop:150,paddingLeft:150}}>
//          <Text>Merhaba</Text>
//     </View>
//   );
// }
// export default App;
