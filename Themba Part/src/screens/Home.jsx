import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import  authObj  from '../firebase/config';

export const Home = ({navigation}) => {

  const auth = authObj;

  const logout = async () => {
    try{
      await auth.signOut();
    }catch(error){
      console.log(error.code);
      console.log(error.message);
    }
    navigation.navigate("LoginScreen")
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 25}}>Home Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
        }}>log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 200,
    }
})