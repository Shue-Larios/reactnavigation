import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// navigation es un props
export const Inicio = ({ navigation }) => {

    // pasar informacion de una pagina a otra
    const informacion = {
        clienteId: 20,
        totalPagar: 500
    }


    const visitarNosotros = () => {
        // navigate es una propiedad de navigation
        // le decimos para donde va con el mismo nombre que le pusimos anteriormente
        // para pasar informacion se pone a la par del nombre
        navigation.navigate('Nosotros', informacion)
    }

    return (
        <View style={styles.contenedor}>

            <Text>Inicio</Text>
            <Button
                title='Ir a Nosotros'
                onPress={() => visitarNosotros()}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
