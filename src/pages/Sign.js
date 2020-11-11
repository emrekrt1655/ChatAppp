import React,{useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth'

const Sign = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('') // daha az state olabilir mi?

  const sign = async () => { // geçerli email ve doğru değer kontrolü (REGEX)
    if (password === passwordRepeat){
      try{
      await auth().createUserWithEmailAndPassword(email,password);
      props.navigation.goBack()
      }
      catch(error){
        Alert.alert('ClarusChat', 'An error occured');
      }
    }
    else{
      Alert.alert('ClarusChat', 'Passwords do not match')
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
              <Text>
                CLARUSCHAT
              </Text>
              </View>
              <View style={{flex:1}}>
              <Input
                inputProps={{
                  placeholder: 'Type your e-mail address..',
                  keyboardType: 'email-address'
                }}
                onType={value => setEmail(value)}
              />
              <Input
                inputProps={{
                  placeholder: 'Enter your password..',
                  secureTextEntry: true
                }}
                onType={value => setPassword(value)}
              />
              <Input
                inputProps={{
                  placeholder: 'Enter your password again..',
                  secureTextEntry: true
                }}
                onType={value => setPasswordRepeat(value)}
              />
              <Button
                title='Create an account'
                onPress = {()=>sign()}
              />
              <Button
                title='Cancel'
                noBorder
                onPress={()=> props.navigation.goBack()}
              />
              </View>
            
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
