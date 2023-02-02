import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// // route es un props donde vienen los params que mando desde otra pagina
export const Nosotros = ({ navigation, route }) => {


    const { clienteId, totalPagar } = route.params


    const volver = () => {
        // sin importar el nombre del archivo siempre va air a la pagina anterior
        navigation.goBack();
    }

    return (
        <View style={styles.contenedor}>
            <Text>{clienteId}</Text>

            <Button
                title='Volver'
                onPress={() => volver()}
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