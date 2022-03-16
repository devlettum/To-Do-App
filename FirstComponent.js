import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// const FirstComponent = ({name,year,changeState}) => {
//     return(
//         <View>
//             <Text>{name} {year}</Text>
//             <TouchableOpacity onPress={changeState}>
//                 <Text>Değiştir</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default FirstComponent;

export default class FirstComponent extends Component {
  constructor() {
    super();
    this.state = {
      adress: '',
    };
  }

  changeAdress = () => {
    this.setState({adress: 'EdirNe'});
  }

  render() {
    const {name, year, changeState} = this.props;
    const {adress} = this.state;
    return (
      <View>
        <Text>
          {name} {year} {adress}
        </Text>
        <TouchableOpacity onPress={()=>{
            this.changeAdress();
            changeState();
            }}>
          <Text>Değiştir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
