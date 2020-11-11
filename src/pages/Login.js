import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import {resolveAuthError} from '../functions'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // function login(){
  //   auth()
  //   .signInWithEmailAndPassword(email,password)
  //   .then(()=> alert('ok'))
  //   .catch((err)=> Alert.alert('ClarusChat', resolveAuthError(err.code)));
  // } 
  const login =  async () =>{
    try {
      if(email === '' || password === ''){
        Alert.alert('ClarusChat', resolveAuthError('auth/null-value'))
      }
      else{
        await auth().signInWithEmailAndPassword(email,password)
      }
    }
    catch(err){
      Alert.alert('ClarusChat', resolveAuthError(err.code))
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          
           <View style={authStyle.container}> 
              <Image
                style={authStyle.logo}
                source={require('../assets/logo.jpeg')}
              />
              <Text style={authStyle.logoText}>CLARUSCHAT</Text>
           </View>
           <View style={{flex:1}}>
             <Input
                inputProps ={{
                  placeholder: 'Text your email..',
                  keyboardType: 'email-address'
                }}
                onType={value => setEmail(value)}
             />
             <Input
                inputProps ={{
                  placeholder: 'Enter your password..',
                  secureTextEntry: true
                }}
               
                onType={value => setPassword(value)}
             />
             <Button
              title='Sign In'
              onPress ={()=>login()}
             />
             <Button
              title='Sign Up'
              noBorder
              onPress={()=> props.navigation.navigate('Sign')}
             />
           </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};