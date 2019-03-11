import React,{ Component } from "react";
import { View, Text ,DrawerLayoutAndroid ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  
import { Avatar ,ListItem ,Header, Button , Input} from 'react-native-elements';

export default class LoginScreen extends React.Component {


  render(){
    return(<View style={styles.container}>

      <Input
        placeholder='Email'
        errorStyle={{ color: 'red' }}
        errorMessage=' '
        containerStyle={{width:'90%'}}

      />

         <Input
        placeholder='Password'
        errorStyle={{ color: 'red' }}
        errorMessage=' '
        containerStyle={{width:'90%'}}

      />
      <Button
          title="Entrar"
          onPress={()=>{
            this.props.navigation.navigate('HomeNavigator');
          }}
          containerStyle={{width:'90%',paddingTop:10}}

        />
      <Button
          title="Registrar-se"
          onPress={()=>{
            this.props.navigation.navigate('Register');
          }}
          containerStyle={{width:'90%',paddingTop:10}}
          buttonStyle={{backgroundColor:'red'}}

        />
    </View>);
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center'
  }
});
