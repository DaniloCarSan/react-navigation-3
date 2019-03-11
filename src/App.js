
import React from "react";
import { View, Text ,DrawerLayoutAndroid} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator , createAppContainer } from "react-navigation";
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { Avatar ,ListItem ,Header} from 'react-native-elements';
export class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      tabBarIcon:({focused})=>{
        if(focused){
            return  <Icon name="home" size={20} color="white" />;
        }
        else
        {
            return  <Icon name="home" size={20} color="#C0BCBC" />;
        }
      },
      title:'Home',
      tabBarColor:"#8334D4",

  
     });




  render() {
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
       <View style={{width:'100%',alignItems:'center'}}>

      <Avatar
      containerStyle={{marginTop:30}}
        size="large"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }}
        rounded
      />
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Danilo Santos</Text>  
      </View>
      
        <ListItem
        title="Home"
        leftIcon={{ name:'home'}}
        chevronColor="#CCCCCC"
        topDivider={true}
        bottomDivider={true}
        chevron
      />
      <ListItem
        title="Favoritos"
        leftIcon={{ name:'star'}}
        chevronColor="#CCCCCC"

        bottomDivider={true}
        chevron
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1}}>
      <Header
        backgroundColor="#8334D4"
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())} }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />


      </View>
    </DrawerLayoutAndroid>
  );
}




}

export class HomeScreen1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
  tabBarIcon:({focused})=>{
    if(focused){
        return  <Icon name="star" size={20} color="white" />;
    }
    else
    {
        return  <Icon name="star" size={20} color="#C0BCBC" />;
    }
  },
  tabBarColor:"blue",
  title:'Favoritos'


  
  });
  render() {
    return (
      <View style={{ flex: 1, }}>
        <Header
        backgroundColor="blue"
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())} }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
        
      </View>
    );
  }
}


export class HomeScreen2 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
  tabBarIcon:({focused})=>{
    if(focused){
        return  <Icon name="users" size={20} color="white" />;
    }
    else
    {
        return  <Icon name="users" size={20} color="#C0BCBC" />;
    }
  },
  tabBarColor:"#3B00A8",
  title:'Usuários'
  
  });
  render() {
    return (
      <View style={{ flex: 1, }}>
         <Header
        backgroundColor="#3B00A8"
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())} }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
        
      </View>
    );
  }
}

export class HomeScreen3 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
  tabBarIcon:({focused})=>{
    if(focused){
        return  <Icon name="gear" size={20} color="white" />;
    }
    else
    {
        return  <Icon name="gear" size={20} color="#C0BCBC" />;
    }
  },
  Color:"#232570",
  title:'Configurações'

  
  });
  render() {
    return (
      <View style={{ flex: 1 }}>
         <Header
        backgroundColor="#232570"
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())} }}
        centerComponent={{ text: 'Configurações', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff',onPress:()=>{this.props.navigation.navigate('Home')}}}
      />
     

      </View>
    );
  } 
}
  
  




export default createAppContainer(createMaterialBottomTabNavigator({
  Home: { screen: HomeScreen },
  Home1: { screen: HomeScreen1 },
  Home2: { screen: HomeScreen2 },
  Home3: { screen: HomeScreen3 },
}, {
  initialRouteName: 'Home',
  activeColor: 'white',
  inactiveColor:'red',
  labeled:true 
}));