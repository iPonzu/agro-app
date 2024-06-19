import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import auth from '../api/firebase'
 

export default function login({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            navigation.navigate('homepage')
        }catch(error){
            alert(error)
        }
    }

    return(
       <View style={styles.container}>
        <Image
            source={require('../components/images/login_logo.png')}
            style={styles.logo}
        />
        <TextInput 
            label='email'
            value={email}
            onChangeText={email}
        />
        <TextInput 
            label='password'
            value={password}
            secureTextEntry
            onChangeText={password}
        />
       <Button
            mode='contained'
            onPress={login}
       >
              Login
       </Button>
       <Button
            mode='contained'
            onPress={() => navigation.navigate('register')}
       >
            Registrar-se
       </Button>
       </View> 
    )
}