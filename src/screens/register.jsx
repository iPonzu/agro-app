import React, { useState } from 'react'
import { View } from 'react-native'
import auth, { db } from '../api/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button, TextInput, Text } from 'react-native-paper'

export default function register({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            const uid = await user.user.uid
            await setDoc(doc(db, 'users', uid), {
                email: email,
                password: password
            })
            console.log(user)
        }catch(error){
            alert(error)
        }
    }


    return(
        <View>
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
                onPress={() => {
                    try{
                        register()
                        navigation.navigate('login')
                    }catch(error){
                        alert(error)
                    }
                }}
            >
                Register
            </Button>
        </View>
    )
}