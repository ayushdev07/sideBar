///Hamburger menu 

import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  
  const toggleDrawer = () => {
    
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'First Page', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page',
          
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

//HeaderComponent.js
// import React, { Component } from 'react';
// import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

// export default class App extends Component {
//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   }

//   render() {
      
//     return (
//       <View style={{ flexDirection: 'row',height:50,backgroundColor: '#2EB6AE'} }>
//         <TouchableOpacity 
//            style={{marginLeft:10,alignContent:'center',alignSelf:'center'}}
//            onPress={()=>{
//             //this.props.navigation.navigate('DrawerOpen');
//              this.props.navigation.openDrawer(); 
//           }}
//             >
//           <Image
//            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
//            style={{ width: 25, height: 25, marginLeft: 5 }}
//           />

//         </TouchableOpacity>
//         <Text 
//         style = {{color: 'blue',alignContent:'center',alignSelf:'center',marginLeft:20,}}>
//             {this.props.showName}
//         </Text>
        
//       </View>
//     );
//   }
// }