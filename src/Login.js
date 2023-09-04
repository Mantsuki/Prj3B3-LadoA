import React, { useState } from "react";
import { View, Buttom, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView, StyleSheet } from 'react-native';

const Login = () => {

    const [Email, setEmail] = useState ('');
    const [Senha, setSenha] = useState ('');

    const mudarLogin = () => {
        console.log(`Logar com o email: ${email} = senha: ${senha}`);
    };

    return (
        <View style={styles.container}>
            <Text>Bem-vindo(a)</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={Email}
                onChangeText={(Text) => setEmail(Text)}
            />

            <Buttom titel="Entrar" onPress={mudarLogin}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

input: {
    width: '60%',
    padding: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'gray',
},

cabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
}

});

export default Login;