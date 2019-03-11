import React,{ Component } from "react";
import {ScrollView, View, Text ,DrawerLayoutAndroid ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  
import { Avatar ,ListItem ,Header, Button , Input} from 'react-native-elements';

export default class RegisterScreen extends React.Component {


  render(){
    return(<ScrollView >
    			<View style={styles.container}>
			     <Input
			        placeholder='Nome Completo'
			        errorStyle={{ color: 'red' }}
			        errorMessage=' '
			        containerStyle={{width:'90%'}}
			     />
			      <Input
			        placeholder='RG'
			        errorStyle={{ color: 'red' }}
			        errorMessage=' '
			        containerStyle={{width:'90%'}}
			     />
			      <Input
			        placeholder='CPF'
			        errorStyle={{ color: 'red' }}
			        errorMessage=' '
			        containerStyle={{width:'90%'}}
			     />
			      <Input
			        placeholder='CEP'
			        errorStyle={{ color: 'red' }}
			        errorMessage=' '
			        containerStyle={{width:'90%'}}
			     />
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
			            this.props.navigation.navigate('Register');
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
			</View>
		</ScrollView>
    	);
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20
  }
});
