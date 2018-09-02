//import making Component

import React from 'react';
import { Text, View } from 'react-native';

//make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (

    //<View style ={viewStyle}>
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  );
};

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8
  },
  textStyle: {
    fontSize: 20
  }


};
//make a component available to others

export { Header };
