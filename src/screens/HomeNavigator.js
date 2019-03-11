import React from "react";
import { ScrollView , StyleSheet , View, Text} from "react-native";
import { createDrawerNavigator , createAppContainer } from "react-navigation";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { Avatar ,ListItem ,Header} from 'react-native-elements';






const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
  
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
        onPress={()=>{
          props.navigation.navigate('Home');
        }}
        topDivider={true}
        bottomDivider={true}
        chevron
      />
      <ListItem
        title="Favoritos"
        leftIcon={{ name:'star'}}
        chevronColor="#CCCCCC"
        onPress={()=>{
          props.navigation.navigate('Home1');
        }}
        bottomDivider={true}
        chevron
      />
       <ListItem
        title="Sair"
        leftIcon={<Icon name="sign-out" size={30} color="#928181" />}
        chevronColor="#CCCCCC"
        onPress={()=>{
          props.navigation.navigate('Login');
        }}
        bottomDivider={true}
        chevron
      />
    </View>
  
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


import App from '../App';

export default createAppContainer(createDrawerNavigator({
  App: { screen: App }
},
{
  initialRouteName: 'App',
  contentComponent:CustomDrawerContentComponent
}));