import React,{Component} from "react";
import { createStackNavigator , createAppContainer } from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeNavigator from './src/screens/HomeNavigator';

export default createAppContainer(createStackNavigator(
  {
    Login:{ 
      screen: LoginScreen,
         navigationOptions: () => ({
        title:'Login',
        headerStyle:{
          backgroundColor:'#5145F5',
        },
        headerTitleStyle:{
          color:'white'
        },
        headerBackTitleStyle:{
          color:'white'
        }
      }), 

    },
    Register:{ 
      screen: RegisterScreen,
      navigationOptions: () => ({
        title:'Registrar-se',
        headerStyle:{
          backgroundColor:'#5145F5',
        },
        headerTitleStyle:{
          color:'white'
        },
        headerBackTitleStyle:{
          color:'white'
        }
      }),  
    },
    HomeNavigator:{
      screen:HomeNavigator,
       navigationOptions: () => ({
        header:null
        
      }),  
    
    }
  },
  {
    mode:'card',
    headerMode:'screen',
    headerLayoutPreset :'center',

  })
);